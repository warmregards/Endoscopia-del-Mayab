// /lib/team.ts
// Centralized procedure-team data. Consumed by: /equipo-medico, TeamPresence,
// schema.ts (MedicalClinic.employee + the site-wide @graph), homepage trust strip.
// Dr. Quiroz is NOT duplicated here — his card references DOCTOR.
//
// Rules (see CLAUDE.md + the doctor-credential-copy discipline):
//   - Never hardcode a name, role or cédula in JSX. Read it from here.
//   - Dr. Quiroz's credential wording is always DOCTOR.descriptor
//     ("Endoscopista Gastrointestinal y Cirujano General") — never
//     "gastroenterólogo", never "único".
//   - The female-presence promise is phrased generically (FEMALE_PRESENCE_LINE).
//     Estephania is named and pictured on cards and in her own section, but the
//     guarantee sentence never names her.
//   - Verification copy is framed as questions to ask at ANY clinic and as an
//     invitation to verify us first — never as a claim about other clinics.

import { DOCTOR } from "@/lib/doctor"
import type { ServiceKey } from "@/lib/pricing"

export type TeamRole = "endoscopista" | "anestesiologo" | "enfermera"

export interface TeamMember {
  /** Stable slug — also the anchor id on /equipo-medico and the schema @id fragment. */
  slug: TeamRole
  name: string
  /** As shown in UI (may carry a title prefix). */
  displayName: string
  /** UI role label. */
  role: string
  /** /public path — 800×1000 webp, same crop ratio across the team. */
  photo: string
  /** 2–3 sentences. */
  bio: string
  /** 1 line, for cards and compact rows. */
  bioShort: string
  /** 3 bullets: what this person does before / during / after the procedure. */
  duringProcedure: string[]
  /** UI chips — full labels, for the /equipo-medico sections. */
  credentials: string[]
  /**
   * Short credential chips for the compact team cards (<TeamPresence>), where
   * a card is ~1/3 of a section wide. Max two render. Deliberately terser than
   * `credentials`, which stays the full list /equipo-medico shows.
   */
  chips: string[]
  cedulas: Record<string, string>
  presentIn: ServiceKey[] | "all"
  schemaType: "Physician" | "Person"
  schemaJobTitle: string
  schemaCredentials: Array<{
    "@type": "EducationalOccupationalCredential"
    credentialCategory: string
    name: string
    identifier?: string
    recognizedBy?: { "@type": "Organization"; name: string }
  }>
  schemaMemberOf?: Array<{ "@type": "Organization"; name: string }>
}

// Cédula numbers that feed BOTH a member's `chips` and their `cedulas` — hoisted
// so each number is written exactly once in the codebase. (Dr. Quiroz's come
// from DOCTOR.cedulas.)
const CEDULAS = {
  anestesiologo: { especialidad: "14141958", consejo: "18542" },
  enfermera: { profesional: "13089376" },
} as const

