// /lib/services.ts
// Single source of truth for all services offered by Endoscopia del Mayab.
// Consumed by: service grids, pricing page, schema JSON-LD, sitemap, nav menus.
//
// Architecture decisions (see Project_Context_and_Decisions_v2.md):
// - Esclerosis de Várices Gástricas is a distinct procedure from Ligadura de
//   Várices Esofágicas (cyanoacrylate injection vs. band ligation).
// - Consultation services are included for schema completeness (GBP has 27 services).
// - CPRE is categorized as "therapeutic" (interventional), not diagnostic.
// - `gbpServiceName` mirrors GBP exactly for schema `hasOfferCatalog`.
// - `quoteOnly` is explicit rather than relying on `priceFrom === undefined`.

import { PRICING } from "@/lib/pricing"
import type { ServiceKey } from "@/lib/pricing"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ServiceCategory =
  | "diagnostic"
  | "therapeutic"
  | "advanced"
  | "consultation"

export type TrafficTier = "high" | "medium" | "low"

export interface ServiceItem {
  /** Short UI label, e.g. "Endoscopia" */
  name: string
  /** Full procedure name for H1/page titles, e.g. "Endoscopia en Mérida" */
  displayName: string
  /** Exact GBP service name — used in schema hasOfferCatalog */
  gbpServiceName: string
  /** Route slug without leading slash */
  slug: string
  /** Key into PRICING record */
  pricingKey: ServiceKey
  /** Category for UI grouping */
  category: ServiceCategory
  /** true = "Precio bajo cotización", false = has a desde price */
  quoteOnly: boolean
  /** Base price in MXN (undefined only when quoteOnly is true) */
  priceFrom?: number
  /** GA4 traffic tier for sort priority in service grids */
  trafficTier: TrafficTier
}

// ---------------------------------------------------------------------------
// Service Registry
// ---------------------------------------------------------------------------

