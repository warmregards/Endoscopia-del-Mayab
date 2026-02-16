import Image from "next/image"
import Link from "next/link"
import { metaFor } from "@/lib/routes-seo"
import { DOCTOR } from "@/lib/doctor"
import { CLINIC, telHref } from "@/lib/clinic"
import { ADDITIONAL_FEES, mxn } from "@/lib/pricing"
import { breadcrumbSchema } from "@/lib/schema"
import {
  Award,
  MapPin,
  Clock,
  GraduationCap,
  ShieldCheck,
  Stethoscope,
  Heart,
  Activity,
  Phone,
} from "lucide-react"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import Faq from "@/components/Faq"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("doctor")

export default function DoctorOmarQuirozPage() {
  const primaryHospital = DOCTOR.hospitals.find((h) => h.type === "primary")!
  const secondaryHospitals = DOCTOR.hospitals.filter(
    (h) => h.type === "secondary"
  )

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: DOCTOR.name, path: DOCTOR.profileUrl },
            ])
          ),
        }}
      />

      {/* ── Section 1: Hero ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Content */}
            <div className="flex-1 space-y-6">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                {DOCTOR.name} — Endoscopista en Mérida
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {DOCTOR.bio}
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-accent/20 text-sm font-medium text-foreground">
                  <GraduationCap className="h-4 w-4 text-text-accent" />
                  Egresado UNAM
                </span>
                {DOCTOR.credentials.slice(0, 4).map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium text-foreground"
                  >
                    <Award className="h-4 w-4 text-primary" />
                    {cred}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  service="consulta dr quiroz"
                  position="hero"
                  procedureName="Consulta"
                  className="sm:px-8"
                />
                <CallButton
                  service="consulta dr quiroz"
                  position="hero"
                  variant="ghost"
                />
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 lg:max-w-md">
              <Image
                src={DOCTOR.photos.headshot}
                alt={`${DOCTOR.name} - Endoscopista en Mérida`}
                width={500}
                height={600}
                className="rounded-2xl"
                priority
              />
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>
                  {DOCTOR.worksFor.hospital}, Consultorio{" "}
                  {DOCTOR.worksFor.consultorio}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: About / Specialties ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
            Endoscopista Gastrointestinal Certificado en Mérida
          </h2>

          <p className="text-foreground/80 leading-relaxed max-w-3xl mb-8">
            El {DOCTOR.name} es médico egresado de la UNAM con más de 15 años
            de experiencia en Mérida, Yucatán. Certificado por el Consejo
            Mexicano de Cirugía General (CMCG), se especializa en endoscopia
            digestiva, colonoscopia, CPRE y procedimientos terapéuticos
            avanzados. Atiende en {DOCTOR.worksFor.hospital} con equipo Olympus
            HD y anestesiólogo certificado.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/endoscopia-merida"
              className="group bg-background border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/30 transition-all"
            >
              <Stethoscope className="h-6 w-6 text-text-accent mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Endoscopia Digestiva
              </h3>
              <p className="text-sm text-foreground/80">
                Diagnóstico y tratamiento endoscópico de enfermedades del tubo
                digestivo con equipo de alta definición.
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary">
                Ver procedimiento
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </span>
            </Link>

            <Link
              href="/colonoscopia-merida"
              className="group bg-background border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/30 transition-all"
            >
              <Activity className="h-6 w-6 text-text-accent mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Colonoscopia
              </h3>
              <p className="text-sm text-foreground/80">
                Estudio del colon para prevenir y diagnosticar cáncer
                colorrectal, pólipos y enfermedades inflamatorias.
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary">
                Ver procedimiento
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </span>
            </Link>

            <Link
              href="/cpre-merida"
              className="group bg-background border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/30 transition-all"
            >
              <Heart className="h-6 w-6 text-text-accent mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                CPRE
              </h3>
              <p className="text-sm text-foreground/80">
                Diagnóstico y tratamiento de problemas de vías biliares y
                páncreas con endoscopia avanzada.
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary">
                Ver procedimiento
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 3: Credentials & Education ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Formación y Certificaciones
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Education Timeline */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Trayectoria Académica
              </h3>
              {[
                { title: "Médico Cirujano", sub: "UNAM, Ciudad de México", highlight: true },
                { title: "Cirugía General — UNAM", sub: `Cédula ${DOCTOR.cedulas.medico}` },
                { title: "Alta Especialidad en Endoscopia", sub: `Cédula ${DOCTOR.cedulas.especialidad}` },
                { title: "Rotación Laparoscópica Avanzada", sub: "Centro Médico ABC, CDMX" },
                { title: "Fellowship Bariátrico", sub: "Gastric Sleeve Center, Florida" },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`border rounded-xl p-6 ${item.highlight ? "border-accent/30 bg-accent-light/5" : "border-border"}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${item.highlight ? "bg-accent-light" : "bg-muted"}`}>
                      <GraduationCap className={`h-4 w-4 ${item.highlight ? "text-text-accent" : "text-primary"}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className={`text-sm ${item.highlight ? "text-text-accent font-medium" : "text-muted-foreground"}`}>
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Certifications & Memberships */}
            <div className="space-y-6">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Certificaciones y Membresías
              </h3>

              <div className="border border-border rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center p-4 rounded-lg bg-accent-light/10 border border-accent/20">
                  <span className="font-medium text-foreground">
                    Consejo CMCG — Cirugía General
                  </span>
                  <span className="text-text-accent font-mono text-sm font-bold">
                    {DOCTOR.cedulas.consejo}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-accent-light/10 border border-accent/20">
                  <span className="font-medium text-foreground">
                    Alta Especialidad — Endoscopia
                  </span>
                  <span className="text-text-accent font-mono text-sm font-bold">
                    {DOCTOR.cedulas.especialidad}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-muted border border-border">
                  <span className="font-medium text-foreground">
                    Cédula Profesional
                  </span>
                  <span className="text-muted-foreground font-mono text-sm">
                    {DOCTOR.cedulas.medico}
                  </span>
                </div>
              </div>

              <div className="border border-border rounded-xl p-6">
                <p className="text-sm font-medium text-foreground mb-4">
                  Membresías activas
                </p>
                <div className="space-y-2">
                  {DOCTOR.memberships.map((m) => (
                    <div
                      key={m}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      {m}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    COFEPRIS — Licencia sanitaria vigente
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-4">
                <div className="flex-1 text-center p-4 rounded-xl bg-muted border border-border">
                  <div className="text-2xl font-bold text-text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Años de experiencia
                  </div>
                </div>
                <div className="flex-1 text-center p-4 rounded-xl bg-muted border border-border">
                  <div className="text-2xl font-bold text-text-accent">
                    {CLINIC.aggregateRating.ratingValue}★
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {CLINIC.aggregateRating.reviewCount} opiniones
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Location & Hospitals ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Consultorio en Mérida, Yucatán
          </h2>

          {/* Primary hospital */}
          <div className="bg-background border border-border rounded-xl p-8 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-accent-light text-xs font-medium text-text-accent">
                Consultorio Principal
              </span>
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              {primaryHospital.name}
            </h3>
            <p className="text-foreground/80 mb-4">
              {primaryHospital.description}
            </p>
            <div className="space-y-2 text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{CLINIC.address.display}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{CLINIC.hours.display}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={telHref()}
                  className="hover:underline"
                >
                  {CLINIC.phone.display}
                </a>
              </div>
            </div>
            <a
              href={CLINIC.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline"
            >
              <MapPin className="h-4 w-4" />
              Ver en Google Maps
            </a>
          </div>

          {/* Secondary hospitals */}
          <div className="grid gap-4 sm:grid-cols-2">
            {secondaryHospitals.map((h) => (
              <div
                key={h.name}
                className="bg-background/60 border border-border rounded-xl p-6"
              >
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground mb-4">
                  También opera en
                </span>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {h.name}
                </h3>
                <p className="text-sm text-foreground/80">{h.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Ubicado en Chichi Suárez, accesible desde Cholul, Temozón Norte,
            Conkal, Kanasín y toda el área metropolitana de Mérida.
          </p>
        </div>
      </section>

      {/* ── Section 5: Consultation Pricing ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-accent-light/10 border border-accent/20 rounded-2xl p-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                Consulta de Valoración
              </h2>
              <p className="text-3xl font-bold text-text-accent mb-4">
                Desde {mxn(ADDITIONAL_FEES.consultation.amount)}
              </p>
              <p className="text-foreground/80 mb-6">
                Incluye evaluación completa, revisión de estudios previos y plan
                de tratamiento personalizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <WhatsAppButton
                  service="consulta valoración"
                  position="pricing"
                  procedureName="Consulta de Valoración"
                />
              </div>
              <Link
                href="/precios"
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver todos los precios &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Reviews ── bg-muted */}
      <GoogleReviews />

      {/* ── Section 7: FAQ ── bg-background */}
      <section className="bg-background">
        <Faq
          routeKey="doctor"
          heading="Preguntas Frecuentes sobre el Dr. Quiroz"
          service="consulta dr quiroz"
        />
      </section>

      {/* ── Section 8: Bottom CTA ── bg-primary */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
            ¿Listo para agendar tu consulta?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Escribe al Dr. Quiroz directamente por WhatsApp — sin
            intermediarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              service="consulta dr quiroz"
              position="cta section"
              procedureName="Consulta"
              className="sm:px-10"
            />
            <CallButton
              service="consulta dr quiroz"
              position="cta section"
              variant="inverse"
            />
          </div>
        </div>
      </section>
    </>
  )
}
