import type { Metadata } from "next";
import {
  Star,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Activity,
  EyeOff,
} from "lucide-react";

import { displayFrom, INCLUDED_IN_PRICE } from "@/lib/pricing";
import { CLINIC } from "@/lib/clinic";
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
  title: "Ligadura de hemorroides en Mérida sin cirugía | Dr. Omar Quiroz",
  description:
    "Ligadura de hemorroides internas en Mérida, sin cirugía mayor ni hospitalización, con sedación. Atención discreta con el Dr. Quiroz. Agenda por WhatsApp.",
  robots: { index: false, follow: false },
};

export const revalidate = 86400;

// ---------------------------------------------------------------------------
// Self-hosted trust clip (Section 3.5). Left null until the vertical clip is
// shot + a poster frame exported. Drop the files in /public and fill this in
// to enable the section — no other change needed. Never a YouTube embed.
//
// Use the UNIVERSAL 20s clip for this LP (don't shoot a procedure-specific one
// for hemorroides — low volume, not worth the caption-correction overhead):
//   "Hola, soy el Dr. Omar Quiroz, Endoscopista Gastrointestinal y Cirujano
//    General. Sé que hacerte un estudio da nervios y que el precio importa —
//    por eso el precio es cerrado, sin sorpresas, y cuando escribes por
//    WhatsApp te contesto yo directamente, no una recepcionista. Nos vemos en
//    Hospital Amerimed."
// ---------------------------------------------------------------------------
const TRUST_VIDEO: {
  src: string;
  poster: string;
  captionsSrc?: string;
} | null = null;

const PRICE = displayFrom("ligadura_hemorroides"); // "Desde $15,000 MXN"
const { ratingValue, reviewCount } = CLINIC.aggregateRating;

export default function LpHemorroidesPage() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 — HERO (bg-background)
          "Avoid surgery, avoid downtime, discreet" is the strongest driver here —
          surgery fear + embarrassment are the two objections that block booking.
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
              <ShieldCheck className="h-4 w-4 text-accent" />
              Sin cirugía
            </span>
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Sin hospitalización
            </span>
          </div>

          <h1 className="mt-4 font-serif text-[1.75rem] font-extrabold leading-tight tracking-tight text-foreground md:mt-6 md:text-5xl">
            Ligadura de hemorroides en Mérida sin cirugía
          </h1>

          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Tratamiento de hemorroides internas por ligadura endoscópica — sin
            cirugía mayor, sin hospitalización, con sedación, por un{" "}
            {DOCTOR.descriptor}.
          </p>

          {/* Price badge */}
          <div className="mt-4 inline-flex flex-col rounded-xl border border-accent/20 bg-accent-light px-6 py-4 md:mt-6">
            <span className="text-2xl font-bold text-text-accent md:text-3xl">
              {PRICE}
            </span>
            <span className="mt-1 text-sm text-muted-foreground">
              Procedimiento ambulatorio con sedación.
            </span>
          </div>

          {/* CTAs */}
          <div
            id="hero-ctas"
            className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-8"
          >
            <WhatsAppButton
              variant="primary"
              service="ligadura_hemorroides"
              position="lp-hero"
              procedureName="Ligadura de hemorroides"
              label="Agendar por WhatsApp"
              className="w-full sm:w-auto sm:px-8"
            />
            <CallButton
              variant="ghost"
              service="ligadura_hemorroides"
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
          Soft value anchor (not a competitor-price row): avoid surgery costs.
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

          {/* Soft value anchor — not a competitor price */}
          <div className="mt-6 rounded-xl border border-accent/20 bg-accent-light px-6 py-4 text-sm text-foreground">
            Sin los costos ni la recuperación de una cirugía tradicional.
          </div>

          <div className="mt-8">
            <WhatsAppButton
              variant="primary"
              service="ligadura_hemorroides"
              position="lp-precio"
              procedureName="Ligadura de hemorroides"
              label="Confirmar mi precio por WhatsApp"
              className="w-full sm:w-auto sm:px-8"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 — POR QUÉ CON EL DR. QUIROZ (bg-background)
          Authority + discretion (embarrassment is a booking objection here).
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
                Atención discreta y directa: cuando escribes, te contesta el
                doctor — no una recepcionista.
              </p>

              <div className="mt-6">
                <WhatsAppButton
                  variant="primary"
                  size="compact"
                  service="ligadura_hemorroides"
                  position="lp-doctor"
                  procedureName="Ligadura de hemorroides"
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
                service="ligadura_hemorroides"
                videoId="lp-hemorroides-trust"
                title="El Dr. Omar Quiroz sobre la ligadura de hemorroides"
                caption={`El Dr. Omar Quiroz — ${DOCTOR.descriptor}.`}
              />
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 — SIN CIRUGÍA, SIN VERGÜENZA (bg-muted)
          Discretion + no-surgery are the two objections that block this booking.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-narrow section-padding">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Un procedimiento discreto y rápido
          </h2>

          <p className="mt-4 inline-flex items-start gap-2 text-foreground">
            <EyeOff className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            La ligadura trata las hemorroides internas colocando una banda; sin
            cirugía mayor y sin hospitalización. Atención discreta y directa con
            el Dr. Quiroz.
          </p>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, text: "Sin cirugía mayor" },
              { icon: CheckCircle2, text: "Ambulatorio, sin hospitalización" },
              { icon: Activity, text: "Sedación con anestesiólogo" },
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
              service="ligadura_hemorroides"
              position="lp-urgencia"
              procedureName="Ligadura de hemorroides"
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
          Only the questions that block booking.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-narrow section-padding">
          <h2 className="font-serif text-xl font-bold tracking-tight text-foreground md:text-2xl">
            Preguntas frecuentes
          </h2>

          <div className="mt-6 space-y-4">
            {[
              {
                q: "¿Necesito cirugía?",
                a: "En la mayoría de hemorroides internas, no. La ligadura es ambulatoria y sin hospitalización.",
              },
              {
                q: "¿Duele?",
                a: "Es un procedimiento rápido; se maneja con sedación y molestias mínimas.",
              },
              {
                q: "¿Cuándo puedo volver a mis actividades?",
                a: "La recuperación suele ser rápida; el Dr. Quiroz te da las indicaciones.",
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
              service="ligadura_hemorroides"
              position="lp-faq"
              procedureName="Ligadura de hemorroides"
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
            ¿Listo para tratar tus hemorroides sin cirugía?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Atención discreta. Te contesta directamente el Dr. Quiroz.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton
              variant="primary"
              service="ligadura_hemorroides"
              position="lp-bottom"
              procedureName="Ligadura de hemorroides"
              label="Agendar por WhatsApp"
              className="w-full sm:w-auto sm:px-10"
            />
            <CallButton
              variant="inverse"
              service="ligadura_hemorroides"
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
            service="ligadura_hemorroides"
            position="lp-sticky"
            procedureName="Ligadura de hemorroides"
            label="Agendar por WhatsApp"
            className="min-h-[48px] flex-1"
          />
          <CallButton
            variant="secondary"
            service="ligadura_hemorroides"
            position="lp-sticky"
            label="Llamar"
            className="min-h-[48px] shrink-0 px-4 text-sm"
          />
        </div>
      </div>
    </div>
  );
}
