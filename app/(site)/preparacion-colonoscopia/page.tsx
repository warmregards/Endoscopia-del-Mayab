import system from "../design-system.module.css"
import pages from "../design-pages.module.css"
import { metaFor } from "@/lib/routes-seo"
import { DOCTOR } from "@/lib/doctor"
import { CLINIC } from "@/lib/clinic"
import { mxn, ADDITIONAL_FEES } from "@/lib/pricing"
import { breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  MapPin,
  MessageSquare,
  ShoppingBag,
  Snowflake,
  UtensilsCrossed,
} from "lucide-react"
import Faq from "@/components/Faq"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import FueraDeMeridaStrip from "@/components/FueraDeMeridaStrip"
import TeamPresence from "@/components/TeamPresence"

// Public, general colonoscopy prep protocol (source: PrepSync seeded templates +
// prep-builder.ts timelines, reviewed by Dr. Quiroz). Only the morning example
// schedule is published; afternoon and doble schedules, liter count, brand
// substitutions and medication adjustments stay in the WhatsApp / PrepSync PDF.
// Organic-only: never an Ads destination.
//
// Mirrors the "Guía de preparación · Colonoscopia" video (sent on WhatsApp with
// the PDF after booking, Oct 2026 script confirmed by Dr. Quiroz): same order —
// tu hoja → medicamento → día anterior → cronograma → cómo saber que vas bien →
// al terminar → ayuno → casos especiales → llegada → equipo → durante →
// después. Keep the two in sync when either changes.

export const revalidate = 86400
export const metadata = metaFor("preparacion_colonoscopia")

const SERVICE = "preparacion_colonoscopia"
const WA_MESSAGE =
  "Hola, quiero agendar una colonoscopia y recibir mi cronograma de preparación."
