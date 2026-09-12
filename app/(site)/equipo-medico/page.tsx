import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, ExternalLink, ShieldCheck } from "lucide-react"

import { metaFor } from "@/lib/routes-seo"
import { DOCTOR } from "@/lib/doctor"
import { CLINIC } from "@/lib/clinic"
import {
  TEAM,
  VERIFY_LINKS,
  VERIFY_QUESTIONS,
  VERIFY_ROWS,
  FEMALE_PRESENCE_LINE,
  getMember,
} from "@/lib/team"
import { breadcrumbSchema, teamPageSchema, videoSchema } from "@/lib/schema"
import { getVideo, isPublished } from "@/lib/videos"
import Faq from "@/components/Faq"
import TeamCta from "@/components/TeamCta"
import YouTubeEmbed from "@/components/YouTubeEmbed"

export const revalidate = 86400
export const metadata = metaFor("equipo")

const SOURCE = "/equipo-medico"

const anestesiologo = getMember("anestesiologo")
const enfermera = getMember("enfermera")

/** Verification rows grouped by person, preserving TEAM order. */
const verifyByPerson = VERIFY_ROWS.reduce<
  Array<{ person: string; rows: typeof VERIFY_ROWS }>
>((acc, row) => {
  const group = acc.find((g) => g.person === row.person)
  if (group) group.rows.push(row)
  else acc.push({ person: row.person, rows: [row] })
  return acc
}, [])

/* ── Shared bits ───────────────────────────────────────────────────────── */

function CredentialChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-accent-light border border-accent/20 px-4 py-2 text-xs font-medium text-foreground">
      <BadgeCheck className="h-4 w-4 shrink-0 text-text-accent" />
      {children}
    </span>
  )
}