export const SERVICES: ServiceItem[] = [
  // ── Diagnostic ──────────────────────────────────────────────────────────
  {
    name: "Endoscopia",
    displayName: "Endoscopia en Mérida",
    gbpServiceName: "Endoscopia",
    slug: "endoscopia-merida",
    pricingKey: "endoscopia",
    category: "diagnostic",
    quoteOnly: false,
    priceFrom: PRICING.endoscopia?.from,
    trafficTier: "high", // 2,788 GA4 sessions
  },
  {
    name: "Colonoscopia",
    displayName: "Colonoscopia en Mérida",
    gbpServiceName: "Colonoscopia",
    slug: "colonoscopia-merida",
    pricingKey: "colonoscopia",
    category: "diagnostic",
    quoteOnly: false,
    priceFrom: PRICING.colonoscopia?.from,
    trafficTier: "high", // 1,436 GA4 sessions
  },
  {
    name: "Panendoscopia",
    displayName: "Panendoscopia en Mérida",
    gbpServiceName: "Panendoscopia",
    slug: "panendoscopia-merida",
    pricingKey: "panendoscopia",
    category: "diagnostic",
    quoteOnly: false,
    priceFrom: PRICING.panendoscopia?.from,
    trafficTier: "low", // 17 GA4 sessions
  },

  // ── Therapeutic / Interventional ────────────────────────────────────────
  {
    name: "CPRE",
    displayName: "CPRE en Mérida",
    gbpServiceName: "CPRE",
    slug: "cpre-merida",
    pricingKey: "cpre",
    category: "therapeutic",
    quoteOnly: false,
    priceFrom: PRICING.cpre?.from,
    trafficTier: "high", // 997 GA4 sessions, highest margin
  },
  {
    name: "Ligadura de Várices",
    displayName: "Ligadura de Várices Esofágicas en Mérida",
    gbpServiceName: "Ligadura de Várices",
    slug: "ligadura-varices-esofagicas-merida",
    pricingKey: "ligadura_varices",
    category: "therapeutic",
    quoteOnly: false,
    priceFrom: PRICING.ligadura_varices?.from,
    trafficTier: "medium", // 143 GA4 sessions
  },
  {
    name: "Esclerosis de Várices Gástricas",
    displayName: "Esclerosis de Várices Gástricas en Mérida",
    gbpServiceName: "Esclerosis de Várices Gástricas",
    slug: "esclerosis-varices-gastricas-merida",
    pricingKey: "esclerosis_varices_gastricas",
    category: "therapeutic",
    quoteOnly: false,
    priceFrom: PRICING.esclerosis_varices_gastricas?.from,
    trafficTier: "low", // 54 SC impressions, 2 GA4 sessions — will grow with dedicated page
  },
  {
    name: "Ligadura de Hemorroides",
    displayName: "Ligadura de Hemorroides Internas en Mérida",
    gbpServiceName: "Ligadura de Hemorroides Internas",
    slug: "ligadura-hemorroides-internas-merida",
    pricingKey: "ligadura_hemorroides",
    category: "therapeutic",
    quoteOnly: false,
    priceFrom: PRICING.ligadura_hemorroides?.from,
    trafficTier: "low", // 20 sessions but 25% conv, 130s engagement
  },
  {
    name: "Gastrostomía (PEG)",
    displayName: "Gastrostomía Endoscópica (PEG) en Mérida",
    gbpServiceName: "Gastrostomía",
    slug: "gastrostomia-endoscopica-peg-merida",
    pricingKey: "gastrostomia_peg",
    category: "therapeutic",
    quoteOnly: false,
    priceFrom: PRICING.gastrostomia_peg?.from,
    trafficTier: "low",
  },
  {
    name: "Extracción de Cuerpos Extraños",
    displayName: "Extracción de Cuerpos Extraños por Endoscopia en Mérida",
    gbpServiceName: "Extracción de Cuerpos Extraños",
    slug: "extraccion-cuerpos-extranos-endoscopia-merida",
    pricingKey: "extraccion_cuerpos_extranos",
    category: "therapeutic",
    quoteOnly: false,
    priceFrom: PRICING.extraccion_cuerpos_extranos?.from,
    trafficTier: "low",
  },
  {
    name: "Dilatación Esofágica",
    displayName: "Dilatación Esofágica en Mérida",
    gbpServiceName: "Dilatación Esofágica",
    slug: "dilatacion-esofagica-merida",
    pricingKey: "dilatacion_esofagica",
    category: "therapeutic",
    quoteOnly: false,
    priceFrom: PRICING.dilatacion_esofagica?.from,
    trafficTier: "low",
  },
  {
    name: "Dilatación Biliar",
    displayName: "Dilatación Biliar en Mérida",
    gbpServiceName: "Dilatación Biliar",
    slug: "dilatacion-biliar-merida",
    pricingKey: "dilatacion_biliar",
    category: "therapeutic",
    quoteOnly: false,
    priceFrom: PRICING.dilatacion_biliar?.from,
    trafficTier: "low",
  },
  {
    name: "Dilatación Colónica",
    displayName: "Dilatación Colónica en Mérida",
    gbpServiceName: "Dilatación Colónica",
    slug: "dilatacion-colonica-merida",
    pricingKey: "dilatacion_colonica",
    category: "therapeutic",
    quoteOnly: false,
    priceFrom: PRICING.dilatacion_colonica?.from,
    trafficTier: "low",
  },
  {
    name: "Retiro de Balón Gástrico",
    displayName: "Retiro de Balón Gástrico en Mérida",
    gbpServiceName: "Retiro de Balón Gástrico",
    slug: "retiro-balon-gastrico-merida",
    pricingKey: "retiro_balon_gastrico",
    category: "therapeutic",
    quoteOnly: false,
    priceFrom: PRICING.retiro_balon_gastrico?.from,
    trafficTier: "low",
  },
  {
    name: "Coagulación APC",
    displayName: "Coagulación con Plasma de Argón (APC) en Mérida",
    gbpServiceName: "Coagulación con Plasma de Argón (APC)",
    slug: "apc-coagulacion-plasma-argon-merida",
    pricingKey: "apc",
    category: "therapeutic",
    quoteOnly: false,
    priceFrom: PRICING.apc?.from,
    trafficTier: "low",
  },

  // ── Advanced / Quote-Only ───────────────────────────────────────────────
  {
    name: "Endoprótesis Esofágicas",
    displayName: "Endoprótesis Esofágicas en Mérida",
    gbpServiceName: "Endoprótesis Esofágicas",
    slug: "endoprotesis-esofagicas-merida",
    pricingKey: "endoprotesis_esofagicas",
    category: "advanced",
    quoteOnly: true,
    trafficTier: "low",
  },
  {
    name: "Endoprótesis Biliares",
    displayName: "Endoprótesis Biliares en Mérida",
    gbpServiceName: "Endoprótesis Biliares",
    slug: "endoprotesis-biliares-merida",
    pricingKey: "endoprotesis_biliares",
    category: "advanced",
    quoteOnly: true,
    trafficTier: "low",
  },
  {
    name: "Endoprótesis Duodenales",
    displayName: "Endoprótesis Duodenales en Mérida",
    gbpServiceName: "Endoprótesis Duodenales",
    slug: "endoprotesis-duodenales-merida",
    pricingKey: "endoprotesis_duodenales",
    category: "advanced",
    quoteOnly: true,
    trafficTier: "low",
  },
  {
    name: "Endoprótesis Colónicas",
    displayName: "Endoprótesis Colónicas en Mérida",
    gbpServiceName: "Endoprótesis Colónicas",
    slug: "endoprotesis-colonicas-merida",
    pricingKey: "endoprotesis_colonicas",
    category: "advanced",
    quoteOnly: true,
    trafficTier: "low",
  },
  {
    name: "Cierre de Fístulas",
    displayName: "Cierre de Fístulas por Clips Endoscópicos en Mérida",
    gbpServiceName: "Cierre de Fístulas por Clips Endoscópicos",
    slug: "cierre-fistulas-clips-endoscopicos-merida",
    pricingKey: "cierre_fistulas_clips",
    category: "advanced",
    quoteOnly: true,
    trafficTier: "low",
  },
  {
    name: "Sutura Endoscópica",
    displayName: "Sutura Endoscópica en Mérida",
    gbpServiceName: "Sutura Endoscópica",
    slug: "sutura-endoscopica-merida",
    pricingKey: "sutura_endoscopica",
    category: "advanced",
    quoteOnly: true,
    trafficTier: "low",
  },
  {
    name: "Disección Submucosa (ESD)",
    displayName: "Disección Endoscópica Submucosa (ESD) en Mérida",
    gbpServiceName: "Disección Endoscópica Submucosa (ESD)",
    slug: "diseccion-endoscopica-submucosa-esd-merida",
    pricingKey: "esd",
    category: "advanced",
    quoteOnly: true,
    trafficTier: "low",
  },
  {
    name: "Resección Mucosa (EMR)",
    displayName: "Resección Endoscópica Mucosa (EMR) en Mérida",
    gbpServiceName: "Resección Endoscópica Mucosa (EMR)",
    slug: "reseccion-endoscopica-mucosa-emr-merida",
    pricingKey: "emr",
    category: "advanced",
    quoteOnly: true,
    trafficTier: "low",
  },
]

