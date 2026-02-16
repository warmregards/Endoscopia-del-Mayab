// /lib/pricing.ts
// Single source of truth for all procedure pricing.
// Consumed by: services.ts, schema generators, procedure pages, pricing page.
//
// Architecture:
// - ServiceKey union = every billable procedure (including aliases like esclerosis)
// - PriceEntry = per-service pricing data with optional `from` (quote-only if omitted)
// - Helpers handle formatting, schema output, and UI display

export type ServiceKey =
  | "endoscopia"
  | "colonoscopia"
  | "panendoscopia"
  | "cpre"
  | "ligadura_varices"
  | "ligadura_hemorroides"
  | "gastrostomia_peg"
  | "extraccion_cuerpos_extranos"
  | "dilatacion_esofagica"
  | "esclerosis_varices_gastricas" // Distinct procedure — cyanoacrylate injection for gastric fundal varices (GOV2, IGV1). GBP Service #9.
  | "dilatacion_biliar"
  | "dilatacion_colonica"
  | "endoprotesis_esofagicas"
  | "endoprotesis_biliares"
  | "endoprotesis_duodenales"
  | "endoprotesis_colonicas"
  | "cierre_fistulas_clips"
  | "sutura_endoscopica"
  | "esd"
  | "emr"
  | "retiro_balon_gastrico"
  | "apc"

type CurrencyCode = "MXN"

type PriceEntry = {
  /** If omitted, the service is "quote only" */
  from?: number
  currency: CurrencyCode
  label: string
}

export const PRICING: Record<ServiceKey, PriceEntry> = {
  endoscopia: { from: 4500, currency: "MXN", label: "Endoscopia (EGD)" },
  colonoscopia: { from: 5000, currency: "MXN", label: "Colonoscopia" },
  panendoscopia: { from: 4500, currency: "MXN", label: "Panendoscopia" },
  cpre: { from: 25000, currency: "MXN", label: "CPRE" },
  ligadura_hemorroides: { from: 15000, currency: "MXN", label: "Ligadura de hemorroides internas" },
  ligadura_varices: { from: 15000, currency: "MXN", label: "Ligadura de várices esofágicas" },
  gastrostomia_peg: { from: 16000, currency: "MXN", label: "Gastrostomía endoscópica (PEG)" },
  extraccion_cuerpos_extranos: { from: 9500, currency: "MXN", label: "Extracción de cuerpos extraños" },
  dilatacion_esofagica: { from: 15000, currency: "MXN", label: "Dilatación esofágica" },
  esclerosis_varices_gastricas: { from: 15000, currency: "MXN", label: "Esclerosis de várices gástricas" },
  dilatacion_biliar: { from: 27000, currency: "MXN", label: "Dilatación biliar" },
  dilatacion_colonica: { from: 15000, currency: "MXN", label: "Dilatación colónica" },

  // Quote-only services (no fixed "from" price)
  endoprotesis_esofagicas: { currency: "MXN", label: "Endoprótesis esofágicas" },
  endoprotesis_biliares: { currency: "MXN", label: "Endoprótesis biliares" },
  endoprotesis_duodenales: { currency: "MXN", label: "Endoprótesis duodenales" },
  endoprotesis_colonicas: { currency: "MXN", label: "Endoprótesis colónicas" },
  cierre_fistulas_clips: { currency: "MXN", label: "Cierre de fístulas por clips endoscópicos" },
  sutura_endoscopica: { currency: "MXN", label: "Sutura endoscópica" },
  esd: { currency: "MXN", label: "Disección endoscópica submucosa (ESD)" },
  emr: { currency: "MXN", label: "Resección endoscópica mucosa (EMR)" },

  retiro_balon_gastrico: { from: 15000, currency: "MXN", label: "Retiro de balón gástrico" },
  apc: { from: 15000, currency: "MXN", label: "Coagulación con plasma de argón (APC)" },
} as const

// ---------------------------------------------------------------------------
// Additional Fees (not procedure-specific — apply across services)
// ---------------------------------------------------------------------------

export type AdditionalFeeKey = "biopsy" | "consultation"

type AdditionalFee = {
  amount: number
  currency: "MXN"
  label: string
  /** Short description for UI display */
  description: string
}

export const ADDITIONAL_FEES: Record<AdditionalFeeKey, AdditionalFee> = {
  biopsy: {
    amount: 1200,
    currency: "MXN",
    label: "Lectura de patología (biopsia)",
    description: "Solo si se toman biopsias — se informa antes del procedimiento",
  },
  consultation: {
    amount: 900,
    currency: "MXN",
    label: "Consulta de valoración",
    description: "Consulta pre-procedimiento con el Dr. Quiroz",
  },
} as const

// ---------------------------------------------------------------------------
// What's Included in Base Price (pricing differentiator content)
// ---------------------------------------------------------------------------

export const INCLUDED_IN_PRICE = [
  "Sedación con anestesiólogo",
  "Toma de biopsias sin límite",
  "Sala de recuperación",
  "Valoración pre-procedimiento",
  "Reporte con fotografías HD",
] as const

// ---------------------------------------------------------------------------
// Formatting Helpers
// ---------------------------------------------------------------------------

/**
 * Format a number as MXN. If amount is missing/undefined,
 * return a friendly "quote only" label.
 *
 * @example
 *   mxn(4500)      // → "$4,500 MXN"
 *   mxn(undefined)  // → "Precio bajo cotización"
 */
export const mxn = (amount?: number, opts?: { fallback?: string }): string =>
  typeof amount === "number"
    ? `$${amount.toLocaleString("es-MX")} MXN`
    : (opts?.fallback ?? "Precio bajo cotización")

/**
 * UI display string: "Desde $X MXN" or "Precio bajo cotización".
 *
 * @example
 *   displayFrom("endoscopia")  // → "Desde $4,500 MXN"
 *   displayFrom("esd")         // → "Precio bajo cotización"
 */
export const displayFrom = (key: ServiceKey, prefix = "Desde"): string => {
  const entry = PRICING[key]
  if (typeof entry.from !== "number") {
    return "Precio bajo cotización"
  }
  const formatted = mxn(entry.from)
  return prefix ? `${prefix} ${formatted}` : formatted
}

// ---------------------------------------------------------------------------
// Data Helpers
// ---------------------------------------------------------------------------

/** Does this service have a numeric price? */
export const hasPrice = (key: ServiceKey): boolean =>
  typeof PRICING[key].from === "number"

/** Get the raw number (or undefined for quote-only) */
export const priceNumber = (key: ServiceKey): number | undefined =>
  PRICING[key].from

/**
 * Structured price data for components that need the parts separately.
 * Returns null for quote-only services.
 *
 * @example
 *   priceData("endoscopia")
 *   // → { amount: 4500, currency: "MXN", prefix: "Desde", formatted: "$4,500 MXN" }
 *
 *   priceData("esd")
 *   // → null
 */
export const priceData = (
  key: ServiceKey,
  prefix = "Desde"
): { amount: number; currency: CurrencyCode; prefix: string; formatted: string } | null => {
  const entry = PRICING[key]
  if (typeof entry.from !== "number") return null
  return {
    amount: entry.from,
    currency: entry.currency,
    prefix,
    formatted: mxn(entry.from),
  }
}