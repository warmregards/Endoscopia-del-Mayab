// /lib/routes-seo.ts
// Per-route SEO configuration and metadata generation.
// Consumes: seo.ts builders, services.ts for data, pricing.ts for keys.
//
// Architecture:
//   - Procedure routes use `buildServiceMeta()` with the v2 title formula:
//     [Service] en Mérida | Desde $X MXN | Endoscopia del Mayab
//   - Homepage, pricing, doctor, contact use their dedicated builders
//   - `descriptionOverride` is used ONLY when the auto-generated description
//     genuinely doesn't work for a specific page. Most routes rely on the
//     standard description template (price + trust signals + CTA).
//
// Title philosophy:
//   The v2 spec defines a consistent title formula. Per-route "suffix" patterns
//   were removed because:
//   1. They produced inconsistent SERP appearances across 27 pages
//   2. They competed with the price signal that drives Persona 2 CTR
//   3. Google often rewrites overstuffed titles anyway
//   If a page genuinely needs a custom title, use `titleOverride`.

import type { Metadata } from "next"
import {
  buildServiceMeta,
  buildHomeMeta,
  buildPricingMeta,
  buildDoctorMeta,
  buildContactMeta,
} from "@/lib/seo"
import type { ServiceKey } from "@/lib/pricing"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ServiceRouteCfg {
  type: "service"
  /** Procedure display name, e.g. "Colonoscopia" */
  service: string
  /** Site-relative path, e.g. "/colonoscopia-merida" */
  path: string
  /** Pricing key — optional for non-priced pages */
  key?: ServiceKey
  /** Override the auto-generated description if it doesn't fit */
  descriptionOverride?: string
  /** Extra sentence inserted into the auto-generated description before CTA */
  descriptionExtra?: string
  /** Full title override — bypasses the v2 formula entirely. Use sparingly. */
  titleOverride?: string
}

interface SpecialRouteCfg {
  type: "home" | "pricing" | "doctor" | "contact"
}

type RouteCfg = ServiceRouteCfg | SpecialRouteCfg

// ---------------------------------------------------------------------------
// Route Registry
// ---------------------------------------------------------------------------

