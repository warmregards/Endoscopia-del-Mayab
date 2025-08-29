// SiteHeader.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"

const services = [
  { href: "/endoscopia-merida", label: "Endoscopia" },
  { href: "/colonoscopia-merida", label: "Colonoscopia" },
  { href: "/cpre-merida", label: "CPRE" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Inicio - Endoscopia del Mayab">
          <Image
            src="/endoscopia-logo.png"
            alt="Endoscopia del Mayab"
            width={180}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          <Link
            href="/"
            className="text-foreground/80 hover:text-link font-medium"
            data-cta="nav"
            data-cta-link="home"
          >
            Endoscopia Mérida
          </Link>

          {/* Servicios dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="text-foreground/80 hover:text-link font-medium flex items-center"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Servicios
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-background rounded-md popover border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                    data-cta="nav"
                    data-cta-link={`service:${s.label}`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/emergencias-digestivas-merida"
            className="text-foreground/80 hover:text-link font-medium"
            data-cta="nav"
            data-cta-link="emergencias"
          >
            Emergencias
          </Link>
          <Link
            href="/contacto"
            className="text-foreground/80 hover:text-link font-medium"
            data-cta="nav"
            data-cta-link="contacto"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-md text-foreground/80 hover:text-link"
          aria-label="Abrir menú"
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-50 bg-black/40"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="ml-auto h-full w-80 bg-background shadow-xl border-l border-border p-6 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground">Menú</span>
              <button
                type="button"
                className="p-2 rounded-md text-foreground/80 hover:text-link"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <Link href="/" className="py-2 text-foreground" onClick={() => setOpen(false)} data-cta="nav" data-cta-link="home">Inicio</Link>
            <div className="pt-2">
              <div className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">Servicios</div>
              <div className="flex flex-col">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="py-2 text-foreground"
                    onClick={() => setOpen(false)}
                    data-cta="nav"
                    data-cta-link={`service:${s.label}`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/emergencias-digestivas-merida" className="py-2 text-foreground" onClick={() => setOpen(false)} data-cta="nav" data-cta-link="emergencias">
              Emergencias
            </Link>
            <Link href="/contacto" className="py-2 text-foreground" onClick={() => setOpen(false)} data-cta="nav" data-cta-link="contacto">
              Contacto
            </Link>

            {/* CTA block — use tracked components */}
            <div className="mt-auto flex flex-col gap-3">
              <CallButton
                className="!px-4 !py-2"
                position="Header Mobile"
                label="Llamar: +52 999 236 0153"
              />
              <WhatsAppButton
                className="!px-4 !py-2"
                position="Header Mobile"
                label="WhatsApp"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
