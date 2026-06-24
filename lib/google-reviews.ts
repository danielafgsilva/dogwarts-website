/**
 * Live Google reviews, always showing the latest. Two sources are supported,
 * tried in order:
 *
 * 1. Google Business Profile API (a.k.a. "My Business" v4 review-data):
 *    https://developers.google.com/my-business/content/review-data
 *    Returns ALL reviews for the owned location, newest first. Requires OAuth
 *    (the business owner authorises once → refresh token) and access approval.
 *    Env: GOOGLE_BUSINESS_CLIENT_ID, GOOGLE_BUSINESS_CLIENT_SECRET,
 *         GOOGLE_BUSINESS_REFRESH_TOKEN, GOOGLE_BUSINESS_ACCOUNT_ID,
 *         GOOGLE_BUSINESS_LOCATION_ID
 *
 * 2. Places API (New) — simpler (just an API key), returns up to 5 reviews.
 *    Env: GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID
 *
 * Returns null when nothing is configured / a request fails, so the UI can
 * fall back to a "see on Google" link.
 */

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";
const OAUTH_TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const MYBUSINESS_ENDPOINT = "https://mybusiness.googleapis.com/v4";
const REVALIDATE_SECONDS = 1800; // refresh reviews (and the page) twice an hour

export interface GoogleReview {
  author: string;
  initials: string;
  rating: number;
  text: string;
  relativeDate?: string;
  profilePhotoUrl?: string;
  authorUrl?: string;
}

export interface GoogleReviewsData {
  reviews: GoogleReview[];
  averageRating: number;
  totalReviews: number;
  googleMapsUri?: string;
}

function toInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** Public entry point. Prefers the Business Profile API, falls back to Places. */
export async function getGoogleReviews(
  placeIdOverride?: string
): Promise<GoogleReviewsData | null> {
  const fromBusiness = await getBusinessProfileReviews().catch((error) => {
    console.error("Business Profile reviews failed:", error);
    return null;
  });
  if (fromBusiness && fromBusiness.reviews.length > 0) return fromBusiness;

  return getPlacesReviews(placeIdOverride).catch((error) => {
    console.error("Places reviews failed:", error);
    return null;
  });
}

/* ------------------------------------------------------------------ */
/* 1. Google Business Profile (My Business v4)                         */
/* ------------------------------------------------------------------ */

const STAR_MAP: Record<string, number> = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

interface MyBusinessReview {
  reviewer?: { displayName?: string; profilePhotoUrl?: string };
  starRating?: keyof typeof STAR_MAP;
  comment?: string;
  createTime?: string;
  updateTime?: string;
}

interface MyBusinessResponse {
  reviews?: MyBusinessReview[];
  averageRating?: number;
  totalReviewCount?: number;
}

async function getAccessToken(): Promise<string | null> {
  const {
    GOOGLE_BUSINESS_CLIENT_ID,
    GOOGLE_BUSINESS_CLIENT_SECRET,
    GOOGLE_BUSINESS_REFRESH_TOKEN,
  } = process.env;
  if (
    !GOOGLE_BUSINESS_CLIENT_ID ||
    !GOOGLE_BUSINESS_CLIENT_SECRET ||
    !GOOGLE_BUSINESS_REFRESH_TOKEN
  ) {
    return null;
  }

  const res = await fetch(OAUTH_TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: GOOGLE_BUSINESS_CLIENT_ID,
      client_secret: GOOGLE_BUSINESS_CLIENT_SECRET,
      refresh_token: GOOGLE_BUSINESS_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) {
    console.error(`OAuth token exchange failed: ${res.status}`);
    return null;
  }
  const data = (await res.json()) as { access_token?: string };
  return data.access_token ?? null;
}

async function getBusinessProfileReviews(): Promise<GoogleReviewsData | null> {
  const accountId = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;
  const locationId = process.env.GOOGLE_BUSINESS_LOCATION_ID;
  if (!accountId || !locationId) return null;

  const token = await getAccessToken();
  if (!token) return null;

  const url =
    `${MYBUSINESS_ENDPOINT}/accounts/${accountId}/locations/${locationId}` +
    `/reviews?orderBy=${encodeURIComponent("updateTime desc")}&pageSize=8`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) {
    console.error(`My Business reviews error: ${res.status}`);
    return null;
  }

  const data = (await res.json()) as MyBusinessResponse;
  const reviews: GoogleReview[] = (data.reviews ?? [])
    .map((r): GoogleReview | null => {
      const text = r.comment?.trim();
      if (!text) return null;
      const author = r.reviewer?.displayName ?? "Cliente Google";
      return {
        author,
        initials: toInitials(author),
        rating: r.starRating ? STAR_MAP[r.starRating] ?? 5 : 5,
        text,
        relativeDate: relativePt(r.updateTime ?? r.createTime),
        profilePhotoUrl: r.reviewer?.profilePhotoUrl,
      };
    })
    .filter((r): r is GoogleReview => r !== null);

  return {
    reviews,
    averageRating: data.averageRating ?? 0,
    totalReviews: data.totalReviewCount ?? reviews.length,
  };
}

/* ------------------------------------------------------------------ */
/* 2. Places API (New)                                                 */
/* ------------------------------------------------------------------ */

interface PlacesReview {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
}

interface PlacesResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
}

async function getPlacesReviews(
  placeIdOverride?: string
): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = placeIdOverride || process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  const url = `${PLACES_ENDPOINT}/${encodeURIComponent(placeId)}?languageCode=pt`;
  const response = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
    },
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!response.ok) {
    console.error(`Google Places API error: ${response.status}`);
    return null;
  }

  const data = (await response.json()) as PlacesResponse;
  const reviews: GoogleReview[] = (data.reviews ?? [])
    .map((review): GoogleReview | null => {
      const text = review.text?.text ?? review.originalText?.text ?? "";
      if (!text) return null;
      const author = review.authorAttribution?.displayName ?? "Cliente Google";
      return {
        author,
        initials: toInitials(author),
        rating: review.rating ?? 5,
        text,
        relativeDate: review.relativePublishTimeDescription,
        profilePhotoUrl: review.authorAttribution?.photoUri,
        authorUrl: review.authorAttribution?.uri,
      };
    })
    .filter((r): r is GoogleReview => r !== null);

  return {
    reviews,
    averageRating: data.rating ?? 0,
    totalReviews: data.userRatingCount ?? reviews.length,
    googleMapsUri: data.googleMapsUri,
  };
}

/* ------------------------------------------------------------------ */

/** Rough PT relative-time label from an ISO timestamp. */
function relativePt(iso?: string): string | undefined {
  if (!iso) return undefined;
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return undefined;
  const days = Math.floor((Date.now() - then) / 86_400_000);
  if (days < 1) return "hoje";
  if (days < 30) return `há ${days} ${days === 1 ? "dia" : "dias"}`;
  const months = Math.floor(days / 30);
  if (months < 12) return `há ${months} ${months === 1 ? "mês" : "meses"}`;
  const years = Math.floor(months / 12);
  return `há ${years} ${years === 1 ? "ano" : "anos"}`;
}
