import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Content pages backed by Sanity (siteSettings shows on all via nav/footer).
const CONTENT_PATHS = ["/", "/sobre", "/servicos", "/contactos", "/testemunhos"];

/**
 * On-demand revalidation webhook for Sanity.
 *
 * Configure in Sanity (sanity.io/manage → API → Webhooks):
 *   URL:     https://<your-domain>/api/revalidate
 *   Trigger: Create / Update / Delete (Publish)
 *   Secret:  the same value as SANITY_REVALIDATE_SECRET (sent as
 *            `Authorization: Bearer <secret>` or `?secret=<secret>`).
 *
 * On publish this re-renders the content pages, so the site shows the new
 * content within seconds (otherwise the ~60s ISR fallback handles it).
 */
export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "SANITY_REVALIDATE_SECRET not configured." },
      { status: 500 }
    );
  }

  const url = new URL(request.url);
  const provided =
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ??
    url.searchParams.get("secret");

  if (provided !== secret) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  for (const path of CONTENT_PATHS) {
    revalidatePath(path);
  }

  return NextResponse.json({ revalidated: true, paths: CONTENT_PATHS });
}
