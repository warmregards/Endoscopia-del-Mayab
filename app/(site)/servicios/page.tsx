// /servicios redirects to / via next.config.mjs (301).
// This page exists only as a fallback during static generation.
import { redirect } from "next/navigation"

export default function ServiciosPage() {
  redirect("/")
}
