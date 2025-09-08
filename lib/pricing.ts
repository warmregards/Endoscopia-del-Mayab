// /lib/pricing.ts

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
  | "esclerosis_varices_gastricas"
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
  /** If omitted, the service is “quote only” */
  from?: number
  currency: CurrencyCode
  label: string
}

export const PRICING: Record<ServiceKey, PriceEntry> = {
  endoscopia: { from: 4500, currency: "MXN", label: "Endoscopia (EGD)" },
  colonoscopia: { from: 5000, currency: "MXN", label: "Colonoscopia" },
  panendoscopia: { from: 4500, currency: "MXN", label: "Panendoscopia" },
  cpre: { from: 24700, currency: "MXN", label: "CPRE" },
  ligadura_hemorroides: { from: 17000, currency: "MXN", label: "Ligadura de hemorroides internas" },
  ligadura_varices: { from: 19000, currency: "MXN", label: "Ligadura de várices esofágicas" },
  gastrostomia_peg: { from: 19000, currency: "MXN", label: "Gastrostomía endoscópica (PEG)" },
  extraccion_cuerpos_extranos: { from: 9700, currency: "MXN", label: "Extracción de cuerpos extraños" },
  dilatacion_esofagica: { from: 15000, currency: "MXN", label: "Dilatación esof��gica" },
  esclerosis_varices_gastricas: { from: 15000, currency: "MXN", label: "Esclerosis de várices gástricas" },
  dilatacion_biliar: { from: 25000, currency: "MXN", label: "Dilatación biliar" },
  dilatacion_colonica: { from: 15000, currency: "MXN", label: "Dilatación colónica" },

  // Quote-only services (no fixed “from” price)
  endoprotesis_esofagicas:   { currency: "MXN", label: "Endoprótesis esofágicas" },
  endoprotesis_biliares:     { currency: "MXN", label: "Endoprótesis biliares" },
  endoprotesis_duodenales:   { currency: "MXN", label: "Endoprótesis duodenales" },
  endoprotesis_colonicas:    { currency: "MXN", label: "Endoprótesis colónicas" },
  cierre_fistulas_clips:     { currency: "MXN", label: "Cierre de fístulas por clips endoscópicos" },
  sutura_endoscopica:        { currency: "MXN", label: "Sutura endoscópica" },
  esd:                       { currency: "MXN", label: "Disección endoscópica submucosa (ESD)" },
  emr:                       { currency: "MXN", label: "Resección endoscópica mucosa (EMR)" },

  retiro_balon_gastrico: { from: 15000, currency: "MXN", label: "Retiro de balón gástrico" },
  apc: { from: 19000, currency: "MXN", label: "Coagulación con plasma de argón (APC)" },
} as const

export const PRICES = PRICING // alias

/**
 * Format a number as MXN. If amount is missing/undefined,
 * return a friendly “quote only” label.
 *
 * Usage:
 *   mxn(PRICING.cierre_fistulas_clips.from)  // → "Precio bajo cotización"
 *   mxn(PRICING.endoscopia.from)             // → "$4,500 MXN"
 */
export const mxn = (amount?: number, opts?: { fallback?: string }) =>
  typeof amount === "number"
    ? `$${amount.toLocaleString("es-MX")} MXN`
    : (opts?.fallback ?? "Precio bajo cotización")

/** Helper: does this service have a numeric price? */
export const hasPrice = (key: ServiceKey) =>
  typeof PRICING[key].from === "number"

/** Helper: get the raw number (or undefined) */
export const priceNumber = (key: ServiceKey) =>
  PRICING[key].from

/**
 * Helper for JSON-LD: return a string price or undefined
 * (undefined means don’t include an Offer in schema)
 */
export const priceStringForSchema = (key: ServiceKey) => {
  const n = PRICING[key].from
  return typeof n === "number" ? String(n) : undefined
}

/** Convenience for UI: “Desde $X MXN” or “Precio bajo cotización” */
export const displayFrom = (key: ServiceKey, prefix = "Desde") =>
  mxn(PRICING[key].from, { fallback: "Precio bajo cotización" })
    .replace(/^\$/, `${prefix} $`)
