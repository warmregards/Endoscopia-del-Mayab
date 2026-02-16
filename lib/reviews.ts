// /lib/reviews.ts
// Google Places API review fetching + static fallback.
// Consumed by: review sections on procedure pages, homepage trust section,
// schema JSON-LD aggregateRating, and doctor profile page.
//
// "use server" — this runs server-side only (Server Components / Server Actions).
// Client components needing reviews should use a server action wrapper.
//
// Google Places API returns max 5 reviews. For layout flexibility,
// callers decide how many to display — this file returns all available.

"use server"

import { CLINIC } from "@/lib/clinic"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface GoogleReview {
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time?: number // unix seconds
  language?: string
}

interface PlaceDetailsResponse {
  status: string
  error_message?: string
  result?: {
    name?: string
    rating?: number
    user_ratings_total?: number
    reviews?: GoogleReview[]
    url?: string
  }
}

interface GetGoogleReviewsOptions {
  /** Default "es". Use "es-MX" if you prefer. */
  language?: string
  /** If true, disables Google auto-translation of reviews. */
  noTranslations?: boolean
  /** Return up to this many reviews (Google API max is 5). */
  maxReviews?: number
  /** "most_relevant" | "newest" (default "newest"). */
  sort?: "most_relevant" | "newest"
  /** Next.js revalidate seconds for fetch caching. Default 3600 (1h). */
  revalidateSeconds?: number
  /** If true, return static fallback reviews on API failure instead of empty array. */
  useFallback?: boolean
}

export interface ReviewsResult {
  placeName?: string
  placeUrl?: string
  rating?: number
  total?: number
  reviews: GoogleReview[]
  attribution: "Google"
  /** Whether the returned reviews are from the live API or static fallback */
  source: "api" | "fallback"
}

// ---------------------------------------------------------------------------
// Static fallback reviews
// ---------------------------------------------------------------------------
// Hand-picked from the 52 five-star reviews. Displayed when API is unavailable
// (missing key, quota exhausted, network error). Better to show real social
// proof than an empty section.
//
// Update these periodically when notable new reviews come in.

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    author_name: "Paciente verificado",
    rating: 5,
    relative_time_description: "hace 2 meses",
    text: "Excelente atención del Dr. Quiroz. Me explicó todo el procedimiento con mucha paciencia y el precio fue exactamente lo que me dijeron desde el inicio. Muy recomendado.",
  },
  {
    author_name: "Paciente verificado",
    rating: 5,
    relative_time_description: "hace 3 meses",
    text: "Me hice una colonoscopia y todo salió perfecto. El doctor te contesta directamente por WhatsApp, lo cual da mucha confianza. Las instalaciones en Amerimed son de primera.",
  },
  {
    author_name: "Paciente verificado",
    rating: 5,
    relative_time_description: "hace 4 meses",
    text: "Llevé a mi mamá para una endoscopia. El Dr. Quiroz fue muy amable y profesional. El precio incluía todo, sin sorpresas. Muy agradecida.",
  },
]

const FALLBACK_RATING = CLINIC.aggregateRating.ratingValue
const FALLBACK_TOTAL = CLINIC.aggregateRating.reviewCount

// ---------------------------------------------------------------------------
// Core fetcher
// ---------------------------------------------------------------------------

/**
 * Fetch Google reviews for the clinic via Places API.
 *
 * Uses CLINIC.placeId by default. Falls back to static reviews on failure
 * unless `useFallback: false` is passed.
 *
 * @example
 *   // In a Server Component:
 *   const { reviews, rating, total } = await getGoogleReviews()
 *
 *   // With options:
 *   const data = await getGoogleReviews({
 *     maxReviews: 3,
 *     sort: "most_relevant",
 *     useFallback: true,
 *   })
 */
export async function getGoogleReviews(
  opts: GetGoogleReviewsOptions = {},
): Promise<ReviewsResult> {
  const {
    language = "es",
    noTranslations = true,
    maxReviews = 5,
    sort = "newest",
    revalidateSeconds = 3600,
    useFallback = true,
  } = opts

  const placeId = CLINIC.placeId
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || ""

  const fallbackResult: ReviewsResult = {
    placeName: CLINIC.name,
    rating: FALLBACK_RATING,
    total: FALLBACK_TOTAL,
    reviews: FALLBACK_REVIEWS.slice(0, maxReviews),
    attribution: "Google",
    source: "fallback",
  }

  if (!placeId) {
    console.error("getGoogleReviews: missing CLINIC.placeId")
    return useFallback ? fallbackResult : { reviews: [], attribution: "Google", source: "fallback" }
  }

  if (!apiKey) {
    console.error("getGoogleReviews: missing GOOGLE_PLACES_API_KEY env var")
    return useFallback ? fallbackResult : { reviews: [], attribution: "Google", source: "fallback" }
  }

  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json"
    )
    url.searchParams.set("place_id", placeId)
    url.searchParams.set(
      "fields",
      ["name", "url", "rating", "user_ratings_total", "reviews"].join(",")
    )
    url.searchParams.set("key", apiKey)
    url.searchParams.set("language", language)
    url.searchParams.set("reviews_sort", sort)
    if (noTranslations) url.searchParams.set("reviews_no_translations", "true")
    url.searchParams.set("region", "mx")

    const response = await fetch(url.toString(), {
      next: { revalidate: revalidateSeconds },
    })

    if (!response.ok) {
      console.error(
        "Google Places API HTTP error:",
        response.status,
        response.statusText
      )
      return useFallback ? fallbackResult : { reviews: [], attribution: "Google", source: "fallback" }
    }

    const data = (await response.json()) as PlaceDetailsResponse

    if (data.status !== "OK") {
      console.error(
        "Google Places API status error:",
        data.status,
        data.error_message
      )
      return useFallback
        ? fallbackResult
        : {
            placeName: data.result?.name,
            rating: data.result?.rating,
            total: data.result?.user_ratings_total,
            reviews: [],
            attribution: "Google",
            source: "fallback",
          }
    }

    const result = data.result ?? {}
    const reviews = (result.reviews ?? [])
      .filter((r) => (r.text?.trim()?.length ?? 0) > 0 && (r.rating ?? 0) > 0)
      .sort((a, b) => (b.time ?? 0) - (a.time ?? 0))
      .slice(0, maxReviews)

    return {
      placeName: result.name,
      placeUrl: result.url,
      rating: result.rating,
      total: result.user_ratings_total,
      reviews,
      attribution: "Google",
      source: "api",
    }
  } catch (error) {
    console.error("Error fetching Google reviews:", error)
    return useFallback ? fallbackResult : { reviews: [], attribution: "Google", source: "fallback" }
  }
}

// ---------------------------------------------------------------------------
// Schema helper
// ---------------------------------------------------------------------------

/**
 * Fetch fresh aggregate rating data for schema JSON-LD.
 * Returns schema-ready object, or falls back to CLINIC.aggregateRating.
 *
 * @example
 *   const rating = await toSchemaRating()
 *   // → { "@type": "AggregateRating", ratingValue: 5, reviewCount: 52, bestRating: 5 }
 */
export async function toSchemaRating(): Promise<{
  "@type": "AggregateRating"
  ratingValue: number
  reviewCount: number
  bestRating: 5
}> {
  const { rating, total } = await getGoogleReviews({
    maxReviews: 1, // We only need aggregate data, minimize payload
    useFallback: true,
  })

  return {
    "@type": "AggregateRating",
    ratingValue: rating ?? FALLBACK_RATING,
    reviewCount: total ?? FALLBACK_TOTAL,
    bestRating: 5,
  }
}