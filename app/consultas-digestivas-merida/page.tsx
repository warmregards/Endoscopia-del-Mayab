import { metaFor } from "@/lib/routes-seo"
import { ADDITIONAL_FEES, PRICING, mxn } from "@/lib/pricing"
import { DOCTOR } from "@/lib/doctor"
import { CLINIC } from "@/lib/clinic"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Image from "next/image"
import Link from "next/link"
import { Stethoscope, CheckCircle2, ArrowRight, MapPin, Clock } from "lucide-react"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import GoogleReviews from "@/components/GoogleReviews"
import Faq from "@/components/Faq"

export const revalidate = 86400
export const metadata: import("next").Metadata = {
  ...metaFor("consultas"),
  other: {
    "geo.region": "MX-YUC",
    "geo.placename": CLINIC.address.addressLocality,
    "geo.position": `${CLINIC.geo.lat};${CLINIC.geo.lng}`,
    ICBM: `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
  },
}

export default function ConsultasDigestivasPage() {
  const consultationPrice = mxn(ADDITIONAL_FEES.consultation.amount)

  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Consultas Digestivas", path: "/consultas-digestivas-merida" },
  ])

  const jsonLdProcedure = procedureSchema({
    name: "Consultas Digestivas en Mérida",
    path: "/consultas-digestivas-merida",
    description:
      "Consulta digestiva especializada con endoscopista certificado en Mérida. Valoración pre-endoscópica, control post-procedimiento y chequeo digestivo preventivo.",
    howPerformed: "Evaluación clínica en consultorio",
    procedureType: "Therapeutic",
  })

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProcedure) }}
      />

      {/* Section 1: Hero */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-accent/20">
              <Stethoscope className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">
                Gastroenterología Especializada
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Consultas Digestivas en Mérida
            </h1>

            <p className="text-lg text-muted-foreground">
              Evaluación especializada con {DOCTOR.name} — Desde{" "}
              {consultationPrice}
            </p>

            <p className="text-base text-foreground leading-relaxed">
              ¿Llevas meses con molestias digestivas y nadie encuentra la causa?
              En Endoscopia del Mayab, el Dr. Quiroz evalúa tus síntomas con
              enfoque especializado para darte un diagnóstico real y un plan de
              tratamiento claro.
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Hospital Amerimed, Mérida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Atención bilingüe</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Sin referencia médica</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Citas misma semana</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton service="consultas" position="hero" procedureName="Consulta Digestiva" label="Agendar por WhatsApp" />
              <CallButton service="consultas" position="hero" variant="ghost" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground pt-2">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {CLINIC.address.display}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {CLINIC.hours.display}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Qué Incluye */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground tracking-tight mb-8">
            ¿Qué Incluye la Consulta Digestiva?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Historia Clínica Detallada",
                text: "Revisión completa de síntomas, antecedentes y medicamentos actuales.",
              },
              {
                title: "Examen Físico Especializado",
                text: "Evaluación dirigida por endoscopista certificado.",
              },
              {
                title: "Plan de Estudios Personalizado",
                text: "Solo los estudios necesarios, sin pruebas innecesarias.",
              },
              {
                title: "Explicación Clara y Seguimiento",
                text: "Todo explicado en español o inglés, con seguimiento por WhatsApp.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card"
              >
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-accent-light border border-accent/20">
            <p className="text-sm text-foreground">
              <span className="font-semibold">
                Consulta de valoración: {consultationPrice}
              </span>{" "}
              — La valoración pre-endoscópica está incluida en el precio de
              todos los procedimientos.{" "}
              <Link
                href="/precios"
                className="text-primary font-medium hover:underline"
              >
                Ver todos los precios →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Tipos de Consulta */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground tracking-tight mb-2">
            Tipos de Consulta Digestiva
          </h2>
          <p className="text-muted-foreground mb-8">
            Tres modalidades alineadas a tus necesidades
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div
              id="valoracion-pre-endoscopica"
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Valoración Pre-Endoscópica
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Evaluación completa antes de un procedimiento endoscópico.
                Incluye revisión de riesgos, preparación médica y explicación
                detallada del procedimiento.
              </p>
              <p className="text-xs font-medium text-accent">
                Incluida en el precio del procedimiento
              </p>
            </div>

            <div
              id="control-post-endoscopia"
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Control Post-Endoscopia
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Seguimiento después de tu endoscopia o colonoscopia. Revisión de
                resultados de biopsias, interpretación de hallazgos y plan de
                tratamiento.
              </p>
              <p className="text-xs font-medium text-accent">
                Incluida en el precio del procedimiento
              </p>
            </div>

            <div
              id="chequeo-digestivo-preventivo"
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Chequeo Digestivo Preventivo
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Evaluación preventiva para detección temprana de cáncer
                colorrectal y gástrico. Recomendado a partir de los 45 años o
                con antecedentes familiares.
              </p>
              <p className="text-xs font-medium text-text-accent">
                {consultationPrice}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Doctor Credentials */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground tracking-tight mb-8">
            Tu Especialista: {DOCTOR.name}
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-shrink-0">
              <Image
                src={DOCTOR.photos.headshot}
                alt={DOCTOR.name}
                width={256}
                height={256}
                className="w-64 h-64 rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-4">
              <p className="text-base text-foreground leading-relaxed">
                {DOCTOR.bioShort}
              </p>

              <div className="flex flex-wrap gap-2">
                {DOCTOR.credentials.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-background border border-border text-xs font-medium text-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground italic">
                Cuando nos escribes por WhatsApp, te contesta directamente el
                doctor — no una recepcionista.
              </p>

              <p className="text-sm text-muted-foreground">
                Consultorio en Hospital Amerimed Mérida, Yucatán — fácil acceso
                desde Altabrisa, Temozón Norte, Cholul y Centro Histórico.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <WhatsAppButton service="consultas" position="doctor" procedureName="Consulta Digestiva" label="Agendar por WhatsApp" />
                <Link
                  href={DOCTOR.profileUrl}
                  className="text-sm text-primary font-medium hover:underline"
                >
                  Ver perfil completo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Google Reviews */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <Faq routeKey="consultas" service="consultas" />
        </div>
      </section>

      {/* Section 7: Related Procedures */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground tracking-tight mb-2">
            Procedimientos Relacionados
          </h2>
          <p className="text-muted-foreground mb-8">
            Si tu consulta indica que necesitas un estudio, estos son los más
            comunes:
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Endoscopia",
                price: mxn(PRICING.endoscopia.from),
                description:
                  "Exploración del esófago, estómago y duodeno para diagnóstico.",
                href: "/endoscopia-merida",
              },
              {
                name: "Colonoscopia",
                price: mxn(PRICING.colonoscopia.from),
                description:
                  "Evaluación completa del colon para detección de pólipos y cáncer.",
                href: "/colonoscopia-merida",
              },
              {
                name: "Panendoscopia",
                price: mxn(PRICING.panendoscopia.from),
                description:
                  "Estudio del tubo digestivo alto con toma de biopsias.",
                href: "/panendoscopia-merida",
              },
            ].map((proc) => (
              <Link
                key={proc.name}
                href={proc.href}
                className="group p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {proc.name}
                </h3>
                <p className="text-sm font-medium text-text-accent mb-2">
                  Desde {proc.price}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {proc.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Ver más{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Bottom CTA */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-background tracking-tight">
            ¿Listo para Agendar tu Consulta?
          </h2>
          <p className="text-background/80">
            Escríbenos por WhatsApp — te contesta {DOCTOR.name} directamente
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton service="consultas" position="bottom-cta" procedureName="Consulta Digestiva" label="Agendar por WhatsApp" />
            <CallButton
              service="consultas"
              position="bottom-cta"
              variant="inverse"
            />
          </div>
        </div>
      </section>
    </>
  )
}
