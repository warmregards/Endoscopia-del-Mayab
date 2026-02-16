import { metaFor } from "@/lib/routes-seo"
import { mxn, displayFrom, INCLUDED_IN_PRICE, ADDITIONAL_FEES } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, MapPin, Clock } from "lucide-react"
import Faq from "@/components/Faq"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("ligadura_hemorroides")

const SERVICE = "ligadura-hemorroides"
const PROCEDURE_NAME = "Ligadura de Hemorroides Internas"

const RELATED = [
  {
    name: "Colonoscopia",
    slug: "colonoscopia-merida",
    pricingKey: "colonoscopia" as const,
    desc: "Diagnostica hemorroides internas y descarta otras causas de sangrado rectal.",
  },
  {
    name: "Ligadura de Várices Esofágicas",
    slug: "ligadura-varices-esofagicas-merida",
    pricingKey: "ligadura_varices" as const,
    desc: "Misma técnica de bandas elásticas aplicada a várices del esófago.",
  },
  {
    name: "Extracción de Cuerpos Extraños",
    slug: "extraccion-cuerpos-extranos-endoscopia-merida",
    pricingKey: "extraccion_cuerpos_extranos" as const,
    desc: "Procedimiento endoscópico terapéutico para remover objetos del tracto digestivo.",
  },
]

const STEPS = [
  { n: 1, t: "Evaluación médica", d: "Examen proctológico para determinar el grado de hemorroides (30 min)" },
  { n: 2, t: "Sedación consciente", d: `Sedación en ${CLINIC.address.streetAddress} (15 min)` },
  { n: 3, t: "Colocación de bandas", d: "Se colocan bandas elásticas en las hemorroides internas (5-10 min)" },
  { n: 4, t: "Observación", d: "Monitoreo hasta alta médica (1-2 horas)" },
  { n: 5, t: "Recuperación en casa", d: "Las hemorroides se secan y caen naturalmente (3-7 días)" },
]

