import type { Metadata } from "next";
import {
  Star,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Timer,
  Activity,
} from "lucide-react";

import { displayFrom, INCLUDED_IN_PRICE } from "@/lib/pricing";
import { CLINIC } from "@/lib/clinic";
import { DOCTOR } from "@/lib/doctor";
import WhatsAppButton from "@/components/WhatsAppButton";
import LpGuideLink from "@/components/LpGuideLink";
import CallButton from "@/components/CallButton";
import GoogleReviews from "@/components/GoogleReviews";
import LpVideo from "@/components/LpVideo";

// ---------------------------------------------------------------------------
// Metadata — inline, NOT in routes-seo.ts. Page is noindex; this exists only
// for the ad crawl + browser tab and must not leak into the indexed SEO system.
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "CPRE en Mérida sin cirugía abierta | Dr. Omar Quiroz",
  description:
    "CPRE endoscópica en Hospital Amerimed, Mérida: extracción de cálculos y desobstrucción biliar sin cirugía abierta, con sedación. Agenda por WhatsApp.",
  robots: { index: false, follow: false },
};

export const revalidate = 86400;

// ---------------------------------------------------------------------------
// Self-hosted trust clip (Section 3.5). Left null until the vertical clip is
// shot + a poster frame exported. Drop the files in /public and fill this in
// to enable the section — no other change needed. Never a YouTube embed.
//
// CPRE script (~15s): highest-anxiety, highest-margin page — a procedure-
// specific clip may pay for itself here alone. Lead with "sin cirugía abierta"
// + urgency (ictericia/dolor), not price.
//   "La CPRE resuelve la obstrucción de la vía biliar sin cirugía abierta, con
//    sedación y recuperación rápida. Si tienes dolor o coloración amarilla,
//    escríbeme hoy por WhatsApp y valoramos tu caso."
// ---------------------------------------------------------------------------
const TRUST_VIDEO: {
  src: string;
  poster: string;
  captionsSrc?: string;
} | null = null;

const PRICE = displayFrom("cpre"); // "Desde $26,000 MXN"
const { ratingValue, reviewCount } = CLINIC.aggregateRating;

