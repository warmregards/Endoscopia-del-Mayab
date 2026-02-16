import { metaFor } from "@/lib/routes-seo"
import {
  PRICING,
  mxn,
  displayFrom,
  ADDITIONAL_FEES,
  INCLUDED_IN_PRICE,
} from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import {
  Stethoscope,
  MapPin,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata: import("next").Metadata = {
  ...metaFor("gastrostomia"),
  other: {
    "geo.region": "MX-YUC",
    "geo.placename": "Mérida",
    "geo.position": `${CLINIC.geo.lat};${CLINIC.geo.lng}`,
    ICBM: `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
  },
}

const RELATED = [
  {
    name: "Dilatación Esofágica",
    href: "/dilatacion-esofagica-merida",
    price: displayFrom("dilatacion_esofagica"),
  },
  {
    name: "Endoscopia",
    href: "/endoscopia-merida",
    price: displayFrom("endoscopia"),
  },
  {
    name: "Consultas Digestivas",
    href: "/consultas-digestivas-merida",
    price: `${mxn(ADDITIONAL_FEES.consultation.amount)}`,
  },
]

const INDICATIONS = [
  "Disfagia por evento vascular cerebral",
  "Cáncer de cabeza y cuello",
  "Enfermedades neurológicas degenerativas",
  "Desnutrición severa con contraindicación oral",
  "Soporte nutricional pre/post-quirúrgico prolongado",
]

const STEPS = [
  {
    title: "Evaluación",
    desc: "Consulta con el Dr. Quiroz para determinar indicación, evaluar anatomía gástrica y discutir expectativas con tu familia.",
  },
  {
    title: "Preparación",
    desc: "Ayuno de 8 horas, evaluación anestésica y profilaxis antibiótica.",
  },
  {
    title: "Procedimiento",
    desc: "Colocación endoscópica de 30–45 minutos con sedación — no sientes dolor.",
  },
  {
    title: "Recuperación",
    desc: "Observación 4–6 horas, inicio de alimentación a las 24 horas, educación completa a familiares.",
  },
]

export default function GastrostomiaEndoscopicaPEGPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Gastrostomía Endoscópica (PEG) en Mérida",
              path: "/gastrostomia-endoscopica-peg-merida",
              pricingKey: "gastrostomia_peg",
              description:
                "Colocación de sonda de alimentación (PEG) por endoscopia bajo sedación en Hospital Amerimed, Mérida. Procedimiento ambulatorio de 30-45 minutos para pacientes con dificultades de deglución.",
              procedureType: "Therapeutic",
              bodyLocation: "Estómago (pared abdominal anterior)",
              howPerformed:
                "Técnica endoscópica percutánea bajo sedación consciente",
              preparation:
                "Ayuno de 8 horas, evaluación anestésica, profilaxis antibiótica",
              followUp:
                "Observación 4-6 horas, inicio gradual de alimentación a las 24 horas, seguimiento telefónico por 7 días",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              {
                name: "Gastrostomía Endoscópica (PEG) en Mérida",
                path: "/gastrostomia-endoscopica-peg-merida",
              },
            ])
          ),
        }}
      />

      {/* S1: HERO */}
      <section className="bg-background">
        <div className="container-page section-padding-lg">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/20 border border-accent/20">
              <Stethoscope className="h-4 w-4 text-text-accent" />
              <span className="text-sm font-medium text-text-accent">
                Procedimiento Ambulatorio
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Gastrostomía Endoscópica (PEG) en Mérida
            </h1>

            <p className="text-lg text-foreground/80 leading-relaxed">
              La gastrostomía PEG es una sonda de alimentación que se coloca
              directamente en el estómago por endoscopia, sin cirugía abierta.
              Indicada cuando tu familiar no puede alimentarse por boca durante
              más de 4 semanas — {DOCTOR.name} la realiza en{" "}
              {CLINIC.address.streetAddress},{" "}
              {CLINIC.address.addressLocality},{" "}
              {CLINIC.address.addressRegion}.
            </p>

            <div className="inline-flex px-4 py-2 rounded-full bg-accent-light text-text-accent font-semibold text-lg">
              {displayFrom("gastrostomia_peg")}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground/70">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {CLINIC.address.streetAddress},{" "}
                {CLINIC.address.addressLocality},{" "}
                {CLINIC.address.addressRegion}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Ambulatorio · 30–45 min
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="gastrostomia"
                position="hero"
                procedureName="Gastrostomía PEG"
              />
              <CallButton
                service="gastrostomia"
                position="hero"
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </section>

      {/* S2: DEFINITION + INDICATIONS */}
      <section className="bg-muted">
        <div className="container-page section-padding-lg">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            ¿Qué es la gastrostomía PEG y quién la necesita?
          </h2>

          <p className="mt-6 text-foreground/80 leading-relaxed max-w-3xl">
            La gastrostomía endoscópica percutánea (PEG) es un tubo que se
            coloca a través de la pared abdominal directamente al estómago,
            permitiendo alimentar a tu familiar de forma segura cuando no puede
            tragar. Está indicada cuando la vía oral no es posible por más de
            4–6 semanas. El {DOCTOR.name} realiza este procedimiento con
            sedación en {CLINIC.address.streetAddress},{" "}
            {CLINIC.address.addressLocality} — es ambulatorio, seguro y tu
            familiar regresa a casa el mismo día.
          </p>

          <div className="mt-8 space-y-4">
            {INDICATIONS.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <CheckCircle2 className="h-5 w-5 text-text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3: PRICING */}
      <section className="bg-background">
        <div className="container-page section-padding-lg">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Costo de Gastrostomía PEG en Mérida
          </h2>

          <div className="mt-8 rounded-2xl border border-border bg-card p-8 max-w-2xl">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h3 className="text-xl font-serif font-semibold text-foreground">
                Gastrostomía PEG
              </h3>
              <p className="text-2xl font-bold text-text-accent">
                {displayFrom("gastrostomia_peg")}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="font-medium text-foreground">
                El precio incluye:
              </h4>
              <div className="space-y-2 text-sm text-foreground/80">
                {INCLUDED_IN_PRICE.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0" />
                  <span>
                    Capacitación completa a familiares sobre cuidados de la
                    sonda
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0" />
                  <span>Seguimiento telefónico primeros 7 días</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-muted border border-border">
              <p className="text-sm text-foreground/70">
                Lectura de patología (si se toman biopsias):{" "}
                <strong>{mxn(ADDITIONAL_FEES.biopsy.amount)}</strong> adicional
              </p>
            </div>

            <p className="mt-4 text-sm text-foreground/60">
              Precio base para pacientes con anatomía gástrica normal. Casos
              complejos se evalúan individualmente.
            </p>
          </div>

          <div className="mt-6">
            <Link
              href="/precios"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Ver todos nuestros precios{" "}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* S4: PREPARATION & PROCESS */}
      <section className="bg-muted">
        <div className="container-page section-padding-lg">
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground">
            Preparación y Proceso
          </h2>

          <div className="mt-8 space-y-6">
            {STEPS.map((step, i) => (
              <div key={step.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-foreground/80">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-foreground/70">
            Agenda tu evaluación. Horario: {CLINIC.hours.display}.
            A minutos de Cholul, Temozón Norte, Altabrisa y el Centro de Mérida.
          </p>
        </div>
      </section>

      {/* S5: DOCTOR CREDENTIALS */}
      <section className="bg-background">
        <div className="container-page section-padding-lg">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Tu Especialista: {DOCTOR.name}
          </h2>

          <div className="mt-8 flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <Image
                src={DOCTOR.photos.headshot}
                alt={DOCTOR.name}
                width={280}
                height={280}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                {DOCTOR.bioShort}
              </p>

              <div className="flex flex-wrap gap-2">
                {DOCTOR.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="px-4 py-2 rounded-full bg-accent-light text-text-accent text-xs font-medium"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <p className="text-foreground/80">
                Al ser endoscopista y cirujano general certificado,{" "}
                {DOCTOR.name} maneja tanto la colocación rutinaria de PEG
                como cualquier complicación — sin trasladar al paciente.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <WhatsAppButton
                  service="gastrostomia"
                  position="doctor"
                  procedureName="Gastrostomía PEG"
                  size="compact"
                />
                <Link
                  href={DOCTOR.profileUrl}
                  className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
                >
                  Ver perfil completo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S6: GOOGLE REVIEWS */}
      <section className="bg-muted">
        <div className="container-page section-padding-lg">
          <GoogleReviews />
        </div>
      </section>

      {/* S7: FAQ */}
      <section className="bg-background">
        <div className="container-page section-padding-lg">
          <Faq routeKey="gastrostomia" service="gastrostomia" />
        </div>
      </section>

      {/* S8: BOTTOM CTA */}
      <section className="bg-primary">
        <div className="container-page section-padding-lg text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white">
            ¿Tu familiar necesita alimentación por sonda PEG?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            {DOCTOR.name} evalúa cada caso individualmente. Escríbenos por
            WhatsApp para agendar tu valoración.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              service="gastrostomia"
              position="bottom-cta"
              procedureName="Gastrostomía PEG"
            />
            <CallButton
              service="gastrostomia"
              position="bottom-cta"
              variant="inverse"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {RELATED.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-xl border border-white/20 bg-white/10 p-4 hover:bg-white/20 transition-colors text-left"
              >
                <p className="font-semibold text-white">{r.name}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-white/70">{r.price}</span>
                  <ArrowRight className="h-4 w-4 text-white/70" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
