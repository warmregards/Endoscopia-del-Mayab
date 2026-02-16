import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, INCLUDED_IN_PRICE, ADDITIONAL_FEES } from "@/lib/pricing"
import { DOCTOR } from "@/lib/doctor"
import { CLINIC } from "@/lib/clinic"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ShieldCheck, Clock, Heart, MapPin } from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("cierre_fistulas")

export default function CierreFistulasPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Cierre de Fístulas por Clips Endoscópicos en Mérida",
              path: "/cierre-fistulas-clips-endoscopicos-merida",
              pricingKey: "cierre_fistulas_clips",
              description:
                "Reparación mínimamente invasiva de perforaciones y fístulas del tracto digestivo con clips endoscópicos en Hospital Amerimed Mérida.",
              procedureType: "Therapeutic",
              bodyLocation: "Tracto digestivo",
              howPerformed:
                "Se introducen clips metálicos especializados mediante endoscopio flexible para cerrar perforaciones o fístulas sin necesidad de cirugía abierta.",
              preparation:
                "Ayuno de 12 horas para sólidos y 8 horas para líquidos. Estudios previos (tomografía o endoscopia diagnóstica). Acompañante obligatorio.",
              followUp:
                "Observación hospitalaria 2-4 horas, dieta líquida 24-48 horas, control endoscópico en 1-2 semanas.",
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
                name: "Cierre de Fístulas",
                path: "/cierre-fistulas-clips-endoscopicos-merida",
              },
            ])
          ),
        }}
      />

      {/* SECTION 1: HERO — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-foreground tracking-tight">
              Cierre de Fístulas y Perforaciones Digestivas en Mérida
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Reparación mínimamente invasiva de perforaciones y fístulas del
              tracto digestivo con clips endoscópicos, sin cirugía abierta. El{" "}
              {DOCTOR.name} realiza este procedimiento en Hospital Amerimed
              Mérida, Yucatán — atendiendo pacientes de Cholul, Temozón,
              Altabrisa y toda la península.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-accent-light/10 border border-accent-light/20 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-text-accent" />
              <span className="text-sm font-medium text-foreground">
                Precio bajo cotización — Evaluación personalizada
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
              {[
                "Sin cirugía abierta",
                "Hospital Amerimed",
                "Cotización personalizada",
                "Atención directa del doctor",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-text-accent" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="cierre fistulas"
                position="hero"
                procedureName="Cierre de Fístulas"
                variant="primary"
              />
              <CallButton
                service="cierre fistulas"
                position="hero"
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DEFINITION + INDICATIONS — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Qué es el Cierre Endoscópico de Fístulas?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              El cierre endoscópico utiliza clips metálicos especializados para
              reparar perforaciones o fugas en el tracto digestivo sin necesidad
              de cirugía abierta. Es una alternativa menos invasiva con tiempo de
              recuperación más corto.
            </p>

            <div className="space-y-2">
              <p className="font-semibold text-foreground">
                Este procedimiento está indicado para:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-text-accent flex-shrink-0 mt-0.5" />
                  Perforación durante o después de una endoscopia
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-text-accent flex-shrink-0 mt-0.5" />
                  Fístulas post-quirúrgicas que no cicatrizan
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-text-accent flex-shrink-0 mt-0.5" />
                  Perforaciones espontáneas por úlceras o enfermedad inflamatoria
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-text-accent flex-shrink-0 mt-0.5" />
                  Dehiscencia de suturas que requiere refuerzo
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-accent-light/10 border border-accent/20 p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Importante:</strong> No todas
                las fístulas son candidatas para cierre endoscópico — se requiere
                evaluación individual para determinar el mejor abordaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRICING / COTIZACIÓN — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Costo del Cierre de Fístulas en Mérida
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              El costo del cierre de fístulas varía según la complejidad del
              caso, el número de clips necesarios y la ubicación de la fístula.
              Ofrecemos cotización personalizada sin compromiso después de una
              evaluación inicial.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-serif font-semibold text-foreground">
                Qué incluye
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                {INCLUDED_IN_PRICE.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-muted p-4 space-y-1">
              <p className="text-sm font-semibold text-foreground">
                Costo adicional
              </p>
              <p className="text-sm text-muted-foreground">
                {ADDITIONAL_FEES.consultation.label}:{" "}
                {mxn(ADDITIONAL_FEES.consultation.amount)}
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              <Link
                href="/precios"
                className="text-primary hover:underline font-medium"
              >
                Ver todos nuestros precios →
              </Link>
            </p>

            <WhatsAppButton
              service="cotización cierre fistulas"
              position="pricing"
              label="Solicitar cotización"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: PREPARATION & RECOVERY — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
            Preparación y Recuperación
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Preparación */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-text-accent" />
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Antes del procedimiento
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Ayuno 12 h sólidos,</strong> 8 h líquidos
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Medicamentos esenciales</strong> con sorbo mínimo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Acompañante obligatorio</strong> para el alta
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Estudios previos:</strong> tomografía o endoscopia
                    diagnóstica
                  </span>
                </li>
              </ul>
            </div>

            {/* Recuperación */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Después del procedimiento
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Observación 2–4 horas</strong> en hospital
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Dieta líquida 24–48 horas</strong> según tolerancia
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Control endoscópico</strong> en 1–2 semanas
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Vigilancia de signos de alarma</strong> las primeras
                    24 h
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DOCTOR CREDENTIALS — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Image
              src={DOCTOR.photos.headshot}
              alt={DOCTOR.name}
              width={280}
              height={350}
              className="rounded-2xl w-full max-w-[280px] h-auto mx-auto md:mx-0"
            />

            <div className="flex-1 space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                Tu Especialista: {DOCTOR.name}
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {DOCTOR.bioShort}
              </p>

              <div className="flex flex-wrap gap-2">
                {DOCTOR.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-2 text-xs font-medium text-foreground"
                  >
                    <ShieldCheck className="h-4 w-4 text-text-accent" />
                    {cred}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Como cirujano con formación en endoscopia, el {DOCTOR.name} puede
                manejar complicaciones que requieren intervención quirúrgica
                inmediata si el cierre endoscópico no es suficiente.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <WhatsAppButton
                  service="cierre fistulas"
                  position="doctor"
                  procedureName="Cierre de Fístulas"
                  variant="primary"
                  size="compact"
                />
                <Link
                  href="/dr-omar-quiroz"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Ver perfil completo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: GOOGLE REVIEWS — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* SECTION 7: FAQ — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="cierre_fistulas" service="cierre fistulas" />
        </div>
      </section>

      {/* SECTION 8: RELATED + BOTTOM CTA — bg-primary */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
            ¿Listo para tu evaluación?
          </h2>

          {/* Related procedures */}
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              {
                name: "Sutura Endoscópica",
                href: "/sutura-endoscopica-merida",
              },
              {
                name: "Endoprótesis Esofágicas",
                href: "/endoprotesis-esofagicas-merida",
              },
              { name: "CPRE", href: "/cpre-merida" },
            ].map((proc) => (
              <Link
                key={proc.href}
                href={proc.href}
                className="rounded-xl border border-white/20 bg-white/10 p-4 text-white hover:bg-white/20 transition-colors text-sm font-medium"
              >
                {proc.name} →
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{CLINIC.address.display}</span>
          </div>
          <p className="text-white/70 text-sm">{CLINIC.hours.display}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              service="cierre fistulas"
              position="bottom-cta"
              procedureName="Cierre de Fístulas"
              variant="primary"
              className="sm:px-10"
            />
            <CallButton
              service="cierre fistulas"
              position="bottom-cta"
              variant="inverse"
            />
          </div>
        </div>
      </section>
    </>
  )
}
