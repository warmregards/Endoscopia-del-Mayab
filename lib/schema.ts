// lib/schema.ts

type CurrencyCode = "MXN"

/* =========================
   Service (MedicalProcedure)
   ========================= */

export interface ServiceParams {
  /** MUST already include "en Mérida" */
  name: string
  /** Absolute URL for the service page */
  url: string
  areaServed?: string // default "Mérida, Yucatán"

  /** Preferred: reference the clinic entity injected by ClinicJsonLd */
  provider?: { "@id": string } | Record<string, any>

  /** Legacy fallback fields (used only if provider is not given) */
  providerName?: string
  providerUrl?: string
  providerPhone?: string

  priceFrom?: string // numeric-as-string
  imageUrl?: string  // absolute or site-relative resolved earlier
  specialties?: string[] // default ["Endoscopy"]
  aggregateRating?: { ratingValue: number; reviewCount: number }
}

export function serviceJSONLD({
  name,
  url,
  areaServed = "Mérida, Yucatán",
  provider,
  // legacy fallbacks:
  providerName,
  providerUrl,
  providerPhone,
  priceFrom,
  imageUrl,
  specialties = ["Endoscopy"],
  aggregateRating,
}: ServiceParams) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    url,
    image: imageUrl,
    availableLanguage: ["es"],
    areaServed: { "@type": "City", name: areaServed },
    medicalSpecialty: specialties,
  }

  // Prefer referencing the single clinic entity by @id.
  if (provider) {
    schema.provider = provider
  } else if (providerName) {
    // Backward-compatible embedded clinic (used only if no provider was passed).
    schema.provider = {
      "@type": "MedicalClinic",
      name: providerName,
      url: providerUrl,
      telephone: providerPhone,
    }
  }

  if (priceFrom) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "MXN" as CurrencyCode,
      price: priceFrom,
      availability: "https://schema.org/InStock",
      url,
    }
  }

  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    }
  }

  return prune(schema)
}

/* ================
   URL join helper
   ================ */

export function joinUrl(base: string, rel: string) {
  const b = (base || "https://www.endoscopiadelmayab.com").replace(/\/$/, "")
  const r = rel.startsWith("/") ? rel : `/${rel}`
  return `${b}${r}`
}

/* =========================
   MedicalClinic (Organization)
   ========================= */

type OpeningRange = {
  day: "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su"
  opens: string // "07:00"
  closes: string // "19:00"
}

interface MedicalClinicParams {
  /** Optional stable identifier to reference via "@id" (e.g. `${site}#clinic`) */
  id?: string
  name: string
  url: string // absolute
  phone: string
  streetAddress: string
  postalCode?: string
  geo?: { lat: number; lng: number }
  mapUrl?: string // absolute Google Maps link
  /** Can be structured OpeningRange[] OR simple string[] like ["Mo-Su 07:00-19:00"] */
  hours?: OpeningRange[] | string[]
  sameAs?: string[]
  logoUrl?: string // absolute
  imageUrl?: string // absolute
  priceRange?: string // e.g. "$$"
  specialties?: string[] // default: ["Endoscopy"]
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
  services?: Array<{
    name: string // MUST include "en Mérida"
    url: string // absolute
    priceFrom?: string // numeric-as-string (e.g. "5940")
  }>
  secondaryServices?: string[]
}

function buildHours(hours?: OpeningRange[] | string[]) {
  if (!hours) return {}
  if (Array.isArray(hours) && typeof hours[0] === "string") {
    return { openingHours: hours as string[] }
  }
  const openingHoursSpecification = (hours as OpeningRange[]).map(h => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: mapDay(h.day),
    opens: h.opens,
    closes: h.closes,
  }))
  return { openingHoursSpecification }
}

export function medicalClinicJSONLD(cfg: MedicalClinicParams) {
  const {
    id,
    name, url, phone, streetAddress, postalCode, geo, mapUrl,
    hours, sameAs = [], logoUrl, imageUrl, priceRange,
    specialties = ["Endoscopy"], aggregateRating,
    services = [], secondaryServices = [],
  } = cfg

  const hoursBlock = buildHours(hours)

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    ...(id ? { "@id": id } : {}),
    name,
    url,
    telephone: phone,
    image: imageUrl,
    logo: logoUrl,
    priceRange,
    medicalSpecialty: specialties,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: "Mérida",
      addressRegion: "Yucatán",
      postalCode: postalCode || undefined,
      addressCountry: "MX",
    },
    ...hoursBlock,
    sameAs: sameAs.length ? sameAs : undefined,
    areaServed: { "@type": "City", name: "Mérida, Yucatán" },
    hasMap: mapUrl,
    geo: geo ? { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng } : undefined,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "customer service",
        areaServed: "MX",
        availableLanguage: ["es"],
      },
      {
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "appointments",
        areaServed: "MX",
        availableLanguage: ["es"],
      },
    ],
  }

  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    }
  }

  if (services.length) {
    schema.makesOffer = services.map(svc => ({
      "@type": "Offer",
      priceCurrency: "MXN",
      price: svc.priceFrom || undefined,
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: svc.name,
        url: svc.url,
        availableLanguage: ["es"],
        areaServed: { "@type": "City", name: "Mérida, Yucatán" },
        medicalSpecialty: specialties,
      },
    }))

    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: "Servicios de Endoscopia",
      itemListElement: services.map((svc, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "MedicalProcedure",
          name: svc.name,
          url: svc.url,
        },
      })),
    }
  }

  if (secondaryServices.length) {
    schema.availableService = secondaryServices.map(raw => {
      const name = /en Mérida/i.test(raw) ? raw : `${raw} en Mérida`
      return {
        "@type": "MedicalService",
        name,
        availableLanguage: ["es"],
        areaServed: { "@type": "City", name: "Mérida, Yucatán" },
      }
    })
  }

  return prune(schema)
}

function mapDay(d: OpeningRange["day"]) {
  return {
    Mo: "https://schema.org/Monday",
    Tu: "https://schema.org/Tuesday",
    We: "https://schema.org/Wednesday",
    Th: "https://schema.org/Thursday",
    Fr: "https://schema.org/Friday",
    Sa: "https://schema.org/Saturday",
    Su: "https://schema.org/Sunday",
  }[d]
}

/* =========
   Utilities
   ========= */

/** Remove undefined/null recursively for cleaner JSON-LD */
function prune<T>(obj: T): T {
  if (Array.isArray(obj)) {
    // @ts-ignore – keep truthy items after pruning
    return obj.map(prune).filter(Boolean) as T
  }
  if (obj && typeof obj === "object") {
    const out: Record<string, any> = {}
    for (const [k, v] of Object.entries(obj as Record<string, any>)) {
      const pv = prune(v)
      if (
        pv !== undefined &&
        pv !== null &&
        !(Array.isArray(pv) && pv.length === 0) &&
        !(typeof pv === "object" && pv && Object.keys(pv as object).length === 0)
      ) {
        out[k] = pv
      }
    }
    // @ts-ignore – cast back to T
    return out as T
  }
  return obj
}