export const ROUTES_SEO: Record<string, RouteCfg> = {
  // ── Special pages (use dedicated builders) ──────────────────────────────
  home: { type: "home" },
  precios: { type: "pricing" },
  doctor: { type: "doctor" },
  contacto: { type: "contact" },

  // ── Core Procedure Pages ────────────────────────────────────────────────
  endoscopia: {
    type: "service",
    service: "Endoscopia",
    path: "/endoscopia-merida",
    key: "endoscopia",
    descriptionExtra:
      "Diagnóstico con sedación segura y resultados el mismo día en Hospital Amerimed.",
  },
  colonoscopia: {
    type: "service",
    service: "Colonoscopia",
    path: "/colonoscopia-merida",
    key: "colonoscopia",
    descriptionExtra:
      "Prevención de cáncer colorrectal con detección y resección de pólipos.",
  },
  panendoscopia: {
    type: "service",
    service: "Panendoscopia",
    path: "/panendoscopia-merida",
    key: "panendoscopia",
    descriptionExtra:
      "Evaluación completa del tracto digestivo superior en una sola visita.",
  },
  cpre: {
    type: "service",
    service: "CPRE",
    path: "/cpre-merida",
    key: "cpre",
    titleOverride: "CPRE en Mérida | Cálculos Biliares Sin Cirugía | Desde $15,000 MXN",
    descriptionOverride:
      "CPRE (colangiopancreatografía retrógrada endoscópica) en Mérida desde $15,000 MXN. Resuelve cálculos biliares, estenosis y obstrucciones en una sola sesión con sedación. Hospital Amerimed. Agenda por WhatsApp con el Dr. Quiroz.",
  },

  // ── Therapeutic Procedures ──────────────────────────────────────────────
  ligadura_varices: {
    type: "service",
    service: "Ligadura de Várices Esofágicas",
    path: "/ligadura-varices-esofagicas-merida",
    key: "ligadura_varices",
    descriptionExtra:
      "Prevención y control de sangrado por várices esofágicas.",
  },
  esclerosis_varices_gastricas: {
    type: "service",
    service: "Esclerosis de Várices Gástricas",
    path: "/esclerosis-varices-gastricas-merida",
    key: "esclerosis_varices_gastricas",
    descriptionExtra:
      "Control de sangrado por várices gástricas con inyección de cianoacrilato. Procedimiento de urgencia disponible.",
  },
  ligadura_hemorroides: {
    type: "service",
    service: "Ligadura de Hemorroides Internas",
    path: "/ligadura-hemorroides-internas-merida",
    key: "ligadura_hemorroides",
    descriptionExtra:
      "Tratamiento ambulatorio con banda elástica. Mínimo dolor, rápida recuperación.",
  },
  gastrostomia: {
    type: "service",
    service: "Gastrostomía Endoscópica (PEG)",
    path: "/gastrostomia-endoscopica-peg-merida",
    key: "gastrostomia_peg",
    descriptionExtra:
      "Colocación de sonda PEG para soporte nutricional en hospital con sedación.",
  },
  extraccion: {
    type: "service",
    service: "Extracción de Cuerpos Extraños",
    path: "/extraccion-cuerpos-extranos-endoscopia-merida",
    key: "extraccion_cuerpos_extranos",
    descriptionExtra:
      "Atención de emergencia para objetos atorados en esófago o garganta. Disponible fines de semana en Hospital Amerimed.",
  },
  dilatacion_esofagica: {
    type: "service",
    service: "Dilatación Esofágica",
    path: "/dilatacion-esofagica-merida",
    key: "dilatacion_esofagica",
    descriptionExtra:
      "Tratamiento de estenosis esofágica para mejorar el paso de alimentos.",
  },
  dilatacion_biliar: {
    type: "service",
    service: "Dilatación Biliar",
    path: "/dilatacion-biliar-merida",
    key: "dilatacion_biliar",
    descriptionExtra:
      "Tratamiento endoscópico de estenosis de la vía biliar con equipo especializado.",
  },
  dilatacion_colonica: {
    type: "service",
    service: "Dilatación Colónica",
    path: "/dilatacion-colonica-merida",
    key: "dilatacion_colonica",
    descriptionExtra:
      "Tratamiento de estenosis del colon sin cirugía. Alternativa mínimamente invasiva.",
  },
  retiro_balon: {
    type: "service",
    service: "Retiro de Balón Gástrico",
    path: "/retiro-balon-gastrico-merida",
    key: "retiro_balon_gastrico",
    descriptionExtra:
      "Extracción endoscópica de balón gástrico con sedación consciente.",
  },
  apc: {
    type: "service",
    service: "Coagulación con Plasma de Argón (APC)",
    path: "/apc-coagulacion-plasma-argon-merida",
    key: "apc",
    descriptionExtra:
      "Control de sangrado y tratamiento de lesiones con displasia.",
  },

  // ── Advanced / Quote-Only ───────────────────────────────────────────────
  endoprotesis_esofagicas: {
    type: "service",
    service: "Endoprótesis Esofágicas",
    path: "/endoprotesis-esofagicas-merida",
    key: "endoprotesis_esofagicas",
    descriptionExtra:
      "Stents esofágicos para disfagia por tumores o estenosis. Mejora la capacidad de tragar.",
  },
  endoprotesis_biliares: {
    type: "service",
    service: "Endoprótesis Biliares",
    path: "/endoprotesis-biliares-merida",
    key: "endoprotesis_biliares",
    descriptionExtra:
      "Stents biliares para restablecer el flujo. Evaluación personalizada.",
  },
  endoprotesis_duodenales: {
    type: "service",
    service: "Endoprótesis Duodenales",
    path: "/endoprotesis-duodenales-merida",
    key: "endoprotesis_duodenales",
    descriptionExtra:
      "Stents duodenales para obstrucción gástrica. Alternativa a cirugía de derivación.",
  },
  endoprotesis_colonicas: {
    type: "service",
    service: "Endoprótesis Colónicas",
    path: "/endoprotesis-colonicas-merida",
    key: "endoprotesis_colonicas",
    descriptionExtra:
      "Stents colónicos para descompresión y como puente a cirugía.",
  },
  cierre_fistulas: {
    type: "service",
    service: "Cierre de Fístulas por Clips Endoscópicos",
    path: "/cierre-fistulas-clips-endoscopicos-merida",
    key: "cierre_fistulas_clips",
    descriptionExtra:
      "Alternativa mínimamente invasiva a cirugía para cierre de fístulas.",
  },
  sutura_endoscopica: {
    type: "service",
    service: "Sutura Endoscópica",
    path: "/sutura-endoscopica-merida",
    key: "sutura_endoscopica",
    descriptionExtra:
      "Reparación de perforaciones y defectos mucosos. Procedimiento avanzado.",
  },
  esd: {
    type: "service",
    service: "Disección Endoscópica Submucosa (ESD)",
    path: "/diseccion-endoscopica-submucosa-esd-merida",
    key: "esd",
    descriptionExtra:
      "Resección en bloque de lesiones complejas preservando el órgano.",
  },
  emr: {
    type: "service",
    service: "Resección Endoscópica Mucosa (EMR)",
    path: "/reseccion-endoscopica-mucosa-emr-merida",
    key: "emr",
    descriptionExtra:
      "Resección de pólipos y lesiones superficiales. Menos invasivo que cirugía.",
  },

  // ── Info Pages ──────────────────────────────────────────────────────────
  emergencias: {
    type: "service",
    service: "Urgencias Digestivas",
    path: "/emergencias-digestivas-merida",
    titleOverride: "Emergencias Digestivas en Mérida | Atención 24/7 | Endoscopia del Mayab",
    descriptionOverride:
      "Atención endoscópica de emergencia en Mérida: sangrado digestivo, cálculos biliares, cuerpos extraños. Dr. Omar Quiroz disponible fines de semana. Hospital Amerimed. WhatsApp 999 236 0153.",
  },
  consultas: {
    type: "service",
    service: "Consultas Digestivas",
    path: "/consultas-digestivas-merida",
    titleOverride: "Consultas Digestivas en Mérida | Desde $900 MXN | Endoscopia del Mayab",
    descriptionOverride:
      "Consulta digestiva especializada con el Dr. Omar Quiroz en Mérida. Desde $900 MXN. Hospital Amerimed. Valoración pre-endoscópica, control post-procedimiento y chequeo preventivo. Agenda por WhatsApp.",
  },

} as const

// ---------------------------------------------------------------------------
// Metadata generator
// ---------------------------------------------------------------------------

export type RouteKey = keyof typeof ROUTES_SEO

/**
 * Generate Next.js Metadata for any registered route.
 *
 * @example
 *   // In a page.tsx:
 *   export const metadata = metaFor("colonoscopia")
 *
 *   // Or for the homepage:
 *   export const metadata = metaFor("home")
 */
export function metaFor(route: RouteKey): Metadata {
  const cfg = ROUTES_SEO[route]

  // Special pages use dedicated builders
  if (cfg.type === "home") return buildHomeMeta()
  if (cfg.type === "pricing") return buildPricingMeta()
  if (cfg.type === "doctor") return buildDoctorMeta()
  if (cfg.type === "contact") return buildContactMeta()

  // Service/procedure pages use the standard builder
  return buildServiceMeta({
    service: cfg.service,
    path: cfg.path,
    key: cfg.key,
    descriptionOverride: cfg.descriptionOverride,
    descriptionExtra: cfg.descriptionExtra,
    titleOverride: cfg.titleOverride,
  })
}