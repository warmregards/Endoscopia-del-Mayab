"use server"

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

type PlaceDetailsResponse = {
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

type GetGoogleReviewsOptions = {
  /** Default "es". Use "es-MX" if you prefer. */
  language?: string
  /** If true, disables Google auto-translation of reviews. */
  noTranslations?: boolean
  /** Return up to this many reviews (Google returns max 5). */
  maxReviews?: number
  /** "most_relevant" | "newest" (default "newest"). */
  sort?: "most_relevant" | "newest"
  /** Next.js revalidate seconds for fetch caching. Default 3600 (1h). */
  revalidateSeconds?: number
}

export async function getGoogleReviews(
  placeId: string,
  apiKey: string = process.env.GOOGLE_PLACES_API_KEY!,
  opts: GetGoogleReviewsOptions = {},
): Promise<{
  placeName?: string
  placeUrl?: string
  rating?: number
  total?: number
  reviews: GoogleReview[]
  attribution: "Google"
}> {
  const {
    language = "es",
    noTranslations = true,
    maxReviews = 5,
    sort = "newest",
    revalidateSeconds = 3600,
  } = opts

  if (!placeId) {
    console.error("getGoogleReviews: missing placeId")
    return { reviews: [], attribution: "Google" }
  }
  if (!apiKey) {
    console.error("getGoogleReviews: missing GOOGLE_PLACES_API_KEY")
    return { reviews: [], attribution: "Google" }
  }

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json")
    url.searchParams.set("place_id", placeId)
    // Be explicit about fields
    url.searchParams.set(
      "fields",
    [
      "name",
      "url",
      "rating",
      "user_ratings_total",
      "reviews"
      ].join(","),
    )
    url.searchParams.set("key", apiKey)
    url.searchParams.set("language", language)
    url.searchParams.set("reviews_sort", sort) // "newest" or "most_relevant"
    if (noTranslations) url.searchParams.set("reviews_no_translations", "true")
    // Optional regional hint
    url.searchParams.set("region", "mx")

    const response = await fetch(url.toString(), {
      next: { revalidate: revalidateSeconds }, // was hardcoded to 24h
    })

    if (!response.ok) {
      console.error("Google Places API HTTP error:", response.status, response.statusText)
      return { reviews: [], attribution: "Google" }
    }

    const data = (await response.json()) as PlaceDetailsResponse

    if (data.status !== "OK") {
      console.error("Google Places API status error:", data.status, data.error_message)
      return {
        placeName: data.result?.name,
        rating: data.result?.rating,
        total: data.result?.user_ratings_total,
        reviews: [],
        attribution: "Google",
      }
    }

    const result = data.result ?? {}
    const reviews = (result.reviews ?? [])
      // Defensive: ensure text present and rating > 0
      .filter(r => (r.text?.trim()?.length ?? 0) > 0 && (r.rating ?? 0) > 0)
      // Keep deterministic newest-first by 'time' if present
      .sort((a, b) => (b.time ?? 0) - (a.time ?? 0))
      .slice(0, Math.min(maxReviews, 4))

    return {
      placeName: result.name,
      placeUrl: result.url,
      rating: result.rating,
      total: result.user_ratings_total,
      reviews,
      attribution: "Google",
    }
  } catch (error) {
    console.error("Error fetching Google reviews:", error)
    return { reviews: [], attribution: "Google" }
  }
}
