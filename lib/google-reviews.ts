/**
 * Live Google reviews via the Places API (New).
 *
 * Required environment variables:
 *   GOOGLE_PLACES_API_KEY  - API key with "Places API (New)" enabled
 *   GOOGLE_PLACE_ID        - the Place ID of the business (falls back to the
 *                            value stored in Sanity siteSettings.contact.googlePlaceId)
 *
 * The Places API returns at most 5 reviews per place; that is a Google
 * limitation, not something we can page past.
 */

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";

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

interface PlacesReview {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
}

interface PlacesResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
}

/**
 * Fetches reviews for a place. Returns null when the integration is not
 * configured or the request fails, so callers can degrade gracefully.
 */
export async function getGoogleReviews(
  placeIdOverride?: string
): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = placeIdOverride || process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const url = `${PLACES_ENDPOINT}/${encodeURIComponent(
      placeId
    )}?languageCode=pt`;

    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "rating,userRatingCount,googleMapsUri,reviews",
      },
      // Revalidate hourly so we don't hammer the paid API on every request.
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(
        `Google Places API error: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data = (await response.json()) as PlacesResponse;

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .map((review): GoogleReview | null => {
        const text = review.text?.text ?? review.originalText?.text ?? "";
        const author = review.authorAttribution?.displayName ?? "Cliente Google";
        if (!text) return null;
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
  } catch (error) {
    console.error("Failed to fetch Google reviews:", error);
    return null;
  }
}
