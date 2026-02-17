// SiteHeader.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { CLINIC } from "@/lib/clinic";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  { href: "/endoscopia-merida", label: "Endoscopia" },
  { href: "/colonoscopia-merida", label: "Colonoscopia" },
  { href: "/cpre-merida", label: "CPRE" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    []
  );

  // Body scroll lock
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      // Focus first focusable element in drawer
      const timer = setTimeout(() => {
        const first = drawerRef.current?.querySelector<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        first?.focus();
      }, 50);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        clearTimeout(timer);
      };
    }
  }, [open, handleKeyDown]);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Inicio - Endoscopia del Mayab"
        >
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
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navegación principal"
        >
          <Link
            href="/"
            className="text-foreground/80 hover:text-link font-medium"
            data-cta="nav"
            data-cta-link="home"
          >
            Endoscopia Mérida
          </Link>

          <Link
            href="/precios"
            className="text-foreground/80 hover:text-link font-medium"
            data-cta="nav"
            data-cta-link="precios"
          >
            Precios
          </Link>
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
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu — full-screen overlay */}
      {open && (
        <div
          id="mobile-menu"
          ref={drawerRef}
          className="md:hidden fixed inset-0 z-50 bg-background flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          {/* Header row — matches main header */}
          <div className="h-16 px-4 sm:px-6 flex items-center justify-between border-b border-border">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Inicio - Endoscopia del Mayab"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/endoscopia-logo.png"
                alt="Endoscopia del Mayab"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              className="p-2 rounded-md text-foreground/80 hover:text-link"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto" aria-label="Menú móvil">
            <Link
              href="/"
              className="block w-full py-4 px-4 sm:px-6 text-lg font-medium text-foreground border-b border-border"
              onClick={() => setOpen(false)}
              data-cta="nav"
              data-cta-link="home"
            >
              Inicio
            </Link>
            <Link
              href="/precios"
              className="block w-full py-4 px-4 sm:px-6 text-lg font-medium text-foreground border-b border-border"
              onClick={() => setOpen(false)}
              data-cta="nav"
              data-cta-link="precios"
            >
              Precios
            </Link>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block w-full py-4 px-4 sm:px-6 text-lg font-medium text-foreground border-b border-border"
                onClick={() => setOpen(false)}
                data-cta="nav"
                data-cta-link={`service:${s.label}`}
              >
                {s.label}
              </Link>
            ))}
            <Link
              href="/emergencias-digestivas-merida"
              className="block w-full py-4 px-4 sm:px-6 text-lg font-medium text-foreground border-b border-border"
              onClick={() => setOpen(false)}
              data-cta="nav"
              data-cta-link="emergencias"
            >
              Emergencias
            </Link>
            <Link
              href="/contacto"
              className="block w-full py-4 px-4 sm:px-6 text-lg font-medium text-foreground border-b border-border"
              onClick={() => setOpen(false)}
              data-cta="nav"
              data-cta-link="contacto"
            >
              Contacto
            </Link>
          </nav>

          {/* CTA buttons — pinned to bottom */}
          <div className="px-4 sm:px-6 pb-8 pt-4 flex flex-col gap-4">
            <WhatsAppButton
              position="header-mobile"
              label="WhatsApp"
              className="w-full"
            />
            <CallButton
              position="header-mobile"
              label={`Llamar: ${CLINIC.phone.display}`}
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}