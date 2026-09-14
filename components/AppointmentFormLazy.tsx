"use client"

// components/AppointmentFormLazy.tsx
// Deferred loader for <AppointmentForm>. The form sits well below the fold and
// pulls in react-day-picker (+ its stylesheet), date-fns/es, the Radix popover
// and libphonenumber metadata — ~250 KB that used to load (and block render,
// for the CSS) on every /endoscopia-merida and /colonoscopia-merida view.
//
// The chunk is only fetched once the placeholder comes within ~1 viewport of
// the screen, or the user focuses/taps into it. The placeholder reserves the
// form's height so nothing shifts when it swaps in. Submission, validation,
// attribution and GTM funnel events all live in AppointmentForm itself and are
// unchanged.

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

type Procedure = "endoscopia" | "colonoscopia"

const AppointmentForm = dynamic(() => import("@/components/AppointmentForm"), {
  ssr: false,
  loading: () => <FormPlaceholder />,
})

function FormPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-[520px] min-h-[880px] rounded-2xl border border-border bg-background shadow-sm sm:min-h-[832px]"
    />
  )
}

export default function AppointmentFormLazy({ procedure }: { procedure: Procedure }) {
  const [load, setLoad] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (load) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") {
      setLoad(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "100% 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [load])

  if (load) return <AppointmentForm procedure={procedure} />

  return (
    <div ref={ref} onPointerDown={() => setLoad(true)} onFocus={() => setLoad(true)}>
      <FormPlaceholder />
    </div>
  )
}
