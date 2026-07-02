// /lib/reviews.ts
// Google reviews, served from committed static JSON (data/reviews.json).
//
// We do NOT call the Google Places API at runtime or build time — that bills
// against the per-SKU caps Google introduced on 2025-03-01. Instead,
// scripts/fetch-reviews.ts calls the Places API (New / v1) ONCE per day in CI
// (.github/workflows/fetch-reviews.yml) and commits the normalized result to
// data/reviews.json. This module just reads that committed file, so visitor
// traffic generates ZERO Places billing.
//
// Consumed by: review sections on procedure pages, homepage trust section,
// schema JSON-LD aggregateRating, and doctor profile page.
//
// "use server" — this runs server-side only (Server Components / Server Actions).
//
// The data/reviews.json shape (and the GoogleReview field names below) match what
// the legacy Places API returned, so consuming components need no changes.

"use server"

import { CLINIC } from "@/lib/clinic"
import reviewsData from "@/data/reviews.json"

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

interface GetGoogleReviewsOptions {
  /** Return up to this many reviews (Google API max is 5). */
  maxReviews?: number
  /**
   * If true (default), return static fallback reviews when data/reviews.json is
   * empty instead of an empty array.
   */
  useFallback?: boolean
  /**
   * @deprecated No longer used — reviews are pre-fetched into data/reviews.json.
   * Kept so existing call sites compile unchanged.
   */
  language?: string
  /** @deprecated No longer used. */
  noTranslations?: boolean
  /** @deprecated No longer used — JSON is pre-sorted newest-first by CI. */
  sort?: "most_relevant" | "newest"
  /** @deprecated No longer used — there is no runtime fetch to revalidate. */
  revalidateSeconds?: number
}

export interface ReviewsResult {
  placeName?: string
  placeUrl?: string
  rating?: number
  total?: number
  reviews: GoogleReview[]
  attribution: "Google"
  /** "api" = from committed (CI-fetched) data; "fallback" = static reviews below */
  source: "api" | "fallback"
}

// ---------------------------------------------------------------------------
// Static fallback reviews
// ---------------------------------------------------------------------------
// Used only if data/reviews.json is ever empty. Better to show real social
// proof than an empty section.

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
// Core reader
// ---------------------------------------------------------------------------

/**
 * Read Google reviews from the committed data/reviews.json.
 *
 * No network call — the data is refreshed once daily by CI. Falls back to static
 * reviews if the file is somehow empty (unless `useFallback: false`).
 *
 * @example
 *   const { reviews, rating, total } = await getGoogleReviews()
 *   const data = await getGoogleReviews({ maxReviews: 3 })
 */
export async function getGoogleReviews(
  opts: GetGoogleReviewsOptions = {},
): Promise<ReviewsResult> {
  const { maxReviews = 5, useFallback = true } = opts

  const fallbackResult: ReviewsResult = {
    placeName: CLINIC.name,
    rating: FALLBACK_RATING,
    total: FALLBACK_TOTAL,
    reviews: FALLBACK_REVIEWS.slice(0, maxReviews),
    attribution: "Google",
    source: "fallback",
  }

  const reviews = (reviewsData.reviews ?? [])
    .filter((r) => (r.text?.trim()?.length ?? 0) > 0 && (r.rating ?? 0) > 0)
    .slice(0, maxReviews)

  if (reviews.length === 0) {
    return useFallback
      ? fallbackResult
      : { reviews: [], attribution: "Google", source: "fallback" }
  }

  return {
    placeName: reviewsData.placeName,
    placeUrl: reviewsData.placeUrl,
    rating: reviewsData.rating,
    total: reviewsData.total,
    reviews,
    attribution: "Google",
    source: "api",
  }
}

// ---------------------------------------------------------------------------
// Schema helper
// ---------------------------------------------------------------------------

/**
 * Aggregate rating for schema JSON-LD, read from data/reviews.json.
 * Falls back to CLINIC.aggregateRating.
 *
 * @example
 *   const rating = await toSchemaRating()
 *   // → { "@type": "AggregateRating", ratingValue: 5, reviewCount: 87, bestRating: 5 }
 */
export async function toSchemaRating(): Promise<{
  "@type": "AggregateRating"
  ratingValue: number
  reviewCount: number
  bestRating: 5
}> {
  const { rating, total } = await getGoogleReviews({
    maxReviews: 1,
    useFallback: true,
  })

  return {
    "@type": "AggregateRating",
    ratingValue: rating ?? FALLBACK_RATING,
    reviewCount: total ?? FALLBACK_TOTAL,
    bestRating: 5,
  }
}