export default function LpCprePage() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 — HERO (bg-background)
          High-ticket/urgent framing: avoid open surgery + specialist capability,
          one-tap CTA in the first viewport. NOT bargain framing.
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
              <ShieldCheck className="h-4 w-4 text-accent" />
              Sin cirugía abierta
            </span>
          </div>

          <h1 className="mt-4 font-serif text-[1.75rem] font-extrabold leading-tight tracking-tight text-foreground md:mt-6 md:text-5xl">
            CPRE en Mérida sin cirugía abierta
          </h1>

          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Extracción de cálculos y desobstrucción de la vía biliar por
            endoscopia, con sedación, por un {DOCTOR.descriptor}.
          </p>

          {/* Price badge */}
          <div className="mt-4 inline-flex flex-col rounded-xl border border-accent/20 bg-accent-light px-6 py-4 md:mt-6">
            <span className="text-2xl font-bold text-text-accent md:text-3xl">
              {PRICE}
            </span>
            <span className="mt-1 text-sm text-muted-foreground">
              Procedimiento hospitalario con sedación e insumos.
            </span>
          </div>

          {/* CTAs */}
          <div
            id="hero-ctas"
            className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-8"
          >
            <WhatsAppButton
              variant="primary"
              service="cpre"
              position="lp-hero"
              procedureName="CPRE"
              label="Agendar por WhatsApp"
              className="w-full sm:w-auto sm:px-8"
            />
            <CallButton
              variant="ghost"
              service="cpre"
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
          High-ticket anchor: competitors are far higher — frames $26k as value,
          not a bargain. Kill the hidden-costs objection.
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
          </div>

          {/* Competitor anchor strip */}
          <div className="mt-6 rounded-xl border border-accent/20 bg-accent-light px-6 py-4 text-sm text-foreground">
            En Mérida otros centros:{" "}
            <span className="font-semibold">~$34,000</span>. En Cancún:{" "}
            <span className="font-semibold">~$40,000</span>. Mismo hospital,
            mismo equipo, menor costo.
          </div>

          <div className="mt-8">
            <WhatsAppButton
              variant="primary"
              service="cpre"
              position="lp-precio"
              procedureName="CPRE"
              label="Confirmar mi precio por WhatsApp"
              className="w-full sm:w-auto sm:px-8"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 — POR QUÉ CON EL DR. QUIROZ (bg-background)
          Authority for an advanced procedure: a named specialist, HD equipment.
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
                La CPRE es un procedimiento avanzado; se realiza en Hospital
                Amerimed con equipo Olympus HD. Cuando escribes, te contesta
                directamente el doctor — no una recepcionista.
              </p>

              <div className="mt-6">
                <WhatsAppButton
                  variant="primary"
                  size="compact"
                  service="cpre"
                  position="lp-doctor"
                  procedureName="CPRE"
                  label="Escribirle al Dr. Quiroz"
                  className="min-h-[48px] text-sm"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3.5 — Trust video (renders only once a clip is configured) */}
          {TRUST_VIDEO && (
            <div className="mt-10">
              <LpVideo
                src={TRUST_VIDEO.src}
                poster={TRUST_VIDEO.poster}
                captionsSrc={TRUST_VIDEO.captionsSrc}
                service="cpre"
                videoId="lp-cpre-trust"
                title="El Dr. Omar Quiroz sobre la CPRE sin cirugía abierta"
                caption={`El Dr. Omar Quiroz — ${DOCTOR.descriptor}.`}
              />
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 — SIN CIRUGÍA / URGENCIA (bg-muted)
          Reassurance + speed of access to a specialist. Many arrive scared or
          in pain (obstrucción biliar) — remove the "how bad is this" friction.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-narrow section-padding">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Sin cirugía abierta, con recuperación rápida
          </h2>

          <p className="mt-4 text-foreground">
            Si tienes ictericia, dolor intenso o fiebre, escríbenos hoy — el Dr.
            Quiroz valora tu caso y te indica los pasos.
          </p>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, text: "Sin incisiones — procedimiento endoscópico" },
              { icon: Activity, text: "Sedación con anestesiólogo" },
              { icon: Timer, text: "Recuperación más rápida que la cirugía tradicional" },
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

          <div className="mt-8">
            <WhatsAppButton
              variant="primary"
              service="cpre"
              position="lp-urgencia"
              procedureName="CPRE"
              label="Escribir al Dr. Quiroz ahora"
              className="w-full sm:w-auto sm:px-8"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 — RESEÑAS (renders its own section, gradient bg)
          showPlaceLink={false}: no outbound Google exit on a paid LP (1:1 ratio).
          ══════════════════════════════════════════════════════════════════ */}
      <GoogleReviews
        title="Lo que dicen nuestros pacientes"
        limit={3}
        showPlaceLink={false}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 — FAQ CORTA (bg-muted)
          Only the questions that block booking for a high-anxiety procedure.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-narrow section-padding">
          <h2 className="font-serif text-xl font-bold tracking-tight text-foreground md:text-2xl">
            Preguntas frecuentes
          </h2>

          <div className="mt-6 space-y-4">
            {[
              {
                q: "¿La CPRE requiere cirugía abierta?",
                a: "No. Es endoscópica, con sedación, sin incisiones. La recuperación es mucho más rápida que una cirugía tradicional.",
              },
              {
                q: "¿Es urgente lo mío?",
                a: "Si tienes ictericia, dolor intenso o fiebre, escríbenos hoy; el Dr. Quiroz valora tu caso y te indica los pasos.",
              },
              {
                q: "¿Qué incluye el precio?",
                a: "Procedimiento hospitalario, sedación con anestesiólogo, insumos y reporte.",
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
              service="cpre"
              position="lp-faq"
              procedureName="CPRE"
              label="Preguntar por WhatsApp"
              className="w-full shrink-0 sm:w-auto"
            />
          </div>

          {/* Escape hatch — full guide for info-seekers (fires lp_exit_to_guide) */}
          <div className="mt-8 text-center">
            <LpGuideLink
              href="/cpre-merida"
              label="Ver la guía completa de la CPRE"
              service="cpre"
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
            ¿Necesitas una CPRE en Mérida?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Te contesta directamente el Dr. Quiroz.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton
              variant="primary"
              service="cpre"
              position="lp-bottom"
              procedureName="CPRE"
              label="Agendar por WhatsApp"
              className="w-full sm:w-auto sm:px-10"
            />
            <CallButton
              variant="inverse"
              service="cpre"
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
            service="cpre"
            position="lp-sticky"
            procedureName="CPRE"
            label="Agendar por WhatsApp"
            className="min-h-[48px] flex-1"
          />
          <CallButton
            variant="secondary"
            service="cpre"
            position="lp-sticky"
            label="Llamar"
            className="min-h-[48px] shrink-0 px-4 text-sm"
          />
        </div>
      </div>
    </div>
  );
}
