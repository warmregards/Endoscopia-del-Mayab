import { metaFor } from "@/lib/routes-seo"
import { displayFrom, INCLUDED_IN_PRICE } from "@/lib/pricing"
import { DOCTOR } from "@/lib/doctor"
import { CLINIC } from "@/lib/clinic"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Clock,
  AlertTriangle,
  ArrowRight,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"
import { montserrat } from "@/app/fonts"

export const revalidate = 86400
export const metadata = {
  ...metaFor("endoprotesis_biliares"),
  other: {
    "geo.region": "MX-YUC",
    "geo.placename": CLINIC.address.addressLocality,
    "ICBM": `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
  },
}

export default function EndoprotesisBiliaresPage() {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.endoscopiadelmayab.com"
  ).replace(/\/$/, "")

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Endoprótesis Biliares",
              path: "/endoprotesis-biliares-merida",
              pricingKey: "endoprotesis_biliares",
              procedureType: "Endoscopic",
              bodyLocation: "Biliary system",
              description:
                "Colocación de stents biliares mediante CPRE para restaurar el flujo biliar obstruido por cálculos, estenosis o tumores.",
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
                name: "Endoprótesis Biliares en Mérida",
                path: "/endoprotesis-biliares-merida",
              },
            ])
          ),
        }}
      />

      {/* Section 1: Hero → bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-2 border border-accent/20">
              <span className="text-sm font-medium text-text-accent">
                {displayFrom("endoprotesis_biliares")}
              </span>
            </div>

            <h1
              className={`${montserrat.className} text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground`}
            >
              Endoprótesis Biliares en Mérida
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Stents biliares para restaurar el flujo biliar obstruido por
              cálculos, estenosis o tumores. Colocación mediante{" "}
              <Link
                href="/cpre-merida"
                className="text-primary hover:underline"
              >
                CPRE
              </Link>{" "}
              en Hospital Amerimed, Mérida, Yucatán.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{CLINIC.address.display}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>{CLINIC.hours.display}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Sedación incluida</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="endoprótesis biliar"
                position="hero"
                procedureName="Endoprótesis Biliar"
                label="Agendar Cita"
              />
              <CallButton
                service="endoprótesis biliar"
                position="hero"
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Definition → bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2
            className={`${montserrat.className} text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6`}
          >
            ¿Qué son las Endoprótesis Biliares?
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Las endoprótesis biliares son tubos pequeños (stents) que se colocan
            durante una{" "}
            <Link
              href="/cpre-merida"
              className="text-primary hover:underline"
            >
              CPRE
            </Link>{" "}
            para mantener abierta la vía biliar obstruida. Permiten que la bilis
            fluya normalmente desde el hígado hasta el intestino, aliviando la
            ictericia y mejorando la digestión. Atendemos pacientes de
            Cholul, Temozón, Altabrisa, Montejo y toda el área metropolitana de Mérida.
          </p>

          <h3
            className={`${montserrat.className} text-lg font-semibold text-foreground mb-4`}
          >
            ¿Cuándo se necesitan?
          </h3>
          <div className="grid gap-2 mb-8 max-w-2xl">
            {[
              "Cálculos biliares impactados que no se pueden extraer",
              "Tumores que obstruyen el conducto biliar",
              "Estenosis biliares (estrechamiento del conducto)",
              "Complicaciones post-cirugía biliar",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Stent Plástico */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3
                className={`${montserrat.className} text-lg font-semibold text-foreground mb-4`}
              >
                Stent Plástico
              </h3>
              <div className="space-y-2">
                {[
                  "Temporal: duración 3-6 meses",
                  "Menor costo inicial",
                  "Fácil remoción y reemplazo",
                  "Ideal para estenosis benignas",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{f}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stent Metálico */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3
                className={`${montserrat.className} text-lg font-semibold text-foreground mb-4`}
              >
                Stent Metálico
              </h3>
              <div className="space-y-2">
                {[
                  "Permanente o semi-permanente",
                  "Mejor flujo biliar a largo plazo",
                  "Autoexpandible y más duradero",
                  "Ideal para casos oncológicos",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Pricing → bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2
            className={`${montserrat.className} text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-2`}
          >
            Costo de Endoprótesis Biliares en Mérida
          </h2>
          <p className="text-muted-foreground mb-8">
            Precio personalizado según tipo de prótesis y complejidad del caso
          </p>

          <div className="max-w-2xl rounded-xl border border-border bg-card p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-2 border border-accent/20 mb-6">
              <span className="text-sm font-semibold text-text-accent">
                {displayFrom("endoprotesis_biliares")}
              </span>
            </div>

            <p className="text-muted-foreground mb-6">
              El precio varía según el tipo de prótesis (plástica o metálica),
              la complejidad anatómica, los procedimientos adicionales necesarios
              y el tiempo de estancia hospitalaria.
            </p>

            <h3
              className={`${montserrat.className} text-lg font-semibold text-foreground mb-4`}
            >
              Incluye:
            </h3>
            <div className="grid gap-2 mb-8">
              {INCLUDED_IN_PRICE.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <WhatsAppButton
              service="endoprótesis biliar"
              position="pricing"
              procedureName="Endoprótesis Biliar"
              label="Solicitar Cotización"
              className="w-full sm:w-auto"
            />

            <p className="mt-6 text-sm">
              <Link
                href="/precios"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Ver todos nuestros precios
                <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Prep & Recovery → bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2
            className={`${montserrat.className} text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8`}
          >
            Preparación y Recuperación
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Before */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3
                className={`${montserrat.className} text-lg font-semibold text-foreground mb-6`}
              >
                Antes del Procedimiento
              </h3>
              <div className="space-y-4">
                {[
                  {
                    t: "Ayuno de 12 horas",
                    d: "Sin alimentos ni líquidos desde medianoche",
                  },
                  {
                    t: "Suspender anticoagulantes",
                    d: "Si aplica, según indicación médica",
                  },
                  {
                    t: "Exámenes pre-operatorios",
                    d: "Laboratorios y estudios de imagen",
                  },
                  {
                    t: "Acompañante obligatorio",
                    d: "Para traslado posterior a sedación",
                  },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {item.t}
                      </p>
                      <p className="text-sm text-muted-foreground">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3
                className={`${montserrat.className} text-lg font-semibold text-foreground mb-6`}
              >
                Durante la Recuperación
              </h3>
              <div className="space-y-4">
                {[
                  {
                    t: "Observación 2-4 horas",
                    d: "Monitoreo de signos vitales post-procedimiento",
                  },
                  {
                    t: "Evaluación de dolor",
                    d: "Control del dolor y medicación si necesaria",
                  },
                  {
                    t: "Instrucciones de alta",
                    d: "Cuidados en casa y señales de alarma",
                  },
                  {
                    t: "Seguimiento 48-72 horas",
                    d: "Control incluido en el precio",
                  },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {item.t}
                      </p>
                      <p className="text-sm text-muted-foreground">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Warning signs */}
          <div className="mt-8 rounded-xl bg-red-50 border border-red-200 p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Señales de Alarma — Contactar Inmediatamente
            </h3>
            <div className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
              <p>• Fiebre persistente &gt;38°C</p>
              <p>• Dolor abdominal intenso</p>
              <p>• Náusea/vómito persistente</p>
              <p>• Ictericia progresiva</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Doctor Credentials → bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2
            className={`${montserrat.className} text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8`}
          >
            Tu Especialista en Endoprótesis Biliares
          </h2>

          <div className="flex flex-col sm:flex-row gap-8 items-start max-w-3xl">
            <div className="flex-shrink-0">
              <Image
                src={DOCTOR.photos.headshot}
                alt={DOCTOR.name}
                width={160}
                height={160}
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3
                  className={`${montserrat.className} text-lg font-semibold text-foreground`}
                >
                  {DOCTOR.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {DOCTOR.bioShort}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {DOCTOR.credentials.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-full bg-accent-light px-2 py-1 text-xs font-medium text-text-accent border border-accent/20"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <WhatsAppButton
                service="endoprótesis biliar"
                position="doctor"
                procedureName="Endoprótesis Biliar"
                size="compact"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Google Reviews → bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* Section 7: FAQ → bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq
            routeKey="endoprotesis_biliares"
            service="endoprótesis biliar"
          />
        </div>
      </section>

      {/* Section 8: Related Procedures → bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2
            className={`${montserrat.className} text-xl md:text-2xl font-bold tracking-tight text-foreground mb-8`}
          >
            Procedimientos Relacionados
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "CPRE",
                href: "/cpre-merida",
                price: displayFrom("cpre"),
                desc: "Procedimiento base para colocación de stents biliares",
              },
              {
                name: "Dilatación Biliar",
                href: "/dilatacion-biliar-merida",
                price: displayFrom("dilatacion_biliar"),
                desc: "Ensanchamiento de estenosis en conductos biliares",
              },
              {
                name: "Endoprótesis Duodenales",
                href: "/endoprotesis-duodenales-merida",
                price: displayFrom("endoprotesis_duodenales"),
                desc: "Stents para obstrucciones duodenales",
              },
            ].map((proc) => (
              <Link
                key={proc.href}
                href={proc.href}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3
                  className={`${montserrat.className} text-lg font-semibold text-foreground mb-2`}
                >
                  {proc.name}
                </h3>
                <p className="text-sm text-text-accent font-medium mb-2">
                  {proc.price}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {proc.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Ver más
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Bottom CTA → bg-primary */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center">
          <h2
            className={`${montserrat.className} text-2xl md:text-3xl font-bold tracking-tight text-white mb-4`}
          >
            ¿Necesitas una Endoprótesis Biliar en Mérida?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contacta al {DOCTOR.name} para valoración y cotización personalizada.
            Respuesta directa por WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              service="endoprótesis biliar"
              position="bottom-cta"
              procedureName="Endoprótesis Biliar"
              className="sm:px-10"
            />
            <CallButton
              service="endoprótesis biliar"
              position="bottom-cta"
              variant="inverse"
            />
          </div>

          <div className="pt-8 border-t border-white/20 mt-8">
            <p className="text-sm text-white/60">
              <Link
                href="/cpre-merida"
                className="text-white/80 hover:underline"
              >
                CPRE
              </Link>{" "}
              •{" "}
              <Link
                href="/emergencias-digestivas-merida"
                className="text-white/80 hover:underline"
              >
                Emergencias
              </Link>{" "}
              •{" "}
              <Link
                href={DOCTOR.profileUrl}
                className="text-white/80 hover:underline"
              >
                {DOCTOR.name}
              </Link>{" "}
              •{" "}
              <Link
                href="/contacto"
                className="text-white/80 hover:underline"
              >
                Contacto
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
