// /lib/schema.ts
// Centralized JSON-LD schema generation for all pages.
// Consumes data from: clinic.ts, doctor.ts, services.ts, reviews.ts
//
// Architecture (per Project_Context_and_Decisions_v2.md):
//   Global @graph (every page):
//     - WebSite → publisher links to Organization
//     - MedicalClinic → full NAP, geo, hours, hasOfferCatalog (all 27 services)
//     - Physician → worksFor → MedicalClinic, knowsAbout, credentials
//
//   Per-procedure page (added to global):
//     - MedicalProcedure → name, procedureType, offers (price)
//     - FAQPage → question/answer pairs (Persona 5 fear-based queries)
//
// Usage in layout.tsx:
//   <script type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(globalGraph()) }}
//   />
//
// Usage in procedure page.tsx:
//   <script type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema({ ... })) }}
//   />

import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { toSchemaOfferCatalog, SERVICES } from "@/lib/services"
import type { ServiceKey } from "@/lib/pricing"
import { PRICING, hasPrice } from "@/lib/pricing"

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SITE_URL = CLINIC.url
const CLINIC_ID = `${SITE_URL}#clinic`
const PHYSICIAN_ID = `${SITE_URL}#physician`
const WEBSITE_ID = `${SITE_URL}#website`

// ---------------------------------------------------------------------------
// Utility
// ---------------------------------------------------------------------------

/** Remove undefined/null/empty arrays/empty objects recursively for clean JSON-LD */
function prune<T>(obj: T): T {
  if (Array.isArray(obj)) {
    const cleaned = obj.map(prune).filter((v) => v !== undefined && v !== null)
    return cleaned as unknown as T
  }
  if (obj && typeof obj === "object" && !(obj instanceof Date)) {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      const pv = prune(v)
      if (pv === undefined || pv === null) continue
      if (Array.isArray(pv) && pv.length === 0) continue
      if (
        typeof pv === "object" &&
        pv !== null &&
        !Array.isArray(pv) &&
        Object.keys(pv).length === 0
      )
        continue
      out[k] = pv
    }
    return out as unknown as T
  }
  return obj
}

// ---------------------------------------------------------------------------
// Entity: WebSite
// ---------------------------------------------------------------------------

function websiteEntity() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: CLINIC.name,
    url: SITE_URL,
    publisher: { "@id": CLINIC_ID },
    inLanguage: "es",
  }
}

// ---------------------------------------------------------------------------
// Entity: MedicalClinic (Organization)
// ---------------------------------------------------------------------------

