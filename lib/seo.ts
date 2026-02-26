// /lib/seo.ts
// Centralized metadata generation for all pages.
// Consumed by: layout.tsx, page.tsx files across all 28 routes.
//
// Title/description formulas (v3 — "Precio" keyword for CTR):
//   Procedure:  [Name] en Mérida | Precio desde $X MXN | Endoscopia del Mayab
//   Homepage:   Endoscopia y Colonoscopia en Mérida | Desde $4,500 MXN | Endoscopia del Mayab
//   Pricing:    Precios de Endoscopia y Colonoscopia en Mérida | Endoscopia del Mayab
//   Doctor:     Dr. Omar Quiroz – Endoscopista en Mérida | Endoscopia del Mayab
//
// Description strategy: price + inclusions + soft CTA (targeting Persona 2 CTR)

import type { Metadata } from "next"
import { PRICING, hasPrice, mxn, type ServiceKey } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Robots =
  | boolean
  | {
      index?: boolean
      follow?: boolean
      nocache?: boolean
      googleBot?: {
        index?: boolean
        follow?: boolean
        "max-video-preview"?: number
        "max-image-preview"?: "none" | "standard" | "large"
        "max-snippet"?: number
      }
    }

interface BuildMetaParams {
  /** Final <title> text (brand appended automatically if space allows). */
  title: string
  /** Meta description content. */
  description: string
  /** Site-relative path like "/cpre-merida". Leading slash required. */
  path: string
  /** Relative ("/images/x.jpg") or absolute ("https://.../x.jpg"). */
  ogImage?: string
  /** Override defaults. */
  siteName?: string
  locale?: string
  ogType?: "website" | "article" | "profile"
  robots?: Robots
  twitterCard?: "summary_large_image" | "summary"
  /** Replace "Endoscopia del Mayab" brand suffix with a custom string (e.g., "Dr. Omar Quiroz"). */
  brandOverride?: string
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const BRAND = "Endoscopia del Mayab"
const BRAND_SUFFIX = ` | ${BRAND}` // " | Endoscopia del Mayab" = 23 chars
const DEFAULT_SITE = "https://www.endoscopiadelmayab.com"
const DEFAULT_OG_REL = "/omar-open-graph.jpg"

// Google measures title width in pixels (~580px), not characters.
// 70 chars is a safe ceiling that lets Google truncate the brand
// (expendable) rather than the price (critical for Persona 2 CTR).
const TITLE_MAX = 70
const DESC_MAX = 160

// Standard trust signals for descriptions (Persona 2 + Persona 1)
const TRUST_LINE = "Precio incluye anestesia, biopsias y recuperación."
const CTA_LINE = "Agenda con el Dr. Quiroz por WhatsApp."

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE).replace(
  /\/$/,
  ""
)

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/** Trim to max length with ellipsis. */
const trim = (s: string, max: number): string =>
  s.length <= max ? s : `${s.slice(0, max - 1)}…`

/**
 * Append brand suffix only if the result stays under TITLE_MAX.
 * If the title already contains the brand name, skip.
 * Priority: price in title > brand in title.
 */
const withBrand = (t: string): string => {
  if (t.includes(BRAND)) return t
  const candidate = `${t}${BRAND_SUFFIX}`
  return candidate.length <= TITLE_MAX ? candidate : t
}

/** Join base URL with a relative path. */
const joinUrl = (base: string, relPath: string): string =>
  `${(base || DEFAULT_SITE).replace(/\/$/, "")}${relPath.startsWith("/") ? relPath : `/${relPath}`}`

/**
 * Build a rich description from parts, respecting DESC_MAX.
 * Assembles: base + trust + CTA, trimming from the end if needed.
 */
