"use client"

// components/AppointmentForm.tsx
// On-page appointment request form (validation test). Reusable for both the
// endoscopia and colonoscopia pages — parameterized by `procedure`. On submit
// it POSTs to /api/intake, which validates and notifies Telegram. The patient
// gets a success confirmation with a reference folio.
//
// All prices/included-items come from lib/pricing.ts; clinic/WhatsApp from
// lib/clinic.ts. This is an ADDITIONAL conversion path — it does not replace
// the page's existing WhatsApp/phone CTAs.

import { useEffect, useMemo, useState } from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"
import { es } from "date-fns/locale"
import { format, startOfToday } from "date-fns"
import * as Popover from "@radix-ui/react-popover"
import {
  CalendarDays,
  Check,
  CheckCircle2,
  Clock,
  Loader2,
  Lock,
  MessageCircle,
} from "lucide-react"
import {
  PRICING,
  priceData,
  mxn,
  INCLUDED_IN_PRICE,
  type ServiceKey,
} from "@/lib/pricing"
import { waHref, waMessage } from "@/lib/clinic"
import { captureAttribution, getStoredAttribution } from "@/lib/attribution"
import { pushAppointmentRequest } from "@/lib/gtm"
import { cn } from "@/lib/utils"

type Procedure = "endoscopia" | "colonoscopia"

type ProcedureConfig = {
  key: ServiceKey
  /** Patient-facing accented name for the header (spec §3.1 / §4.1). */
  displayName: string
  crossSellKey: ServiceKey
  /** Spec-mandated cross-sell offer copy (spec §3.1). */
  crossSellOffer: string
}

const PROCEDURE_CONFIG: Record<Procedure, ProcedureConfig> = {
  endoscopia: {
    key: "endoscopia",
    displayName: "Endoscopía",
    crossSellKey: "colonoscopia",
    crossSellOffer: "una colonoscopía",
  },
  colonoscopia: {
    key: "colonoscopia",
    displayName: "Colonoscopía",
    crossSellKey: "endoscopia",
    crossSellOffer: "una endoscopía",
  },
}

const INPUT_BASE =
  "w-full min-h-[48px] rounded-xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors"

/** Lightweight client-side phone check (server is authoritative via libphonenumber). */
function phoneLooksValid(value: string): boolean {
  return value.replace(/\D/g, "").length >= 10
}

