import type { Metadata } from "next";
import {
  Star,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Clock,
  CalendarCheck,
  FileText,
} from "lucide-react";

import { displayFrom, INCLUDED_IN_PRICE, ADDITIONAL_FEES, mxn } from "@/lib/pricing";
import { CLINIC, waMessage } from "@/lib/clinic";
import { DOCTOR } from "@/lib/doctor";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import GoogleReviews from "@/components/GoogleReviews";
import LpVideo from "@/components/LpVideo";

// ---------------------------------------------------------------------------
// Metadata — inline, NOT in routes-seo.ts. Page is noindex; this exists only
// for the ad crawl + browser tab and must not leak into the indexed SEO system.
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Endoscopia en Mérida desde $4,500 MXN | Dr. Omar Quiroz",
  description:
    "Endoscopia con sedación en Hospital Amerimed, Mérida. Precio cerrado desde $4,500 MXN, reporte el mismo día. Agenda por WhatsApp con el Dr. Omar Quiroz.",
  robots: { index: false, follow: false },
};

export const revalidate = 86400;

// ---------------------------------------------------------------------------
// Self-hosted trust clip (Section 3.5). Null until the vertical clip is shot +
// a poster frame exported; the section renders nothing until then — never a
// visible placeholder. Drop the files in /public and fill this in to enable.
// Never a YouTube embed.
//
// endoscopia ~15s script (tú-form, brand-compliant):
//   "Una endoscopia con sedación no duele y no la vas a recordar; un
//    anestesiólogo te acompaña todo el tiempo, y ese mismo día te entrego tu
//    reporte con fotografías. Si tienes dudas, escríbeme por WhatsApp — te
//    contesto yo."
// ---------------------------------------------------------------------------
const TRUST_VIDEO: {
  src: string;
  poster: string;
  captionsSrc?: string;
} | null = null;

const PRICE = displayFrom("endoscopia"); // "Desde $4,500 MXN"
const { ratingValue, reviewCount } = CLINIC.aggregateRating;

export default function LpEndoscopiaPage() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 — HERO (bg-background)
          Message match + price + one-tap CTA in the first viewport.
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
              Resultados el mismo día
            </span>
          </div>

          <h1 className="mt-4 font-serif text-[1.75rem] font-extrabold leading-tight tracking-tight text-foreground md:mt-6 md:text-5xl">
            Endoscopia en Mérida con sedación
          </h1>

          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Estudio con sedación, reporte con fotografías HD el mismo día, y
            precio cerrado desde el primer contacto.
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
              service="endoscopia"
              position="lp-hero"
              procedureName="Endoscopia"
              label="Agendar por WhatsApp"
              className="w-full sm:w-auto sm:px-8"
            />
            <CallButton
              variant="ghost"
              service="endoscopia"
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
            <span className="font-semibold">~$5,500–$6,500</span>. Mismo
            hospital, mismo equipo, menor costo.
          </div>

          <div className="mt-8">
            <WhatsAppButton
              variant="primary"
              service="endoscopia"
              position="lp-precio"
              procedureName="Endoscopia"
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
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <img
              src={DOCTOR.photos.headshot}
              alt={DOCTOR.name}
              width={160}
              height={160}
              className="h-32 w-32 shrink-0 rounded-2xl object-cover sm:h-40 sm:w-40"
              loading="lazy"
              decoding="async"
            />

            <div className="flex-1">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Te atiende el Dr. Omar Quiroz
              </h2>
              <p className="mt-2 font-semibold text-text-brand">
                {DOCTOR.descriptor}
              </p>

              {/* Credential chips */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {DOCTOR.credentials.map((c) => (
                  <li
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-light px-3 py-1 text-xs font-medium text-accent"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    {c}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-foreground">
                Cuando escribes, te contesta directamente el doctor — no una
                recepcionista.
              </p>

              <div className="mt-6">
                <WhatsAppButton
                  variant="primary"
                  size="compact"
                  service="endoscopia"
                  position="lp-doctor"
                  procedureName="Endoscopia"
                  label="Escribirle al Dr. Quiroz"
                  className="min-h-[48px] text-sm"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3.5 — Trust video. Renders nothing until TRUST_VIDEO is
              set (see const above) — no placeholder ever shown to a visitor. */}
          {TRUST_VIDEO && (
            <div className="mt-10">
              <LpVideo
                src={TRUST_VIDEO.src}
                poster={TRUST_VIDEO.poster}
                captionsSrc={TRUST_VIDEO.captionsSrc}
                service="endoscopia"
                videoId="lp-endoscopia-trust"
                title="El Dr. Omar Quiroz sobre la endoscopia con sedación"
                caption={`El Dr. Omar Quiroz — ${DOCTOR.descriptor}.`}
              />
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 — RAPIDEZ / DISPONIBILIDAD (bg-muted)
          Honest urgency + remove "how long will this take" friction.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-narrow section-padding">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Agenda hoy, estudio mañana
          </h2>

          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { icon: CalendarCheck, text: "Sin lista de espera" },
              { icon: FileText, text: "Reporte el mismo día del estudio" },
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
          SECTION 5 — RESEÑAS (renders its own section, gradient bg)
          ══════════════════════════════════════════════════════════════════ */}
      <GoogleReviews
        title="Lo que dicen nuestros pacientes"
        limit={3}
        showPlaceLink={false}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 — FAQ CORTA (bg-muted)
          Only the questions that block booking. Not the full educational FAQ.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-narrow section-padding">
          <h2 className="font-serif text-xl font-bold tracking-tight text-foreground md:text-2xl">
            Preguntas frecuentes
          </h2>

          <div className="mt-6 space-y-4">
            {[
              {
                q: "¿La endoscopia duele?",
                a: "Con sedación no sientes ni recuerdas el procedimiento. Un anestesiólogo te acompaña todo el tiempo.",
              },
              {
                q: "¿Qué incluye el precio?",
                a: "Sedación, toma de biopsias sin límite, sala de recuperación, valoración y reporte con fotos HD.",
              },
              {
                q: "¿Necesito acompañante?",
                a: "Sí, por la sedación necesitas que alguien te lleve a casa. El estudio y la recuperación toman aproximadamente una hora.",
              },
              {
                q: "¿Dónde se realiza?",
                a: "En Hospital Amerimed, Consultorio 517, Mérida.",
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
              service="endoscopia"
              position="lp-faq"
              procedureName="Endoscopia"
              label="Preguntar por WhatsApp"
              className="w-full shrink-0 sm:w-auto"
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
            ¿Listo para agendar tu endoscopia?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Precio cerrado {PRICE.toLowerCase()}. Te contesta el Dr. Quiroz
            directamente.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton
              variant="primary"
              service="endoscopia"
              position="lp-bottom"
              procedureName="Endoscopia"
              label="Agendar por WhatsApp"
              className="w-full sm:w-auto sm:px-10"
            />
            <CallButton
              variant="inverse"
              service="endoscopia"
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
            service="endoscopia"
            position="lp-sticky"
            procedureName="Endoscopia"
            label="Agendar por WhatsApp"
            className="min-h-[48px] flex-1"
          />
          <CallButton
            variant="secondary"
            service="endoscopia"
            position="lp-sticky"
            label="Llamar"
            className="min-h-[48px] shrink-0 px-4 text-sm"
          />
        </div>
      </div>
    </div>
  );
}
