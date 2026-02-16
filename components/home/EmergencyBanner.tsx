// components/home/EmergencyBanner.tsx
import Link from "next/link"
import CallButton from "@/components/CallButton"

export default function EmergencyBanner() {
  return (
    <section className="bg-surface-base">
      <div className="container-page py-6 md:py-8">
        <div className="p-5 rounded-xl bg-feedback-error-bg border border-feedback-error/20 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-feedback-error mb-1">
              Emergencias Digestivas — 7 días
            </div>
            <div className="text-sm text-feedback-error/70">
              Sangrado digestivo, obstrucciones, cuerpos extraños. Atención inmediata.
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <CallButton
              service="emergencias"
              position="emergency-banner"
              label="Llamar ahora"
              className="!bg-feedback-error !border-feedback-error hover:!opacity-90"
            />
            <Link
              href="/emergencias-digestivas-merida"
              className="text-sm font-semibold text-feedback-error whitespace-nowrap"
            >
              Más info →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
