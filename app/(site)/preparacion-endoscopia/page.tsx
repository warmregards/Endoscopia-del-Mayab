import system from "../design-system.module.css"
import pages from "../design-pages.module.css"
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
  Clock,
  FileText,
  MessageSquare,
  Moon,
  Sun,
  MapPin,
} from "lucide-react"
import Faq from "@/components/Faq"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import FueraDeMeridaStrip from "@/components/FueraDeMeridaStrip"
import TeamPresence from "@/components/TeamPresence"

// Public, general endoscopy prep protocol (source: PrepSync seeded templates +
// prep-builder.ts timelines, reviewed by Dr. Quiroz). The personalized layer —
// which schedule applies, anticoagulant stop date, diabetic adjustments — stays
// in the WhatsApp / PrepSync PDF. Organic-only: never an Ads destination.
//
// Mirrors the "Guía de preparación · Endoscopia" video (sent on WhatsApp with
// the PDF after booking, Oct 2026 script confirmed by Dr. Quiroz): same order —
// tu hoja → día anterior → ayuno → presión → casos especiales → llegada →
// equipo → durante → después. Keep the two in sync when either changes.

export const revalidate = 86400
export const metadata = metaFor("preparacion_endoscopia")

const SERVICE = "preparacion_endoscopia"
const WA_MESSAGE =
  "Hola, quiero agendar una endoscopia y recibir mis instrucciones de preparación."
// Same pre-filled text as the video's closing CTA — for patients who already booked.
const WA_DOUBT_MESSAGE = "Hola, tengo una duda sobre mi preparación."

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
    <div className={`${pages.page} ${system.system}`}>
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
      <section className={`bg-background ${pages.hero} ${system.hero}`}>
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl md:text-4xl lg:text-5xl">
              Cómo prepararte para tu endoscopia
            </h1>

            <p className="text-lg text-foreground leading-relaxed">
              Preparación para tu estudio con el {DOCTOR.name} en{" "}
              {CLINIC.hospitalName}, {CLINIC.address.addressLocality}.
            </p>

            <div className={`bg-accent-light border border-accent/20 rounded-xl p-6 space-y-2 ${pages.note}`}>
              <p className="text-sm font-medium text-muted-foreground">Regla principal</p>
              <p className={`font-serif font-bold text-foreground text-xl md:text-2xl tracking-tight ${pages.serifFigure}`}>
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

            <div className="flex flex-col sm:flex-row gap-4" data-sticky-hero-cta>
              <WhatsAppButton
                service={SERVICE}
                position="hero"
                label="Agendar y recibir instrucciones"
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
          SECTION 2: DÍA ANTERIOR + CRONOGRAMA — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`bg-muted ${pages.surface}`}>
        <div className="container-page section-padding">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                El día anterior
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                La cena, solo líquidos claros: agua, té o gelatina. Después
                empieza el ayuno total: nada de comer ni de beber. Así tu
                estómago está vacío y la sedación es más segura.
              </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${pages.openGrid}`}>
              {schedules.map(({ icon: Icon, title, clear, fast }) => (
                <div
                  key={title}
                  className={`bg-card border border-border rounded-xl p-6 space-y-4 ${pages.open}`}
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

            <div className={`bg-card border border-border rounded-xl p-6 space-y-2 ${pages.open}`}>
              <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                El día del estudio
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Ayuno total hasta tu cita. Si tomas medicamento para la presión,
                sí tómalo esa mañana, con muy poca agua, y nada más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: DIABETES + ANTICOAGULANTES — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`bg-background ${pages.paper}`}>
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
                  Ayuno máximo de 6 horas. No apliques insulina ni tomes pastillas
                  para la diabetes la mañana del estudio. Trae tus medicamentos
                  para tomarlos después.
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
          SECTION 4: AL LLEGAR — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`bg-muted ${pages.surface}`}>
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
                <span>Estancia total de 2 a 3 horas.</span>
              </li>
            </ul>

            <FueraDeMeridaStrip />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: TU EQUIPO — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <TeamPresence procedure="endoscopia" tone="background" variant="compact" />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: DURANTE Y DESPUÉS — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`bg-muted ${pages.surface}`}>
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
                  El {DOCTOR.name} revisa tu esófago, tu estómago y la primera
                  parte del intestino (duodeno). El estudio dura de 15 a 20
                  minutos.
                </p>
              </div>
              <div className={`space-y-4 ${pages.open}`}>
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                  Si se toma una biopsia
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Si ve algo que conviene estudiar, toma una pequeña muestra en
                  el mismo estudio y la envía a patología. El resultado tarda de{" "}
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
                  estudio.
                </p>
              </div>
            </div>

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
          SECTION 7: FAQ — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`bg-background ${system.faq}`}>
        <Faq routeKey="preparacion_endoscopia" service={SERVICE} />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8: BOTTOM CTA — bg-primary
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`bg-primary ${system.closing}`}>
        <div className="container-page section-padding">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                Tus instrucciones exactas llegan al agendar
              </h2>
              <p className="text-white/80 mt-2">
                Escríbenos y te enviamos la preparación para la hora de tu cita.
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
