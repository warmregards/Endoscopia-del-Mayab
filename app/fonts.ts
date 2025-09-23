// app/fonts.ts
import { Inter, Montserrat } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
  adjustFontFallback: true,
})

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["ui-serif", "Georgia", "Times New Roman", "serif"],
  adjustFontFallback: true,
})
