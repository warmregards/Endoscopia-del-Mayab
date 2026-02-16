import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, INCLUDED_IN_PRICE, ADDITIONAL_FEES, displayFrom } from "@/lib/pricing"
import { DOCTOR } from "@/lib/doctor"
import { CLINIC } from "@/lib/clinic"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Image from "next/image"
import Link from "next/link"
import { MapPin, CheckCircle2, Clock, ShieldCheck } from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("dilatacion_esofagica")

export default function DilatacionEsofagicaPage() {
  const jsonLd = procedureSchema({
    name: "Dilatación Esofágica en Mérida",
    path: "/dilatacion-esofagica-merida",
    pricingKey: "dilatacion_esofagica",
    description:
      "Tratamiento endoscópico para estenosis esofágica con balones graduados bajo sedación. Mejora la capacidad de tragar sin cirugía abierta.",
    bodyLocation: "Esófago",
    howPerformed:
      "Dilatación con balones graduados CRE bajo sedación y guía endoscópica",
    preparation:
      "Ayuno mínimo 8 horas. Suspender anticoagulantes según indicación médica.",
    followUp:
      "Dieta líquida 24 horas, blanda 2-7 días. Seguimiento incluido en precio.",
    procedureType: "Therapeutic",
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Dilatación Esofágica", path: "/dilatacion-esofagica-merida" },
  ])

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Section 1: Hero */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-2">
              <span className="font-serif text-sm font-semibold text-text-accent">
                Desde {mxn(PRICING.dilatacion_esofagica.from)}
              </span>
            </div>

            <h1 className="font-serif text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Dilatación Esofágica en Mérida
            </h1>

            <p className="text-lg text-foreground/70">
              Tratamiento endoscópico para estenosis esofágica. Mejora tu
              capacidad de tragar sin cirugía abierta.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground">
              {[
                "Sin cirugía abierta",
                "Mejoría el mismo día",
                "Sedación incluida",
                "Hospital Amerimed",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <WhatsAppButton
                service="dilatacion-esofagica"
                position="hero"
                procedureName="Dilatación Esofágica"
                className="sm:px-8"
              />
              <CallButton
                service="dilatacion-esofagica"
                position="hero"
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What Is + When Needed */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              ¿Qué es la Dilatación Esofágica?
            </h2>

            <p className="text-foreground/80 leading-relaxed">
              La dilatación esofágica es un procedimiento endoscópico que utiliza
              balones graduados para abrir áreas estrechadas (estenosis) del
              esófago. Se realiza bajo sedación en Hospital Amerimed, Mérida,
              Yucatán, sin necesidad de cirugía abierta. El objetivo es
              restablecer el paso normal de alimentos y mejorar tu capacidad de
              tragar de forma segura y controlada con equipo Olympus
              especializado.
            </p>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                ¿Cuándo se necesita?
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Estenosis por reflujo gastroesofágico crónico",
                  "Estenosis post-quirúrgica (cicatrización tras cirugía)",
                  "Anillos esofágicos (Schatzki)",
                  "Disfagia progresiva (dificultad creciente para tragar)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Pricing — What's Included */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Costo de Dilatación Esofágica en Mérida
            </h2>

            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-extrabold text-text-accent">
                Desde {mxn(PRICING.dilatacion_esofagica.from)}
              </span>
            </div>

            <p className="text-foreground/80">
              Precio transparente y fijo para procedimientos programados. Sin
              cargos ocultos — incluye todo lo necesario para tu dilatación
              esofágica.
            </p>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Incluye
              </h3>
              <ul className="mt-4 space-y-2">
                {INCLUDED_IN_PRICE.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-muted p-4">
              <p className="text-sm text-foreground/80">
                <strong>Costo adicional posible:</strong>{" "}
                {ADDITIONAL_FEES.biopsy.label} — {mxn(ADDITIONAL_FEES.biopsy.amount)}.{" "}
                {ADDITIONAL_FEES.biopsy.description}.
              </p>
            </div>

            <Link
              href="/precios"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
            >
              Ver todos los precios de procedimientos →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Preparation & Recovery */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Preparación y Recuperación
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Antes */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-accent-light">
                <Clock className="h-4 w-4 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Antes
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                <li>Ayuno mínimo 8 horas</li>
                <li>Suspender anticoagulantes según indicación</li>
                <li>Traer acompañante adulto</li>
              </ul>
            </div>

            {/* Durante */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-accent-light">
                <ShieldCheck className="h-4 w-4 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Durante
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                <li>30–45 minutos bajo sedación</li>
                <li>Sin dolor durante el procedimiento</li>
                <li>{DOCTOR.name} en Hospital Amerimed</li>
              </ul>
            </div>

            {/* Después */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-accent-light">
                <CheckCircle2 className="h-4 w-4 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Después
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                <li>Dieta líquida primeras 24 horas</li>
                <li>Dieta blanda 2–7 días</li>
                <li>Seguimiento incluido en precio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Doctor Credentials */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Tu Especialista: <Link href="/dr-omar-quiroz" className="text-primary hover:underline">{DOCTOR.name}</Link>
            </h2>

            <div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:items-start">
              <Image
                src="/dr-omar-quiroz.webp"
                alt={DOCTOR.name}
                width={300}
                height={400}
                className="rounded-2xl"
              />

              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  {DOCTOR.bioShort}
                </p>

                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {DOCTOR.credentials.map((cred) => (
                    <li
                      key={cred}
                      className="flex items-center gap-2 rounded-lg bg-accent-light px-4 py-2 text-sm text-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" />
                      {cred}
                    </li>
                  ))}
                </ul>

                <WhatsAppButton
                  service="dilatacion-esofagica"
                  position="doctor"
                  procedureName="Dilatación Esofágica"
                  variant="primary"
                  size="compact"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Google Reviews */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="dilatacion_esofagica" service="dilatacion-esofagica" />
        </div>
      </section>

      {/* Section 8: Related Procedures */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl font-bold tracking-tight text-foreground md:text-2xl">
            Procedimientos Relacionados
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Endoscopia",
                href: "/endoscopia-merida",
                price: displayFrom("endoscopia"),
                context: "Evaluación diagnóstica previa",
              },
              {
                name: "Endoprótesis Esofágicas",
                href: "/endoprotesis-esofagicas-merida",
                price: displayFrom("endoprotesis_esofagicas"),
                context: "Para estenosis severas",
              },
              {
                name: "CPRE",
                href: "/cpre-merida",
                price: displayFrom("cpre"),
                context: "Si la estenosis involucra vía biliar",
              },
            ].map((proc) => (
              <Link
                key={proc.href}
                href={proc.href}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:border-accent/30 hover:shadow-md"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {proc.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-text-accent">
                  {proc.price}
                </p>
                <p className="mt-2 text-sm text-foreground/70">
                  {proc.context}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Ver más
                  <span className="transition-all group-hover:ml-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Bottom CTA */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-white md:text-3xl">
              ¿Necesitas Dilatación Esofágica en Mérida?
            </h2>

            <p className="text-lg text-white/80">
              Agenda tu valoración con el {DOCTOR.name}. Precio transparente
              desde {mxn(PRICING.dilatacion_esofagica.from)} con todo incluido.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <WhatsAppButton
                service="dilatacion-esofagica"
                position="bottom-cta"
                procedureName="Dilatación Esofágica"
                className="sm:px-10"
              />
              <CallButton
                service="dilatacion-esofagica"
                position="bottom-cta"
                variant="inverse"
              />
            </div>

            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{CLINIC.address.display}</span>
              </div>
              <p>{CLINIC.hours.display}</p>
              <p className="text-xs">
                Cerca de Altabrisa, Cholul, Temozón Norte
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