function DuringProcedure({
  steps,
  heading,
}: {
  steps: string[]
  heading?: string
}) {
  const labels = ["Antes", "Durante", "Después"]
  return (
    <div className="space-y-4">
      {heading && (
        <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
          {heading}
        </h3>
      )}
      <ol className="space-y-4">
        {steps.map((step, i) => (
          <li key={step} className="flex gap-4">
            <span
              aria-hidden
              className="inline-flex h-6 shrink-0 items-center rounded-full bg-accent-light px-2 text-xs font-semibold text-text-accent"
            >
              {labels[i] ?? i + 1}
            </span>
            <span className="text-foreground/80 leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════════════ */

export default function EquipoMedicoPage() {
  const video = getVideo("verificar_medico")
  const showVideo = isPublished(video)

  return (
    <>
      {/* ── JSON-LD: WebPage + team mainEntity ──────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamPageSchema()),
        }}
      />

      {/* ── JSON-LD: BreadcrumbList ─────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: "Equipo médico", path: SOURCE },
            ])
          ),
        }}
      />

      {/* ── JSON-LD: VideoObject (only once the video exists) ───────────── */}
      {showVideo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoSchema(video)),
          }}
        />
      )}

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              El equipo que estará contigo en tu procedimiento
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Endoscopista, anestesiólogo y enfermera — los tres certificados,
              los tres en la sala.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TEAM.map((m) => (
              <article
                key={m.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-accent/30 hover:shadow-md"
              >
                <div className="relative aspect-[4/5] w-full bg-muted">
                  <Image
                    src={m.photo}
                    alt={`${m.displayName} — ${m.role}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="space-y-1">
                    <h2 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                      {m.displayName}
                    </h2>
                    <p className="text-sm font-medium text-text-accent">
                      {m.role}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {m.bioShort}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {m.credentials.slice(0, 3).map((c) => (
                      <CredentialChip key={c}>{c}</CredentialChip>
                    ))}
                  </div>

                  <Link
                    href={`#${m.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:underline group-hover:gap-4"
                  >
                    Ver su papel en tu procedimiento
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <TeamCta position="hero" source={SOURCE} className="mt-8" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: ENDOSCOPISTA — bg-muted
          Short by design: /dr-omar-quiroz is canonical for him.
          ══════════════════════════════════════════════════════════════════ */}
      <section id="endoscopista" className="scroll-mt-24 bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              {DOCTOR.name} — {DOCTOR.descriptor}
            </h2>

            <p className="text-foreground/80 leading-relaxed">
              {DOCTOR.bioShort}
            </p>

            <DuringProcedure steps={getMember("endoscopista").duringProcedure} />

            <Link
              href={DOCTOR.profileUrl}
              className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              Ver perfil completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: ANESTESIÓLOGO — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section id="anestesiologo" className="scroll-mt-24 bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="w-full shrink-0 lg:w-80">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-muted">
                <Image
                  src={anestesiologo.photo}
                  alt={`${anestesiologo.displayName} — ${anestesiologo.role}`}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Tu sedación la administra un anestesiólogo certificado
              </h2>

              <p className="text-foreground/80 leading-relaxed">
                {anestesiologo.bio}
              </p>

              <div className="rounded-xl border border-accent/20 bg-accent-light p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-text-accent">
                  Consejo Mexicano de Anestesiología
                </p>
                <p className="mt-2 font-serif text-2xl font-bold tracking-tight text-foreground">
                  {anestesiologo.cedulas.consejo}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cédula de especialidad {anestesiologo.cedulas.especialidad} —
                  verificable en el Registro Nacional de Profesionistas.
                </p>
              </div>

              <DuringProcedure
                steps={anestesiologo.duringProcedure}
                heading="Antes · Durante · Después"
              />

              <div className="flex flex-wrap gap-2">
                {anestesiologo.credentials.map((c) => (
                  <CredentialChip key={c}>{c}</CredentialChip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: ENFERMERA — bg-muted
          The guarantee sentence is generic by design (FEMALE_PRESENCE_LINE).
          ══════════════════════════════════════════════════════════════════ */}
      <section id="enfermera" className="scroll-mt-24 bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Siempre hay una mujer del equipo presente en tu procedimiento
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sabemos que para muchas pacientes es importante que haya una mujer
              en la sala. {FEMALE_PRESENCE_LINE}
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background">
            <div className="flex flex-col gap-8 p-6 sm:flex-row sm:p-8">
              <div className="w-full shrink-0 sm:w-64">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={enfermera.photo}
                    alt={`${enfermera.displayName} — ${enfermera.role}`}
                    fill
                    sizes="(min-width: 640px) 256px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                    {enfermera.displayName}
                  </h3>
                  <p className="text-sm font-medium text-text-accent">
                    {enfermera.role}
                  </p>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {enfermera.bio}
                </p>

                <DuringProcedure steps={enfermera.duringProcedure} />

                <div className="flex flex-wrap gap-2">
                  {enfermera.credentials.map((c) => (
                    <CredentialChip key={c}>{c}</CredentialChip>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
            Si prefieres que una mujer te acompañe también en tu valoración
            previa, dínoslo al agendar.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: VERIFICA — bg-background
          Framed as what to ask anywhere, starting with us. Never a claim
          about what other clinics do.
          ══════════════════════════════════════════════════════════════════ */}
      <section id="verifica" className="scroll-mt-24 bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Verifica a cualquier médico antes de tu procedimiento — empieza
              con nosotros
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Toda cédula profesional en México es pública. Estas son las
              nuestras — búscalas tú.
            </p>
          </div>

          {/* Credential table, grouped by person so it reads at 375px */}
          <div className="mt-8 space-y-6">
            {verifyByPerson.map((group) => (
              <div
                key={group.person}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                  {group.person}
                </h3>

                <ul className="mt-4 divide-y divide-border">
                  {group.rows.map((row) => {
                    const registry = VERIFY_LINKS[row.registry]
                    return (
                      <li
                        key={`${row.credential}-${row.number}`}
                        className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                      >
                        <span className="text-sm text-muted-foreground">
                          {row.credential}
                        </span>
                        <span className="flex flex-wrap items-baseline gap-4">
                          <span className="font-mono text-sm font-semibold text-foreground">
                            {row.number}
                          </span>
                          <a
                            href={registry.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                          >
                            Verificar en {row.registry === "sep" ? "SEP" : "CONACEM"}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
            Busca las cédulas en el{" "}
            <a
              href={VERIFY_LINKS.sep.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              {VERIFY_LINKS.sep.label}
            </a>{" "}
            y las certificaciones de Consejo en{" "}
            <a
              href={VERIFY_LINKS.conacem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              {VERIFY_LINKS.conacem.label}
            </a>
            .
          </p>

          {/* Five questions to ask anywhere */}
          <div className="mt-8 max-w-3xl">
            <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
              Cinco preguntas que debes hacer en cualquier clínica
            </h3>

            <ol className="mt-6 space-y-6">
              {VERIFY_QUESTIONS.map((item, i) => (
                <li key={item.q} className="flex gap-4">
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary"
                  >
                    {i + 1}
                  </span>
                  <div className="space-y-1">
                    <strong className="block font-semibold text-foreground">
                      {item.q}
                    </strong>
                    <p className="text-foreground/80 leading-relaxed">
                      {item.why}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Long-form video — renders only once the YouTube id is real */}
          {showVideo && (
            <div className="mt-8 max-w-3xl">
              <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                El {DOCTOR.name} lo explica en video
              </h3>
              <div className="mt-4">
                <YouTubeEmbed
                  id={video.id}
                  title={video.title}
                  caption={video.title}
                  service={video.service}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: FAQ — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section id="faqs-equipo" className="bg-muted">
        <Faq
          routeKey="equipo"
          service="equipo"
          heading="Preguntas sobre el equipo"
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: BOTTOM CTA — bg-primary
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-primary">
        <div className="container-page section-padding">
          <div className="mx-auto max-w-2xl space-y-8 text-center">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white">
                Agenda con un equipo completo y certificado.
              </h2>
              <p className="text-white/80">
                En {CLINIC.name} te contesta el {DOCTOR.name} personalmente por
                WhatsApp. Pregúntale quién estará contigo el día de tu estudio.
              </p>
            </div>

            <TeamCta
              position="bottom-cta"
              source={SOURCE}
              tone="dark"
              className="justify-center"
            />

            <p className="flex items-center justify-center gap-2 text-sm text-white/80">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              {FEMALE_PRESENCE_LINE}
            </p>

            <address className="not-italic text-sm text-white/80">
              {CLINIC.name} · {CLINIC.phone.display} · {CLINIC.address.display}
            </address>
          </div>
        </div>
      </section>
    </>
  )
}
