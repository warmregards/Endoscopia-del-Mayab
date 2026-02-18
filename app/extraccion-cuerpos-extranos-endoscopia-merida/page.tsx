import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, displayFrom, INCLUDED_IN_PRICE } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
} from "lucide-react"
import Faq from "@/components/Faq"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = {
  ...metaFor("extraccion"),
  other: {
    "geo.region": "MX-YUC",
    "geo.placename": CLINIC.address.addressLocality,
    "ICBM": `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
  },
}

/* ── Related procedures for Section 8 ──────────────────────────────────── */

const relatedProcedures = [
  {
    title: "Endoscopia",
    href: "/endoscopia-merida",
    description: "Diagnóstico del tracto digestivo superior",
    price: displayFrom("endoscopia"),
  },
  {
    title: "Dilatación Esofágica",
    href: "/dilatacion-esofagica-merida",
    description: "Para esófago estrecho que causa impactación recurrente",
    price: displayFrom("dilatacion_esofagica"),
  },
  {
    title: "Emergencias Digestivas",
    href: "/emergencias-digestivas-merida",
    description: "Sangrado, obstrucciones y otras urgencias",
    price: null,
  },
]

/* ── Process steps ─────────────────────────────────────────────────────── */

const steps = [
  {
    num: 1,
    title: "Contacto y orientación",
    text: `Nos escribes por WhatsApp o llamas. Te orientamos sobre qué hacer mientras llegas a ${CLINIC.address.streetAddress}.`,
  },
  {
    num: 2,
    title: "Evaluación rápida",
    text: "Revisión de síntomas, radiografía si es necesaria y preparación para quirófano. 5–15 minutos.",
  },
  {
    num: 3,
    title: "Extracción bajo sedación",
    text: `10–30 minutos. No sientes nada. El ${DOCTOR.name} localiza y retira el objeto con endoscopio HD y pinzas especializadas.`,
  },
  {
    num: 4,
    title: "Recuperación y alta",
    text: "30–60 minutos de observación. Reporte con fotos del objeto extraído. Instrucciones de cuidado y dieta blanda 24 horas. Alta el mismo día.",
  },
]

export default function ExtraccionCuerposExtranosPage() {
  return (
    <>
      {/* ── JSON-LD ──────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Extracción de Cuerpos Extraños",
              path: "/extraccion-cuerpos-extranos-endoscopia-merida",
              pricingKey: "extraccion_cuerpos_extranos",
              description:
                "Retiro endoscópico de objetos atorados en esófago, estómago o duodeno bajo sedación. Atención de emergencia disponible fines de semana.",
              procedureType: "Therapeutic",
              bodyLocation: "Esófago, estómago, duodeno",
              howPerformed:
                "Endoscopio flexible HD con pinzas especializadas bajo sedación profunda. Duración: 10–30 minutos.",
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
                name: "Extracción de Cuerpos Extraños",
                path: "/extraccion-cuerpos-extranos-endoscopia-merida",
              },
            ])
          ),
        }}
      />

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">
                Atención de Emergencia
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Extracción de Cuerpos Extraños en Mérida
            </h1>

            <p className="text-lg text-muted-foreground">
              Retiramos objetos atorados en esófago, estómago o garganta con
              endoscopia y sedación. Atención de emergencia disponible.
            </p>

            <div className="inline-flex items-center gap-2 bg-accent-light rounded-lg px-4 py-2">
              <span className="text-text-accent text-2xl font-bold">
                Desde {mxn(PRICING.extraccion_cuerpos_extranos.from)}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {CLINIC.address.streetAddress.split(",")[0].trim()}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                {CLINIC.hours.display}
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Sedación incluida
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="extracción cuerpos extraños"
                position="hero"
                procedureName="Extracción de Cuerpos Extraños"
              />
              <CallButton
                service="extracción cuerpos extraños"
                position="hero"
                variant="ghost"
              />
            </div>

            {/* Emergency callout */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8">
              <h3 className="font-serif text-lg font-semibold text-red-800 mb-4">
                ¿Cuándo es urgencia médica?
              </h3>
              <ul className="space-y-2 text-red-700">
                <li>
                  <strong>Dolor severo</strong> en pecho, garganta o estómago
                </li>
                <li>
                  <strong>Dificultad para tragar</strong> saliva o líquidos
                </li>
                <li>
                  <strong>Vómito constante</strong> o con sangre
                </li>
                <li>
                  <strong>Dificultad para respirar</strong> → llama al 911
                  inmediatamente
                </li>
                <li>
                  <strong>Pilas botón u objetos punzocortantes</strong> → acude
                  inmediatamente
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Definition ───────────────────────────────────────── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
            ¿Qué Es la Extracción Endoscópica de Cuerpos Extraños?
          </h2>
          <div className="max-w-3xl space-y-4 text-muted-foreground">
            <p>
              La extracción endoscópica es un procedimiento para retirar objetos
              atorados en el tubo digestivo (esófago, estómago, duodeno) usando
              un endoscopio flexible con cámara HD y pinzas especializadas. Se
              realiza bajo sedación en {CLINIC.address.streetAddress.split(",")[0].trim()}, Mérida, Yucatán.
            </p>
            <p>
              <strong className="text-foreground">
                Casos más comunes que atendemos:
              </strong>{" "}
              comida impactada (pollo, carne, huesos), espinas de pescado,
              monedas tragadas por niños, pilas botón (urgencia máxima),
              prótesis dentales y juguetes pequeños. Es especialmente frecuente
              en niños y adultos mayores.
            </p>
            <p>
              Atendemos pacientes de toda la zona metropolitana de Mérida
              incluyendo Altabrisa, Cholul, Temozón Norte, García Ginerés y
              Montebello.
            </p>

            <div className="rounded-xl bg-background border border-border p-6 mt-6">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Extracción en niños
              </h3>
              <p className="text-muted-foreground mb-4">
                La ingestión accidental de objetos es una de las emergencias
                pediátricas más comunes. Monedas, pilas botón, imanes y juguetes
                pequeños requieren evaluación inmediata. El {DOCTOR.name} tiene
                experiencia en extracción endoscópica pediátrica con sedación
                segura adaptada a niños.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Monedas — el objeto más frecuente en niños",
                  "Pilas botón — urgencia máxima (quemadura en 2 horas)",
                  "Imanes múltiples — riesgo de perforación intestinal",
                  "Juguetes pequeños y piezas de plástico",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Pricing ──────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
            Precio de Extracción de Cuerpos Extraños en Mérida
          </h2>

          <div className="max-w-3xl space-y-6">
            <p className="text-text-accent text-3xl font-bold">
              Desde {mxn(PRICING.extraccion_cuerpos_extranos.from)}
            </p>

            <p className="text-muted-foreground">
              Precio fijo sin importar tipo de objeto, complejidad o duración
              del procedimiento.
            </p>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Incluido en el precio
              </h3>
              <ul className="space-y-2">
                {INCLUDED_IN_PRICE.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  Equipo endoscópico especializado para extracción
                </li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground">
              Fines de semana y días festivos pueden tener costo adicional.
            </p>

            <Link
              href="/precios"
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              Consulta todos nuestros precios →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: Process ──────────────────────────────────────────── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Qué Esperar: Desde la Llamada hasta el Alta
          </h2>

          <div className="max-w-3xl space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
            <WhatsAppButton
              service="extracción cuerpos extraños"
              position="process"
              procedureName="Extracción de Cuerpos Extraños"
            />
            <CallButton
              service="extracción cuerpos extraños"
              position="process"
              variant="ghost"
            />
          </div>

          <a
            href={CLINIC.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mt-6"
          >
            <MapPin className="h-4 w-4" />
            Cómo llegar a {CLINIC.address.streetAddress} →
          </a>
        </div>
      </section>

      {/* ── Section 5: Doctor ───────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Tu Especialista: {DOCTOR.name}
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <Image
                src={DOCTOR.photos.headshot}
                alt={DOCTOR.name}
                width={200}
                height={200}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">{DOCTOR.bioShort}</p>
              <p className="text-muted-foreground">
                Endoscopista y cirujano general certificado. En extracciones
                complicadas donde la endoscopia no es suficiente, el{" "}
                {DOCTOR.name} puede resolver quirúrgicamente en el momento — sin
                referirte a otro doctor ni perder tiempo valioso.
              </p>

              <div className="flex flex-wrap gap-2">
                {DOCTOR.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center px-2 py-1 rounded-md bg-accent-light text-xs font-medium text-foreground"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <WhatsAppButton
                  service="extracción cuerpos extraños"
                  position="doctor"
                  procedureName="Extracción de Cuerpos Extraños"
                  className="text-sm px-4 py-2"
                />
                <Link
                  href={DOCTOR.profileUrl}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Ver perfil completo del {DOCTOR.name} →
                </Link>
              </div>

              <p className="text-sm text-muted-foreground">
                {CLINIC.address.display}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Reviews ──────────────────────────────────────────── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* ── Section 7: FAQ ──────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq
            routeKey="extraccion"
            service="extracción cuerpos extraños"
            heading="Preguntas Frecuentes sobre Extracción de Cuerpos Extraños"
          />
        </div>
      </section>

      {/* ── Section 8: Related Procedures ───────────────────────────────── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
            Procedimientos Relacionados
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProcedures.map((proc) => (
              <Link
                key={proc.href}
                href={proc.href}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {proc.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {proc.description}
                </p>
                {proc.price && (
                  <p className="text-sm font-medium text-text-accent mb-4">
                    {proc.price}
                  </p>
                )}
                <span className="text-sm font-medium text-primary group-hover:underline">
                  Ver más →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Bottom CTA ───────────────────────────────────────── */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center">
          <h2 className="text-white font-serif text-2xl md:text-3xl font-bold mb-4">
            ¿Emergencia? Contáctanos Ahora
          </h2>
          <p className="text-white/80 mb-8">
            El {DOCTOR.name} responde personalmente por WhatsApp — incluyendo
            fines de semana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              service="extracción cuerpos extraños"
              position="bottom-cta"
              procedureName="Extracción de Cuerpos Extraños"
              className="sm:px-10"
            />
            <CallButton
              service="extracción cuerpos extraños"
              position="bottom-cta"
              variant="inverse"
            />
          </div>
        </div>
      </section>
    </>
  )
}