function clinicEntity() {
  return {
    "@type": "MedicalClinic",
    "@id": CLINIC_ID,
    name: CLINIC.name,
    url: SITE_URL,
    telephone: CLINIC.phone.schema,
    image: `${SITE_URL}${CLINIC.imageUrl}`,
    logo: `${SITE_URL}${CLINIC.logoUrl}`,
    priceRange: CLINIC.priceRange,
    foundingDate: CLINIC.openingDate,
    // Schema.org: "Gastroenterology" is pragmatic closest. Dr. Quiroz actual specialty: Endoscopia Gastrointestinal (Cédula EGI230072)
    medicalSpecialty: "Gastroenterology",
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.address.streetAddress,
      addressLocality: CLINIC.address.addressLocality,
      addressRegion: CLINIC.address.addressRegion,
      postalCode: CLINIC.address.postalCode,
      addressCountry: CLINIC.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC.geo.lat,
      longitude: CLINIC.geo.lng,
    },
    hasMap: CLINIC.mapUrl,
    openingHoursSpecification: CLINIC.hours.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.dayOfWeek}`,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      {
        "@type": "City",
        name: CLINIC.areaServed.primary,
      },
      {
        "@type": "State",
        name: CLINIC.areaServed.region,
      },
      ...CLINIC.areaServed.secondaryRegions.map((r) => ({
        "@type": "State" as const,
        name: r,
      })),
    ],
    sameAs: CLINIC.sameAs,
    knowsAbout: CLINIC.knowsAbout,
    hasOfferCatalog: toSchemaOfferCatalog(),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: CLINIC.aggregateRating.ratingValue,
      reviewCount: CLINIC.aggregateRating.reviewCount,
      bestRating: 5,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CLINIC.phone.schema,
      contactType: "customer service",
      areaServed: "MX",
      availableLanguage: ["es"],
    },
  }
}

// ---------------------------------------------------------------------------
// Entity: Physician
// ---------------------------------------------------------------------------

function physicianEntity() {
  return {
    "@type": "Physician",
    "@id": PHYSICIAN_ID,
    name: DOCTOR.name,
    description: DOCTOR.schemaDescription,
    image: `${SITE_URL}${DOCTOR.photos.headshot}`,
    url: `${SITE_URL}${DOCTOR.profileUrl}`,
    // Schema.org: "Gastroenterology" is pragmatic closest. Dr. Quiroz actual specialty: Endoscopia Gastrointestinal (Cédula EGI230072)
    medicalSpecialty: DOCTOR.medicalSpecialty,
    worksFor: { "@id": CLINIC_ID },
    memberOf: DOCTOR.schemaMemberOf,
    hasCredential: DOCTOR.schemaCredentials,
    knowsAbout: DOCTOR.schemaKnowsAbout,
    sameAs: DOCTOR.schemaSameAs.length > 0 ? DOCTOR.schemaSameAs : undefined,
  }
}

// ---------------------------------------------------------------------------
// Global @graph (every page via layout.tsx)
// ---------------------------------------------------------------------------

/**
 * Generate the global JSON-LD @graph containing WebSite, MedicalClinic, and Physician.
 * Inject this once in the root layout.
 *
 * @example
 *   // app/layout.tsx
 *   <script
 *     type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(globalGraph()) }}
 *   />
 */
export function globalGraph() {
  return prune({
    "@context": "https://schema.org",
    "@graph": [websiteEntity(), clinicEntity(), physicianEntity()],
  })
}

// ---------------------------------------------------------------------------
// Per-Procedure Page: MedicalProcedure
// ---------------------------------------------------------------------------

export interface ProcedureSchemaParams {
  /** Procedure name as it appears in H1, e.g. "Colonoscopia en Mérida" */
  name: string
  /** Page URL path, e.g. "/colonoscopia-merida" */
  path: string
  /** Pricing key to pull price from PRICING */
  pricingKey?: ServiceKey
  /** Plain-language description of the procedure */
  description?: string
  /** Body location where the procedure is performed */
  bodyLocation?: string
  /** How the procedure is performed (brief) */
  howPerformed?: string
  /** Preparation instructions (brief) */
  preparation?: string
  /** Follow-up instructions or intervals (brief) */
  followUp?: string
  /** Procedure type: Diagnostic, Therapeutic, or Surgical */
  procedureType?: "Diagnostic" | "Therapeutic" | "Surgical"
  /** Optional image URL (absolute or site-relative) */
  image?: string
}

/**
 * Generate MedicalProcedure JSON-LD for a procedure page.
 * References the global clinic entity via @id.
 *
 * @example
 *   procedureSchema({
 *     name: "Colonoscopia en Mérida",
 *     path: "/colonoscopia-merida",
 *     pricingKey: "colonoscopia",
 *     description: "Estudio del colon con cámara flexible...",
 *     procedureType: "Diagnostic",
 *   })
 */
export function procedureSchema(params: ProcedureSchemaParams) {
  const {
    name,
    path,
    pricingKey,
    description,
    bodyLocation,
    howPerformed,
    preparation,
    followUp,
    procedureType,
    image,
  } = params

  const url = `${SITE_URL}${path}`
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : undefined

  const hasFixedPrice = pricingKey && hasPrice(pricingKey)

  return prune({
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    url,
    description,
    image: imageUrl,
    bodyLocation,
    howPerformed,
    preparation,
    followup: followUp,
    procedureType: procedureType
      ? `https://schema.org/${procedureType}Procedure`
      : undefined,
    availableLanguage: ["es"],
    // Schema.org: "Gastroenterology" is pragmatic closest. Dr. Quiroz actual specialty: Endoscopia Gastrointestinal (Cédula EGI230072)
    medicalSpecialty: "Gastroenterology",
    provider: { "@id": CLINIC_ID },
    areaServed: {
      "@type": "City",
      name: CLINIC.areaServed.primary,
      containedInPlace: {
        "@type": "State",
        name: CLINIC.areaServed.region,
      },
    },
    offers: hasFixedPrice
      ? {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: PRICING[pricingKey!].from,
            priceCurrency: "MXN",
          },
          availability: "https://schema.org/InStock",
          url,
        }
      : undefined,
  })
}

// ---------------------------------------------------------------------------
// Per-Procedure Page: FAQPage
// ---------------------------------------------------------------------------

export interface FaqItem {
  question: string
  answer: string
}

/**
 * Generate FAQPage JSON-LD from question/answer pairs.
 * Targets Persona 5 (El Investigador) fear-based queries.
 * Wins featured snippets for "¿Duele?", "¿Es peligroso?", etc.
 *
 * @example
 *   faqSchema([
 *     { question: "¿Duele la colonoscopia?", answer: "No, se realiza con sedación..." },
 *     { question: "¿Cuánto cuesta?", answer: "Desde $5,000 MXN..." },
 *   ])
 */
export function faqSchema(items: FaqItem[]) {
  if (items.length === 0) return null
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// ---------------------------------------------------------------------------
// Breadcrumb (optional, for procedure pages)
// ---------------------------------------------------------------------------

/**
 * Generate BreadcrumbList JSON-LD.
 *
 * @example
 *   breadcrumbSchema([
 *     { name: "Inicio", path: "/" },
 *     { name: "Colonoscopia en Mérida", path: "/colonoscopia-merida" },
 *   ])
 */
export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}