import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, displayFrom, ADDITIONAL_FEES, INCLUDED_IN_PRICE } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, MapPin, Clock, ArrowRight } from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = {
  ...metaFor("dilatacion_biliar"),
  other: {
    "geo.region": "MX-YUC",
    "geo.placename": CLINIC.address.addressLocality,
    "geo.position": `${CLINIC.geo.lat};${CLINIC.geo.lng}`,
    ICBM: `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
  },
}

const RELATED_PROCEDURES = [
  {
    name: "CPRE",
    href: "/cpre-merida",
    description: "Extracción de cálculos y obstrucciones biliares",
    price: mxn(PRICING.cpre.from),
  },
  {
    name: "Endoprótesis Biliares",
    href: "/endoprotesis-biliares-merida",
    description: "Stents para restablecer el flujo biliar",
    price: displayFrom("endoprotesis_biliares"),
  },
  {
    name: "Dilatación Esofágica",
    href: "/dilatacion-esofagica-merida",
    description: "Tratamiento de estenosis esofágica",
    price: mxn(PRICING.dilatacion_esofagica.from),
  },
]

export default function DilatacionBiliarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Dilatación Biliar en Mérida",
              path: "/dilatacion-biliar-merida",
              pricingKey: "dilatacion_biliar",
              description:
                "Tratamiento endoscópico para abrir conductos biliares estrechos sin cirugía abierta.",
              bodyLocation: "Conductos biliares",
              howPerformed:
                "Dilatación con balón bajo guía fluoroscópica durante endoscopia",
              procedureType: "Therapeutic",
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
                name: "Dilatación Biliar en Mérida",
                path: "/dilatacion-biliar-merida",
              },
            ])
          ),
        }}
      />

      {/* Section 1: Hero */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Dilatación Biliar en Mérida
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Tratamiento endoscópico para abrir conductos biliares estrechos —
            sin cirugía abierta.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-2 text-sm font-medium text-text-accent">
              Desde {mxn(PRICING.dilatacion_biliar.from)}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground">
              Hospital Amerimed, Mérida
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground">
              Sedación incluida
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground">
              Recuperación mismo día
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <WhatsAppButton
              service="dilatacion biliar"
              position="hero"
              procedureName="Dilatación Biliar"
            />
            <CallButton
              service="dilatacion biliar"
              position="hero"
              variant="ghost"
            />
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {CLINIC.address.display}
          </p>
        </div>
      </section>

      {/* Section 2: ¿Qué es? */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            ¿Qué es la Dilatación Biliar?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Es un procedimiento endoscópico que permite abrir conductos biliares
            que se han estrechado, restaurando el flujo normal de bilis sin
            necesidad de cirugía abierta. Se realiza con sedación en Hospital
            Amerimed en la zona de Chichí Suárez, Mérida, Yucatán — con
            acceso rápido desde Temozón, Cholul, Altabrisa y la zona norte de
            la ciudad.
          </p>

          <h3 className="mt-8 font-serif text-lg font-semibold text-foreground">
            ¿Cuándo se indica?
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Estenosis post-quirúrgicas (después de cirugía de vesícula)",
              "Estenosis benignas por inflamación crónica",
              "Cálculos impactados que causaron estrechez del conducto",
              "Obstrucción biliar que causa ictericia (coloración amarilla)",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl bg-accent-light border border-accent/20 p-4">
            <p className="text-sm font-medium text-text-accent">
              Ventaja: evita cirugía abierta con recuperación en 24–48 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Precio */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Costo de Dilatación Biliar
          </h2>
          <p className="mt-4 text-3xl font-bold text-text-accent">
            Desde {mxn(PRICING.dilatacion_biliar.from)}
          </p>

          <h3 className="mt-8 font-serif text-lg font-semibold text-foreground">
            El precio incluye:
          </h3>
          <ul className="mt-4 space-y-2">
            {INCLUDED_IN_PRICE.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-muted-foreground">
            {ADDITIONAL_FEES.biopsy.label}:{" "}
            {mxn(ADDITIONAL_FEES.biopsy.amount)} adicional solo si aplica.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Trabajamos con los principales seguros médicos.
          </p>

          <Link
            href="/precios"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Ver todos nuestros precios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Section 4: Preparación */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            ¿Cómo es el Procedimiento?
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Antes",
                text: `Evaluación con laboratorios e imagen. Ayuno según indicación del ${DOCTOR.name}.`,
              },
              {
                title: "Durante",
                text: "Sedación profunda con anestesiólogo. Duración 30–60 min. No sientes nada.",
              },
              {
                title: "Después",
                text: "Observación 2–6 horas. Alta mismo día. Seguimiento incluido sin costo.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Doctor */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Tu Especialista en Dilatación Biliar
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row gap-8">
            <Image
              src={DOCTOR.photos.headshot}
              alt={DOCTOR.name}
              width={280}
              height={350}
              className="rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {DOCTOR.name}
              </h3>
              <Link
                href={DOCTOR.profileUrl}
                className="mt-1 text-sm text-primary hover:underline"
              >
                {DOCTOR.title}
              </Link>
              <ul className="mt-4 space-y-1">
                {DOCTOR.credentials.map((cred) => (
                  <li key={cred} className="text-sm text-muted-foreground">
                    {cred}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground max-w-md">
                Doble especialidad en endoscopia y cirugía general — si se
                requiere intervención quirúrgica, el {DOCTOR.name} puede realizarla
                el mismo día.
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  service="dilatacion biliar"
                  position="doctor"
                  procedureName="Dilatación Biliar"
                  label={`Escríbele al ${DOCTOR.name}`}
                  size="compact"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Reviews */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="dilatacion_biliar" service="dilatacion biliar" />
        </div>
      </section>

      {/* Section 8: Related Procedures */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground">
            Procedimientos Relacionados
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELATED_PROCEDURES.map((proc) => (
              <Link
                key={proc.href}
                href={proc.href}
                className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {proc.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {proc.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-text-accent">
                    {proc.price}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Ver más <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Bottom CTA */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white">
            ¿Necesitas Evaluación para Dilatación Biliar?
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Escríbenos por WhatsApp para una valoración personalizada con el{" "}
            {DOCTOR.name}.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              service="dilatacion biliar"
              position="cta section"
              procedureName="Dilatación Biliar"
              className="sm:px-10"
            />
            <CallButton
              service="dilatacion biliar"
              position="cta section"
              variant="inverse"
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/70">
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
      </section>
    </>
  )
}
