import type { Metadata } from "next";
import {
  Star,
  MapPin,
  CheckCircle2,
  Clock,
  CalendarCheck,
  Timer,
  Droplets,
  GlassWater,
  BellRing,
} from "lucide-react";

import { displayFrom, INCLUDED_IN_PRICE, ADDITIONAL_FEES, mxn } from "@/lib/pricing";
import { CLINIC } from "@/lib/clinic";
import { DOCTOR } from "@/lib/doctor";
import WhatsAppButton from "@/components/WhatsAppButton";
import DoctorAuthority from "@/components/DoctorAuthority";
import LpGuideLink from "@/components/LpGuideLink";
import CallButton from "@/components/CallButton";
import GoogleReviews from "@/components/GoogleReviews";
import LpVideo from "@/components/LpVideo";

// ---------------------------------------------------------------------------
// Metadata — inline, NOT in routes-seo.ts. Page is noindex; this exists only
// for the ad crawl + browser tab and must not leak into the indexed SEO system.
//
// ⚠️ Experiment: both arms of the Colonoscopia bid-strategy experiment (control
// = Max Clicks, treatment = Max Conversions) must point their Final URL at THIS
// same /lp/colonoscopia. A separate LP for the treatment arm would stack a
// second variable onto the bid test. See 04_MANUAL_ITEMS for the swap steps.
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Colonoscopia en Mérida desde $5,000 MXN | Dr. Omar Quiroz",
  description:
    "Colonoscopia con sedación en Hospital Amerimed, Mérida. Precio cerrado desde $5,000 MXN, retiro de pólipos en la misma sesión. Agenda por WhatsApp.",
  robots: { index: false, follow: false },
};

export const revalidate = 86400;

// ---------------------------------------------------------------------------
// Self-hosted trust clip (Section 3.5). Left null until the vertical clip is
// shot + a poster frame exported. Drop the files in /public and fill this in
// to enable the section — no other change needed. Never a YouTube embed.
//
// Colonoscopia script (~15s): prep reassurance is the highest-leverage line —
// prep anxiety is colonoscopy's #1 booking blocker.
//   "En la colonoscopia te explico la preparación paso a paso para que sea
//    sencilla. Es con sedación, y si encuentro un pólipo lo retiro en la misma
//    sesión. Escríbeme por WhatsApp y te oriento directamente."
// ---------------------------------------------------------------------------
const TRUST_VIDEO: {
  src: string;
  poster: string;
  captionsSrc?: string;
} | null = null;

const PRICE = displayFrom("colonoscopia"); // "Desde $5,000 MXN"
const { ratingValue, reviewCount } = CLINIC.aggregateRating;