// Same pre-filled text as the video's closing CTA — for patients who already booked.
const WA_DOUBT_MESSAGE = "Hola, tengo una duda sobre mi preparación."

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
    <div className={`${pages.page} ${system.system}`}>
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
      <section className={`bg-background ${pages.hero} ${system.hero}`}>
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl md:text-4xl lg:text-5xl">
              Cómo prepararte para tu colonoscopia
            </h1>

            <p className="text-lg text-foreground leading-relaxed">
              Preparación para tu estudio con el {DOCTOR.name} en{" "}
              {CLINIC.hospitalName}, {CLINIC.address.addressLocality}. Una buena limpieza del colon es clave para un estudio completo. Si
              la preparación no es adecuada, el estudio puede tener que
              reprogramarse.
            </p>

            <div className={`bg-accent-light border border-accent/20 rounded-xl p-6 space-y-4 ${pages.note}`}>
              <p className={`font-serif font-bold text-foreground text-xl tracking-tight ${pages.serifFigure}`}>
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

            <div className="flex flex-col sm:flex-row gap-4" data-sticky-hero-cta>
              <WhatsAppButton
                service={SERVICE}
                position="hero"
                label="Recibir mi cronograma"
                message={WA_MESSAGE}
                className="sm:px-8"
              />
              <CallButton service={SERVICE} position="hero" variant="ghost" />
            </div>

            <p className="flex items-start gap-2 text-foreground/80 leading-relaxed">
              <FileText className="h-5 w-5 text-accent flex-shrink-0 mt-1" aria-hidden />
              <span>
                <strong className="font-semibold text-foreground">¿Ya tienes tu cita?</strong>{" "}
                Junto con tu hoja de preparación te enviamos un video guía del{" "}
                {DOCTOR.name}. Tu hoja trae tu fecha, tu hora y tus indicaciones
                personales: tenla a la mano. Si algo aquí es distinto a tu hoja,
                sigue tu hoja.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: QUÉ COMPRAR + QUÉ COMER — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`bg-muted ${pages.surface}`}>
        <div className="container-page section-padding">
          <div className={`max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 ${pages.openGrid}`}>
            <div className={`bg-card border border-border rounded-xl p-6 space-y-4 ${pages.open}`}>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-accent" aria-hidden />
                Qué comprar
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                <strong className="font-semibold text-foreground">Nulytely</strong>{" "}
                (Macrogol 3350 + electrolitos), caja de 4 sobres — pide sabor lima
                o cereza si hay. Cada sobre se disuelve en 1 litro de agua.
              </p>
              <p className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                <Snowflake className="h-4 w-4 text-accent flex-shrink-0 mt-1" aria-hidden />
                <span>
                  <strong className="font-semibold text-foreground">Consejo:</strong>{" "}
                  prepáralo con tiempo y tómalo frío; así es más fácil.
                </span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Al agendar te confirmamos cuántos litros necesitas y si puedes
                usar otra marca.
              </p>
            </div>

            <div className={`bg-card border border-border rounded-xl p-6 space-y-4 ${pages.open}`}>
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
      <section className={`bg-background ${pages.paper}`}>
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                Cronograma de ejemplo
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                En la tarde empiezas tu preparación:{" "}
                <strong className="font-semibold text-foreground">
                  un litro por hora, un vaso cada 15 minutos.
                </strong>{" "}
                Tomas dos litros, descansas una hora con agua, té o gelatina, y
                luego tomas los otros dos.
              </p>
              <p className="text-muted-foreground">
                Ejemplo para cita a las 8:00 AM. Tus horas exactas vienen en tu
                hoja.
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
                  <span className={`font-serif font-bold text-text-accent whitespace-nowrap sm:w-24 ${pages.serifFigure}`}>
                    {s.time}
                  </span>
                  <span className="font-semibold text-foreground">{s.step}</span>
                  {s.note && (
                    <span className="text-sm text-muted-foreground sm:ml-auto">{s.note}</span>
                  )}
                </li>
              ))}
            </ol>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${pages.openGrid}`}>
              <div className={`bg-accent-light border border-accent/20 rounded-xl p-6 space-y-4 ${pages.note}`}>
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                  Cómo saber que vas bien
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Es normal ir al baño muchas veces, así que quédate cerca de
                  uno.{" "}
                  <strong className="font-semibold text-foreground">
                    Vas bien cuando lo que evacúas es líquido, claro y
                    amarillento, como té.
                  </strong>
                </p>
              </div>
              <div className={`space-y-4 ${pages.open}`}>
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                  Al terminar la preparación
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Solo líquidos claros: agua, té o suero. Nada de color rojo.
                </p>
                <p className="font-semibold text-foreground">
                  Desde la medianoche, ayuno total hasta tu cita: así la
                  sedación es más segura.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
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
      <section className={`bg-muted ${pages.surface}`}>
        <div className="container-page section-padding">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
                Si tienes diabetes o tomas anticoagulantes
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Tu hoja de preparación trae instrucciones especiales solo para
                ti. Síguelas al pie de la letra: esto es solo la regla general.
              </p>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${pages.openGrid}`}>
              <div className={`bg-card border border-border rounded-xl p-6 space-y-4 ${pages.open}`}>
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
              <div className={`bg-card border border-border rounded-xl p-6 space-y-4 ${pages.open}`}>
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
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-foreground/80">¿Tienes alguna duda con tu hoja?</p>
              <WhatsAppButton
                service={SERVICE}
                position="meds"
                variant="outline"
                label="Escríbele al doctor"
                message={WA_DOUBT_MESSAGE}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: AL LLEGAR + FUERA DE MÉRIDA — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`bg-background ${pages.paper}`}>
        <div className="container-page section-padding">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
              Al llegar al hospital
            </h2>

            <ul className="space-y-4 text-foreground/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-1" aria-hidden />
                <span>
                  <strong className="font-semibold text-foreground">
                    {CLINIC.hospitalName}, {CLINIC.office.floor}, consultorio{" "}
                    {CLINIC.office.number}.
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="h-4 w-4 text-accent flex-shrink-0 mt-1" aria-hidden />
                <span>
                  Al llegar al hospital, di:{" "}
                  <strong className="font-semibold text-foreground">
                    “Vengo al consultorio {CLINIC.office.number} con el {DOCTOR.name}.”
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-accent flex-shrink-0 mt-1" aria-hidden />
                <span>
                  <strong className="font-semibold text-foreground">
                    Llega puntual, a la hora exacta de tu cita.
                  </strong>{" "}
                  Tenemos una sola sala de espera, y así cuidamos tu privacidad.
                  Si llegas antes, espera en el lobby del hospital o junto al
                  elevador.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" aria-hidden />
                <span>
                  <strong className="font-semibold text-foreground">
                    Ven acompañado por un adulto;
                  </strong>{" "}
                  no puedes manejar ese día por la sedación.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" aria-hidden />
                <span>Estancia total de 3 a 4 horas.</span>
              </li>
            </ul>

            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                Si vienes de fuera de Mérida
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Pide cita{" "}
                <strong className="font-semibold text-foreground">por la mañana</strong>{" "}
                — la preparación se hace en casa la noche anterior y viajas de
                madrugada ya en ayuno. Llámanos primero: te decimos exactamente
                cómo.
              </p>
            </div>

            <FueraDeMeridaStrip />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: TU EQUIPO — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <TeamPresence procedure="colonoscopia" tone="muted" variant="compact" />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: DURANTE Y DESPUÉS — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`bg-background ${pages.paper}`}>
        <div className="container-page section-padding">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
              Durante y después del estudio
            </h2>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${pages.openGrid}`}>
              <div className={`space-y-4 ${pages.open}`}>
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                  Mientras duermes
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  El {DOCTOR.name} recorre todo tu colon. El estudio dura de 25 a
                  45 minutos.
                </p>
              </div>
              <div className={`space-y-4 ${pages.open}`}>
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                  Si se toma una biopsia
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Si encuentra algo que conviene estudiar, toma una pequeña
                  muestra en el mismo estudio y la envía a patología. El
                  resultado tarda de{" "}
                  <strong className="font-semibold text-foreground">
                    5 a 10 días hábiles
                  </strong>
                  : es el tiempo del laboratorio. La lectura cuesta{" "}
                  {mxn(ADDITIONAL_FEES.biopsy.amount)} y se te informa antes.
                </p>
              </div>
              <div className={`space-y-4 ${pages.open}`}>
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                  Al terminar
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Descansas un rato en recuperación y ese mismo día el doctor te
                  explica lo que encontró. Te llevas tu reporte impreso y un
                  enlace para descargar tu reporte, tus fotos y el video de tu
                  estudio. Puedes comer ligero ese mismo día.
                </p>
              </div>
            </div>

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
          SECTION 8: FAQ — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`bg-muted ${system.faq}`}>
        <Faq routeKey="preparacion_colonoscopia" service={SERVICE} />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 9: BOTTOM CTA — bg-primary
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`bg-primary ${system.closing}`}>
        <div className="container-page section-padding">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                Recibe tu cronograma exacto
              </h2>
              <p className="text-white/80 mt-2">
                Escríbenos y te enviamos tu preparación para la hora de tu cita.
                Si ya agendaste y tienes cualquier duda, escríbenos también.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-sticky-bottom-cta>
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
    </div>
  )
}