export default function AppointmentForm({ procedure }: { procedure: Procedure }) {
  const config = PROCEDURE_CONFIG[procedure]
  const sourcePage =
    procedure === "endoscopia" ? "/endoscopia-merida" : "/colonoscopia-merida"

  // ── Field state ───────────────────────────────────────────────────────────
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [phoneTouched, setPhoneTouched] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [dateOpen, setDateOpen] = useState(false)
  const [window_, setWindow] = useState<"manana" | "tarde" | null>(null)
  const [crossSell, setCrossSell] = useState(false)
  const [message, setMessage] = useState("")
  const [website, setWebsite] = useState("") // honeypot

  // ── Submission state ──────────────────────────────────────────────────────
  const [submitting, setSubmitting] = useState(false)
  const [folio, setFolio] = useState<string | null>(null)
  const [error, setError] = useState(false)

  // Capture click IDs / UTM on landing (persisted for read-back at submit).
  useEffect(() => {
    captureAttribution()
  }, [])

  // ── Live estimate (always "Desde", recomputed on cross-sell toggle) ───────
  const estimate = useMemo(() => {
    const base = priceData(config.key)
    const cross = priceData(config.crossSellKey)
    const baseAmount = base?.amount ?? 0
    const total =
      crossSell && cross ? baseAmount + cross.amount : baseAmount
    return mxn(total)
  }, [config.key, config.crossSellKey, crossSell])

  const includedItems = INCLUDED_IN_PRICE.slice(0, 4)
  const phoneError = phoneTouched && !phoneLooksValid(phone)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(false)
    setPhoneTouched(true)

    // Client-side mirror validation (UX only).
    if (name.trim().length < 2 || !phoneLooksValid(phone)) return

    setSubmitting(true)
    const attribution = getStoredAttribution()
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          preferredDate: date ? format(date, "yyyy-MM-dd") : undefined,
          preferredWindow: window_,
          crossSell,
          message: message.trim() || undefined,
          procedure,
          gclid: attribution.gclid,
          gbraid: attribution.gbraid,
          wbraid: attribution.wbraid,
          utm: attribution.utm,
          sourcePage,
          website,
        }),
      })
      const json = (await res.json().catch(() => null)) as
        | { ok: boolean; folio?: string }
        | null

      if (!res.ok || !json?.ok || !json.folio) {
        setError(true)
        return
      }

      setFolio(json.folio)
      // Fire conversion ONLY on confirmed delivery (after the 200).
      pushAppointmentRequest({
        service: procedure,
        crossSell,
        folio: json.folio,
        pagePath: sourcePage,
      })
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  function resetForm() {
    setFolio(null)
    setError(false)
    setName("")
    setPhone("")
    setPhoneTouched(false)
    setDate(undefined)
    setWindow(null)
    setCrossSell(false)
    setMessage("")
  }

  // ── Success state ─────────────────────────────────────────────────────────
  if (folio) {
    return (
      <div className="mx-auto w-full max-w-[520px] rounded-2xl border border-border bg-background p-8 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <Check className="h-8 w-8 text-success" />
        </div>
        <h3 className="text-xl font-serif font-bold text-foreground">
          ¡Listo! Recibimos tu solicitud
        </h3>
        <p className="mt-2 text-muted-foreground">
          Te contactamos pronto por WhatsApp o llamada para confirmar tu cita.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-muted px-4 py-3">
          <span className="text-sm text-muted-foreground">Tu folio:</span>
          <span className="font-mono text-base font-semibold text-foreground">
            {folio}
          </span>
        </div>
        <div className="mt-8">
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-border bg-background px-6 font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Enviar otra solicitud
          </button>
        </div>
      </div>
    )
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto w-full max-w-[520px] rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8"
    >
      {/* Header */}
      <div className="space-y-1">
        <h3 className="text-xl font-serif font-bold text-foreground tracking-tight">
          Agenda tu {config.displayName}
        </h3>
        <p className="text-sm text-muted-foreground">
          Déjanos tus datos y te contactamos para confirmar tu cita.
        </p>
      </div>

      {/* Response-time pill */}
      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-medium text-success">
        <Clock className="h-4 w-4" />
        Respondemos en menos de 30 min en horario laboral
      </div>

      <div className="mt-6 space-y-4">
        {/* Nombre */}
        <div>
          <label
            htmlFor="apt-name"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Nombre completo
          </label>
          <input
            id="apt-name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className={INPUT_BASE}
          />
        </div>

        {/* Teléfono */}
        <div>
          <label
            htmlFor="apt-phone"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Teléfono (WhatsApp)
          </label>
          <input
            id="apt-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={() => setPhoneTouched(true)}
            placeholder="999 123 4567"
            aria-invalid={phoneError}
            className={cn(INPUT_BASE, phoneError && "border-error focus:border-error focus:ring-error/30")}
          />
          {phoneError && (
            <p className="mt-2 text-sm text-error">
              Ingresa un número válido de 10 dígitos.
            </p>
          )}
        </div>

        {/* Fecha preferida */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Fecha preferida{" "}
            <span className="font-normal text-muted-foreground">(opcional)</span>
          </label>
          <Popover.Root open={dateOpen} onOpenChange={setDateOpen}>
            <Popover.Trigger asChild>
              <button
                type="button"
                className={cn(
                  INPUT_BASE,
                  "flex items-center justify-between text-left",
                  !date && "text-muted-foreground/70"
                )}
              >
                <span>
                  {date
                    ? format(date, "d MMM yyyy", { locale: es })
                    : "Elige una fecha"}
                </span>
                <CalendarDays className="h-5 w-5 text-muted-foreground" />
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                align="start"
                sideOffset={8}
                className="z-50 rounded-2xl border border-border bg-background p-3 shadow-lg"
                style={
                  {
                    "--rdp-accent-color": "hsl(var(--accent))",
                    "--rdp-accent-background-color": "hsl(var(--accent) / 0.1)",
                  } as React.CSSProperties
                }
              >
                <DayPicker
                  mode="single"
                  locale={es}
                  selected={date}
                  onSelect={(d) => {
                    setDate(d)
                    if (d) setDateOpen(false)
                  }}
                  disabled={{ before: startOfToday() }}
                  weekStartsOn={1}
                />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>

        {/* Horario */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Horario{" "}
            <span className="font-normal text-muted-foreground">(opcional)</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(["manana", "tarde"] as const).map((w) => {
              const active = window_ === w
              return (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWindow(active ? null : w)}
                  aria-pressed={active}
                  className={cn(
                    "min-h-[48px] rounded-xl border font-medium transition-colors",
                    active
                      ? "border-accent bg-accent/10 text-text-accent"
                      : "border-border bg-background text-foreground hover:bg-muted"
                  )}
                >
                  {w === "manana" ? "Mañana" : "Tarde"}
                </button>
              )
            })}
          </div>
        </div>

        {/* Cross-sell row — whole row is the tap target */}
        <button
          type="button"
          onClick={() => setCrossSell((v) => !v)}
          aria-pressed={crossSell}
          className={cn(
            "flex min-h-[48px] w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
            crossSell
              ? "border-accent bg-accent/10"
              : "border-border bg-background hover:bg-muted"
          )}
        >
          <span
            className={cn(
              "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border transition-colors",
              crossSell
                ? "border-accent bg-accent text-white"
                : "border-border bg-background"
            )}
          >
            {crossSell && <Check className="h-4 w-4" />}
          </span>
          <span className="text-sm font-medium text-foreground">
            También me interesa {config.crossSellOffer}
          </span>
        </button>

        {/* Mensaje */}
        <div>
          <label
            htmlFor="apt-message"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Mensaje{" "}
            <span className="font-normal text-muted-foreground">(opcional)</span>
          </label>
          <textarea
            id="apt-message"
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
            placeholder="Cuéntanos brevemente tu caso"
            className={cn(INPUT_BASE, "resize-none py-3 leading-relaxed")}
          />
        </div>

        {/* Estimate + included block */}
        <div className="rounded-xl bg-muted p-4">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-foreground">
              Estimado desde
            </span>
            <span className="font-serif text-xl font-bold text-text-accent">
              {estimate}
            </span>
          </div>
          <p className="mt-4 text-sm font-medium text-foreground">
            Incluido en el precio:
          </p>
          <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {includedItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                <span className="text-sm text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Costo final se confirma en tu valoración.
          </p>
        </div>

        {/* Honeypot — visually hidden offscreen (NOT display:none) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            top: "auto",
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          <label htmlFor="apt-website">Sitio web</label>
          <input
            id="apt-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        {/* Failure state — keeps typed data, offers WhatsApp fallback */}
        {error && (
          <div className="rounded-xl border border-error/30 bg-error/5 p-4 text-sm">
            <p className="text-foreground">
              No pudimos enviar tu solicitud. Escríbenos por WhatsApp y te
              atendemos de inmediato.
            </p>
            <a
              href={waHref({ text: waMessage(config.displayName) })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-action-primary px-4 font-semibold text-white transition-colors hover:bg-action-primary-hover"
            >
              <MessageCircle className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-action-primary px-6 font-semibold text-white shadow-md transition-colors hover:bg-action-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Enviando…
            </>
          ) : (
            "Solicitar cita"
          )}
        </button>

        {/* Microcopy */}
        <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-4 w-4" />
          Sin compromiso · confirmas la fecha por teléfono
        </p>
      </div>
    </form>
  )
}