const buildDescription = (parts: (string | undefined)[]): string => {
  const filtered = parts.filter(Boolean) as string[]
  let result = filtered.join(" ")
  if (result.length > DESC_MAX) {
    // Drop parts from the end until it fits, always keeping at least the first part
    for (let i = filtered.length - 1; i > 0; i--) {
      filtered.pop()
      result = filtered.join(" ")
      if (result.length <= DESC_MAX) break
    }
  }
  return trim(result, DESC_MAX)
}

// ---------------------------------------------------------------------------
// Core builder
// ---------------------------------------------------------------------------

export function buildMeta({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_REL,
  siteName = BRAND,
  locale = "es_MX",
  ogType = "website",
  robots,
  twitterCard = "summary_large_image",
  brandOverride,
}: BuildMetaParams): Metadata {
  const canonicalUrl = joinUrl(siteUrl, path)
  const fullOgImageUrl = ogImage.startsWith("http")
    ? ogImage
    : joinUrl(siteUrl, ogImage)

  // Default: index prod, noindex non-prod (safe for staging)
  const isProd = process.env.NODE_ENV === "production"
  const defaultRobots: Exclude<Robots, boolean> = isProd
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : { index: false, follow: false }

  const safeTitle = trim(
    brandOverride
      ? (() => {
          const suffix = ` | ${brandOverride}`
          const candidate = `${title}${suffix}`
          return candidate.length <= TITLE_MAX ? candidate : title
        })()
      : withBrand(title),
    TITLE_MAX
  )
  const safeDesc = trim(description, DESC_MAX)

  return {
    title: safeTitle,
    description: safeDesc,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: safeTitle,
      description: safeDesc,
      url: canonicalUrl,
      siteName,
      images: [
        { url: fullOgImageUrl, width: 1200, height: 630, alt: safeTitle },
      ],
      locale,
      type: ogType,
    },
    twitter: {
      card: twitterCard,
      title: safeTitle,
      description: safeDesc,
      images: [fullOgImageUrl],
    },
    robots: robots ?? defaultRobots,
    other: {
      "geo.region": `${CLINIC.address.addressCountry}-YUC`,
      "geo.placename": CLINIC.address.addressLocality,
      ICBM: `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
    },
  }
}

// ---------------------------------------------------------------------------
// Procedure page builder
// ---------------------------------------------------------------------------

/**
 * Generate metadata for procedure/service pages.
 *
 * Title formula (v3 — "Precio" keyword for CTR):
 *   [Name] en Mérida | Precio desde $X MXN | Endoscopia del Mayab
 *
 * Description formula:
 *   [Name] en Mérida — precio desde $X MXN. [Trust signals]. [CTA].
 *
 * @example
 *   buildServiceMeta({
 *     service: "Colonoscopia",
 *     key: "colonoscopia",
 *     path: "/colonoscopia-merida",
 *   })
 */
export function buildServiceMeta(
  params: Omit<BuildMetaParams, "title" | "description"> & {
    /** Procedure display name, e.g. "Colonoscopia" or "CPRE" */
    service: string
    /** Pricing key — optional for non-priced pages like /contacto */
    key?: ServiceKey
    /** Override the auto-generated description entirely */
    descriptionOverride?: string
    /** Extra sentence appended to description before CTA */
    descriptionExtra?: string
    /** Full title override — bypasses the formula entirely */
    titleOverride?: string
    /** Override service name in <title> only. H1/schema still use `service`. */
    serviceDisplayOverride?: string
  }
): Metadata {
  const { service, key, descriptionOverride, descriptionExtra, titleOverride, serviceDisplayOverride, ...rest } =
    params

  // ── Title ──
  // Formula: [DisplayName] en Mérida | Precio desde $X MXN | Brand/Override
  // Brand (or brandOverride) is appended by buildMeta, so we build up to that point.
  const displayName = serviceDisplayOverride ?? service
  const priceStr =
    key && hasPrice(key) ? `Precio desde ${mxn(PRICING[key].from)}` : undefined

  const titleParts = [`${displayName} en Mérida`, priceStr].filter(Boolean)
  const title = titleOverride ?? titleParts.join(" | ")

  // ── Description ──
  // Order: base price → differentiator → trust → CTA.
  // buildDescription drops from the end when over 160 chars,
  // so CTA drops first, then trust, preserving the differentiator.
  const description =
    descriptionOverride ??
    buildDescription([
      priceStr
        ? `${service} en Mérida — precio desde ${mxn(PRICING[key!].from)}.`
        : `${service} en Mérida.`,
      descriptionExtra,
      TRUST_LINE,
      CTA_LINE,
    ])

  return buildMeta({ title, description, ...rest })
}

// ---------------------------------------------------------------------------
// Homepage builder
// ---------------------------------------------------------------------------

/**
 * Title: Endoscopia y Colonoscopia en Mérida | Desde $4,500 MXN | Endoscopia del Mayab
 * Description: Rich with pricing, inclusions, trust signals.
 */
export function buildHomeMeta(
  overrides?: Partial<BuildMetaParams>
): Metadata {
  const lowestPrice = mxn(PRICING.endoscopia.from)

  return buildMeta({
    title: `Endoscopia y Colonoscopia en Mérida | Desde ${lowestPrice}`,
    description: buildDescription([
      `Endoscopia y colonoscopia en Mérida desde ${lowestPrice}.`,
      TRUST_LINE,
      "Precios transparentes, tecnología Olympus HD y atención directa con el Dr. Quiroz.",
      CTA_LINE,
    ]),
    path: "/",
    ...overrides,
  })
}

// ---------------------------------------------------------------------------
// Pricing page builder
// ---------------------------------------------------------------------------

/**
 * Title: Precios de Endoscopia y Colonoscopia en Mérida | Endoscopia del Mayab
 * Description: Price range + value props for Persona 2.
 */
export function buildPricingMeta(
  overrides?: Partial<BuildMetaParams>
): Metadata {
  const lowestPrice = mxn(PRICING.endoscopia.from)

  return buildMeta({
    title: "Precios de Endoscopia y Colonoscopia en Mérida",
    description: buildDescription([
      `Precios de procedimientos endoscópicos en Mérida desde ${lowestPrice}.`,
      "Todos los precios incluyen anestesia, biopsias y sala de recuperación.",
      "Sin cargos ocultos — precio transparente desde la primera consulta.",
    ]),
    path: "/precios",
    ...overrides,
  })
}

// ---------------------------------------------------------------------------
// Doctor profile builder
// ---------------------------------------------------------------------------

/**
 * Title: Dr. Omar Quiroz – Endoscopista en Mérida | Endoscopia del Mayab
 * Description: Credentials + accessibility for Persona 4.
 */
export function buildDoctorMeta(
  overrides?: Partial<BuildMetaParams>
): Metadata {
  return buildMeta({
    title: "Dr. Omar Quiroz – Endoscopista en Mérida",
    description: buildDescription([
      "Dr. Omar Quiroz, endoscopista certificado en Mérida, Yucatán.",
      "Especialista en endoscopia, colonoscopia y CPRE en Hospital Amerimed.",
      "Atención directa por WhatsApp — sin intermediarios.",
    ]),
    path: "/dr-omar-quiroz",
    ogType: "profile",
    ...overrides,
  })
}

// ---------------------------------------------------------------------------
// Contact page builder
// ---------------------------------------------------------------------------

export function buildContactMeta(
  overrides?: Partial<BuildMetaParams>
): Metadata {
  return buildMeta({
    title: "Contacto | Endoscopia del Mayab – Mérida",
    description: buildDescription([
      "Agenda tu cita de endoscopia en Mérida.",
      "Hospital Amerimed, Consultorio 517, Chichi Suárez.",
      "WhatsApp directo con el Dr. Quiroz: 999 236 0153.",
    ]),
    path: "/contacto",
    ...overrides,
  })
}