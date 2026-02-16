import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, INCLUDED_IN_PRICE } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Clock,
  AlertTriangle,
  Activity,
  Heart,
  Stethoscope,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("endoprotesis_colonicas")

export default function EndoprotesisColonicasPage() {
  return (
    <>
      {/* JSON-LD: MedicalProcedure */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Endoprótesis Colónicas en Mérida",
              path: "/endoprotesis-colonicas-merida",
              pricingKey: "endoprotesis_colonicas",
              description:
                "Stents colónicos autoexpandibles para resolver obstrucciones intestinales de urgencia en Hospital Amerimed, Mérida, Yucatán.",
              procedureType: "Therapeutic",
            })
          ),
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              {
                name: "Endoprótesis Colónicas en Mérida",
                path: "/endoprotesis-colonicas-merida",
              },
            ])
          ),
        }}
      />

      {/* S1: HERO — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-sm font-medium text-red-700">
              <AlertTriangle className="h-4 w-4" />
              Atención de urgencias disponible
            </span>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Endoprótesis Colónicas en Mérida
            </h1>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Stents autoexpandibles para resolver obstrucciones intestinales de
              urgencia. Evaluación inmediata en {CLINIC.address.streetAddress}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="endoprotesis colonica"
                position="hero"
                procedureName="Endoprótesis Colónica"
                className="sm:px-8"
              />
              <CallButton
                service="endoprotesis colonica"
                position="hero"
                variant="ghost"
              />
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-foreground/70">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-strong" />
                {CLINIC.address.streetAddress.split(",")[0]}, Mérida
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-strong" />
                {CLINIC.hours.display}
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent-strong" />
                Endoscopista + Cirujano certificado
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* S2: DEFINITION — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
              ¿Qué es una endoprótesis colónica?
            </h2>

            <p className="text-foreground/80 leading-relaxed mb-6">
              Es un stent (tubo de malla metálica autoexpandible) que se coloca
              dentro del colon para abrir una obstrucción intestinal sin
              necesidad de cirugía de emergencia. Se realiza por colonoscopia con
              guía fluoroscópica bajo sedación profunda.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">
                  <strong className="text-foreground">
                    Obstrucción intestinal completa:
                  </strong>{" "}
                  repermeabilización inmediata para aliviar síntomas agudos.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">
                  <strong className="text-foreground">
                    Puente a cirugía programada:
                  </strong>{" "}
                  estabilización del paciente antes de una intervención
                  quirúrgica electiva.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">
                  <strong className="text-foreground">
                    Paliación de síntomas:
                  </strong>{" "}
                  alivio en pacientes no candidatos a cirugía.
                </p>
              </div>
            </div>

            <p className="text-foreground/80 leading-relaxed">
              El {DOCTOR.name} es endoscopista y cirujano, lo que significa que
              si el stent no resuelve la obstrucción, puede evaluar opciones
              quirúrgicas de inmediato — sin esperar otro especialista.
              Accesible desde cualquier punto de Mérida — Altabrisa, Montebello,
              Cholul, Temozón Norte y García Ginerés.
            </p>
          </div>
        </div>
      </section>

      {/* S3: PRICING — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
              Costo de Endoprótesis Colónica en Mérida
            </h2>

            <div className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-6">
              <div>
                <p className="text-2xl font-bold text-text-accent">
                  {mxn(PRICING.endoprotesis_colonicas.from)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  El costo depende del tipo de stent, complejidad del caso y
                  urgencia. Escríbenos para cotización personalizada.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Qué incluye
                </h3>
                <ul className="space-y-2">
                  {INCLUDED_IN_PRICE.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 text-foreground/80"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  service="endoprotesis colonica"
                  position="pricing"
                  label="Cotización por WhatsApp"
                  procedureName="Endoprótesis Colónica"
                />
              </div>

              <p className="text-sm text-muted-foreground">
                <Link
                  href="/precios"
                  className="text-primary hover:underline font-medium"
                >
                  Ver todos los precios →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S4: PROCESS — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
              ¿Cómo se realiza la endoprótesis colónica?
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Evaluación de Urgencia",
                  desc: "Evaluación clínica inmediata con tomografía abdominal urgente para localizar la obstrucción y determinar si eres candidato a stent o cirugía.",
                },
                {
                  step: 2,
                  title: "Preparación Inmediata",
                  desc: "Consentimiento informado, selección del stent apropiado según el caso y coordinación con anestesiología para sedación profunda.",
                },
                {
                  step: 3,
                  title: "Colocación del Stent",
                  desc: "Colonoscopia hasta la zona de estenosis, medición de la longitud de obstrucción y liberación del stent autoexpandible con verificación de permeabilidad.",
                },
                {
                  step: 4,
                  title: "Evaluación Postprocedimiento",
                  desc: "Verificación de permeabilidad del stent, radiografía de control y monitoreo de alivio de síntomas en las primeras horas.",
                },
                {
                  step: 5,
                  title: "Plan Definitivo",
                  desc: "Según el caso: puente a cirugía programada, manejo paliativo definitivo o seguimiento endoscópico. El Dr. Quiroz evalúa todas las opciones.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-strong flex items-center justify-center text-white font-bold text-sm">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      {title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-accent/20 text-sm font-medium text-foreground">
              <Clock className="h-4 w-4 text-accent-strong" />
              Procedimiento: 30–45 minutos | Alivio de obstrucción: inmediato
            </div>
          </div>
        </div>
      </section>

      {/* S5: DOCTOR — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
              Tu especialista:{" "}
              <Link
                href={DOCTOR.profileUrl}
                className="hover:underline"
              >
                {DOCTOR.name}
              </Link>
            </h2>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-shrink-0">
                <Image
                  src={DOCTOR.photos.headshot}
                  alt={`${DOCTOR.name} — Endoscopista y Cirujano`}
                  width={280}
                  height={280}
                  className="rounded-2xl"
                />
              </div>

              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  {DOCTOR.bio}
                </p>

                <ul className="space-y-2">
                  {DOCTOR.credentials.slice(0, 4).map((cred) => (
                    <li
                      key={cred}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <ShieldCheck className="h-4 w-4 text-accent-strong flex-shrink-0" />
                      {cred}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-foreground/80">
                  <strong className="text-foreground">Ventaja dual:</strong> Como
                  endoscopista y cirujano, el {DOCTOR.name} puede resolver
                  obstrucciones por endoscopia o evaluar opciones quirúrgicas de
                  inmediato si es necesario — todo en{" "}
                  {CLINIC.address.streetAddress}, Mérida, Yucatán.
                </p>

                <WhatsAppButton
                  service="endoprotesis colonica"
                  position="doctor"
                  procedureName="Endoprótesis Colónica"
                  size="compact"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S6: REVIEWS — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* S7: FAQ — bg-background */}
      <section className="bg-background">
        <Faq
          routeKey="endoprotesis_colonicas"
          service="endoprotesis colonica"
          heading="Preguntas frecuentes sobre endoprótesis colónicas"
        />
      </section>

      {/* S8: RELATED + CTA — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          {/* Related procedures */}
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
            Procedimientos relacionados
          </h2>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            <Link
              href="/dilatacion-colonica-merida"
              className="group p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
            >
              <Activity className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Dilatación Colónica
              </h3>
              <p className="text-sm text-foreground/80">
                Alternativa para estenosis menos severas del colon.
              </p>
            </Link>

            <Link
              href="/endoprotesis-esofagicas-merida"
              className="group p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
            >
              <Heart className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Endoprótesis Esofágicas
              </h3>
              <p className="text-sm text-foreground/80">
                Stents para obstrucciones esofágicas.
              </p>
            </Link>

            <Link
              href="/endoprotesis-duodenales-merida"
              className="group p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
            >
              <Stethoscope className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Endoprótesis Duodenales
              </h3>
              <p className="text-sm text-foreground/80">
                Stents para obstrucciones duodenales.
              </p>
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="rounded-2xl bg-primary p-8 md:p-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
              ¿Necesitas evaluación para endoprótesis colónica?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Contacta al {DOCTOR.name} para evaluación inmediata. Disponible
              para urgencias en {CLINIC.address.streetAddress.split(",")[0]},
              Mérida, Yucatán.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service="endoprotesis colonica"
                position="cta section"
                procedureName="Endoprótesis Colónica"
                className="sm:px-10"
              />
              <CallButton
                service="endoprotesis colonica"
                position="cta section"
                variant="inverse"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
