// /components/TeamPresence.tsx
// "Quién estará contigo" — the three people in the room, distributed onto the
// procedure pages, the doctor profile and the LPs. Server Component; the
// IntersectionObserver lives in the <TeamBlockView> client island around it.
//
// All copy and data come from lib/team.ts. The female-presence guarantee is
// FEMALE_PRESENCE_LINE verbatim — generic by design, it never names the nurse.

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { TEAM, FEMALE_PRESENCE_LINE } from "@/lib/team";
import TeamBlockView from "@/components/TeamBlockView";

export type TeamPresenceProcedure = "endoscopia" | "colonoscopia";

type TeamPresenceProps = {
  /** Drives the heading's procedure label. */
  procedure: TeamPresenceProcedure;
  /** "compact" drops the one-line bios and shrinks the avatars. */
  variant?: "full" | "compact";
  /**
   * Section background. The CALLER sets this to whatever keeps the host page's
   * bg-background ↔ bg-muted alternation intact.
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
  const avatar = compact ? 48 : 64;
  const title = heading ?? `Quién estará contigo en tu ${PROCEDURE_LABEL[procedure]}`;
  const Heading = bare ? "h3" : "h2";

  return (
    <TeamBlockView
      className={
        bare ? undefined : tone === "muted" ? "bg-muted" : "bg-background"
      }
    >
      <div className={bare ? undefined : "container-page section-padding"}>
        <div className="max-w-3xl">
          <Heading className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground">
            {title}
          </Heading>

          <ul className="mt-6 space-y-6">
            {TEAM.map((m) => (
              <li key={m.slug} className="flex items-start gap-4">
                <Image
                  src={m.photo}
                  alt={`${m.displayName} — ${m.role}`}
                  width={avatar}
                  height={avatar}
                  sizes={`${avatar}px`}
                  className="shrink-0 rounded-full border border-border object-cover object-top"
                  style={{ width: avatar, height: avatar }}
                />

                <div className="min-w-0 space-y-1">
                  <p className="font-semibold text-foreground">
                    {m.displayName}
                  </p>
                  <p className="text-sm font-medium text-text-accent">
                    {m.role}
                  </p>

                  {!compact && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {m.bioShort}
                    </p>
                  )}

                  {m.slug === "enfermera" && (
                    <p className="border-l-2 border-accent pl-4 text-sm font-medium text-foreground">
                      {FEMALE_PRESENCE_LINE}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-muted-foreground">
            Los tres están certificados y sus cédulas son públicas.
          </p>

          <div className="mt-2">
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
