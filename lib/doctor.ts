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
  /** Schema.org closest value — no "Endoscopy" enum exists. See audit 2026-02-16. */
  medicalSpecialty: "Gastroenterology",
  /** UI-facing label (Spanish) */
  medicalSpecialtyDisplay: "Endoscopia Gastrointestinal",
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
  bio: "Médico egresado de la UNAM con más de 15 años de experiencia y alta especialidad en endoscopia (Cédula EGI230072). Certificado por el Consejo Mexicano de Cirugía General. Cuando escribes, te contesta directamente el doctor — no una recepcionista.",

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

  cedulas: {
    medico: "11629429",
    especialidad: "EGI230072",
    consejo: "C18044318",
  },

  memberships: ["CMCG", "AMCE"],

  // ── Schema: Description ─────────────────────────────────────────────────
  schemaDescription:
    "Endoscopista certificado en Mérida con más de 15 años de experiencia. Egresado de la UNAM, certificado por el Consejo Mexicano de Cirugía General (CMCG). Alta especialidad en Endoscopia (Cédula EGI230072).",

  // ── Schema: Credentials ─────────────────────────────────────────────────
  schemaCredentials: [
    {
      "@type": "EducationalOccupationalCredential" as const,
      credentialCategory: "Medical Degree",
      name: "Médico Cirujano",
      recognizedBy: { "@type": "Organization" as const, name: "UNAM" },
    },
    {
      "@type": "EducationalOccupationalCredential" as const,
      credentialCategory: "Medical Specialty",
      name: "Cirugía General",
      identifier: "Cédula 11629429",
    },
    {
      "@type": "EducationalOccupationalCredential" as const,
      credentialCategory: "Subspecialty",
      name: "Alta Especialidad en Endoscopia",
      identifier: "Cédula EGI230072",
    },
    {
      "@type": "EducationalOccupationalCredential" as const,
      credentialCategory: "Board Certification",
      name: "Consejo Mexicano de Cirugía General",
      identifier: "C18044318",
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
  ],

  // ── Schema: sameAs (entity verification) ────────────────────────────────
  // External profiles that verify this is the same entity.
  // TODO: Add Doctoralia URL once confirmed (Open Item #5 in Project_Context_v2)
  schemaSameAs: [
    "https://www.doctoralia.com.mx/omar-quiroz/cirujano-bariatra-cirujano-general-endoscopista/yucatan",
    "https://www.youtube.com/@DrOmarQuiroz",
  ] as string[],
} as const