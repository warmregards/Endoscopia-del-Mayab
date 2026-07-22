// /lib/doctor.ts
// Centralized doctor data for Dr. Omar Quiroz.
// Consumed by: doctor profile page, schema JSON-LD generator, procedure page
// trust snippets, footer, and any component showing doctor credentials.
//
// Schema alignment: Project_Context_and_Decisions_v2.md specifies:
//   Physician → worksFor → MedicalClinic
//   Physician → knowsAbout → [Wikipedia entities for E-E-A-T]
//   Physician → sameAs → [Doctoralia, directory profiles]

export const DOCTOR = {
  // ── Identity ────────────────────────────────────────────────────────────
  name: "Dr. Omar Quiroz",
  title: "Endoscopista Certificado",
  yearsExperience: 15,
  /** Schema.org closest value — no "Endoscopy" enum exists. See audit 2026-02-16. */
  medicalSpecialty: "Gastroenterology",
  /** UI-facing label (Spanish) */
  medicalSpecialtyDisplay: "Endoscopia Gastrointestinal",
  /**
   * Patient-facing role line used on landing pages / trust strips.
   * The two-hat framing (endoscopist + surgeon) that patients care about —
   * distinct from medicalSpecialtyDisplay (single Spanish specialty label) and
   * from title (short credential). Never hardcode this string in a page.
   */
  descriptor: "Endoscopista Gastrointestinal y Cirujano General",
  profileUrl: "/dr-omar-quiroz",

  // ── Photos ──────────────────────────────────────────────────────────────
  photos: {
    /** Primary headshot for profile page and schema `image` */
    headshot: "/dr-omar-quiroz.webp",
    /** OG/Twitter card image (1200×630) — falls back to headshot if not set */
    og: "/omar-open-graph.jpg",
  },

  // ── Workplace reference ─────────────────────────────────────────────────
  // Used by schema generator to build Physician → worksFor → MedicalClinic link.
  // Full clinic data lives in /lib/clinic.ts — this is the minimal reference.
  worksFor: {
    name: "Endoscopia del Mayab",
    url: "https://www.endoscopiadelmayab.com",
    hospital: "Hospital Amerimed Mérida",
    consultorio: "517",
  },

  // ── Hospital Affiliations ──────────────────────────────────────────────
  // Primary = Amerimed (NAP-consistent, GBP pin location).
  // Secondary = hospitals where Dr. Quiroz also operates for private patients.
  hospitals: [
    {
      name: "Hospital Amerimed Mérida",
      type: "primary" as const,
      description:
        "Consultorio principal — endoscopias, colonoscopias y procedimientos diagnósticos.",
      consultorio: "517",
    },
    {
      name: "Star Médica Mérida",
      type: "secondary" as const,
      description:
        "Procedimientos quirúrgicos y endoscópicos para pacientes privados.",
    },
    {
      name: "Faro del Mayab",
      type: "secondary" as const,
      description:
        "Procedimientos endoscópicos mínimamente invasivos.",
    },
  ],

  // ── UI Content ──────────────────────────────────────────────────────────
  bio: "Médico egresado de la UNAM con más de 15 años de experiencia y alta especialidad en endoscopia gastrointestinal por la UNAM (Cédula EGI230072). Certificado por el Consejo Mexicano de Cirugía General (CMCG) y por el Consejo Mexicano de Cirugía Bariátrica. Cuando escribes, te contesta directamente el doctor — no una recepcionista.",

  /** Short trust snippet for procedure pages (1-2 lines max) */
  bioShort:
    "Endoscopista certificado con 15+ años de experiencia. Egresado de la UNAM, certificado por el CMCG.",

  credentials: [
    "UNAM · Cirugía General",
    "Cédula Esp. EGI230072",
    "Consejo CMCG: C18044318",
    "AMCE · COFEPRIS",
    "Equipo Olympus HD",
    "15+ años experiencia",
  ],

  /**
   * Source of truth — all licensing/certification IDs (provided directly by Dr. Quiroz).
   * - medicoGeneral:        Cédula de medicina (médico cirujano, SEP)
   * - especialidad:         Cédula de especialidad — Cirugía General (SEP)
   * - endoscopia:           Cédula Alta Especialidad — Endoscopia Gastrointestinal (SEP/UNAM)
   * - consejoCirugiaGeneral: Certificación CMCG (Consejo Mexicano de Cirugía General)
   * - consejoBariatrica:    Certificación Consejo Mexicano de Cirugía Bariátrica
   * - cofepris:             Licencia sanitaria COFEPRIS
   */
  cedulas: {
    medicoGeneral: "8126111",
    especialidad: "11629429",
    endoscopia: "EGI230072",
    consejoCirugiaGeneral: "C18044318",
    consejoBariatrica: "CB200056",
    cofepris: "2431012002A00355",
  },

  memberships: ["CMCG", "AMCE"],

  // ── Schema: Description ─────────────────────────────────────────────────
  schemaDescription:
    "Endoscopista certificado en Mérida con más de 15 años de experiencia. Egresado de la UNAM, certificado por el Consejo Mexicano de Cirugía General (CMCG) y por el Consejo Mexicano de Cirugía Bariátrica. Alta especialidad en Endoscopia Gastrointestinal por la UNAM (Cédula EGI230072).",

  // ── Schema: Credentials ─────────────────────────────────────────────────
  schemaCredentials: [
    {
      "@type": "EducationalOccupationalCredential" as const,
      credentialCategory: "Medical Degree",
      name: "Médico Cirujano",
      identifier: "Cédula Profesional 8126111",
      recognizedBy: { "@type": "Organization" as const, name: "UNAM" },
    },
    {
      "@type": "EducationalOccupationalCredential" as const,
      credentialCategory: "Medical Specialty",
      name: "Cirugía General",
      identifier: "Cédula 11629429",
      recognizedBy: { "@type": "Organization" as const, name: "UNAM" },
    },
    {
      "@type": "EducationalOccupationalCredential" as const,
      credentialCategory: "Subspecialty",
      name: "Alta Especialidad en Endoscopia Gastrointestinal",
      identifier: "Cédula EGI230072",
      recognizedBy: { "@type": "Organization" as const, name: "UNAM" },
    },
    {
      "@type": "EducationalOccupationalCredential" as const,
      credentialCategory: "Board Certification",
      name: "Consejo Mexicano de Cirugía General (CMCG)",
      identifier: "C18044318",
    },
    {
      "@type": "EducationalOccupationalCredential" as const,
      credentialCategory: "Board Certification",
      name: "Consejo Mexicano de Cirugía Bariátrica",
      identifier: "CB200056",
    },
    {
      "@type": "EducationalOccupationalCredential" as const,
      credentialCategory: "Regulatory License",
      name: "COFEPRIS — Licencia sanitaria vigente",
      identifier: "2431012002A00355",
      recognizedBy: {
        "@type": "Organization" as const,
        name: "Comisión Federal para la Protección contra Riesgos Sanitarios (COFEPRIS)",
      },
    },
  ],

  // ── Schema: Memberships ─────────────────────────────────────────────────
  schemaMemberOf: [
    {
      "@type": "Organization" as const,
      name: "Consejo Mexicano de Cirugía General (CMCG)",
    },
    {
      "@type": "Organization" as const,
      name: "Asociación Mexicana de Cirugía Endoscópica (AMCE)",
    },
  ],

  // ── Schema: knowsAbout (E-E-A-T signal) ────────────────────────────────
  // Wikipedia entity links per Project_Context_v2.md.
  // Used in Physician schema to demonstrate topical expertise.
  schemaKnowsAbout: [
    "https://en.wikipedia.org/wiki/Endoscopy",
    "https://en.wikipedia.org/wiki/Colonoscopy",
    "https://en.wikipedia.org/wiki/Endoscopic_retrograde_cholangiopancreatography",
    "https://en.wikipedia.org/wiki/Gastroenterology",
    "https://en.wikipedia.org/wiki/Gastrointestinal_perforation",
  ],

  // ── Schema: sameAs (entity verification) ────────────────────────────────
  // External profiles that verify this is the same entity.
  // TODO: Add Doctoralia URL once confirmed (Open Item #5 in Project_Context_v2)
  schemaSameAs: [
    "https://www.doctoralia.com.mx/omar-quiroz/cirujano-bariatra-cirujano-general-endoscopista/yucatan",
    "https://www.youtube.com/@DrOmarQuiroz",
  ] as string[],
} as const

