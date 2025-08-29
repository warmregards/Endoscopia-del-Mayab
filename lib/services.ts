// /lib/services.ts
import { PRICING } from "@/lib/pricing"

export type ServiceItem = {
  /** e.g., "Endoscopia" (we’ll append “en Mérida” where needed) */
  name: string
  /** route slug without leading slash, e.g. "endoscopia-merida" */
  slug: string
  /** optional price */
  priceFrom?: number
}

export const SERVICES: ServiceItem[] = [
  // Diagnóstico
  { name: "Endoscopia", slug: "endoscopia-merida",        priceFrom: PRICING.endoscopia?.from },
  { name: "Colonoscopia", slug: "colonoscopia-merida",    priceFrom: PRICING.colonoscopia?.from },
  { name: "Panendoscopia", slug: "panendoscopia-merida",  priceFrom: PRICING.panendoscopia?.from },
  { name: "CPRE", slug: "cpre-merida",                    priceFrom: PRICING.cpre?.from },

  // Terapéuticos / avanzados
  { name: "Ligadura de Várices", slug: "ligadura-varices-esofagicas-merida", priceFrom: PRICING.ligadura_varices?.from },
  { name: "Gastrostomía", slug: "gastrostomia-endoscopica-peg-merida",       priceFrom: PRICING.gastrostomia_peg?.from },
  { name: "Extracción de Cuerpos Extraños", slug: "extraccion-cuerpos-extranos-endoscopia-merida", priceFrom: PRICING.extraccion_cuerpos_extranos?.from },
  { name: "Dilatación Esofágica", slug: "dilatacion-esofagica-merida",       priceFrom: PRICING.dilatacion_esofagica?.from },
  { name: "Esclerosis de Várices Gástricas", slug: "esclerosis-varices-gastricas-merida", priceFrom: PRICING.esclerosis_varices_gastricas?.from },
  { name: "Dilatación Biliar", slug: "dilatacion-biliar-merida",             priceFrom: PRICING.dilatacion_biliar?.from },
  { name: "Dilatación Colónica", slug: "dilatacion-colonica-merida",         priceFrom: PRICING.dilatacion_colonica?.from },
  { name: "Endoprótesis Esofágicas", slug: "endoprotesis-esofagicas-merida", priceFrom: PRICING.endoprotesis_esofagicas?.from },
  { name: "Endoprótesis Biliares", slug: "endoprotesis-biliares-merida",     priceFrom: PRICING.endoprotesis_biliares?.from },
  { name: "Endoprótesis Duodenales", slug: "endoprotesis-duodenales-merida", priceFrom: PRICING.endoprotesis_duodenales?.from },
  { name: "Endoprótesis Colónicas", slug: "endoprotesis-colonicas-merida",   priceFrom: PRICING.endoprotesis_colonicas?.from },
  { name: "Cierre de Fístulas por Clips Endoscópicos", slug: "cierre-fistulas-clips-endoscopicos-merida", priceFrom: PRICING.cierre_fistulas_clips?.from },
  { name: "Sutura Endoscópica", slug: "sutura-endoscopica-merida",           priceFrom: PRICING.sutura_endoscopica?.from },
  { name: "Disección Endoscópica Submucosa (ESD)", slug: "diseccion-endoscopica-submucosa-esd-merida", priceFrom: PRICING.esd?.from },
  { name: "Resección Endoscópica Mucosa (EMR)", slug: "reseccion-endoscopica-mucosa-emr-merida",       priceFrom: PRICING.emr?.from },
  { name: "Retiro de Balón Gástrico", slug: "retiro-balon-gastrico-merida",  priceFrom: PRICING.retiro_balon_gastrico?.from },
  { name: "Coagulación con Plasma de Argón (APC)", slug: "apc-coagulacion-plasma-argon-merida", priceFrom: PRICING.apc?.from },
]
// /lib/services.ts (append this)
export function toSchemaServices(base: string) {
  return SERVICES.map(s => ({
    name: /en Mérida/i.test(s.name) ? s.name : `${s.name} en Mérida`,
    url: `${base}/${s.slug}`,
    priceFrom: s.priceFrom !== undefined ? String(s.priceFrom) : undefined,
  }))
}