export default function LpColonoscopiaPage() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 — HERO (bg-background)
          Message match + price + one-tap CTA in the first viewport.
          "Resultados en 20 minutos" carries colonoscopy's strongest ad asset
          onto the page for message match.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-narrow pt-6 pb-12 md:py-16">
          {/* Eyebrow / trust bar */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1 font-semibold text-foreground">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {ratingValue.toFixed(1)} · {reviewCount} reseñas
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4 text-accent" />
              Hospital Amerimed
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4 text-accent" />
              Resultados en 20 minutos
            </span>
          </div>

          <h1 className="mt-4 font-serif text-[1.75rem] font-extrabold leading-tight tracking-tight text-foreground md:mt-6 md:text-5xl">
            Colonoscopia en Mérida con sedación
          </h1>

          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Estudio con sedación, detección y retiro de pólipos en la misma
            sesión, y precio cerrado desde el inicio.
          </p>

          {/* Price badge */}
          <div className="mt-4 inline-flex flex-col rounded-xl border border-accent/20 bg-accent-light px-6 py-4 md:mt-6">
            <span className="text-2xl font-bold text-text-accent md:text-3xl">
              {PRICE}
            </span>
            <span className="mt-1 text-sm text-muted-foreground">
              Sedación, biopsias y reporte incluidos.
            </span>
          </div>

          {/* CTAs */}
          <div
            id="hero-ctas"
            className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-8"
          >
            <WhatsAppButton
              variant="primary"
              service="colonoscopia"
              position="lp-hero"
              procedureName="Colonoscopia"
              label="Agendar por WhatsApp"
              className="w-full sm:w-auto sm:px-8"
            />
            <CallButton
              variant="ghost"
              service="colonoscopia"
              position="lp-hero"
              label="Llamar ahora"
              className="w-full sm:w-auto"
            />
          </div>

          {/* Location line */}
          <p className="mt-6 inline-flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            Hospital Amerimed, Consultorio 517 · Chichí Suárez, Mérida
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 — PRECIO Y QUÉ INCLUYE (bg-muted)
          Kill the hidden-costs objection + anchor against competitors.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-narrow section-padding">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Precio cerrado, sin sorpresas
          </h2>

          <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="text-3xl font-bold text-text-accent">{PRICE}</div>

            <ul className="mt-6 space-y-3">
              {INCLUDED_IN_PRICE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="font-medium text-foreground">
                  Polipectomía en la misma sesión si es necesario
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm text-muted-foreground">
              Único costo adicional posible: lectura de patología (
              {mxn(ADDITIONAL_FEES.biopsy.amount)}), solo si se toman biopsias —
              se te informa antes.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Trabajamos con las principales aseguradoras. Escríbenos y validamos
              tu cobertura.
            </p>
          </div>

          {/* Competitor anchor strip */}
          <div className="mt-6 rounded-xl border border-accent/20 bg-accent-light px-6 py-4 text-sm text-foreground">
            Otros centros en Mérida:{" "}
            <span className="font-semibold">~$6,000–$7,000</span>. Mismo
            hospital, mismo equipo, menor costo.
          </div>

          <div className="mt-8">
            <WhatsAppButton
              variant="primary"
              service="colonoscopia"
              position="lp-precio"
              procedureName="Colonoscopia"
              label="Confirmar mi precio por WhatsApp"
              className="w-full sm:w-auto sm:px-8"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 — POR QUÉ CON EL DR. QUIROZ (bg-background)
          Authority: a named specialist, not a faceless clinic.
          + SECTION 3.5 trust video below the credential chips.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-narrow section-padding">
          <DoctorAuthority
            variant="compact"
            service="colonoscopia"
            position="lp-doctor"
            procedureName="Colonoscopia"
            procedureContext="El especialista que realiza tu colonoscopia se formó y ejerció como endoscopista en centros de referencia nacionales."
            profileLink={false}
          />

          {/* SECTION 3.5 — Trust video (renders only once a clip is configured) */}
          {TRUST_VIDEO && (
            <div className="mt-10">
              <LpVideo
                src={TRUST_VIDEO.src}
                poster={TRUST_VIDEO.poster}
                captionsSrc={TRUST_VIDEO.captionsSrc}
                service="colonoscopia"
                videoId="lp-colonoscopia-trust"
                title="El Dr. Omar Quiroz sobre la colonoscopia con sedación"
                caption={`El Dr. Omar Quiroz — ${DOCTOR.descriptor}.`}
              />
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 — RAPIDEZ / DISPONIBILIDAD (bg-muted)
          Honest urgency + colonoscopy's strongest ad angles: 20-min results
          and detection + polyp removal in a single session.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-narrow section-padding">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Agenda hoy, estudio mañana
          </h2>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { icon: CalendarCheck, text: "Sin lista de espera" },
              { icon: Timer, text: "Resultados en 20 minutos" },
              {
                icon: CheckCircle2,
                text: "Detección y retiro de pólipos en una sola sesión",
              },
              { icon: Clock, text: CLINIC.hours.display },
            ].map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                <span className="text-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4.5 — PREPARACIÓN (bg-background) — colonoscopia ONLY
          Prep dread, not the procedure, is colonoscopy's #1 silent conversion
          killer. Turn the biggest objection into a reason to message: state
          only the invariants (volumes, split-dose, clear liquids) and route all
          per-appointment TIMING to personalized WhatsApp guidance. No fixed
          clock values anywhere — a wrong time on a medical page can botch a prep.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-narrow section-padding">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            La preparación es más fácil de lo que crees
          </h2>

          <p className="mt-4 text-muted-foreground">
            Sabemos que la preparación es lo que más preocupa — más que el
            estudio. La hacemos en dosis divididas para que sea más llevadera, y
            te guiamos en cada paso.
          </p>

          <ul className="mt-6 space-y-4">
            {[
              {
                icon: Droplets,
                lead: "Se toma en dos partes de 2 litros",
                rest: " (preparación Nulytely) — dividida se tolera mucho mejor que todo de una vez.",
              },
              {
                icon: GlassWater,
                lead: "Solo líquidos claros",
                rest: " durante la preparación; te decimos exactamente qué sí y qué no.",
              },
              {
                icon: BellRing,
                lead: "Los horarios dependen de la hora de tu estudio",
                rest: " — por eso te los damos personalizados por WhatsApp, con recordatorios de cuándo tomar cada parte.",
              },
            ].map(({ icon: Icon, lead, rest }) => (
              <li
                key={lead}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                <span className="text-foreground">
                  <strong className="font-semibold text-foreground">
                    {lead}
                  </strong>
                  {rest}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <WhatsAppButton
              variant="primary"
              service="colonoscopia"
              position="lp-prep"
              procedureName="Colonoscopia"
              label="Escríbenos y te damos tu horario de preparación"
              className="w-full sm:w-auto sm:px-8"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 — RESEÑAS (renders its own section, gradient bg)
          ══════════════════════════════════════════════════════════════════ */}
      <GoogleReviews
        title="Lo que dicen nuestros pacientes"
        limit={3}
        showPlaceLink={false}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 — FAQ CORTA (bg-muted)
          Only the questions that block booking. Prep replaces endoscopia's
          generic Q — prep anxiety is colonoscopy's #1 booking blocker, and
          "te guiamos por WhatsApp" doubles as a conversion hook.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-narrow section-padding">
          <h2 className="font-serif text-xl font-bold tracking-tight text-foreground md:text-2xl">
            Preguntas frecuentes
          </h2>

          <div className="mt-6 space-y-4">
            {[
              {
                q: "¿La colonoscopia duele?",
                a: "Con sedación no sientes ni recuerdas el estudio; un anestesiólogo te acompaña todo el tiempo.",
              },
              {
                q: "¿Cómo es la preparación?",
                a: "Te damos instrucciones claras de la dieta y el laxante el día previo. Te guiamos por WhatsApp paso a paso.",
              },
              {
                q: "¿Qué incluye el precio?",
                a: "Sedación, retiro de pólipos y biopsias sin límite, sala de recuperación, valoración y reporte HD.",
              },
              {
                q: "¿Necesito acompañante?",
                a: "Sí, por la sedación necesitas que alguien te lleve a casa. El estudio y la recuperación toman aproximadamente una hora.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {q}
                </h3>
                <p className="mt-2 text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-accent/20 bg-accent-light p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-foreground">
              ¿Tienes otra duda? Escríbele al Dr. Quiroz por WhatsApp.
            </p>
            <WhatsAppButton
              variant="primary"
              service="colonoscopia"
              position="lp-faq"
              procedureName="Colonoscopia"
              label="Preguntar por WhatsApp"
              className="w-full shrink-0 sm:w-auto"
            />
          </div>

          {/* Escape hatch — full guide for info-seekers (fires lp_exit_to_guide) */}
          <div className="mt-8 text-center">
            <LpGuideLink
              href="/colonoscopia-merida"
              label="Ver la guía completa de la colonoscopia"
              service="colonoscopia"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7 — CIERRE / BOTTOM CTA (bg-primary navy)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-primary">
        <div className="container-narrow section-padding text-center">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-white md:text-3xl">
            ¿Listo para agendar tu colonoscopia?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Precio cerrado {PRICE.toLowerCase()}. Te contesta el Dr. Quiroz
            directamente.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton
              variant="primary"
              service="colonoscopia"
              position="lp-bottom"
              procedureName="Colonoscopia"
              label="Agendar por WhatsApp"
              className="w-full sm:w-auto sm:px-10"
            />
            <CallButton
              variant="inverse"
              service="colonoscopia"
              position="lp-bottom"
              label={`Llamar al ${CLINIC.phone.display}`}
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          STICKY MOBILE CTA — fixed bottom bar, WhatsApp first/wider.
          ══════════════════════════════════════════════════════════════════ */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/50 bg-white/80 px-4 py-2 backdrop-blur-xl safe-area-bottom md:hidden">
        <div className="flex items-center gap-2">
          <WhatsAppButton
            variant="primary"
            service="colonoscopia"
            position="lp-sticky"
            procedureName="Colonoscopia"
            label="Agendar por WhatsApp"
            className="min-h-[48px] flex-1"
          />
          <CallButton
            variant="secondary"
            service="colonoscopia"
            position="lp-sticky"
            label="Llamar"
            className="min-h-[48px] shrink-0 px-4 text-sm"
          />
        </div>
      </div>
    </div>
  );
}
