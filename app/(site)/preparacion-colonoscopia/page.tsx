import { metaFor } from "@/lib/routes-seo"
import { DOCTOR } from "@/lib/doctor"
import { breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react"
import Faq from "@/components/Faq"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import FueraDeMeridaStrip from "@/components/FueraDeMeridaStrip"

// Public, general colonoscopy prep protocol (source: PrepSync seeded templates +
// prep-builder.ts timelines, reviewed by Dr. Quiroz). Only the morning example
// schedule is published; afternoon and doble schedules, liter count, brand
// substitutions and medication adjustments stay in the WhatsApp / PrepSync PDF.
// Organic-only: never an Ads destination.

export const revalidate = 86400
export const metadata = metaFor("preparacion_colonoscopia")

const SERVICE = "preparacion_colonoscopia"
const WA_MESSAGE =
  "Hola, quiero agendar una colonoscopia y recibir mi cronograma de preparación."

const exampleSchedule: { time: string; step: string; note?: string; strong?: boolean }[] = [
  { time: "7:00 PM", step: "Litro 1", note: "Un vaso cada 15 minutos" },
  { time: "8:00 PM", step: "Litro 2", note: "Un vaso cada 15 minutos" },
  { time: "9:00 PM", step: "Descanso", note: "Agua, té o gelatina" },
  { time: "10:00 PM", step: "Litro 3", note: "Un vaso cada 15 minutos" },
  { time: "11:00 PM", step: "Litro 4", note: "Un vaso cada 15 minutos" },
  { time: "12:00 AM", step: "Ayuno total", strong: true },
]

export default function PreparacionColonoscopiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: "Colonoscopia en Mérida", path: "/colonoscopia-merida" },
              { name: "Preparación para colonoscopia", path: "/preparacion-colonoscopia" },
            ])
          ),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          Coordination gate is prominent, before any schedule.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl md:text-4xl lg:text-5xl">
              Cómo prepararte para tu colonoscopia
            </h1>

            <p className="text-lg text-foreground leading-relaxed">
              Una buena limpieza del colon es clave para un estudio completo. Si
              la preparación no es adecuada, el estudio puede tener que
              reprogramarse.
            </p>

            <div className="bg-accent-light border border-accent/20 rounded-xl p-6 space-y-4">
              <p className="font-serif font-bold text-foreground text-xl tracking-tight">
                La preparación para colonoscopia se coordina siempre con nosotros.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                La cantidad de solución, los horarios y los ajustes de
                medicamentos dependen de tu caso y de la hora de tu cita.{" "}
                <strong className="font-semibold text-foreground">
                  Llámanos o escríbenos y te enviamos tu cronograma exacto.
                </strong>{" "}
                Las instrucciones detalladas se envían por WhatsApp al agendar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service={SERVICE}
                position="hero"
                label="Recibir mi cronograma"
                message={WA_MESSAGE}
                className="sm:px-8"
              />
              <CallButton service={SERVICE} position="hero" variant="ghost" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: QUÉ COMPRAR + QUÉ COMER — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-accent" aria-hidden />
                Qué comprar
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                <strong className="font-semibold text-foreground">Nulytely</strong>{" "}
                (Macrogol 3350 + electrolitos), caja de 4 sobres — pide sabor lima
                o cereza si hay. Cada sobre se disuelve en 1 litro de agua.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Al agendar te confirmamos cuántos litros necesitas y si puedes
                usar otra marca.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight flex items-center gap-2">
                <UtensilsCrossed className="h-6 w-6 text-accent" aria-hidden />
                El día anterior
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Solo líquidos claros: agua, té, gelatina, jugo, caldos o sopas sin
                verdura ni carne.
              </p>
              <p className="font-semibold text-foreground">Nada de color rojo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: CRONOGRAMA DE EJEMPLO — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                Cronograma de ejemplo
              </h2>
              <p className="text-muted-foreground">
                Ejemplo para cita por la mañana — el tuyo puede variar.
              </p>
            </div>

            <ol className="border border-border rounded-xl overflow-hidden bg-card">
              {exampleSchedule.map((s, i) => (
                <li
                  key={s.time}
                  className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-6 ${
                    i < exampleSchedule.length - 1 ? "border-b border-border" : ""
                  } ${s.strong ? "bg-accent-light" : ""}`}
                >
                  <span className="font-serif font-bold text-text-accent whitespace-nowrap sm:w-24">
                    {s.time}
                  </span>
                  <span className="font-semibold text-foreground">{s.step}</span>
                  {s.note && (
                    <span className="text-sm text-muted-foreground sm:ml-auto">{s.note}</span>
                  )}
                </li>
              ))}
            </ol>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Al terminar la solución, solo líquidos claros hasta la hora de
                ayuno.{" "}
                <strong className="font-semibold text-foreground">
                  El día del estudio: ayuno total.
                </strong>
              </p>
              <p>
                Si te harás endoscopia y colonoscopia el mismo día, aplica la
                preparación de colonoscopia con ayuno de 8 horas; te enviamos el
                cronograma exacto al agendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: DIABETES + ANTICOAGULANTES — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
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
                  Ayuno máximo de 4 horas. No apliques insulina ni tomes pastillas
                  la mañana del estudio; trae tus medicamentos.{" "}
                  <strong className="font-semibold text-foreground">
                    Monitorea tu glucosa durante la preparación.
                  </strong>
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
          SECTION 5: FUERA DE MÉRIDA + DÍA DEL ESTUDIO — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
                Si vienes de fuera de Mérida
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Pide cita{" "}
                <strong className="font-semibold text-foreground">por la mañana</strong>{" "}
                — la preparación se hace en casa la noche anterior y viajas de
                madrugada ya en ayuno. Llámanos primero: te decimos exactamente
                cómo.
              </p>
            </div>

            <FueraDeMeridaStrip />

            <ul className="space-y-4 text-foreground/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" aria-hidden />
                <span>
                  <strong className="font-semibold text-foreground">
                    Acompañante adulto obligatorio.
                  </strong>{" "}
                  No puedes conducir después de la sedación.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" aria-hidden />
                <span>Estancia total de 3 a 4 horas; puedes comer ligero el mismo día.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <Link
                href="/colonoscopia-merida"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 hover:underline transition-all min-h-[44px]"
              >
                Todo sobre la colonoscopia <ArrowRight className="h-4 w-4" />
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
          SECTION 6: FAQ — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <Faq routeKey="preparacion_colonoscopia" service={SERVICE} />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: BOTTOM CTA — bg-primary
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-primary">
        <div className="container-page section-padding">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                Recibe tu cronograma exacto
              </h2>
              <p className="text-white/80 mt-2">
                Escríbenos y te enviamos tu preparación para la hora de tu cita.
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