export const TEAM: TeamMember[] = [
  {
    slug: "endoscopista",
    name: DOCTOR.name,
    displayName: DOCTOR.name,
    role: DOCTOR.descriptor,
    // Team-page portrait (same studio set as Manuel + Estephania). The circular
    // brand headshot used elsewhere lives at DOCTOR.photos.headshot.
    photo: DOCTOR.photos.team,
    bio: DOCTOR.bio,
    // Not DOCTOR.bioShort: that one opens with "Endoscopista certificado",
    // which duplicates the role label rendered directly above it on the cards.
    bioShort:
      "15+ años de experiencia. Egresado de la UNAM, certificado por el CMCG.",
    duringProcedure: [
      "Realiza tu valoración pre-endoscópica y responde tus dudas por WhatsApp directamente.",
      "Ejecuta el procedimiento con equipo Olympus HD y toma las biopsias necesarias.",
      "Te explica los hallazgos el mismo día y da seguimiento a tus resultados.",
    ],
    credentials: [...DOCTOR.credentials],
    chips: [
      `Cédula Esp. ${DOCTOR.cedulas.endoscopia}`,
      `CMCG ${DOCTOR.cedulas.consejoCirugiaGeneral}`,
    ],
    cedulas: { ...DOCTOR.cedulas },
    presentIn: "all",
    schemaType: "Physician",
    schemaJobTitle: DOCTOR.descriptor,
    schemaCredentials: [...DOCTOR.schemaCredentials],
    schemaMemberOf: [...DOCTOR.schemaMemberOf],
  },
  {
    slug: "anestesiologo",
    name: "Dr. Manuel Burgos",
    displayName: "Dr. Manuel Burgos",
    role: "Anestesiólogo certificado",
    photo: "/equipo/manuel-burgos.webp",
    bio: "Médico especialista en anestesiología, certificado por el Consejo Mexicano de Anestesiología. Administra y monitorea la sedación en cada endoscopia, colonoscopia y procedimiento terapéutico del equipo, dentro de quirófano en Hospital Amerimed.",
    bioShort:
      "Administra y monitorea tu sedación durante todo el procedimiento.",
    duringProcedure: [
      "Revisa tu historial y ajusta el tipo y la dosis de sedación a tu caso antes de iniciar.",
      "Monitorea tus signos vitales de forma continua durante todo el estudio.",
      "Te acompaña al despertar en la sala de recuperación hasta que estés listo para irte.",
    ],
    credentials: [
      "Especialidad en Anestesiología",
      `Cédula Esp. ${CEDULAS.anestesiologo.especialidad}`,
      `Consejo Mexicano de Anestesiología: ${CEDULAS.anestesiologo.consejo}`,
      // TODO(sanel): add "Cédula Prof. XXXXXXX" (médico general) once supplied.
    ],
    chips: [
      `Cédula Esp. ${CEDULAS.anestesiologo.especialidad}`,
      `Consejo Anestesiología ${CEDULAS.anestesiologo.consejo}`,
    ],
    // TODO(sanel): medicoGeneral — cédula profesional de médico cirujano,
    // pending. Adds a row to the /equipo-medico#verifica table when supplied.
    cedulas: { ...CEDULAS.anestesiologo },
    presentIn: "all",
    schemaType: "Physician",
    schemaJobTitle: "Anestesiólogo",
    schemaCredentials: [
      // TODO(sanel): add the Medical Degree credential (cédula de médico
      // general) here once supplied — mirrors DOCTOR.schemaCredentials[0].
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Medical Specialty",
        name: "Anestesiología",
        identifier: `Cédula ${CEDULAS.anestesiologo.especialidad}`,
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Board Certification",
        name: "Consejo Mexicano de Anestesiología",
        identifier: CEDULAS.anestesiologo.consejo,
      },
    ],
    schemaMemberOf: [
      { "@type": "Organization", name: "Consejo Mexicano de Anestesiología" },
    ],
  },
  {
    slug: "enfermera",
    name: "Estephania Bass",
    displayName: "Estephania Bass",
    role: "Enfermera titulada",
    photo: "/equipo/estephania-bass.webp",
    bio: "Enfermera titulada con cédula profesional. Está presente en cada endoscopia y colonoscopia del equipo, de principio a fin: te recibe, te prepara, te acompaña durante el estudio y cuida tu recuperación.",
    bioShort:
      "Presente en cada endoscopia y colonoscopia, de principio a fin.",
    duringProcedure: [
      "Te recibe, verifica tu preparación y coloca tu acceso venoso.",
      "Está a tu lado dentro de la sala durante todo el procedimiento.",
      "Cuida tu recuperación y te entrega las indicaciones antes de salir.",
    ],
    // TODO(sanel): confirm the degree title (Licenciatura vs. Técnica) before
    // upgrading this chip past the neutral "Enfermería".
    credentials: [
      `Enfermería · Cédula profesional ${CEDULAS.enfermera.profesional}`,
    ],
    chips: [`Cédula profesional ${CEDULAS.enfermera.profesional}`],
    cedulas: { ...CEDULAS.enfermera },
    presentIn: ["endoscopia", "colonoscopia", "panendoscopia"],
    schemaType: "Person",
    schemaJobTitle: "Enfermera",
    schemaCredentials: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional License",
        name: "Enfermería",
        identifier: `Cédula ${CEDULAS.enfermera.profesional}`,
      },
    ],
  },
]