// ── Formación y experiencia hospitalaria ──────────────────────────────────
// Chronological trajectory ending in Mérida (where he practices now). Sourced
// from Dr. Quiroz's own account — do NOT inflate titles. He was `adscrito`
// (attending staff), not department head: never "Jefe"/"titular"/"principal".
// Consumed ONLY by <DoctorAuthority> (compact logo strip + timeline). Never
// hardcode any of this in the component — read from here.
//
//   logo          optional — component falls back to an org-initials monogram.
//   logoW/logoH   intrinsic pixel dims of the asset — required by next/image
//                 for a string `src` (keeps aspect ratio correct at any height).
//   category      "formacion" | "experiencia" — drives the timeline badge.
//   showInCompact appears in the procedure-page / LP compact logo strip.
//   order         sort key (floats allowed so entries can slot between others).
//
// Brand wall: bariatría (Hospital General de Tláhuac) lives on omar.doctor and
// must NEVER appear here. Laparoscopy (ABC / Jackson South) is the Cirujano
// General credential — kept timeline-only (showInCompact:false), out of the
// endoscopy-focused compact strip.
export const DOCTOR_TRAINING = [
  {
    id: "unam",
    org: "UNAM",
    logo: "/logos/unam.png",
    logoW: 320,
    logoH: 320,
    role: "Médico Cirujano",
    detail: "Formación médica en la Universidad Nacional Autónoma de México.",
    location: "Ciudad de México",
    category: "formacion" as const,
    order: 1,
    showInCompact: true,
  },
  {
    id: "pemex-sur",
    org: "Hospital Central Sur de Alta Especialidad de Pemex",
    logo: "/logos/pemex.png",
    logoW: 2090,
    logoH: 575,
    role: "Especialidad en Cirugía General y Gastrointestinal",
    detail:
      "Especialidad en cirugía general con enfoque gastrointestinal (aval UNAM · cédula EGI/CMCG).",
    location: "Ciudad de México",
    category: "formacion" as const,
    order: 2,
    showInCompact: false, // PEMEX shown once in the compact strip — see pemex-norte
  },
  {
    id: "pemex-norte",
    org: "Hospital Central Norte de Pemex",
    logo: "/logos/pemex.png",
    logoW: 2090,
    logoH: 575,
    role: "Alta Especialidad en Endoscopia Gastrointestinal",
    detail:
      "Alta especialidad en endoscopia gastrointestinal; posteriormente médico adscrito de cirugía general y endoscopia.",
    location: "Ciudad de México",
    category: "formacion" as const,
    order: 3,
    showInCompact: true, // the headline endoscopy credential
  },
  {
    id: "cmn-20-noviembre",
    org: "CMN 20 de Noviembre (ISSSTE)",
    logo: "/logos/20-noviembre.png",
    logoW: 447,
    logoH: 447,
    role: "Médico adscrito — Cirugía General",
    detail:
      "Médico adscrito de cirugía general en el Centro Médico Nacional 20 de Noviembre.",
    location: "Ciudad de México",
    category: "experiencia" as const,
    order: 4,
    showInCompact: true,
  },
  {
    id: "hr-merida",
    org: "Hospital Regional Mérida (ISSSTE)",
    logo: "/logos/issste.svg",
    logoW: 2300,
    logoH: 720,
    role: "Médico adscrito — Endoscopia Gastrointestinal",
    detail: "Médico adscrito de endoscopia gastrointestinal en Mérida, Yucatán.",
    location: "Mérida, Yucatán",
    category: "experiencia" as const,
    order: 5,
    showInCompact: true,
  },

  // ── Laparoscopía (Cirujano General). Timeline-only; kept out of the compact
  //    strip so the strip stays endoscopy-focused. ──
  {
    id: "abc",
    org: "Centro Médico ABC",
    logo: "/logos/abc.png",
    logoW: 607,
    logoH: 506,
    role: "Alta Especialidad en Cirugía Laparoscópica",
    detail:
      "Alta especialidad en cirugía laparoscópica en uno de los hospitales privados de referencia del país.",
    location: "Ciudad de México",
    category: "formacion" as const,
    order: 3.5,
    showInCompact: false,
  },
  {
    id: "jackson-south",
    org: "Jackson South Medical Center", // formerly Jackson South Community Hospital
    logo: null, // no logo on hand → org-initials monogram fallback
    role: "Entrenamiento en Cirugía Laparoscópica",
    detail: "Entrenamiento en cirugía laparoscópica en Miami, Estados Unidos.",
    location: "Miami, EE. UU.",
    category: "formacion" as const,
    order: 3.6,
    showInCompact: false,
  },

  // ── EXCLUDED (bariatría → omar.doctor, brand wall) ──
  // Hospital General de Tláhuac — Alta Especialidad en Cirugía Bariátrica. Do NOT add here.
] as const

export const TRAINING_CATEGORY_LABEL: Record<string, string> = {
  formacion: "Formación",
  experiencia: "Experiencia hospitalaria", // was "Liderazgo" — adscrito ≠ leadership
}