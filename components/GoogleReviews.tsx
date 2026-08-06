// /components/GoogleReviews.tsx
import { Suspense } from "react";
import { Star } from "lucide-react";
import { getGoogleReviews } from "@/lib/reviews";
import { CLINIC } from "@/lib/clinic";

const BLOCKED_REVIEW_TERMS = ["yazmin", "yasmin"];

/**
 * Google's profile-photo CDN supports a size param in the URL path:
 *   .../ALV-Uj...=s128-c0x00000000-cc-rp-mo
 * The default `=s128` ships a 128×128 PNG even when displayed at 40px.
 * We render the avatars at h-10 w-10 (40px) — `=s80` is the correct 2× DPR
 * variant and trims ~24 KB per avatar (Lighthouse "Improve image delivery").
 */
function resizeGoogleProfilePhoto(url: string, size = 80): string {
  return url.replace(/=s\d+/, `=s${size}`);
}

type Props = {
  title?: string;
  /** Google sends max 5 reviews; cap to [1..5]. Default 4. */
  limit?: number;
  className?: string;
  /**
   * Render the "Ver más en Google" outbound link. Default true.
   * Set false on paid /lp/* landing pages to preserve the 1:1 attention ratio
   * (the only exits allowed there are the WhatsApp/Call CTAs).
   */
  showPlaceLink?: boolean;
};

function ReviewsSkeleton() {
  return (
    <section className="section-padding bg-gradient-to-b from-muted/20 to-background">
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
  showPlaceLink = true,
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
      className={`section-padding bg-gradient-to-b from-muted/20 to-background ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              {title}
            </h2>
            <p className="text-foreground/70">
              {placeName || CLINIC.name}
              {rating ? (
                <span className="inline-flex items-center gap-1 align-middle">
                  {` — ${rating.toFixed(1)}`}
                  <Star className="h-4 w-4 fill-feedback-warning text-feedback-warning" />
                </span>
              ) : ""}
              {total ? ` (${total} opiniones)` : ""}
            </p>
          </div>

          {showPlaceLink && placeUrl && (
            <a
              href={placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap px-4 py-2 rounded-lg bg-accent-strong text-accent-strong-foreground font-semibold hover:bg-accent-strong/90"
            >
              Ver más en Google
            </a>
          )}
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {safeReviews.map((r, i) => {
            // Google review text can arrive with literal * emphasis markup — strip it.
            const body = (r.text ?? "").replace(/\*/g, "");
            const stars = Math.max(0, Math.min(5, Math.round(r.rating)));
            const isLong = body.length > 220;
            return (
              <li
                key={i}
                className="rounded-2xl border border-border bg-background p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  {r.profile_photo_url ? (
                    <img
                      src={resizeGoogleProfilePhoto(r.profile_photo_url)}
                      alt={r.author_name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
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

                <div className="mb-2 flex gap-0.5" aria-label={`${stars} de 5 estrellas`}>
                  {Array.from({ length: stars }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-feedback-warning text-feedback-warning"
                    />
                  ))}
                </div>

                {isLong ? (
                  // CSS-only "Leer más": full text stays in the DOM (crawlable),
                  // clamped to 4 lines until the checkbox toggles it open in place.
                  <>
                    <input
                      type="checkbox"
                      id={`review-more-${i}`}
                      aria-label={`Mostrar reseña completa de ${r.author_name}`}
                      className="peer sr-only"
                    />
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line line-clamp-4 peer-checked:line-clamp-none">
                      {body}
                    </p>
                    <label
                      htmlFor={`review-more-${i}`}
                      className="mt-1 inline-flex min-h-[44px] items-center cursor-pointer text-sm font-semibold text-primary hover:underline peer-checked:hidden"
                    >
                      Leer más
                    </label>
                    <label
                      htmlFor={`review-more-${i}`}
                      className="mt-1 hidden min-h-[44px] items-center cursor-pointer text-sm font-semibold text-primary hover:underline peer-checked:inline-flex"
                    >
                      Leer menos
                    </label>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {body}
                  </p>
                )}
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-xs text-foreground/60">
          Fuente: {attribution || "Google"}
        </p>
      </div>
    </section>
  );
}