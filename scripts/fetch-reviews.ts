/**
 * scripts/fetch-reviews.ts
 *
 * Fetches Google reviews ONCE per run from the Places API (New / v1) and writes
 * the normalized result to data/reviews.json (committed to the repo). The site
 * reads that committed JSON at build time — it never calls the Places API at
 * runtime, so visitor traffic generates ZERO Places billing.
 *
 * Run by .github/workflows/fetch-reviews.yml on a daily cron.
 *
 * FAIL-SAFE: if the API errors or returns zero usable reviews, this script does
 * NOT overwrite the existing data/reviews.json — it exits non-zero and leaves
 * the last good copy in place. This prevents a transient failure from wiping the
 * reviews section.
 *
 * Output shape matches lib/reviews.ts `ReviewsResult` (legacy field names) so the
 * consuming component needs no changes:
 *   { placeName, placeUrl, rating, total, fetchedAt, reviews: [{
 *       author_name, profile_photo_url?, rating, relative_time_description, text, time
 *   }] }
 *
 * Env:
 *   GOOGLE_PLACES_API_KEY  (required) — Maps Platform key with Places API (New) enabled
 *   PLACE_ID               (optional) — overrides the default below
 */

import { writeFileSync } from "node:fs"
import { join } from "node:path"

const PLACE_ID = process.env.PLACE_ID || "ChIJ6QU_AzZxVo8RsiiKRckE8-A"
const API_KEY = process.env.GOOGLE_PLACES_API_KEY || ""
const OUT_PATH = join(process.cwd(), "data", "reviews.json")

const FIELD_MASK = "displayName,rating,userRatingCount,googleMapsUri,reviews"

function fail(msg: string): never {
  console.error(`[fetch-reviews] FAILED: ${msg}`)
  console.error("[fetch-reviews] Leaving existing data/reviews.json untouched.")
  process.exit(1)
}

async function main() {
  if (!API_KEY) fail("missing GOOGLE_PLACES_API_KEY env var")
  if (!PLACE_ID) fail("missing PLACE_ID")

  // Places API (New) v1 — single GET. languageCode/regionCode bias to Spanish/MX.
  const url =
    `https://places.googleapis.com/v1/places/${PLACE_ID}` +
    `?languageCode=es&regionCode=MX`

  let res: Response
  try {
    res = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": FIELD_MASK,
      },
    })
  } catch (e) {
    return fail(`network error: ${(e as Error).message}`)
  }

  if (!res.ok) {
    const body = await res.text().catch(() => "")
    return fail(`HTTP ${res.status} ${res.statusText} — ${body.slice(0, 500)}`)
  }

  const data: any = await res.json()

  // v1 review shape -> legacy ReviewsResult review shape.
  const reviews = (data?.reviews ?? [])
    .map((r: any) => {
      // Prefer original (untranslated) text when present.
      const text: string =
        r?.originalText?.text ?? r?.text?.text ?? ""
      const publishTime: string | undefined = r?.publishTime
      return {
        author_name:
          r?.authorAttribution?.displayName ?? "Usuario de Google",
        profile_photo_url: r?.authorAttribution?.photoUri ?? undefined,
        rating: typeof r?.rating === "number" ? r.rating : 0,
        relative_time_description: r?.relativePublishTimeDescription ?? "",
        text,
        // Keep `time` as unix seconds so the consumer's existing sort works.
        time: publishTime ? Math.floor(Date.parse(publishTime) / 1000) : 0,
      }
    })
    .filter((r: any) => r.text.trim().length > 0 && r.rating > 0)
    .sort((a: any, b: any) => (b.time ?? 0) - (a.time ?? 0))

  // FAIL-SAFE: never overwrite a good file with an empty result set.
  if (reviews.length === 0) {
    return fail("API returned zero usable reviews")
  }

  const out = {
    placeName: data?.displayName?.text ?? "Endoscopia del Mayab",
    placeUrl: data?.googleMapsUri ?? undefined,
    rating: typeof data?.rating === "number" ? data.rating : undefined,
    total:
      typeof data?.userRatingCount === "number"
        ? data.userRatingCount
        : undefined,
    fetchedAt: new Date().toISOString(),
    reviews,
  }

  writeFileSync(OUT_PATH, JSON.stringify(out, null, 2) + "\n", "utf8")
  console.log(
    `[fetch-reviews] Wrote ${reviews.length} reviews to data/reviews.json ` +
      `(rating ${out.rating}, total ${out.total}).`
  )
}

main()
