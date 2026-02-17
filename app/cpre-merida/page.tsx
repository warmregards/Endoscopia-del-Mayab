import { metaFor } from "@/lib/routes-seo"
import { displayFrom } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, MapPin } from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("cpre")

/* ── Data ──────────────────────────────────────────────────────────────── */

const trustChips = [
  "Sedación incluida",
  "Hospital Amerimed",
  "Resultados mismo día",
  "WhatsApp directo con el doctor",
]

const includedItems = [
  "Sedación profunda con anestesiólogo",
  "Fluoroscopía en tiempo real",
  "Extracción de cálculos biliares",
  "Duodenoscopio especializado",
  "Materiales estándar",
  "Seguimiento 24 horas",
]

const relatedProcedures = [
  {
    name: "Endoscopia",
    slug: "endoscopia-merida",
    pricingKey: "endoscopia" as const,
    desc: "Estudio del tracto digestivo superior para diagnóstico de gastritis, úlceras y reflujo.",
  },
  {
    name: "Colonoscopia",
    slug: "colonoscopia-merida",
    pricingKey: "colonoscopia" as const,
    desc: "Estudio del colon para prevención de cáncer colorrectal y detección de pólipos.",
  },
  {
    name: "Dilatación Biliar",
    slug: "dilatacion-biliar-merida",
    pricingKey: "dilatacion_biliar" as const,
    desc: "Tratamiento de estenosis biliares para restablecer el flujo de la bilis.",
  },
]

/* ══════════════════════════════════════════════════════════════════════════ */

