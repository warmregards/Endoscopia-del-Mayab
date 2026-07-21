// components/DoctorAuthority.tsx
// Single, crawlable doctor-authority block driven by /lib/doctor.ts.
//
//   variant="compact"  → headshot + credential chips + hospital/training logo
//                        strip + WhatsApp CTA. Used on procedure pages and LPs.
//   variant="timeline" → vertical logo trajectory (formación → liderazgo).
//                        Used on the About page only.
//   variant="strip"    → the training/leadership logo strip on its own (eyebrow
//                        + logos), to graft onto procedure pages that already
//                        have a bespoke doctor section. No headshot/chips/CTA.
//
// Server Component on purpose (no "use client") so all copy, roles and logo
// alt text render into the initial HTML for crawlers. WhatsAppButton stays a
// client island. All data comes from DOCTOR / DOCTOR_TRAINING — nothing here
// is hardcoded.

import Image from "next/image"
import Link from "next/link"
import { ShieldCheck } from "lucide-react"

import {
  DOCTOR,
  DOCTOR_TRAINING,
  TRAINING_CATEGORY_LABEL,
} from "@/lib/doctor"
import WhatsAppButton from "@/components/WhatsAppButton"
import { cn } from "@/lib/utils"

interface DoctorAuthorityProps {
  variant: "compact" | "timeline" | "strip"
  /** CTA tracking (WhatsAppButton service) — compact only */
  service?: string
  /** GTM position — compact only */
  position?: string
  /** CTA label/tracking — compact only */
  procedureName?: string
  /** Optional one-line intro override (replaces the first sentence) — compact only */
  procedureContext?: string
  /** Render the headshot — compact only, default true */
  showImage?: boolean
  /** Render the "Conoce al Dr. Quiroz →" link — default true; set false on noindex LPs */
  profileLink?: boolean
  className?: string
}

type TrainingEntry = (typeof DOCTOR_TRAINING)[number]

// The invariant closing sentence — kept whether or not procedureContext is set.
const CONTACT_LINE =
  "Cuando escribes, te contesta directamente el doctor — no una recepcionista."

// Default first sentence of the compact intro (tú-form). No leadership claim —
// he was adscrito, not a department head (see DOCTOR_TRAINING).
const DEFAULT_INTRO =
  "El especialista que te atiende se formó y ejerció como endoscopista en centros de referencia nacionales."

const byOrder = (a: TrainingEntry, b: TrainingEntry) => a.order - b.order

// Logo via next/image with an org-initials monogram fallback. SVGs bypass the
// optimizer (dangerouslyAllowSVG is not enabled in next.config).
function TrainingLogo({
  entry,
  imgClassName,
  monogramClassName,
}: {
  entry: TrainingEntry
  imgClassName?: string
  monogramClassName?: string
}) {
  const alt = `${entry.org} — ${DOCTOR.name}, ${entry.role}`

  if (!entry.logo) {
    const initials = entry.org
      .replace(/[^\p{L}\s]/gu, "")
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0])
      .join("")
      .slice(0, 3)
      .toUpperCase()
    return (
      <span
        role="img"
        aria-label={alt}
        className={cn(
          "inline-flex items-center justify-center rounded-lg bg-muted font-serif font-bold text-text-brand",
          monogramClassName
        )}
      >
        {initials}
      </span>
    )
  }

  return (
    <Image
      src={entry.logo}
      alt={alt}
      width={entry.logoW}
      height={entry.logoH}
      unoptimized={entry.logo.endsWith(".svg")}
      className={imgClassName}
    />
  )
}

