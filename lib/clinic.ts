// /lib/clinic.ts
// Single source of truth for all clinic data, contact info, and contact helpers.
// Consumed by: schema JSON-LD, footer, contact page, procedure page CTAs,
// WhatsApp buttons, tel: links, and any component showing NAP+W.
//
// Merges former /lib/contact.ts — all contact helpers now live here.
//
// NAP+W canonical formats (Project_Context_and_Decisions_v2.md):
//   Name:     Endoscopia del Mayab
//   Address:  Hospital Amerimed Mérida, Consultorio 517, Chichi Suárez, 97306 Mérida, Yuc.
//   Phone:    999 236 0153 (display) | tel:+529992360153 (links) | +52-999-236-0153 (schema)
//   WhatsApp: 999 236 0153 (display) | https://wa.me/529992360153 (links)
//   Website:  https://www.endoscopiadelmayab.com

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com"
).replace(/\/$/, "")

const PHONE_E164 = process.env.NEXT_PUBLIC_PHONE_E164 || "+529992360153"
const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "529992360153"

// ---------------------------------------------------------------------------
// Clinic Data
// ---------------------------------------------------------------------------

export const CLINIC = {
  // ── Identity ────────────────────────────────────────────────────────────
  name: "Endoscopia del Mayab",
  url: SITE_URL,
  openingDate: "2025-06-01", // GBP opening date, ISO format for schema

  // ── Address (structured for schema PostalAddress) ───────────────────────
  address: {
    /** Full display string for UI (footer, contact page) */
    display:
      "Hospital Amerimed Mérida, Consultorio 517, Chichi Suárez, 97306 Mérida, Yuc.",
    /** Schema PostalAddress fields */
    streetAddress: "Hospital Amerimed Mérida, Consultorio 517",
    addressLocality: "Mérida",
    addressRegion: "Yucatán",
    postalCode: "97306",
    addressCountry: "MX",
    /** Neighborhood / colonia — useful for local context */
    neighborhood: "Chichi Suárez",
  },

  // ── Phone (three canonical formats) ─────────────────────────────────────
  phone: {
    /** Human-readable display: "999 236 0153" */
    display: "999 236 0153",
    /** For tel: links: "+529992360153" */
    e164: PHONE_E164,
    /** For schema telephone property: "+52-999-236-0153" */
    schema: "+52-999-236-0153",
  },

  // ── WhatsApp ────────────────────────────────────────────────────────────
  whatsapp: {
    /** Raw number for wa.me links */
    number: WA_NUMBER,
    /** Default pre-filled message for generic CTAs */
    defaultText:
      "Hola Dr. Quiroz, me interesa agendar una cita. ¿Cuál es la disponibilidad?",
  },

  // ── Hours ───────────────────────────────────────────────────────────────
  hours: {
    /** Human-readable */
    display: "Lunes a Domingo, 7:00 AM – 9:00 PM",
    /** Schema openingHoursSpecification */
    schema: [
      { dayOfWeek: "Monday", opens: "07:00", closes: "21:00" },
      { dayOfWeek: "Tuesday", opens: "07:00", closes: "21:00" },
      { dayOfWeek: "Wednesday", opens: "07:00", closes: "21:00" },
      { dayOfWeek: "Thursday", opens: "07:00", closes: "21:00" },
      { dayOfWeek: "Friday", opens: "07:00", closes: "21:00" },
      { dayOfWeek: "Saturday", opens: "07:00", closes: "21:00" },
      { dayOfWeek: "Sunday", opens: "07:00", closes: "21:00" },
    ],
  },

  // ── Location ────────────────────────────────────────────────────────────
  /** Must match GBP pin exactly */
  geo: { lat: 20.983670077019283, lng: -89.55433275846725 },
  mapUrl: "https://maps.app.goo.gl/hYxCrLJ1SrapBYV27",


  // ── Google Place ID (for reviews API + schema) ────────────────────────── 
  placeId: "ChIJ6QU_AzZxVo8RsiiKRckE8-A", // ← paste your actual ID here


  // ── Branding ────────────────────────────────────────────────────────────
  logoUrl: "/endoscopia-del-mayab-logo.png",
  imageUrl: "/endoscopia-og.png",
  priceRange: "$$",
  paymentAccepted: "Tarjeta, Efectivo, Transferencia",

  // ── GBP Categories & Specialties ────────────────────────────────────────
  primaryCategory: "Endoscopist",
  secondaryCategory: "Medical office",
  /** Schema knowsAbout — Wikipedia entities for E-E-A-T */
  knowsAbout: [
    "https://en.wikipedia.org/wiki/Endoscopy",
    "https://en.wikipedia.org/wiki/Colonoscopy",
    "https://en.wikipedia.org/wiki/Endoscopic_retrograde_cholangiopancreatography",
    "https://en.wikipedia.org/wiki/Gastroenterology",
  ],

  // ── Service Area (mirrors GBP) ─────────────────────────────────────────
  areaServed: {
    primary: "Mérida",
    region: "Yucatán",
    secondaryRegions: ["Quintana Roo"],
    country: "MX",
    municipalities: [
      "Umán",
      "Conkal",
      "Kanasín",
      "Progreso",
      "Dzityá",
      "Cholul",
      "Caucel",
      "Komchen",
      "Chuburná",
      "Chicxulub",
    ],
  },

  // ── Reviews ─────────────────────────────────────────────────────────────
  aggregateRating: {
    ratingValue: 5.0,
    reviewCount: 52,
    /** When this was last verified against GBP — update when count changes */
    lastVerified: "2026-02-09",
  },

  // ── Entity Verification: sameAs ─────────────────────────────────────────
  // CLINIC profiles only. Doctor profiles live in doctor.ts → schemaSameAs.
  sameAs: [
    "https://www.instagram.com/endoscopiadelmayab/",
    "https://www.facebook.com/p/Endoscop%C3%ADa-del-Mayab-61577159683148/",
    "https://www.youtube.com/@DrOmarQuiroz",
    "https://www.doctoralia.com.mx/omar-quiroz/cirujano-bariatra-cirujano-general-endoscopista/yucatan",
  ],

  // ── Social (for UI display, not schema) ─────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/endoscopiadelmayab/",
    youtube: "https://www.youtube.com/@DrOmarQuiroz",
    facebook: "https://www.facebook.com/p/Endoscop%C3%ADa-del-Mayab-61577159683148/",
  },
} as const

