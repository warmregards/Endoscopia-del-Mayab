import type { Metadata } from "next"
import { buildServiceMeta } from "@/lib/seo"
import type { ServiceKey } from "@/lib/pricing"

/** Route config */
type RouteCfg = {
  service: string
  path: string
  titleSuffix: string
  descriptionExtra: string
  /** Pricing key to enable price in SEO (optional). If omitted, no price is appended. */
  key?: ServiceKey
}

/** Routes constrained to GBP rule: Title & Description must include "<Servicio> en Mérida" */
export const ROUTES_SEO: Record<string, RouteCfg> = {
  home: {
    service: "Endoscopia",
    path: "/",
    titleSuffix: "Diagnóstico Seguro con Sedación | Dr. Omar Quiroz",
    descriptionExtra: "Atención especializada para enfermedades del aparato digestivo.",
    key: "endoscopia",
  },
  colonoscopia: {
    service: "Colonoscopia",
    path: "/colonoscopia-merida",
    titleSuffix: "Prevención de Cáncer Colorrectal | Dr. Omar Quiroz",
    descriptionExtra: "Detección y tratamiento de pólipos con sedación segura.",
    key: "colonoscopia",
  },
  endoscopia: {
    service: "Endoscopia",
    path: "/endoscopia-merida",
    titleSuffix: "Estudio Digestivo con Sedación Consciente",
    descriptionExtra: "Diagnóstico de gastritis, úlceras y reflujo de forma ambulatoria.",
    key: "endoscopia",
  },
  cpre: {
    service: "CPRE",
    path: "/cpre-merida",
    titleSuffix: "Tratamiento de Vías Biliares y Páncreas",
    descriptionExtra: "Manejo de cálculos, obstrucciones y estenosis.",
    key: "cpre",
  },
  panendoscopia: {
    service: "Panendoscopia",
    path: "/panendoscopia-merida",
    titleSuffix: "Evaluación Completa del Tracto Digestivo",
    descriptionExtra: "Diagnóstico integral del tracto digestivo superior e inferior.",
    key: "panendoscopia",
  },
  ligadura: {
    service: "Ligadura de Várices Esofagicas",
    path: "/ligadura-varices-esofagicas-merida",
    titleSuffix: "Control de Hemorragias Digestivas",
    descriptionExtra: "Prevención y control endoscópico de sangrado por várices.",
    key: "ligadura_varices",
  },
  peg: {
    service: "Gastrostomía",
    path: "/gastrostomia-endoscopica-peg-merida",
    titleSuffix: "Alimentación Segura por PEG",
    descriptionExtra: "Nutrición enteral mediante colocación endoscópica.",
    key: "gastrostomia_peg",
  },
  extraccion: {
    service: "Extracción de Cuerpos Extraños",
    path: "/extraccion-cuerpos-extranos-endoscopia-merida",
    titleSuffix: "Atención Inmediata",
    descriptionExtra: "Extracción endoscópica segura con respuesta rápida.",
    key: "extraccion_cuerpos_extranos",
  },
  dilatacion: {
    service: "Dilatación Esofágica",
    path: "/dilatacion-esofagica-merida",
    titleSuffix: "Tratamiento de Estenosis y Disfagia",
    descriptionExtra: "Mejora del paso de alimentos con técnica endoscópica.",
    key: "dilatacion_esofagica",
  },
  emergencias: {
    service: "Endoscopia",
    path: "/emergencias-digestivas-merida",
    titleSuffix: "Atención Endoscópica Inmediata",
    descriptionExtra: "Manejo rápido de hemorragias y obstrucciones digestivas.",
    key: "endoscopia",
  },
  consultas: {
    service: "Endoscopia",
    path: "/consultas-digestivas-merida",
    titleSuffix: "Valoración Especializada",
    descriptionExtra: "Evaluación pre y post procedimiento por especialista certificado.",
    key: "endoscopia",
  },
  doctor: {
    service: "Endoscopia",
    path: "/dr-omar-quiroz",
    titleSuffix: "Especialista en Procedimientos Digestivos",
    descriptionExtra: "Atención integral y certificada en enfermedades digestivas.",
    // no key → no price in SEO
  },
  contacto: {
    service: "Endoscopia",
    path: "/contacto",
    titleSuffix: "Agenda tu Cita",
    descriptionExtra: "Programación de endoscopia o colonoscopia con respuesta rápida.",
    // no key → no price in SEO
  },
  esclerosis_varices_gastricas: {
    service: "Esclerosis de Várices Gástricas",
    path: "/esclerosis-varices-gastricas-merida",
    titleSuffix: "Tratamiento Endoscópico",
    descriptionExtra: "Control de hemorragias mediante inyección o técnicas térmicas.",
    key: "esclerosis_varices_gastricas",
  },
  dilatacion_biliar: {
    service: "Dilatación Biliar",
    path: "/dilatacion-biliar-merida",
    titleSuffix: "Tratamiento Endoscópico de Estenosis",
    descriptionExtra: "Manejo de obstrucciones y estenosis de vías biliares.",
    key: "dilatacion_biliar",
  },
  dilatacion_colonica: {
    service: "Dilatación Colónica",
    path: "/dilatacion-colonica-merida",
    titleSuffix: "Manejo de Estenosis Intestinal",
    descriptionExtra: "Dilatación endoscópica para aliviar obstrucciones.",
    key: "dilatacion_colonica",
  },
  endoprotesis_esofagicas: {
    service: "Endoprótesis Esofágicas",
    path: "/endoprotesis-esofagicas-merida",
    titleSuffix: "Stents Terapéuticos",
    descriptionExtra: "Tratamiento de estenosis y fístulas con colocación de stents.",
    key: "endoprotesis_esofagicas", // quote-only → no price added
  },
  endoprotesis_biliares: {
    service: "Endoprótesis Biliares",
    path: "/endoprotesis-biliares-merida",
    titleSuffix: "Drenaje de Vías Obstruidas",
    descriptionExtra: "Restablecimiento del flujo biliar con stents endoscópicos.",
    key: "endoprotesis_biliares", // quote-only
  },
  endoprotesis_duodenales: {
    service: "Endoprótesis Duodenales",
    path: "/endoprotesis-duodenales-merida",
    titleSuffix: "Tratamiento de Obstrucciones",
    descriptionExtra: "Colocación de stents para obstrucciones duodenales.",
    key: "endoprotesis_duodenales", // quote-only
  },
  endoprotesis_colonicas: {
    service: "Endoprótesis Colónicas",
    path: "/endoprotesis-colonicas-merida",
    titleSuffix: "Manejo de Obstrucciones",
    descriptionExtra: "Stents colónicos para obstrucciones intestinales.",
    key: "endoprotesis_colonicas", // quote-only
  },
  cierre_fistulas_clips: {
    service: "Cierre de Fístulas por Clips Endoscópicos",
    path: "/cierre-fistulas-clips-endoscopicos-merida",
    titleSuffix: "Tratamiento Avanzado",
    descriptionExtra: "Cierre mínimamente invasivo de fístulas digestivas.",
    key: "cierre_fistulas_clips", // quote-only
  },
  sutura_endoscopica: {
    service: "Sutura Endoscópica",
    path: "/sutura-endoscopica-merida",
    titleSuffix: "Reparación Segura de Perforaciones",
    descriptionExtra: "Corrección endoscópica de defectos mucosos y perforaciones.",
    key: "sutura_endoscopica", // quote-only
  },
  esd: {
    service: "Disección Endoscópica Submucosa (ESD)",
    path: "/diseccion-endoscopica-submucosa-esd-merida",
    titleSuffix: "Resección Especializada",
    descriptionExtra: "Resección en bloque de lesiones digestivas complejas.",
    key: "esd", // quote-only
  },
  emr: {
    service: "Resección Endoscópica Mucosa (EMR)",
    path: "/reseccion-endoscopica-mucosa-emr-merida",
    titleSuffix: "Tratamiento de Pólipos",
    descriptionExtra: "Resección de lesiones superficiales del tracto digestivo.",
    key: "emr", // quote-only
  },
  retiro_balon_gastrico: {
    service: "Retiro de Balón Gástrico",
    path: "/retiro-balon-gastrico-merida",
    titleSuffix: "Procedimiento Seguro",
    descriptionExtra: "Extracción endoscópica con sedación consciente.",
    key: "retiro_balon_gastrico",
  },
  apc: {
    service: "Coagulación con Plasma de Argón (APC)",
    path: "/apc-coagulacion-plasma-argon-merida",
    titleSuffix: "Hemostasia Efectiva",
    descriptionExtra: "Control de sangrado y tratamiento de lesiones con displasia.",
    key: "apc",
  },
} as const

export type RouteKey = keyof typeof ROUTES_SEO

export function metaFor(route: RouteKey): Metadata {
  const cfg = ROUTES_SEO[route]
  return buildServiceMeta({
    service: cfg.service,
    path: cfg.path,
    titleSuffix: cfg.titleSuffix,
    descriptionExtra: cfg.descriptionExtra,
    ...(cfg.key ? { key: cfg.key } as const : {}),
    // ogImage: "/images/omar-open-graph.jpg", // optional per-route override
  })
}
