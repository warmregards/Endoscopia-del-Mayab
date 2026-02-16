// components/home/IncludedStrip.tsx
import { Check } from "lucide-react"
import { INCLUDED_IN_PRICE } from "@/lib/pricing"

export default function IncludedStrip() {
  return (
    <div
      id="included-strip"
      className="bg-surface-strip border-y border-action-primary/20 py-[var(--section-py-strip)]"
    >
      <div className="container-page">
        <div className="flex flex-wrap gap-x-4 gap-y-2.5 md:gap-x-8 md:justify-center items-center">
          {INCLUDED_IN_PRICE.map(item => (
            <div key={item} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-action-primary shrink-0 stroke-[2.5]" />
              <span className="text-sm font-semibold text-text-primary">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
