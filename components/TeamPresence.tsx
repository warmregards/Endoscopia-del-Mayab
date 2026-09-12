// /components/TeamPresence.tsx
// "Quién estará contigo" — the three people in the room, distributed onto the
// procedure pages, the doctor profile and the LPs. Server Component; the
// IntersectionObserver lives in the <TeamBlockView> client island around it.
//
// Layout mirrors <ComparisonTable> exactly — same section wrapper, same
// `container-page section-padding`, same inner `max-w-5xl mx-auto`, same H2
// classes — so the block's left edge lines up with the sections above and below
// it on every page that hosts it. Change one, change the other.
//
// All copy and data come from lib/team.ts. The female-presence guarantee is
// FEMALE_PRESENCE_LINE verbatim — generic by design, it never names the nurse.

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

import { TEAM, FEMALE_PRESENCE_LINE } from "@/lib/team";
import TeamBlockView from "@/components/TeamBlockView";

export type TeamPresenceProcedure = "endoscopia" | "colonoscopia";

type TeamPresenceProps = {
  /** Drives the heading's procedure label. */
  procedure: TeamPresenceProcedure;
  /**
   * "compact" shrinks the avatar and drops the credential chips — used where a
   * credentials block already sits directly above it (the doctor page, the
   * LPs), so the same cédulas don't render twice in one screen.
   */
  variant?: "full" | "compact";
  /**
   * Section background. The CALLER sets this to whatever keeps the host page's
   * bg-background ↔ bg-muted alternation intact. The cards sit on this tone.
   */
  tone?: "background" | "muted";
  /** Override the generated H2 (e.g. "Su equipo en cada procedimiento"). */
  heading?: string;
  /** Override the closing link text. */
  linkLabel?: string;
  /**
   * Render the closing link through a custom wrapper — the LPs pass
   * <LpGuideLink> so the exit fires `lp_exit_to_guide`.
   */
  renderLink?: (href: string, label: string) => React.ReactNode;
  /**
   * Drop the section background + container/padding chrome and render the
   * heading as an h3. For placement INSIDE an existing section — the LPs sit
   * it under <LpVideo>, where the surrounding section already supplies
   * container-narrow + section-padding and its own h2. `tone` is ignored.
   */
  bare?: boolean;
};

const PROCEDURE_LABEL: Record<TeamPresenceProcedure, string> = {
  endoscopia: "endoscopia",
  colonoscopia: "colonoscopia",
};

const VERIFY_HREF = "/equipo-medico#verifica";

/** Max chips per card — two fit inside a third-of-the-grid card. */
const MAX_CHIPS = 2;

export default function TeamPresence({
  procedure,
  variant = "full",
  tone = "background",
  heading,
  linkLabel = "Conoce al equipo y verifica sus cédulas",
  renderLink,
  bare = false,
}: TeamPresenceProps) {
  const compact = variant === "compact";
  const avatar = compact ? 64 : 96;
  const title =
    heading ?? `Quién estará contigo en tu ${PROCEDURE_LABEL[procedure]}`;
  const Heading = bare ? "h3" : "h2";

  return (
    <TeamBlockView
      className={
        bare ? undefined : tone === "muted" ? "bg-muted" : "bg-background"
      }
    >
      <div className={bare ? undefined : "container-page section-padding"}>
        <div className={bare ? "space-y-8" : "max-w-5xl mx-auto space-y-8"}>
          <Heading className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
            {title}
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((m) => (
              <article
                key={m.slug}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3"
              >
                <Image
                  src={m.photo}
                  alt={`${m.displayName} — ${m.role}`}
                  width={avatar}
                  height={avatar}
                  sizes={`${avatar}px`}
                  className="shrink-0 rounded-full border border-border object-cover object-top"
                  style={{ width: avatar, height: avatar }}
                />

                <p className="font-semibold text-foreground">{m.displayName}</p>

                <p className="text-primary text-sm">{m.role}</p>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {m.bioShort}
                </p>

                {!compact && (
                  <div className="flex flex-wrap gap-2">
                    {/* Doctor-page chip, at the text-xs the design system
                        specifies for badges — text-sm wrapped to three lines
                        inside a third-of-the-grid card at 768px. */}
                    {m.chips.slice(0, MAX_CHIPS).map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-xs font-medium text-foreground"
                      >
                        <Award className="h-4 w-4 shrink-0 text-primary" />
                        {chip}
                      </span>
                    ))}
                  </div>
                )}

                {/* mt-auto pins the guarantee to the bottom of an equal-height
                    card (the grid stretches all three), so it reads as the
                    card's closing line instead of floating under a short bio. */}
                {m.slug === "enfermera" && (
                  <p className="mt-auto rounded-lg bg-primary/5 p-3 text-sm text-foreground">
                    {FEMALE_PRESENCE_LINE}
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Los tres están certificados y sus cédulas son públicas.
            </p>

            {renderLink ? (
              renderLink(VERIFY_HREF, linkLabel)
            ) : (
              <Link
                href={VERIFY_HREF}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:underline hover:gap-4"
              >
                {linkLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </TeamBlockView>
  );
}
