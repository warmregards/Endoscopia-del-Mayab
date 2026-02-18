import { metaFor } from "@/lib/routes-seo"
import { PRICING, displayFrom, INCLUDED_IN_PRICE, ADDITIONAL_FEES, mxn } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, MapPin, Clock, ArrowRight } from "lucide-react"
import Faq from "@/components/Faq"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("endoprotesis_esofagicas")

const RELATED_PROCEDURES = [
  {
    name: "Dilatación Esofágica",
    slug: "dilatacion-esofagica-merida",
    description: "Primera opción para estenosis esofágicas — cuando el stent no es necesario",
    price: displayFrom("dilatacion_esofagica"),
  },
  {
    name: "Sutura Endoscópica",
    slug: "sutura-endoscopica-merida",
    description: "Reparación de perforaciones y defectos mucosos mayores",
    price: displayFrom("sutura_endoscopica"),
  },
  {
    name: "Cierre de Fístulas por Clips",
    slug: "cierre-fistulas-clips-endoscopicos-merida",
    description: "Alternativa mínimamente invasiva para fístulas de bajo débito",
    price: displayFrom("cierre_fistulas_clips"),
  },
]

export default function EndoprotesisEsofagicasPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Endoprótesis Esofágicas",
              path: "/endoprotesis-esofagicas-merida",
              pricingKey: "endoprotesis_esofagicas",
              description:
                "Stents esofágicos autoexpandibles para restaurar la deglución en casos de estenosis maligna, benigna o fístulas esofágicas.",
              bodyLocation: "Esófago",
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
              { name: "Endoprótesis Esofágicas", path: "/endoprotesis-esofagicas-merida" },
            ])
          ),
        }}
      />

      {/* §1 Hero → bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground">
                Endoprótesis Esofágicas en Mérida
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stents esofágicos autoexpandibles para restaurar la deglución en casos de
                estenosis maligna, benigna o fístulas esofágicas. Valoración personalizada
                en {CLINIC.address.streetAddress}.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-2 border border-accent/20">
                <CheckCircle2 className="h-4 w-4 text-text-accent" />
                {displayFrom("endoprotesis_esofagicas")}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 border border-border">
                <MapPin className="h-4 w-4 text-text-accent" />
                {CLINIC.address.streetAddress}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 border border-border">
                <CheckCircle2 className="h-4 w-4 text-text-accent" />
                Restaura capacidad de tragar
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 border border-border">
                <CheckCircle2 className="h-4 w-4 text-text-accent" />
                Cirujano + Endoscopista
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="endoprótesis esofágica"
                position="hero"
                procedureName="Endoprótesis Esofágica"
                variant="primary"
                className="sm:px-8"
              />
              <CallButton service="endoprótesis esofágica" position="hero" variant="ghost" />
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-text-accent" />
                {CLINIC.address.display}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-text-accent" />
                {CLINIC.hours.display}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* §2 Definition → bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-8">
            <h2 className="font-serif font-bold text-2xl md:text-3xl tracking-tight text-foreground">
              ¿Qué es una endoprótesis esofágica?
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Es un stent metálico autoexpandible que se coloca por endoscopia para mantener
                abierto el esófago. Se indica cuando las dilataciones no son suficientes para
                resolver una estenosis (estrechamiento) o cuando existe una fístula que necesita
                sellarse. No requiere cirugía abierta.
              </p>
              <p>
                El procedimiento se realiza bajo sedación profunda con anestesiólogo en{" "}
                {CLINIC.address.streetAddress}, en la zona norte de Mérida, Yucatán. Dura
                aproximadamente 30–45 minutos y requiere observación de 4–6 horas. Después
                inicias dieta modificada con seguimiento personalizado del {DOCTOR.name}.
              </p>
            </div>

            <div className="rounded-xl bg-background border border-border p-6">
              <h3 className="font-serif font-semibold text-lg tracking-tight text-foreground mb-4">
                Se indica cuando:
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                {[
                  "Estenosis maligna (cáncer esofágico)",
                  "Estenosis benigna recurrente que no responde a dilatación",
                  "Fístulas esófago-traqueales o mediastínicas",
                  "Perforaciones controladas",
                  "Paliación en enfermedad avanzada",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* §3 Pricing / Quote → bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-8">
            <h2 className="font-serif font-bold text-2xl md:text-3xl tracking-tight text-foreground">
              ¿Cuánto cuesta una endoprótesis esofágica?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              El costo depende del tipo de stent (cubierto, parcialmente cubierto, sin cubrir),
              el diámetro y longitud necesarios, y la complejidad de tu caso. Envíanos tus
              estudios por WhatsApp para una cotización personalizada.
            </p>

            <div className="rounded-xl border border-border bg-muted p-6">
              <h3 className="font-serif font-semibold text-lg tracking-tight text-foreground mb-4">
                Qué incluye tu procedimiento
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                {INCLUDED_IN_PRICE.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Único costo adicional posible: {ADDITIONAL_FEES.biopsy.label} ({mxn(ADDITIONAL_FEES.biopsy.amount)})
                — {ADDITIONAL_FEES.biopsy.description.toLowerCase()}.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsAppButton
                service="cotización endoprótesis esofágica"
                position="pricing"
                procedureName="Endoprótesis Esofágica"
                variant="primary"
              />
              <Link
                href="/precios"
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver todos nuestros precios →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* §3.5 Preparation & Recovery → bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-8">
            <h2 className="font-serif font-bold text-2xl md:text-3xl tracking-tight text-foreground">
              Preparación y qué esperar
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif font-semibold text-foreground text-center mb-4">
                  Antes
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-0.5" />
                    <span>Ayuno de 8–12 horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-0.5" />
                    <span>Estudios previos (tomografía, endoscopia diagnóstica)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-0.5" />
                    <span>Suspender anticoagulantes según indicación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-0.5" />
                    <span>Acompañante adulto obligatorio</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif font-semibold text-foreground text-center mb-4">
                  Durante (30–45 min)
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-0.5" />
                    <span>Sedación profunda con anestesiólogo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-0.5" />
                    <span>Endoscopio avanza hasta la estenosis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-0.5" />
                    <span>Despliegue del stent autoexpandible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-0.5" />
                    <span>Verificación de posición y permeabilidad</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif font-semibold text-foreground text-center mb-4">
                  Después
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-0.5" />
                    <span>Observación 4–6 horas en hospital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-0.5" />
                    <span>Dieta modificada (líquidos → blandos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-0.5" />
                    <span>Control endoscópico según indicación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0 mt-0.5" />
                    <span>Seguimiento por WhatsApp incluido</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §4 Doctor Credentials → bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <Image
                src={DOCTOR.photos.headshot}
                alt={DOCTOR.name}
                width={280}
                height={350}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-4">
              <h2 className="font-serif font-bold text-xl md:text-2xl tracking-tight text-foreground">
                Tu especialista: {DOCTOR.name}
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {DOCTOR.bioShort}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Como cirujano general certificado con subespecialidad en endoscopia,
                el {DOCTOR.name} maneja tanto la colocación del stent como cualquier
                complicación quirúrgica — sin referirte a otro especialista.
              </p>

              <div className="flex flex-wrap gap-2">
                {DOCTOR.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center rounded-full bg-accent-light px-4 py-1 text-xs font-medium text-text-accent border border-accent/20"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <WhatsAppButton
                  service="endoprótesis esofágica"
                  position="doctor"
                  procedureName="Endoprótesis Esofágica"
                  variant="primary"
                  size="compact"
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

      {/* §5 Google Reviews → bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* §6 FAQ → bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="endoprotesis_esofagicas" service="endoprótesis esofágica" />
        </div>
      </section>

      {/* §7 Related Procedures → bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif font-bold text-xl md:text-2xl tracking-tight text-foreground mb-8">
            Procedimientos relacionados
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {RELATED_PROCEDURES.map((proc) => (
              <Link
                key={proc.slug}
                href={`/${proc.slug}`}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="font-serif font-semibold text-lg tracking-tight text-foreground mb-2">
                  {proc.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {proc.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-text-accent">
                    {proc.price}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* §8 Bottom CTA → bg-primary */}
      <section className="bg-primary">
        <div className="container-page py-16 text-center space-y-6">
          <h2 className="font-serif font-bold text-2xl md:text-3xl tracking-tight text-primary-foreground">
            ¿Necesitas valoración para endoprótesis esofágica?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Envía tus estudios por WhatsApp y el {DOCTOR.name} te orienta sobre la
            mejor opción para tu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              service="endoprótesis esofágica"
              position="bottom-cta"
              procedureName="Endoprótesis Esofágica"
              variant="primary"
              className="sm:px-10"
            />
            <CallButton
              service="endoprótesis esofágica"
              position="bottom-cta"
              variant="inverse"
            />
          </div>
        </div>
      </section>
    </>
  )
}
