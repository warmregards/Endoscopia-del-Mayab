import type { ReactNode } from "react"
import styles from "./PrepIllustration.module.css"

type Motif = "liquids" | "fasting" | "arrival" | "jug"

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