// ---------------------------------------------------------------------------
// Contact Helpers
// ---------------------------------------------------------------------------

/**
 * Generate a tel: href for phone links.
 * @example
 *   <a href={telHref()}>Llamar</a>
 */
export function telHref(number = PHONE_E164): string {
  return `tel:${number}`
}

/**
 * Get the canonical phone display string.
 * @example
 *   <span>{phoneDisplay()}</span>  // → "999 236 0153"
 */
export function phoneDisplay(): string {
  return CLINIC.phone.display
}

/**
 * Generate a WhatsApp link with optional pre-filled message.
 *
 * If no text is provided, uses the clinic default message.
 * Pass `text: ""` explicitly to open WhatsApp with no pre-filled message.
 *
 * @example
 *   // Generic CTA
 *   <a href={waHref()}>WhatsApp</a>
 *
 *   // Procedure-specific CTA
 *   <a href={waHref({ text: "Hola, me interesa una colonoscopia." })}>WhatsApp</a>
 *
 *   // No pre-filled message
 *   <a href={waHref({ text: "" })}>WhatsApp</a>
 */
export function waHref(opts?: {
  number?: string
  text?: string
}): string {
  const num = (opts?.number || WA_NUMBER).replace(/[^\d]/g, "")
  // Use default text unless explicitly set (including empty string)
  const message =
    opts?.text !== undefined ? opts.text : CLINIC.whatsapp.defaultText
  const query = message ? `?text=${encodeURIComponent(message)}` : ""
  return `https://wa.me/${num}${query}`
}

/**
 * Generate a procedure-specific WhatsApp message.
 * Useful for procedure page CTAs where the pre-filled message
 * should mention the specific procedure.
 *
 * @example
 *   waHref({ text: waMessage("Colonoscopia") })
 *   // → "Hola Dr. Quiroz, me interesa agendar una Colonoscopia. ¿Cuál es la disponibilidad?"
 */
export function waMessage(procedureName: string): string {
  return `Hola Dr. Quiroz, me interesa agendar una ${procedureName}. ¿Cuál es la disponibilidad?`
}