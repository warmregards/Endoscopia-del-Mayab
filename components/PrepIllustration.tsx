import type { ReactNode } from "react"
import styles from "./PrepIllustration.module.css"

type Motif = "liquids" | "fasting" | "arrival" | "jug" | "companion"

/** Quiet, static line drawings inspired by the clinic's motion graphics.
 * Decorative: every instruction is supplied as adjacent, selectable text. */
export function PrepIllustration({ motif, small = false }: { motif: Motif; small?: boolean }) {
  return (
    <svg className={small ? styles.small : styles.art} viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {motif === "liquids" && <>
          <ellipse cx="92" cy="120" rx="72" ry="5" fill="currentColor" opacity=".05" stroke="none" />
          <path d="M28 66h42l-5 49H33z" fill="currentColor" fillOpacity=".07" stroke="none" />
          <path d="M24 39h50l-9 76H33z" /><path d="M29 66c12-5 27 5 40 0" opacity=".5" />
          <path d="M94 76h43v15c0 15-9 24-21 24s-22-9-22-24z" fill="currentColor" fillOpacity=".06" />
          <path d="M138 80h5c16 0 13 23-7 23M85 119h64M103 62c-8-10 8-14 0-24M119 62c-8-10 8-14 0-24" />
          <path d="M40 48h19" opacity=".3" />
        </>}
        {motif === "fasting" && <>
          <circle cx="86" cy="72" r="45" fill="currentColor" fillOpacity=".045" />
          <path d="M86 34v5M124 72h-5M86 110v-5M48 72h5M86 48v24l20 12" />
          <path d="M143 22a20 20 0 1 0 18 30 21 21 0 0 1-18-30Z" fill="var(--paper, #f8f7f2)" />
          <path d="M24 119h131" opacity=".25" /><circle cx="86" cy="72" r="3" fill="currentColor" stroke="none" />
        </>}
        {motif === "arrival" && <>
          <path d="M32 119V27h77v92M109 55h38v64M22 119h136" />
          <path d="M41 35h59v13H41z" fill="currentColor" fillOpacity=".12" stroke="none" />
          <path d="M44 41h10m15 0h10m15 0h4M44 61h10m15 0h10m15 0h4M44 81h10m15 0h10m15 0h4M121 68h13m-13 17h13" opacity=".55" />
          <path d="M60 119V99h22v20" fill="currentColor" fillOpacity=".07" /><path d="M71 99v20" />
          <circle cx="137" cy="30" r="15" fill="var(--paper, #f8f7f2)" /><path d="m131 30 4 4 8-9" />
        </>}
        {motif === "companion" && <>
          <ellipse cx="88" cy="127" rx="66" ry="5" fill="currentColor" opacity=".05" stroke="none" />
          <circle cx="65" cy="32" r="12" /><circle cx="116" cy="26" r="12" />
          <path d="M48 86V65c0-13 7-19 17-19s17 6 17 19v21Z" fill="currentColor" fillOpacity=".07" />
          <path d="M98 80V60c0-13 8-19 18-19s18 6 18 19v20Z" fill="currentColor" fillOpacity=".07" />
          <path d="m54 86-6 37m25-37 9 37m22-43-4 43m26-43 12 43M48 60l-10 31M82 59l13 19 12-18M134 56l10 30" />
          <path d="M57 67v19m69-25v19" opacity=".4" />
          <path d="M150 110h15m-5-5 5 5-5 5" opacity=".5" />
        </>}
        {motif === "jug" && <>
          <path d="M51 56h65v57H51z" fill="currentColor" fillOpacity=".08" stroke="none" />
          <path d="M45 27h71v80a10 10 0 0 1-10 10H60a10 10 0 0 1-10-10V42zM116 45h12c19 0 19 45 0 45h-12" />
          <path d="M51 59c22-6 43 6 65 0M61 76h11m-11 14h7m-7 14h11" opacity=".5" />
        </>}
      </g>
    </svg>
  )
}

export function PrepHeading({ motif, children }: { motif: Motif; children: ReactNode }) {
  return <div className={styles.heading}><div>{children}</div><PrepIllustration motif={motif} /></div>
}

/** Editorial anatomy drawings, intentionally schematic rather than diagnostic. */
export function PrepAnatomy({ procedure }: { procedure: "endoscopia" | "colonoscopia" }) {
  return (
    <svg className={styles.anatomy} viewBox="0 0 320 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <ellipse cx="160" cy="191" rx="137" ry="145" fill="currentColor" opacity=".035" />
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {procedure === "endoscopia" ? <>
          <path d="M144 29v102c0 25 12 38 12 56 0 32-11 63-43 63-21 0-36-12-48-28l-18 13c-9 36 15 69 55 83 43 15 102 9 137-26 38-38 41-104 26-150-11-32-36-52-60-44-16 5-25 18-30 37-3-13-9-21-9-40V29" fill="currentColor" fillOpacity=".045" />
          <path d="m47 235-12-22m30 9-14-22" />
          <path d="M155 29v95c0 30 18 46 21 72 2 17 8 25 21 32" strokeDasharray="3 7" opacity=".35" />
          <path d="m197 228 41 53a89 89 0 0 1-56 21Z" fill="currentColor" opacity=".07" stroke="none" />
          <circle cx="197" cy="228" r="16" fill="currentColor" opacity=".06" stroke="none" /><circle cx="197" cy="228" r="5" fill="currentColor" stroke="none" />
          <path d="M141 55h-35l-9-9M248 208h32" opacity=".25" />
        </> : <>
          <path d="M77 265c-26 2-34-17-32-44l5-92c2-31 21-47 47-39 39 12 81 12 121-1 28-9 48 9 49 37l3 104c1 29-15 49-44 48l-32-3c-17-2-20 7-20 22v32h-29v-37c0-30 17-49 47-46l31 3c14 1 18-7 17-21l-4-99c0-11-7-16-16-12-43 15-91 15-132 1-9-3-14 3-15 16l-3 91c-1 10 2 14 10 14 12 0 17-8 17-23v-15h28v16c0 29-15 52-48 48Z" fill="currentColor" fillOpacity=".055" />
          <path d="m77 265-6 19c-3 8-8 10-12 6M49 151l20 2m-22 29 21 2m-22 27 20 1m18-121-5 23m39-16-3 24m40-19v24m41-26 4 24m33-37 9 23m12 26-22 2m23 32-22 1m23 31-22 1m19 32-23-5m7 37-8-23m-26 21 3-25" opacity=".38" />
          <path d="M159 329v-34c0-26 9-35 33-34l32 1c22 0 33-12 32-34l-4-101c-1-20-13-31-29-24-41 14-89 16-131 1" strokeDasharray="3 7" opacity=".35" />
          <circle cx="92" cy="104" r="16" fill="currentColor" opacity=".06" stroke="none" /><circle cx="92" cy="104" r="5" fill="currentColor" stroke="none" />
        </>}
      </g>
    </svg>
  )
}

export function PrepCompanion() {
  return <aside className={styles.companion}>
    <PrepIllustration motif="companion" />
    <div><h3>De regreso, acompañado</h3><p>Ven con un acompañante adulto y no manejes ese día.</p></div>
  </aside>
}
