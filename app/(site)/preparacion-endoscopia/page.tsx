import { metaFor } from "@/lib/routes-seo"
import { mxn, ADDITIONAL_FEES } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Moon,
  Sun,
  MapPin,
} from "lucide-react"
import Faq from "@/components/Faq"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import FueraDeMeridaStrip from "@/components/FueraDeMeridaStrip"

// Public, general endoscopy prep protocol (source: PrepSync seeded templates +
// prep-builder.ts timelines, reviewed by Dr. Quiroz). The personalized layer —
// which schedule applies, anticoagulant stop date, diabetic adjustments — stays
// in the WhatsApp / PrepSync PDF. Organic-only: never an Ads destination.

export const revalidate = 86400
export const metadata = metaFor("preparacion_endoscopia")

const SERVICE = "preparacion_endoscopia"
const WA_MESSAGE =
  "Hola, quiero agendar una endoscopia y recibir mis instrucciones de preparación."

const schedules = [
  {
    icon: Sun,
    title: "Si tu cita es por la mañana",
    clear: "Puedes tomar agua, té o gelatina antes de medianoche.",
    fast: "Ayuno total desde las 12:00 AM.",
  },
  {
    icon: Moon,
    title: "Si tu cita es por la tarde",
    clear: "Puedes tomar agua, té o gelatina antes de las 9:00 AM.",
    fast: "Ayuno total desde las 9:00 AM.",
  },
]

export default function PreparacionEndoscopiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: "Endoscopia en Mérida", path: "/endoscopia-merida" },
              { name: "Preparación para endoscopia", path: "/preparacion-endoscopia" },
            ])
          ),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl md:text-4xl lg:text-5xl">
              Cómo prepararte para tu endoscopia
            </h1>

            <div className="bg-accent-light border border-accent/20 rounded-xl p-6 space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Regla principal</p>
              <p className="font-serif font-bold text-foreground text-xl md:text-2xl tracking-tight">
                Ayuno total de 8 horas antes del estudio — sin comer ni beber
                nada, ni agua.
              </p>
            </div>

            <p className="text-foreground/80 leading-relaxed">
              Esta es la preparación general. Tus horarios exactos dependen de la
              hora de tu cita y de tus medicamentos.{" "}
              <strong className="font-semibold text-foreground">
                Las instrucciones detalladas se envían por WhatsApp al agendar.
              </strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service={SERVICE}
                position="hero"
                label="Agendar y recibir instrucciones"
                message={WA_MESSAGE}
                className="sm:px-8"
              />
              <CallButton service={SERVICE} position="hero" variant="ghost" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: DÍA ANTERIOR + CRONOGRAMA — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                El día anterior
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                La cena, solo líquidos claros: agua, té, gelatina.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {schedules.map(({ icon: Icon, title, clear, fast }) => (
                <div
                  key={title}
                  className="bg-card border border-border rounded-xl p-6 space-y-4"
                >
                  <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight flex items-center gap-2">
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                    {title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{clear}</p>
                  <p className="font-semibold text-foreground">{fast}</p>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-2">
              <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                El día del estudio
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Ayuno total. Si tomas medicamento para la presión, tómalo con un
                sorbo pequeño de agua y nada más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: DIABETES + ANTICOAGULANTES — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
              Si tomas medicamentos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                  Si tienes diabetes
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Ayuno máximo de 6 horas. No apliques insulina ni tomes pastillas
                  para la diabetes la mañana del estudio. Trae tus medicamentos
                  para tomarlos después.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                  Si tomas anticoagulantes
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Se suspenden a partir de una fecha que el {DOCTOR.name} te
                  indica al agendar, y se reanudan según su indicación después del
                  estudio.
                </p>
                <p className="flex items-start gap-2 font-semibold text-foreground">
                  <AlertTriangle className="h-4 w-4 text-primary flex-shrink-0 mt-1" aria-hidden />
                  No lo suspendas por tu cuenta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: AL LLEGAR — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
              Al llegar al hospital
            </h2>

            <ul className="space-y-4 text-foreground/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-1" aria-hidden />
                <span>
                  {CLINIC.hospitalName}, Consultorio 517, con el {DOCTOR.name}.
                  Llega a la hora de tu cita — la atención es personalizada y en
                  privado.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" aria-hidden />
                <span>
                  <strong className="font-semibold text-foreground">
                    Acompañante adulto obligatorio;
                  </strong>{" "}
                  no puedes conducir después de la sedación.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" aria-hidden />
                <span>Estancia total de 2 a 3 horas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" aria-hidden />
                <span>
                  Reporte con fotos el mismo día. Si hubo biopsias, el resultado
                  de patología llega en 5–7 días ({mxn(ADDITIONAL_FEES.biopsy.amount)},
                  se te informa antes).
                </span>
              </li>
            </ul>

            <FueraDeMeridaStrip />

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <Link
                href="/endoscopia-merida"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 hover:underline transition-all min-h-[44px]"
              >
                Todo sobre la endoscopia <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/precios"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 hover:underline transition-all min-h-[44px]"
              >
                Ver precios <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: FAQ — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <Faq routeKey="preparacion_endoscopia" service={SERVICE} />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: BOTTOM CTA — bg-primary
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-primary">
        <div className="container-page section-padding">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                Tus instrucciones exactas llegan al agendar
              </h2>
              <p className="text-white/80 mt-2">
                Escríbenos y te enviamos la preparación para la hora de tu cita.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service={SERVICE}
                position="bottom-cta"
                label="Agendar por WhatsApp"
                message={WA_MESSAGE}
                className="sm:px-10"
              />
              <CallButton service={SERVICE} position="bottom-cta" variant="inverse" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
