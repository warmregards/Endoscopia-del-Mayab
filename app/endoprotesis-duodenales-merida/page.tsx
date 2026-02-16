import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, INCLUDED_IN_PRICE, ADDITIONAL_FEES } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  AlertTriangle,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("endoprotesis_duodenales")

export default function EndoprotesisDuodenalesPage() {
  return (
    <>
      {/* ── Section 1: Hero ── bg-background ── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/10 border border-accent/20">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-text-accent">
                Alternativa Paliativa No Quirúrgica
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-foreground tracking-tight">
              Endoprótesis Duodenales en Mérida
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Stent duodenal para aliviar obstrucciones del duodeno. Procedimiento
              con sedación en {DOCTOR.worksFor.hospital}, Mérida, Yucatán.
              Evaluación personalizada por el {DOCTOR.name}.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 p-4 rounded-lg bg-muted/50">
                <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">45–60 min</div>
                  <div className="text-muted-foreground">Duración</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-4 rounded-lg bg-muted/50">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">
                    {DOCTOR.worksFor.hospital}
                  </div>
                  <div className="text-muted-foreground">Mérida, Yucatán</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-4 rounded-lg bg-muted/50">
                <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">
                    {mxn(PRICING.endoprotesis_duodenales.from)}
                  </div>
                  <div className="text-muted-foreground">Precio</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="endoprotesis duodenal"
                position="hero"
                procedureName="Endoprótesis Duodenal"
              />
              <CallButton
                service="endoprotesis duodenal"
                position="hero"
                variant="ghost"
              />
            </div>

            <p className="text-sm text-muted-foreground">
              {CLINIC.address.display} · {CLINIC.hours.display}
            </p>
            <p className="text-sm text-muted-foreground">
              Atendemos pacientes de Mérida Centro, Montebello, Altabrisa,
              Temozón Norte, Cholul, García Ginerés y toda la zona metropolitana.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Definition + Indications ── bg-muted ── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-6">
            ¿Qué Son las Endoprótesis Duodenales?
          </h2>

          <div className="max-w-3xl space-y-4">
            <p className="text-foreground leading-relaxed">
              Las endoprótesis duodenales son stents metálicos autoexpandibles que
              se colocan por endoscopia para restablecer el paso de alimentos a
              través del duodeno cuando existe una obstrucción. Es un tratamiento
              mínimamente invasivo que permite al paciente volver a comer por
              boca, evitando en muchos casos una cirugía mayor.
            </p>

            <p className="text-foreground leading-relaxed">
              <strong>Principales indicaciones:</strong> obstrucción por cáncer
              pancreático, tumores duodenales, estenosis post-quirúrgica y
              pancreatitis crónica con estenosis.
            </p>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-background border border-border">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-serif font-semibold text-foreground tracking-tight">
                Consulta si presentas:
              </h3>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="flex items-start gap-2 text-foreground">
                <AlertTriangle className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                Vómitos persistentes después de comer
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <AlertTriangle className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                Pérdida de peso progresiva
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <AlertTriangle className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                Sensación de llenura extrema con poca comida
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <AlertTriangle className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                Dolor abdominal superior que empeora al comer
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 3: Pricing & What's Included ── bg-background ── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-6">
            Costo de Endoprótesis Duodenales en Mérida
          </h2>

          <div className="max-w-3xl space-y-6">
            <p className="text-foreground leading-relaxed">
              El costo de las endoprótesis duodenales varía según el tipo de stent
              necesario y la complejidad de cada caso. El {DOCTOR.name} evalúa cada
              situación y te proporciona una cotización personalizada.
            </p>

            <div className="p-6 rounded-xl border border-border bg-muted/30">
              <h3 className="text-lg font-serif font-semibold text-foreground tracking-tight mb-4">
                Tu procedimiento incluye:
              </h3>
              <ul className="space-y-4">
                {INCLUDED_IN_PRICE.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm text-foreground">
                <strong>Costo adicional si aplica:</strong>{" "}
                {mxn(ADDITIONAL_FEES.biopsy.amount)} —{" "}
                {ADDITIONAL_FEES.biopsy.description}
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              <Link
                href="/precios"
                className="text-primary hover:underline font-medium"
              >
                Consulta todos nuestros precios →
              </Link>
            </p>

            <WhatsAppButton
              label="Solicitar Cotización por WhatsApp"
              service="cotización endoprótesis duodenal"
              position="pricing"
              procedureName="Endoprótesis Duodenal"
            />
          </div>
        </div>
      </section>

      {/* ── Section 4: What to Expect ── bg-muted ── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
            ¿Cómo es el Procedimiento?
          </h2>

          <div className="grid gap-6 md:grid-cols-4 mb-16">
            {[
              {
                step: 1,
                title: "Evaluación y Diagnóstico",
                desc: "Tomografía + endoscopia para localizar obstrucción duodenal",
              },
              {
                step: 2,
                title: "Sedación y Acceso",
                desc: "Sedación profunda + duodenoscopio hasta sitio de obstrucción",
              },
              {
                step: 3,
                title: "Colocación del Stent",
                desc: "Guía fluoroscópica + despliegue de stent autoexpandible",
              },
              {
                step: 4,
                title: "Recuperación y Seguimiento",
                desc: "Observación hospitalaria + progresión dietética gradual",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="text-center p-6 rounded-2xl border border-border bg-background"
              >
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground tracking-tight mb-6">
                Beneficios del Procedimiento
              </h3>
              <div className="space-y-4">
                {[
                  ["Alivio inmediato:", "Permite el paso de alimentos en horas"],
                  ["Mínimamente invasivo:", "Sin incisiones quirúrgicas"],
                  ["Recuperación rápida:", "Alta en 24-48 horas"],
                  [
                    "Mejoría nutricional:",
                    "Permite alimentación oral adecuada",
                  ],
                ].map(([bold, text]) => (
                  <div key={bold} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>{bold}</strong> {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground tracking-tight mb-6">
                Recuperación
              </h3>
              <div className="space-y-4">
                {[
                  ["Observación:", "24-48 horas en hospital"],
                  ["Dieta progresiva:", "Líquidos → blandos → sólidos"],
                  ["Control de síntomas:", "Mejoría en vómitos y dolor"],
                  ["Seguimiento:", "Control a los 7 días incluido"],
                ].map(([bold, text]) => (
                  <div key={bold} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>{bold}</strong> {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Doctor Credentials ── bg-background ── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
            Tu Especialista: {DOCTOR.name}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={DOCTOR.photos.headshot}
                  alt={DOCTOR.name}
                  width={480}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </div>

              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground tracking-tight mb-2">
                  {DOCTOR.name}
                </h3>
                <p className="text-muted-foreground mb-2">{DOCTOR.bioShort}</p>
                <Link
                  href={DOCTOR.profileUrl}
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Ver perfil completo →
                </Link>
                <ul className="space-y-2">
                  {DOCTOR.credentials.map((cred) => (
                    <li
                      key={cred}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-serif font-semibold text-foreground mb-2 tracking-tight">
                  Manejo de Complicaciones
                </h3>
                <p className="text-muted-foreground">
                  Si durante la colocación surgen complicaciones como perforación
                  o sangrado, el {DOCTOR.name} puede resolverlas quirúrgicamente
                  en la misma sesión, evitando traslados de emergencia.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-serif font-semibold text-foreground mb-2 tracking-tight">
                  Evaluación Quirúrgica Simultánea
                </h3>
                <p className="text-muted-foreground">
                  Si la endoprótesis no es factible, puede ofrecer opciones
                  quirúrgicas como gastroenterostomía laparoscópica sin derivar a
                  otros médicos.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-serif font-semibold text-foreground mb-2 tracking-tight">
                  Anatomía Duodenal Compleja
                </h3>
                <p className="text-muted-foreground">
                  Conocimiento anatómico quirúrgico para abordar casos con
                  anatomía alterada por cirugías previas o procesos malignos
                  complejos.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-accent-light/10 border border-accent/20">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-semibold text-foreground mb-2 tracking-tight">
                      Transparencia en Expectativas
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Las endoprótesis duodenales son principalmente un
                      tratamiento paliativo para mejorar calidad de vida. El éxito
                      se mide por la mejoría en síntomas y capacidad de
                      alimentación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Google Reviews ── bg-muted ── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* ── Section 7: FAQ + Related Procedures ── bg-background ── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="endoprotesis_duodenales" service="endoprotesis duodenal" />

          <div className="mt-16">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight mb-8">
              Procedimientos Relacionados
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Endoprótesis Biliares",
                  href: "/endoprotesis-biliares-merida",
                  desc: "Stents para restablecer el flujo biliar en obstrucciones por cálculos o tumores.",
                },
                {
                  name: "Endoprótesis Esofágicas",
                  href: "/endoprotesis-esofagicas-merida",
                  desc: "Stents esofágicos para estenosis malignas, fístulas y perforaciones controladas.",
                },
                {
                  name: "CPRE",
                  href: "/cpre-merida",
                  desc: "Diagnóstico y tratamiento de problemas biliares y pancreáticos por endoscopia.",
                },
              ].map((proc) => (
                <Link
                  key={proc.href}
                  href={proc.href}
                  className="group block p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
                >
                  <h4 className="font-serif font-semibold text-foreground mb-2 tracking-tight">
                    {proc.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {proc.desc}
                  </p>
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    Ver más →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Bottom CTA ── bg-primary ── */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight mb-4">
            ¿Necesitas Evaluación para Endoprótesis Duodenales?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            El {DOCTOR.name} evaluará tu caso y te orientará sobre la mejor
            opción de tratamiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              service="endoprotesis duodenal"
              position="bottom-cta"
              procedureName="Endoprótesis Duodenal"
            />
            <CallButton
              service="endoprotesis duodenal"
              position="bottom-cta"
              variant="inverse"
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
              name: "Endoprótesis Duodenales en Mérida",
              path: "/endoprotesis-duodenales-merida",
              pricingKey: "endoprotesis_duodenales",
              description:
                "Colocación endoscópica de stent metálico autoexpandible en el duodeno para aliviar obstrucciones. Procedimiento paliativo mínimamente invasivo realizado por el Dr. Omar Quiroz en Hospital Amerimed, Mérida.",
              procedureType: "Therapeutic",
              bodyLocation: "Duodeno",
              howPerformed:
                "Colocación endoscópica con duodenoscopio terapéutico y guía fluoroscópica bajo sedación profunda",
              preparation:
                "Evaluación con tomografía y endoscopia diagnóstica. Ayuno de 8 horas previo al procedimiento.",
              followUp:
                "Observación hospitalaria 24-48 horas, dieta progresiva de líquidos a sólidos, control a los 7 días.",
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
                name: "Endoprótesis Duodenales en Mérida",
                path: "/endoprotesis-duodenales-merida",
              },
            ])
          ),
        }}
      />
    </>
  )
}
