// components/home/DoctorSection.tsx
import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"
import { DOCTOR } from "@/lib/doctor"

export default function DoctorSection() {
  return (
    <section className="bg-surface-base">
      <div className="container-page section-padding">
        <div className="flex flex-col md:flex-row gap-6 md:items-center">
          {/* Photo placeholder */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-action-secondary/15 to-action-secondary/5 border-[3px] border-action-secondary/25 flex items-center justify-center shrink-0 shadow-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-action-secondary/60">OQ</div>
              <div className="text-[10px] font-medium text-text-secondary uppercase tracking-wide">
                Dr. Quiroz
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-text-primary mb-1.5">{DOCTOR.name}</h2>
            <p className="text-[length:var(--text-body)] font-bold text-text-accent mb-3">
              {DOCTOR.title} · {DOCTOR.hospital}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-2xl">
              {DOCTOR.bio}
            </p>

            <div className="flex flex-wrap gap-2">
              {DOCTOR.credentials.map((item, i) => (
                <span
                  key={item}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border ${
                    i < 3
                      ? "bg-action-secondary/8 border-action-secondary/20 text-action-secondary"
                      : "bg-surface-sunken border-border-default text-text-secondary"
                  }`}
                >
                  <Shield className="h-3.5 w-3.5" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href={DOCTOR.profileUrl}
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-brand hover:text-action-secondary px-4 py-2.5 rounded-[var(--radius-interactive)] border border-border-default hover:border-action-primary/30 hover:bg-surface-sunken transition-all group"
          >
            Ver perfil completo
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