// ---------------------------------------------------------------------------
// Consultation Services (GBP "Medical office" category)
// These don't get individual pages — they're H2 sections on parent pages.
// Included here so schema hasOfferCatalog has all 27 GBP services.
// ---------------------------------------------------------------------------

export interface ConsultationItem {
  name: string
  gbpServiceName: string
  /** The page where this service appears as an H2 section */
  parentSlug: string
  /** Optional anchor ID for direct linking */
  anchor?: string
}

export const CONSULTATIONS: ConsultationItem[] = [
  {
    name: "Urgencias Digestivas",
    gbpServiceName: "Consulta de Urgencias Digestivas",
    parentSlug: "emergencias-digestivas-merida",
  },
  {
    name: "Atención a Emergencias GI",
    gbpServiceName: "Atención a Emergencias Gastrointestinales",
    parentSlug: "emergencias-digestivas-merida",
  },
  {
    name: "Control Post-Endoscopia",
    gbpServiceName: "Control Post-Endoscopia",
    parentSlug: "consultas-digestivas-merida",
    anchor: "control-post-endoscopia",
  },
  {
    name: "Valoración Pre-Endoscópica",
    gbpServiceName: "Valoración Pre-Endoscópica",
    parentSlug: "consultas-digestivas-merida",
    anchor: "valoracion-pre-endoscopica",
  },
  {
    name: "Chequeo Digestivo Preventivo",
    gbpServiceName: "Chequeo Digestivo Preventivo",
    parentSlug: "consultas-digestivas-merida",
    anchor: "chequeo-digestivo-preventivo",
  },
]

