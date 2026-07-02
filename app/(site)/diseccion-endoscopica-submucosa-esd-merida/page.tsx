import Image from "next/image"
import Link from "next/link"
import { metaFor } from "@/lib/routes-seo"
import { displayFrom } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import { CheckCircle2, Clock, Heart, MapPin, ArrowRight } from "lucide-react"
import Faq from "@/components/Faq"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = {
  ...metaFor("esd"),
  other: {
    "geo.region": "MX-YUC",
    "geo.placename": CLINIC.address.addressLocality,
    "geo.position": `${CLINIC.geo.lat};${CLINIC.geo.lng}`,
    ICBM: `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
  },
}

const RELATED_PROCEDURES = [
  {
    name: "Resección Mucosa (EMR)",
    description: "Alternativa para lesiones más pequeñas o superficiales.",
    href: "/reseccion-endoscopica-mucosa-emr-merida",
    price: displayFrom("emr"),
  },
  {
    name: "Colonoscopia",
    description: "Estudio diagnóstico donde se detectan lesiones que pueden requerir ESD.",
    href: "/colonoscopia-merida",
    price: displayFrom("colonoscopia"),
  },
  {
    name: "Endoscopia",
    description: "Evaluación del tracto digestivo superior para identificar lesiones tempranas.",
    href: "/endoscopia-merida",
    price: displayFrom("endoscopia"),
  },
]

export default function DiseccionSubmucosaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Disección Endoscópica Submucosa (ESD)",
              path: "/diseccion-endoscopica-submucosa-esd-merida",
              pricingKey: "esd",
              description:
                "Resección completa de lesiones tempranas del tubo digestivo sin cirugía mayor mediante técnica endoscópica avanzada.",
              procedureType: "Therapeutic",
              bodyLocation: "Tubo digestivo (esófago, estómago, colon)",
              howPerformed:
                "Disección endoscópica de la capa submucosa para resección en bloque de lesiones tempranas, bajo sedación profunda.",
              preparation:
                "Ayuno de 12 horas. Suspensión temporal de anticoagulantes. Acompañante adulto obligatorio.",
              followUp:
                "Observación hospitalaria 4-8 horas. Dieta líquida 24 horas. Control a los 7 días.",
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
                name: "Disección Endoscópica Submucosa (ESD)",
                path: "/diseccion-endoscopica-submucosa-esd-merida",
              },
            ])
          ),
        }}
      />

      {/* Section 1: Hero */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Disección Endoscópica Submucosa (ESD) en Mérida
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Resección completa de lesiones tempranas del tubo digestivo sin
              cirugía mayor. Técnica avanzada en Hospital Amerimed, Mérida, Yucatán.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-2 text-sm font-medium text-text-accent">
              {displayFrom("esd")}
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
              {[
                "Sin cirugía abierta",
                "Resección en una sesión",
                "Hospital Amerimed Mérida",
                "Análisis histológico incluido",
              ].map((pill) => (
                <span key={pill} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="Disección Submucosa ESD"
                position="hero"
                procedureName="Disección Endoscópica Submucosa (ESD)"
                variant="primary"
                label="Agendar por WhatsApp"
                className="sm:px-8"
              />
              <CallButton
                service="Disección Submucosa ESD"
                position="hero"
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Qué es la ESD */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
            ¿Qué es la Disección Endoscópica Submucosa?
          </h2>

          <div className="max-w-3xl space-y-4 text-muted-foreground">
            <p>
              La disección endoscópica submucosa (ESD) es una técnica avanzada
              que permite extraer lesiones complejas del tubo digestivo —como
              tumores tempranos o pólipos grandes— en una sola pieza, sin
              necesidad de cirugía abierta. Al preservar el órgano completo, la
              recuperación es significativamente más rápida.
            </p>
            <p>
              Está indicada cuando el tamaño, ubicación o profundidad de la
              lesión no permiten una resección mucosa convencional. A diferencia
              de la EMR, la ESD permite resecar lesiones más grandes en una sola
              pieza, facilitando un análisis histológico completo y reduciendo el
              riesgo de recurrencia. Atendemos pacientes de Mérida y zonas como
              Temozón, Cholul, Altabrisa y el norte de Yucatán.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Precio y qué incluye */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
            Costo de Disección Submucosa (ESD) en Mérida
          </h2>

          <div className="max-w-3xl space-y-6">
            <p className="text-muted-foreground">
              El precio de la ESD se cotiza de forma personalizada porque cada
              lesión varía en tamaño, ubicación y complejidad técnica. Al
              contactarnos, el {DOCTOR.name} evalúa tu caso y te da un presupuesto
              claro antes de programar.
            </p>

            <div className="rounded-xl border border-border bg-muted p-6">
              <h3 className="font-serif text-lg font-semibold mb-4">
                Incluido en tu cotización
              </h3>
              <ul className="space-y-2">
                {[
                  "Sedación con anestesiólogo",
                  "Disección submucosa completa",
                  "Análisis histopatológico",
                  "Seguimiento post-procedimiento",
                  "Reporte con fotografías",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-muted-foreground">
              Aceptamos efectivo, tarjetas de crédito y opciones de pago a
              plazos.{" "}
              <Link
                href="/precios"
                className="text-primary font-medium hover:underline"
              >
                Ver precios de todos los procedimientos →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Qué esperar */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Qué Esperar de tu Disección Submucosa
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Antes */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                Antes
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Ayuno de 12 horas</li>
                <li>Ajuste de medicamentos según indicación</li>
                <li>Suspensión temporal de anticoagulantes</li>
                <li>Acompañante adulto obligatorio</li>
              </ul>
            </div>

            {/* Durante */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                Durante
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Sedación profunda — no sientes molestias</li>
                <li>Monitoreo constante por anestesiólogo</li>
                <li>Duración: 60–120 min según complejidad</li>
                <li>Resección completa de la lesión</li>
              </ul>
            </div>

            {/* Después */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-accent" />
                Después
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Observación 4–8 horas en hospital</li>
                <li>Líquidos las primeras 24 horas</li>
                <li>Reposo relativo 48 horas</li>
                <li>Control a los 7 días incluido</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Doctor */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Tu Especialista en Disección Submucosa
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Image
              src={DOCTOR.photos.headshot}
              alt={DOCTOR.name}
              width={280}
              height={350}
              className="rounded-2xl object-cover"
            />

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-lg font-semibold">
                  {DOCTOR.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {DOCTOR.bioShort}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {DOCTOR.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="rounded-full bg-accent-light px-4 py-1 text-xs font-medium text-text-accent"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <WhatsAppButton
                  service="Disección Submucosa ESD"
                  position="doctor"
                  procedureName="Disección Endoscópica Submucosa (ESD)"
                  variant="primary"
                  label="Agendar consulta"
                  className="text-sm px-4 py-2"
                />
                <Link
                  href={DOCTOR.profileUrl}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Ver perfil completo →
                </Link>
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
          <Faq routeKey="esd" service="Disección Submucosa ESD" />
        </div>
      </section>

      {/* Section 8: Bottom CTA + Related */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-text-inverse mb-4">
            Agenda tu Evaluación para Disección Submucosa
          </h2>
          <p className="text-text-inverse/80 mb-8 max-w-2xl mx-auto">
            El {DOCTOR.name} te orienta sobre la mejor opción para tu caso.
            Escríbenos por WhatsApp o llámanos directamente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <WhatsAppButton
              service="Disección Submucosa ESD"
              position="bottom-cta"
              procedureName="Disección Endoscópica Submucosa (ESD)"
              variant="primary"
              label="Agendar por WhatsApp"
              className="sm:px-10"
            />
            <CallButton
              service="Disección Submucosa ESD"
              position="bottom-cta"
              variant="inverse"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-text-inverse/70 mb-16">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {CLINIC.address.display}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {CLINIC.hours.display}
            </span>
          </div>

          {/* Related procedures */}
          <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
            {RELATED_PROCEDURES.map((proc) => (
              <Link
                key={proc.href}
                href={proc.href}
                className="group rounded-xl bg-white/10 p-6 text-left transition-colors hover:bg-white/20"
              >
                <h3 className="font-serif text-lg font-semibold text-text-inverse mb-2">
                  {proc.name}
                </h3>
                <p className="text-sm text-text-inverse/70 mb-2">
                  {proc.description}
                </p>
                <p className="text-xs font-medium text-text-inverse/50 mb-4">
                  {proc.price}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-text-inverse group-hover:gap-4 transition-all">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
