// /components/GoogleReviews.tsx
import { Suspense } from "react";
import { getGoogleReviews } from "@/lib/reviews";
import { CLINIC } from "@/lib/clinic";

const BLOCKED_REVIEW_TERMS = ["yazmin", "yasmin"];

type Props = {
  title?: string;
  /** Google sends max 5 reviews; cap to [1..5]. Default 4. */
  limit?: number;
  className?: string;
};

function ReviewsSkeleton() {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="h-8 w-64 bg-muted rounded animate-pulse" />
          <div className="h-4 w-48 bg-muted rounded animate-pulse mt-2" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-background p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
                <div>
                  <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                  <div className="h-3 w-16 bg-muted rounded animate-pulse mt-1" />
                </div>
              </div>
              <div className="h-3 w-20 bg-muted rounded animate-pulse mb-2" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-muted rounded animate-pulse" />
                <div className="h-3 w-3/4 bg-muted rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Public wrapper — renders a Suspense boundary so the API call never blocks LCP. */
export default function GoogleReviews(props: Props) {
  return (
    <Suspense fallback={<ReviewsSkeleton />}>
      <GoogleReviewsAsync {...props} />
    </Suspense>
  );
}

async function GoogleReviewsAsync({
  title = "Opiniones de pacientes (Google)",
  limit = 4,
  className = "",
}: Props) {
  const maxReviews = Math.max(1, Math.min(5, limit));

  // getGoogleReviews reads CLINIC.placeId + env GOOGLE_PLACES_API_KEY internally.
  // On failure it returns static fallback reviews — the section always renders.
  const { reviews, rating, total, placeName, placeUrl, attribution } =
    await getGoogleReviews({
      maxReviews,
      sort: "newest",
      useFallback: true,
    });

  if (!reviews.length) return null;

  // Filter out reviews containing restricted terms
  const safeReviews = reviews.filter((r) => {
    const haystack = `${r.author_name} ${r.text ?? ""}`.toLowerCase();
    return !BLOCKED_REVIEW_TERMS.some((term) => haystack.includes(term));
  });

  if (!safeReviews.length) return null;

  return (
    <section
      className={`py-16 bg-gradient-to-b from-muted/20 to-background ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              {title}
            </h2>
            <p className="text-foreground/70">
              {placeName || CLINIC.name}
              {rating ? ` — ${rating.toFixed(1)}★` : ""}
              {total ? ` (${total} opiniones)` : ""}
            </p>
          </div>

          {placeUrl && (
            <a
              href={placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-accent-strong text-accent-strong-foreground font-semibold hover:bg-accent-strong/90"
            >
              Ver más en Google
            </a>
          )}
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {safeReviews.map((r, i) => (
            <li
              key={i}
              className="rounded-2xl border border-border bg-background p-5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                {r.profile_photo_url ? (
                  <img
                    src={r.profile_photo_url}
                    alt={r.author_name}
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-muted" />
                )}
                <div>
                  <div className="font-semibold text-foreground">
                    {r.author_name}
                  </div>
                  <div className="text-xs text-foreground/60">
                    {r.relative_time_description}
                  </div>
                </div>
              </div>

              <div className="mb-2 text-sm text-foreground">
                {"★".repeat(Math.max(0, Math.min(5, Math.round(r.rating))))}
              </div>

              <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                {r.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-foreground/60">
          Fuente: {attribution || "Google"}
        </p>
      </div>
    </section>
  );
}