export default function CprePage() {
  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "CPRE en Mérida",
              path: "/cpre-merida",
              pricingKey: "cpre",
              description:
                "Colangiopancreatografía retrógrada endoscópica para diagnóstico y tratamiento de cálculos biliares, estenosis y obstrucciones del conducto biliar. Incluye sedación con anestesiólogo.",
              procedureType: "Therapeutic",
              bodyLocation: "Conductos biliares y páncreas",
              howPerformed:
                "Duodenoscopio especializado bajo sedación profunda con fluoroscopía en tiempo real. Duración: 30–90 minutos.",
              preparation:
                "Ayuno 8 horas, análisis de sangre, acudir con acompañante.",
              followUp:
                "Observación 2–3 horas. Reposo 24–48 horas. Seguimiento por WhatsApp.",
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
              { name: "CPRE en Mérida", path: "/cpre-merida" },
            ])
          ),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          Serves: ALL personas
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
              CPRE en Mérida
            </h1>

            <p className="text-muted-foreground leading-relaxed">
              Colangiopancreatografía retrógrada endoscópica — desbloqueamos los
              conductos biliares sin cirugía abierta
            </p>

            {/* Price badge */}
            <div className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-accent-light border border-accent/20">
              <span className="text-2xl sm:text-3xl font-bold text-text-accent">
                {displayFrom("cpre")}
              </span>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
              ¿Te dijeron que tienes cálculos en el conducto biliar? La CPRE los
              resuelve sin abrir. Procedimiento ambulatorio en{" "}
              {DOCTOR.worksFor.hospital}, Mérida — con el{" "}
              {DOCTOR.name} directamente.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
              {trustChips.map((chip) => (
                <div key={chip} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            {/* CTAs — WhatsApp FIRST */}
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="CPRE"
                position="hero"
                procedureName="CPRE"
                label="Agendar por WhatsApp"
                className="sm:px-8"
              />
              <CallButton
                service="CPRE"
                position="hero"
                variant="ghost"
              />
            </div>

            {/* Location signal */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>{CLINIC.address.display}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: ¿Qué es la CPRE? — bg-muted
          Serves: P4 (Directo), P5 (Investigador)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Qué es la CPRE y para qué sirve?
            </h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                La CPRE (colangiopancreatografía retrógrada endoscópica) combina
                un endoscopio especializado con rayos X en tiempo real para ver y
                tratar problemas de los conductos biliares y el páncreas — todo
                en una sola sesión, sin cirugía abierta.
              </p>
              <p>
                Se usa para resolver cálculos atrapados en el conducto biliar,
                estenosis (estrechamientos), ictericia obstructiva y pancreatitis
                biliar. A diferencia de una endoscopia convencional que solo
                observa, la CPRE puede diagnosticar y tratar el problema al mismo
                tiempo.
              </p>
            </div>

            <h3 className="text-lg font-serif font-semibold text-foreground">
              ¿Cuándo necesitas una CPRE?
            </h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Tu médico puede indicar una CPRE si tienes cálculos en el
                conducto biliar (coledocolitiasis), ictericia con sospecha de
                obstrucción, pancreatitis biliar aguda, estenosis de las vías
                biliares o necesitas drenaje biliar antes de una cirugía de
                vesícula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: Precio — bg-background
          Serves: P2 (Comparador)
          ══════════════════════════════════════════════════════════════════ */}
      <section id="precio-cpre-merida" className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Cuánto cuesta una CPRE en Mérida?
            </h2>

            <div className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-accent-light border border-accent/20">
              <span className="text-2xl font-bold text-text-accent">
                {displayFrom("cpre")}
              </span>
            </div>

            {/* What's included */}
            <h3 className="text-lg font-serif font-semibold text-foreground">
              ¿Qué incluye el precio?
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {includedItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            {/* Extra costs */}
            <div className="p-6 rounded-xl bg-muted border border-border">
              <p className="text-foreground/80 leading-relaxed">
                <strong className="text-foreground">Puede tener costo extra:</strong>{" "}
                stents plásticos o metálicos y accesorios SpyGlass en casos
                complejos — te cotizamos y autorizas antes del procedimiento.
                Contamos con tecnología SpyGlass para casos que requieren
                visualización directa del conducto biliar.
              </p>
            </div>

            {/* Competitor context */}
            <p className="text-foreground/80 leading-relaxed">
              En hospitales de Mérida, la CPRE cuesta ~$34,000 MXN. En Cancún,
              $40,000+. Nuestro precio es más accesible porque el {DOCTOR.name}{" "}
              trabaja con equipo propio en {DOCTOR.worksFor.hospital} — sin
              sobrecargos de intermediarios.
            </p>

            <Link
              href="/precios"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Ver todos nuestros precios →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: Preparación — bg-muted
          Serves: P4 (Directo), P5 (Investigador)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Preparación para CPRE: antes, durante y después
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Antes */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex items-center justify-center">
                    1
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-foreground">
                    Antes
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Ayuno de 8 horas antes del procedimiento. Te pediremos análisis
                  de sangre (bilirrubinas, enzimas hepáticas, coagulación) y
                  necesitas venir con un acompañante que pueda llevarte a casa.
                </p>
              </div>

              {/* Durante */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">
                    2
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-foreground">
                    Durante
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Te duermes cómodamente con sedación profunda — no sientes nada.
                  El procedimiento dura entre 30 y 90 minutos según la
                  complejidad. Un anestesiólogo monitorea tus signos vitales en
                  todo momento.
                </p>
              </div>

              {/* Después */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex items-center justify-center">
                    3
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-foreground">
                    Después
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Observación de 2 a 3 horas en recuperación. Te damos
                  instrucciones detalladas de cuidados en casa, dieta blanda
                  progresiva y seguimiento por WhatsApp con el {DOCTOR.name}{" "}
                  directamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: Doctor — bg-background
          Serves: P3 (Referido)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Tu especialista en CPRE
            </h2>

            <div className="flex flex-col sm:flex-row gap-8 items-start">
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
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  {DOCTOR.name}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {DOCTOR.bioShort} {DOCTOR.name} es cirujano y endoscopista —
                  resuelve complicaciones que otros centros refieren a cirugía.
                  Entrenado en la UNAM con experiencia internacional.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Pacientes de Valladolid, Campeche, Playa del Carmen, Cancún y
                  la Riviera Maya nos buscan por experiencia en casos complejos de
                  CPRE en la península de Yucatán.{" "}
                  <Link
                    href="/cpre-playa-del-carmen"
                    className="text-primary font-semibold hover:underline"
                  >
                    Información para pacientes de Quintana Roo →
                  </Link>
                </p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2">
                  {DOCTOR.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-accent-light text-sm font-medium text-foreground"
                    >
                      {cred}
                    </span>
                  ))}
                </div>

                <Link
                  href="/dr-omar-quiroz"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Ver perfil completo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: Google Reviews — bg-muted
          Serves: ALL personas
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: FAQ — bg-background
          Serves: P5, P2
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <Faq routeKey="cpre" service="CPRE" />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8: Related Procedures — bg-muted
          Serves: P1, P4
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight mb-8">
            Otros procedimientos que pueden ayudarte
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProcedures.map((proc) => (
              <Link
                key={proc.slug}
                href={`/${proc.slug}`}
                className="group block p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {proc.name}
                </h3>
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  {proc.desc}
                </p>
                <span className="text-sm font-semibold text-text-accent">
                  {displayFrom(proc.pricingKey)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 9: Bottom CTA — bg-primary
          Serves: ALL personas
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
            ¿Listo para agendar tu CPRE?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto leading-relaxed">
            Escríbenos por WhatsApp — te contesta el {DOCTOR.name} directamente.
            Evaluamos tu caso y te damos costo exacto antes del procedimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              service="CPRE"
              position="bottom-cta"
              procedureName="CPRE"
              label="Agendar por WhatsApp"
              className="sm:px-10"
            />
            <CallButton
              service="CPRE"
              position="bottom-cta"
              variant="inverse"
            />
          </div>
        </div>
      </section>
    </>
  )
}
