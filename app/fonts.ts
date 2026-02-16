// DEPRECATED: Use font variables from layout.tsx via CSS custom properties.
// These exports exist only to prevent build errors during migration.
// Will be removed when page files are updated.
import { Montserrat, Open_Sans } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

export const inter = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
