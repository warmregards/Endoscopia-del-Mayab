import { metaFor } from "@/lib/routes-seo"
import { displayFrom } from "@/lib/pricing"
import { CLINIC, telHref, waHref } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { breadcrumbSchema } from "@/lib/schema"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, MessageCircle, Clock, Star, ChevronRight } from "lucide-react"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"
import MapEmbed from "@/components/MapEmbed"
import Faq from "@/components/Faq"

export const revalidate = 86400
export const metadata = metaFor("contacto")

export default function ContactoPage() {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: "Contacto", path: "/contacto" },
            ])
          ),
        }}
      />

      {/* SECTION 1: Hero — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-foreground tracking-tight">
            Contacto — Endoscopia del Mayab en Mérida
          </h1>

          <p className="text-lg text-foreground/80 mt-4 max-w-2xl">
            Agenda directo con el Dr. Omar Quiroz por WhatsApp — respuesta en
            minutos, no con una recepcionista.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-accent/20 text-sm font-medium">
              <Star className="h-4 w-4 text-text-accent" />
              {CLINIC.aggregateRating.ratingValue} — {CLINIC.aggregateRating.reviewCount} reseñas en Google
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium">
              <MapPin className="h-4 w-4 text-primary" />
              Hospital Amerimed, Mérida, Yucatán
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium">
              <Clock className="h-4 w-4 text-primary" />
              {CLINIC.hours.display}
            </span>
          </div>

          {/* CTAs — WhatsApp first */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <WhatsAppButton
              variant="primary"
              label="Escribir por WhatsApp"
              service="contacto"
              position="hero"
              className="sm:px-8"
            />
            <CallButton
              variant="ghost"
              label={`Llamar: ${CLINIC.phone.display}`}
              service="contacto"
              position="hero"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Contact Info + Map — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight mb-8">
            Cómo Llegar y Horarios
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* NAP+W card */}
            <div className="rounded-2xl border border-border bg-background p-6 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Dirección</p>
                  <p className="text-foreground/80">{CLINIC.address.display}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <a
                    href={telHref()}
                    className="text-primary hover:underline"
                  >
                    {CLINIC.phone.display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="h-5 w-5 text-text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <a
                    href={waHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-accent hover:underline"
                  >
                    {CLINIC.phone.display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Horario</p>
                  <p className="text-foreground/80">{CLINIC.hours.display}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border text-sm text-foreground/70 space-y-2">
                <p>Estacionamiento gratuito disponible</p>
                <p>
                  Fácil acceso desde Periférico Norte, colonia{" "}
                  {CLINIC.address.neighborhood}, {CLINIC.address.addressRegion}
                </p>
                <p>
                  Cerca de Altabrisa, Temozón Norte, Cholul y Francisco de
                  Montejo
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Doctor Credentials — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
            Tu Especialista: {DOCTOR.name}
          </h2>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr] items-start">
            <Image
              src={DOCTOR.photos.headshot}
              alt={`${DOCTOR.name} — ${DOCTOR.title}`}
              width={280}
              height={350}
              className="rounded-2xl w-full lg:w-[280px] object-cover"
            />

            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">
                {DOCTOR.name}
              </p>
              <p className="text-foreground/80">{DOCTOR.bioShort}</p>

              <ul className="flex flex-wrap gap-2">
                {DOCTOR.credentials.slice(0, 4).map((c) => (
                  <li
                    key={c}
                    className="px-4 py-2 rounded-full bg-accent-light text-sm font-medium text-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>

              <p className="text-foreground/80 italic">
                Cuando nos escribes, te contesta el Dr. Quiroz directamente — no
                una recepcionista.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <WhatsAppButton
                  variant="primary"
                  size="compact"
                  label="Agendar con el Dr. Quiroz"
                  service="contacto"
                  position="doctor"
                />
                <Link
                  href={DOCTOR.profileUrl}
                  className="text-sm text-primary font-semibold hover:underline"
                >
                  Ver perfil completo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Quick Price Reference — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight mb-8">
            Precios de Procedimientos
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {(
              [
                { key: "endoscopia", name: "Endoscopia" },
                { key: "colonoscopia", name: "Colonoscopia" },
                { key: "cpre", name: "CPRE" },
              ] as const
            ).map(({ key, name }) => (
              <div
                key={key}
                className="rounded-xl border border-border bg-background p-6 space-y-2"
              >
                <p className="font-serif font-semibold text-foreground">
                  {name}
                </p>
                <p className="text-lg font-bold text-text-accent">
                  {displayFrom(key)}
                </p>
                <p className="text-sm text-foreground/70">
                  Incluye anestesia, biopsias y recuperación
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Ver todos los precios
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: Google Reviews — bg-background */}
      <GoogleReviews title="Lo Que Dicen Nuestros Pacientes" />

      {/* SECTION 6: FAQ — bg-muted */}
      <div className="bg-muted">
        <Faq
          routeKey="contacto"
          service="contacto"
          heading="Preguntas Frecuentes sobre Citas"
        />
      </div>

      {/* SECTION 7: Bottom CTA — bg-primary */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground tracking-tight">
            ¿Listo para Agendar tu Cita?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Escríbenos por WhatsApp y te contestamos en minutos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton
              variant="primary"
              label="Agendar por WhatsApp"
              service="contacto"
              position="bottom-cta"
              className="sm:px-10"
            />
            <CallButton
              variant="inverse"
              label="Llamar Ahora"
              service="contacto"
              position="bottom-cta"
            />
          </div>
        </div>
      </section>
    </>
  )
}
