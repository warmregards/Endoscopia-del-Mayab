//routes-seo.ts
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
/** Routes constrained to GBP rule: Title & Description must include "<Servicio> en Mérida" */
export const ROUTES_SEO: Record<string, RouteCfg> = {
  // Core
  home: {
    service: "Endoscopia",
    path: "/",
    titleSuffix: "Diagnóstico Seguro en Hospital • Resultados el Mismo Día | Dr. Omar Quiroz",
    descriptionExtra: "Endoscopia y colonoscopia con sedación segura en hospital acreditado en Mérida. Atención por especialista con triple certificación. Precio transparente.",
    key: "endoscopia",
  },
  endoscopia: {
    service: "Endoscopia",
    path: "/endoscopia-merida",
    titleSuffix: "Sedación Segura • Hospital Amerimed • Resultados Hoy",
    descriptionExtra: "Endoscopia digestiva en Mérida con sedación segura y resultados el mismo día. Realizada por especialista certificado en hospital. Precio transparente y agenda rápida.",
    key: "endoscopia",
  },
  colonoscopia: {
    service: "Colonoscopia",
    path: "/colonoscopia-merida",
    titleSuffix: "Con Sedación • Prevención de Cáncer | Dr. Omar Quiroz",
    descriptionExtra: "Colonoscopia en Mérida con sedación segura. Detección y resección de pólipos, prevención de cáncer colorrectal. Guía de preparación y precio transparente.",
    key: "colonoscopia",
  },
  panendoscopia: {
    service: "Panendoscopia",
    path: "/panendoscopia-merida",
    titleSuffix: "Evaluación Completa • Un Solo Día",
    descriptionExtra: "Estudio integral del tracto digestivo con sedación en hospital. Ideal para evaluación completa en una sola visita. Precio transparente y agenda rápida.",
    key: "panendoscopia",
  },
  cpre: {
    service: "CPRE",
    path: "/cpre-merida",
    titleSuffix: "Especialista en Vías Biliares • Equipo Avanzado (SpyGlass)",
    descriptionExtra: "CPRE en Mérida para cálculos/obstrucciones biliares y pancreáticas. Uno de pocos especialistas. Sedación segura en hospital, equipo avanzado. Precio transparente.",
    key: "cpre",
  },

  // Terapéuticos / avanzados
  ligadura: {
    service: "Ligadura de Várices Esofágicas",
    path: "/ligadura-varices-esofagicas-merida",
    titleSuffix: "Control de Hemorragias • Endoscopia Terapéutica",
    descriptionExtra: "Prevención y control de sangrado por várices esofágicas con ligadura endoscópica. Procedimiento seguro en hospital por especialista.",
    key: "ligadura_varices",
  },
  ligadura_hemorroides: {
    service: "Ligadura de Hemorroides Internas",
    path: "/ligadura-hemorroides-internas-merida",
    titleSuffix: "Tratamiento Ambulatorio • Recuperación Rápida",
    descriptionExtra: "Ligadura de hemorroides internas con banda elástica. Procedimiento ambulatorio, mínimo dolor, rápida recuperación. Realizado por especialista.",
    key: "ligadura_hemorroides",
  },
  peg: {
    service: "Gastrostomía",
    path: "/gastrostomia-endoscopica-peg-merida",
    titleSuffix: "Alimentación Segura por PEG • En Hospital",
    descriptionExtra: "Colocación de gastrostomía endoscópica (PEG) para soporte nutricional. Procedimiento en hospital con sedación segura y seguimiento.",
    key: "gastrostomia_peg",
  },
  extraccion: {
    service: "Extracción de Cuerpos Extraños",
    path: "/extraccion-cuerpos-extranos-endoscopia-merida",
    titleSuffix: "Atención Inmediata • 24/7 Según Disponibilidad",
    descriptionExtra: "Extracción endoscópica de cuerpos extraños con respuesta rápida en hospital. Prioridad a urgencias. Consulta disponibilidad y precio.",
    key: "extraccion_cuerpos_extranos",
  },
  dilatacion: {
    service: "Dilatación Esofágica",
    path: "/dilatacion-esofagica-merida",
    titleSuffix: "Alivio de Disfagia • En Hospital",
    descriptionExtra: "Tratamiento endoscópico de estenosis esofágica para mejorar el paso de alimentos. Procedimiento seguro con sedación en hospital acreditado.",
    key: "dilatacion_esofagica",
  },
  esclerosis_varices_gastricas: {
    service: "Esclerosis de Várices Gástricas",
    path: "/esclerosis-varices-gastricas-merida",
    titleSuffix: "Control de Sangrado • Técnica Endoscópica",
    descriptionExtra: "Esclerosis de várices gástricas para control de hemorragias. Manejo por especialista en entorno hospitalario con sedación.",
    key: "esclerosis_varices_gastricas",
  },
  dilatacion_biliar: {
    service: "Dilatación Biliar",
    path: "/dilatacion-biliar-merida",
    titleSuffix: "Tratamiento de Estenosis • Bajo Sedación",
    descriptionExtra: "Dilatación endoscópica de estenosis de la vía biliar. Manejo de obstrucciones con equipo especializado en hospital.",
    key: "dilatacion_biliar",
  },
  dilatacion_colonica: {
    service: "Dilatación Colónica",
    path: "/dilatacion-colonica-merida",
    titleSuffix: "Alivio de Obstrucciones • Endoscopia Terapéutica",
    descriptionExtra: "Dilatación colónica para manejo de obstrucciones. Procedimiento mínimamente invasivo con sedación en hospital.",
    key: "dilatacion_colonica",
  },

  // Stents / quote-only (no price in schema, pero sí valor en snippet)
  endoprotesis_esofagicas: {
    service: "Endoprótesis Esofágicas",
    path: "/endoprotesis-esofagicas-merida",
    titleSuffix: "Stents para Estenosis/Fístulas • En Hospital",
    descriptionExtra: "Colocación de stents esofágicos para estenosis y fístulas. Valoración individual y manejo por especialista en hospital.",
    key: "endoprotesis_esofagicas",
  },
  endoprotesis_biliares: {
    service: "Endoprótesis Biliares",
    path: "/endoprotesis-biliares-merida",
    titleSuffix: "Drenaje de Vía Biliar • Manejo Especializado",
    descriptionExtra: "Colocación de stents biliares para restablecer el flujo. Evaluación personalizada, procedimiento en hospital.",
    key: "endoprotesis_biliares",
  },
  endoprotesis_duodenales: {
    service: "Endoprótesis Duodenales",
    path: "/endoprotesis-duodenales-merida",
    titleSuffix: "Tratamiento de Obstrucciones • Oncológico/Paliativo",
    descriptionExtra: "Stents duodenales para obstrucciones intestinales. Indicaciones oncológicas y paliativas, manejo por especialista.",
    key: "endoprotesis_duodenales",
  },
  endoprotesis_colonicas: {
    service: "Endoprótesis Colónicas",
    path: "/endoprotesis-colonicas-merida",
    titleSuffix: "Descompresión de Colon • Puente a Cirugía",
    descriptionExtra: "Colocación de stents colónicos para descompresión y como puente a cirugía. Procedimiento en hospital.",
    key: "endoprotesis_colonicas",
  },

  // Avanzados
  cierre_fistulas_clips: {
    service: "Cierre de Fístulas por Clips Endoscópicos",
    path: "/cierre-fistulas-clips-endoscopicos-merida",
    titleSuffix: "Tratamiento Avanzado • Minimiza Cirugía",
    descriptionExtra: "Cierre endoscópico de fístulas con clips especializados. Alternativa mínimamente invasiva a cirugía en muchos casos.",
    key: "cierre_fistulas_clips",
  },
  sutura_endoscopica: {
    service: "Sutura Endoscópica",
    path: "/sutura-endoscopica-merida",
    titleSuffix: "Reparación Mucosa • Perforaciones/Defectos",
    descriptionExtra: "Sutura endoscópica para reparación de perforaciones y defectos mucosos. Procedimiento avanzado en hospital.",
    key: "sutura_endoscopica",
  },
  esd: {
    service: "Disección Endoscópica Submucosa (ESD)",
    path: "/diseccion-endoscopica-submucosa-esd-merida",
    titleSuffix: "Resección en Bloque • Lesiones Complejas",
    descriptionExtra: "ESD para resección en bloque de lesiones gastrointestinales complejas, preservando órgano. Alto nivel de especialización.",
    key: "esd",
  },
  emr: {
    service: "Resección Endoscópica Mucosa (EMR)",
    path: "/reseccion-endoscopica-mucosa-emr-merida",
    titleSuffix: "Tratamiento de Pólipos • Menos Invasivo",
    descriptionExtra: "EMR para resección de pólipos y lesiones superficiales del tracto digestivo. Opción menos invasiva frente a cirugía.",
    key: "emr",
  },

  // Otros
  retiro_balon_gastrico: {
    service: "Retiro de Balón Gástrico",
    path: "/retiro-balon-gastrico-merida",
    titleSuffix: "Procedimiento Seguro • Sedación Consciente",
    descriptionExtra: "Extracción endoscópica de balón gástrico con sedación segura en hospital. Valoración pre y seguimiento.",
    key: "retiro_balon_gastrico",
  },
  apc: {
    service: "Coagulación con Plasma de Argón (APC)",
    path: "/apc-coagulacion-plasma-argon-merida",
    titleSuffix: "Control de Sangrado • Lesiones con Displasia",
    descriptionExtra: "APC para hemostasia y tratamiento de lesiones. Procedimiento seguro, rápido y efectivo en hospital con especialista.",
    key: "apc",
  },

  // Informativas
  emergencias: {
    service: "Endoscopia",
    path: "/emergencias-digestivas-merida",
    titleSuffix: "Atención Rápida • Sangrado/Obstrucciones",
    descriptionExtra: "Manejo endoscópico de urgencias digestivas: sangrado, cuerpos extraños, obstrucciones. Contáctanos para disponibilidad inmediata.",
    key: "endoscopia",
  },
  consultas: {
    service: "Endoscopia",
    path: "/consultas-digestivas-merida",
    titleSuffix: "Valoración por Especialista • Pre & Post Procedimiento",
    descriptionExtra: "Consulta digestiva con especialista certificado. Explicación de estudios, preparación y seguimiento.",
    key: "endoscopia",
  },
  doctor: {
    service: "Endoscopia",
    path: "/dr-omar-quiroz",
    titleSuffix: "Especialista en Endoscopia Avanzada • Triple Certificación",
    descriptionExtra: "Atención por el Dr. Omar Quiroz: endoscopia avanzada, colonoscopia y procedimientos terapéuticos. Experiencia, seguridad y trato humano.",
    // no key → sin precio en SEO
  },
  contacto: {
    service: "Endoscopia",
    path: "/contacto",
    titleSuffix: "Agenda tu Cita • Respuesta Rápida",
    descriptionExtra: "Programa endoscopia o colonoscopia. Te orientamos sobre costos, preparación y disponibilidad.",
    // no key → sin precio
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