// ---------------------------------------------------------------------------
// Service Aliases (procedures with colloquial names that redirect)
// Used by: redirect config, SEO capture, FAQ generation
// ---------------------------------------------------------------------------

export interface ServiceAlias {
  /** The colloquial/alternate name patients search */
  aliasName: string
  /** Slug that should 301 → canonical slug */
  aliasSlug: string
  /** The canonical service this maps to */
  canonicalSlug: string
  /** Price associated with the alias (may differ from canonical) */
  priceFrom?: number
  /** SEO note: include as H2 or FAQ on the canonical page */
  seoAction: string
}

export const SERVICE_ALIASES: ServiceAlias[] = []

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Filter services by category */
export const servicesByCategory = (cat: ServiceCategory): ServiceItem[] =>
  SERVICES.filter((s) => s.category === cat)

/** Filter services by traffic tier */
export const servicesByTraffic = (tier: TrafficTier): ServiceItem[] =>
  SERVICES.filter((s) => s.trafficTier === tier)

/** Get services sorted by traffic priority (high → medium → low) */
export const servicesByPriority = (): ServiceItem[] => {
  const order: Record<TrafficTier, number> = { high: 0, medium: 1, low: 2 }
  return [...SERVICES].sort((a, b) => order[a.trafficTier] - order[b.trafficTier])
}

/** Get only services with visible pricing (for pricing page grid) */
export const pricedServices = (): ServiceItem[] =>
  SERVICES.filter((s) => !s.quoteOnly && s.priceFrom !== undefined)

/** Get only quote-only services */
export const quoteOnlyServices = (): ServiceItem[] =>
  SERVICES.filter((s) => s.quoteOnly)

// ---------------------------------------------------------------------------
// Schema Generators
// ---------------------------------------------------------------------------

const SITE_URL = "https://www.endoscopiadelmayab.com"

/**
 * Generate schema.org Offer objects for hasOfferCatalog.
 * Includes all 27 GBP services (procedures + consultations).
 */
export function toSchemaOfferCatalog() {
  const procedureOffers = SERVICES.map((s) => ({
    "@type": "Offer" as const,
    itemOffered: {
      "@type": "MedicalProcedure" as const,
      name: s.gbpServiceName,
      url: `${SITE_URL}/${s.slug}`,
    },
    ...(s.quoteOnly
      ? {}
      : {
          priceSpecification: {
            "@type": "PriceSpecification" as const,
            minPrice: s.priceFrom,
            priceCurrency: "MXN",
            unitText: "Desde",
          },
        }),
    availability: "https://schema.org/InStock" as const,
  }))

  const consultationOffers = CONSULTATIONS.map((c) => {
    const url = c.anchor
      ? `${SITE_URL}/${c.parentSlug}#${c.anchor}`
      : `${SITE_URL}/${c.parentSlug}`
    return {
      "@type": "Offer" as const,
      itemOffered: {
        "@type": "MedicalTherapy" as const,
        name: c.gbpServiceName,
        url,
      },
    }
  })

  return {
    "@type": "OfferCatalog" as const,
    name: "Procedimientos Endoscópicos en Mérida",
    itemListElement: [...procedureOffers, ...consultationOffers],
  }
}

/**
 * Generate a flat list for sitemap or nav menu.
 * Returns only procedure services (not consultations, which are H2 sections).
 */
export function toSitemapEntries() {
  return SERVICES.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    name: s.displayName,
    priority: s.trafficTier === "high" ? 0.9 : s.trafficTier === "medium" ? 0.7 : 0.5,
  }))
}

/**
 * Generate redirect map for next.config redirects.
 * Includes service aliases + any future redirects.
 */
export function toRedirects() {
  return SERVICE_ALIASES.map((a) => ({
    source: `/${a.aliasSlug}`,
    destination: `/${a.canonicalSlug}`,
    permanent: true, // 301
  }))
}