export const getMember = (slug: TeamRole) => TEAM.find((m) => m.slug === slug)!

/** The guarantee sentence. Generic by design — never names the nurse. */
export const FEMALE_PRESENCE_LINE =
  "En cada endoscopia y colonoscopia siempre hay una enfermera de nuestro equipo presente, de principio a fin."

/** Questions the patient should ask at any clinic. Used on /equipo-medico#verifica. */
export const VERIFY_QUESTIONS = [
  {
    q: "¿Quién administra la sedación y cuál es su cédula de especialidad?",
    why: "La sedación la debe administrar y monitorear un médico anestesiólogo, no el mismo endoscopista ni personal sin especialidad.",
  },
  {
    q: "¿Hay personal de enfermería titulado en la sala?",
    why: "Una enfermera con cédula profesional es parte del equipo mínimo para un procedimiento con sedación.",
  },
  {
    q: "¿El procedimiento se realiza en hospital o en consultorio?",
    why: "En hospital hay quirófano, sala de recuperación y respaldo inmediato ante cualquier eventualidad.",
  },
  {
    q: "¿Puedo ver los certificados del Consejo y las cédulas?",
    why: "Un médico certificado no tiene problema en mostrarlos. Todas las cédulas se pueden verificar en el Registro Nacional de Profesionistas.",
  },
  {
    q: "¿Quién me atiende si tengo una duda después del procedimiento?",
    why: "Debe ser el médico que realizó el estudio, no una recepción.",
  },
] as const

export const VERIFY_LINKS = {
  sep: {
    label: "Registro Nacional de Profesionistas (SEP)",
    url: "https://www.cedulaprofesional.sep.gob.mx/",
  },
  conacem: {
    label: "CONACEM — Consejos de especialidad",
    url: "https://www.conacem.org.mx/",
  },
} as const

/**
 * Rows for the /equipo-medico#verifica table — one per publicly verifiable
 * credential number, in team order. `registry` picks which public registry the
 * row links to: SEP for cédulas, CONACEM for board certifications.
 */
export const VERIFY_ROWS: Array<{
  person: string
  credential: string
  number: string
  registry: keyof typeof VERIFY_LINKS
}> = [
  {
    person: DOCTOR.name,
    credential: "Cédula profesional — Médico Cirujano",
    number: DOCTOR.cedulas.medicoGeneral,
    registry: "sep",
  },
  {
    person: DOCTOR.name,
    credential: "Cédula de especialidad — Cirugía General",
    number: DOCTOR.cedulas.especialidad,
    registry: "sep",
  },
  {
    person: DOCTOR.name,
    credential: "Cédula de alta especialidad — Endoscopia Gastrointestinal",
    number: DOCTOR.cedulas.endoscopia,
    registry: "sep",
  },
  {
    person: DOCTOR.name,
    credential: "Consejo Mexicano de Cirugía General (CMCG)",
    number: DOCTOR.cedulas.consejoCirugiaGeneral,
    registry: "conacem",
  },
  // TODO(sanel): insert Dr. Manuel Burgos' cédula profesional (médico general)
  // row here — registry "sep" — once the number is supplied.
  {
    person: getMember("anestesiologo").displayName,
    credential: "Cédula de especialidad — Anestesiología",
    number: getMember("anestesiologo").cedulas.especialidad,
    registry: "sep",
  },
  {
    person: getMember("anestesiologo").displayName,
    credential: "Consejo Mexicano de Anestesiología",
    number: getMember("anestesiologo").cedulas.consejo,
    registry: "conacem",
  },
  {
    person: getMember("enfermera").displayName,
    credential: "Cédula profesional — Enfermería",
    number: getMember("enfermera").cedulas.profesional,
    registry: "sep",
  },
]