// Eyebrow + horizontal logo strip. Shared by the compact and strip variants so
// there is exactly one source for the "where he trained and led" row.
function TrainingLogoStrip() {
  const strip = [...DOCTOR_TRAINING]
    .filter((t) => t.showInCompact)
    .sort(byOrder)
  return (
    <>
      <p className="font-serif text-[11px] font-bold uppercase tracking-[0.1em] text-text-accent">
        Dónde se formó y ejerció
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-6">
        {strip.map((t) => (
          <li key={t.id} className="group">
            <figure className="m-0 flex items-center gap-4">
              <TrainingLogo
                entry={t}
                imgClassName="h-14 w-auto max-w-[168px] object-contain grayscale transition duration-200 group-hover:grayscale-0 group-focus-within:grayscale-0"
                monogramClassName="h-14 w-14 text-base"
              />
              <figcaption className="flex flex-col">
                <span className="font-serif text-[13px] font-bold leading-tight text-foreground">
                  {t.role}
                </span>
                <span className="text-xs text-muted-foreground">{t.org}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  )
}

export default function DoctorAuthority({
  variant,
  service,
  position,
  procedureName,
  procedureContext,
  showImage = true,
  profileLink = true,
  className,
}: DoctorAuthorityProps) {
  if (variant === "timeline") {
    const timeline = [...DOCTOR_TRAINING].sort(byOrder)

    return (
      <div className={cn("relative", className)}>
        {/* Vertical rule, centered on the 48px nodes (left-[23px]). */}
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[23px] top-6 w-0.5 bg-gradient-to-b from-accent to-primary"
        />
        <ol className="relative">
          {timeline.map((t, i) => {
            const isExperiencia = t.category === "experiencia"
            const isLast = i === timeline.length - 1
            return (
              <li
                key={t.id}
                className={cn("relative flex gap-5", isLast ? "pb-0" : "pb-6")}
              >
                {/* Node */}
                <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-accent/20 bg-card p-2 shadow-sm">
                  <TrainingLogo
                    entry={t}
                    imgClassName="h-full w-full object-contain"
                    monogramClassName="h-full w-full rounded-lg text-sm"
                  />
                </div>

                <div className="pt-1">
                  <span
                    className={cn(
                      "inline-block rounded px-2 py-0.5 font-serif text-[10px] font-bold uppercase tracking-wide",
                      isExperiencia
                        ? "bg-accent-light text-text-accent"
                        : "bg-muted text-primary"
                    )}
                  >
                    {TRAINING_CATEGORY_LABEL[t.category]}
                  </span>
                  <p className="mt-2 font-serif font-bold text-foreground">
                    {t.role}
                  </p>
                  <p className="text-xs font-semibold text-text-brand">
                    {t.org} · {t.location}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t.detail}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }

  if (variant === "strip") {
    return (
      <div className={cn("border-t border-border pt-6", className)}>
        <TrainingLogoStrip />
      </div>
    )
  }

  // variant === "compact"
  const intro = procedureContext ?? DEFAULT_INTRO

  return (
    <div
      className={cn(
        "flex flex-col gap-8 sm:flex-row sm:items-start",
        className
      )}
    >
      {showImage && (
        <Image
          src={DOCTOR.photos.headshot}
          alt={`${DOCTOR.name} — ${DOCTOR.descriptor}`}
          width={160}
          height={160}
          className="h-32 w-32 shrink-0 rounded-2xl object-cover sm:h-40 sm:w-40"
        />
      )}

      <div className="flex-1">
        <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Te atiende el Dr. Omar Quiroz
        </h2>
        <p className="mt-2 font-semibold text-text-brand">{DOCTOR.descriptor}</p>

        {/* Credential chips */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {DOCTOR.credentials.map((c) => (
            <li
              key={c}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-light px-3 py-1 text-xs font-medium text-accent"
            >
              <ShieldCheck className="h-4 w-4" />
              {c}
            </li>
          ))}
        </ul>

        {/* Training tier — where he trained and led */}
        <div className="mt-6 border-t border-border pt-6">
          <TrainingLogoStrip />
        </div>

        <p className="mt-6 text-foreground">
          {intro} {CONTACT_LINE}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <WhatsAppButton
            variant="primary"
            size="compact"
            service={service}
            position={position}
            procedureName={procedureName}
            label="Escribirle al Dr. Quiroz"
            className="min-h-[48px] text-sm"
          />
          {profileLink && (
            <Link
              href={DOCTOR.profileUrl}
              className="text-sm font-medium text-primary hover:underline"
            >
              Conoce al Dr. Quiroz &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