export default function LigaduraHemorroidesPage() {
  return (
    <>
      {/* ── Section 1: Hero ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Ligadura de Hemorroides Internas en Mérida
            </h1>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Tratamiento ambulatorio con bandas elásticas para hemorroides grado
              1 y 2. Sin cortes, sin hospitalización, en Mérida, Yucatán.
            </p>

            <span className="inline-block px-4 py-2 rounded-full bg-accent-light text-text-accent font-semibold text-lg">
              {displayFrom("ligadura_hemorroides")}
            </span>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                className="flex-1"
                service={SERVICE}
                position="hero"
                procedureName={PROCEDURE_NAME}
              />
              <CallButton
                variant="ghost"
                className="flex-1"
                service={SERVICE}
                position="hero"
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{CLINIC.address.streetAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{CLINIC.hours.display}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Definition + Process ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
            ¿Qué Es la Ligadura de Hemorroides y Cómo Se Hace?
          </h2>

          <p className="text-foreground/80 leading-relaxed max-w-3xl mb-8">
            La ligadura con bandas elásticas es un procedimiento ambulatorio para
            tratar hemorroides internas grado 1 y 2. El {DOCTOR.name} coloca
            bandas especiales que cortan el flujo sanguíneo a la hemorroide. En
            3 a 7 días, el tejido se seca y cae. Se realiza con sedación
            consciente en {CLINIC.address.streetAddress} y dura entre 5 y 10
            minutos. Pacientes de zonas como Cholul, Temozón Norte y Francisco
            de Montejo llegan en menos de 20 minutos.
          </p>

          {/* 5-step vertical timeline */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-8">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="p-4 rounded-xl border border-border bg-card text-center"
              >
                <div className="w-10 h-10 rounded-full bg-accent text-white font-bold text-base flex items-center justify-center mx-auto mb-4">
                  {s.n}
                </div>
                <h3 className="font-serif font-semibold text-foreground text-lg mb-2">
                  {s.t}
                </h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>

          {/* Recovery callout */}
          <div className="p-4 rounded-xl bg-accent-light border border-accent/20">
            <p className="text-foreground/80 leading-relaxed">
              <strong className="text-foreground">Recuperación rápida:</strong>{" "}
              Regreso a actividades en 24-48 horas. Fibra, buena hidratación y
              evitar cargar peso por 2-3 semanas.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: Pricing ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
            Precio de Ligadura de Hemorroides en Mérida
          </h2>

          <div className="max-w-2xl">
            <p className="text-4xl font-bold text-text-accent mb-6">
              {displayFrom("ligadura_hemorroides")}
            </p>

            <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
              ¿Qué incluye?
            </h3>
            <ul className="space-y-2 mb-6">
              {INCLUDED_IN_PRICE.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-muted border border-border mb-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Costo adicional:</strong>{" "}
                {ADDITIONAL_FEES.biopsy.label} —{" "}
                {mxn(ADDITIONAL_FEES.biopsy.amount)}.{" "}
                {ADDITIONAL_FEES.biopsy.description}.
              </p>
            </div>

            <Link
              href="/precios"
              className="inline-flex items-center text-text-accent font-medium hover:underline"
            >
              Ver todos los precios →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: Doctor ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Tu Especialista: {DOCTOR.name}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="relative aspect-square max-w-sm mx-auto md:mx-0">
              <Image
                src={DOCTOR.photos.headshot}
                alt={DOCTOR.name}
                width={400}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                {DOCTOR.bioShort}{" "}
                <Link
                  href={DOCTOR.profileUrl}
                  className="text-text-accent font-medium hover:underline"
                >
                  Ver perfil completo →
                </Link>
              </p>

              <div className="flex flex-wrap gap-2">
                {DOCTOR.credentials.map((c) => (
                  <span
                    key={c}
                    className="inline-block px-4 py-2 rounded-full bg-accent-light text-text-accent text-xs font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed">
                El {DOCTOR.name} es cirujano certificado y endoscopista. Si
                durante la ligadura se detecta que necesitas cirugía, puede
                realizarla en el mismo hospital sin esperas.
              </p>

              <WhatsAppButton
                variant="primary"
                className="text-sm px-4 py-2"
                service={SERVICE}
                position="doctor"
                procedureName={PROCEDURE_NAME}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Reviews ── bg-background (component renders own section) */}
      <GoogleReviews />

      {/* ── Section 6: FAQ ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <Faq routeKey="ligadura_hemorroides" service={SERVICE} />
        </div>
      </section>

      {/* ── Section 7: Related Procedures ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground mb-8">
            Procedimientos Relacionados
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {RELATED.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {r.name}
                </h3>
                <p className="text-text-accent font-semibold mb-2">
                  {displayFrom(r.pricingKey)}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {r.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: Bottom CTA ── bg-primary */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
            ¿Listo para Agendar tu Evaluación?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Escríbenos por WhatsApp y el {DOCTOR.name} te responde
            personalmente. Te orientamos sobre tu caso sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton
              className="sm:px-10"
              service={SERVICE}
              position="bottom-cta"
              procedureName={PROCEDURE_NAME}
            />
            <CallButton
              variant="inverse"
              service={SERVICE}
              position="bottom-cta"
            />
          </div>
        </div>
      </section>

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Ligadura de Hemorroides Internas",
              path: "/ligadura-hemorroides-internas-merida",
              pricingKey: "ligadura_hemorroides",
              procedureType: "Therapeutic",
              description:
                "Tratamiento ambulatorio con bandas elásticas para hemorroides internas grado 1 y 2 en Mérida, Yucatán. Sin cortes ni hospitalización.",
              bodyLocation: "Recto",
              howPerformed:
                "Colocación de bandas elásticas que cortan el flujo sanguíneo a la hemorroide. Se realiza bajo sedación consciente en 5-10 minutos.",
              preparation:
                "Evaluación proctológica previa. El paciente debe informar sobre medicamentos anticoagulantes.",
              followUp:
                "Regreso a actividades en 24-48 horas. Dieta con fibra y buena hidratación. Evitar cargar peso por 2-3 semanas.",
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
                name: "Ligadura de Hemorroides Internas",
                path: "/ligadura-hemorroides-internas-merida",
              },
            ])
          ),
        }}
      />
    </>
  )
}
