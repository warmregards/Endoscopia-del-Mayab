// /lib/seo.ts
import type { Metadata } from "next"
import { PRICING, hasPrice, mxn, type ServiceKey } from "@/lib/pricing"

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
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
  /** Final <title> text (before brand is appended). */
  title: string
  /** Meta description content. */
  description: string
  /** Site-relative path like "/cpre-merida". */
  path: string
  /** Relative ("/images/x.jpg") or absolute ("https://.../x.jpg"). */
  ogImage?: string
  /** Optional overrides. */
  siteName?: string
  locale?: string
  ogType?: "website" | "article" | "profile"
  robots?: Robots
  twitterCard?: "summary_large_image" | "summary"
}

// ─────────────────────────────────────────────
// Constants & helpers
// ─────────────────────────────────────────────
const BRAND = "Endoscopia del Mayab"
const DEFAULT_SITE = "https://www.endoscopiadelmayab.com"
/** Make sure this file exists under /public (or change the path). */
const DEFAULT_OG_REL = "/omar-open-graph.jpg"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE).replace(/\/$/, "")

const trim = (s: string, max: number) => (s.length <= max ? s : s.slice(0, Math.max(0, max - 1)) + "…")
const withBrand = (t: string) => (t.includes(BRAND) ? t : `${t} | ${BRAND}`)
const joinUrl = (base: string, relPath: string) =>
  `${(base || DEFAULT_SITE).replace(/\/$/, "")}${relPath.startsWith("/") ? relPath : `/${relPath}`}`

// ─────────────────────────────────────────────
// Core builder
// ─────────────────────────────────────────────
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
}: BuildMetaParams): Metadata {
  const canonicalUrl = joinUrl(siteUrl, path)
  const fullOgImageUrl = ogImage.startsWith("http") ? ogImage : joinUrl(siteUrl, ogImage)

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

  const safeTitle = trim(withBrand(title), 60)
  const safeDesc = trim(description, 160)

  return {
    title: safeTitle,
    description: safeDesc,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: safeTitle,
      description: safeDesc,
      url: canonicalUrl,
      siteName,
      images: [{ url: fullOgImageUrl, width: 1200, height: 630, alt: safeTitle }],
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
  }
}

// Service pages: price front-loaded after the em dash.
// NOTE: key is optional now, so non-priced pages (e.g. /contacto) won’t break.
export function buildServiceMeta(
  params: Omit<BuildMetaParams, "title" | "description"> & {
    service: string
    key?: ServiceKey            // ← made optional
    titleSuffix?: string
    descriptionExtra?: string
  },
): Metadata {
  const { service, key, titleSuffix, descriptionExtra, ...rest } = params

  const priceStr =
    key && hasPrice(key) ? mxn(PRICING[key].from) : undefined
  const priceChunk = priceStr ? `Desde ${priceStr}` : undefined

  const suffix = titleSuffix?.trim() ?? ""
  const mid = priceChunk ? `${priceChunk}${suffix ? " · " : ""}` : ""
  const title = `${service} en Mérida – ${mid}${suffix}`.trim()

  const base =
    `${service} en Mérida.` + (descriptionExtra ? ` ${descriptionExtra}` : "")
  const description = priceChunk ? `${base} Costo ${priceChunk.toLowerCase()}.` : base

  return buildMeta({ title, description, ...rest })
}
