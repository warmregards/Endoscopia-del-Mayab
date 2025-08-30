import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Link from "next/link"
import {
  Stethoscope,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Microscope,
  Clock,
  Heart,
  AlertTriangle,
  Activity,
  Target,
  FileText,
  ExternalLink,
  Zap,
  TrendingUp,
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";


export const revalidate = 86400
export const metadata = metaFor("endoprotesis_biliares")

export default function EndoprotesisBiliaresPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com").replace(/\/$/, "")

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Content - Left Side */}
            <div className="flex-1 lg:max-w-3xl space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200">
                  <Activity className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Drenaje Biliar Inmediato</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight">
                  Endoprótesis Biliares en Mérida | Dr. Omar Quiroz - Stents Biliares Terapéuticos
                </h1>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  Las endoprótesis biliares en Mérida son stents especializados para restaurar el flujo biliar obstruido por 
                  cálculos o tumores. El Dr. Omar Quiroz coloca stents biliares mediante CPRE en Hospital Amerimed, Mérida, 
                  Yucatán, ofreciendo esta técnica terapéutica con cotización transparente según el tipo de prótesis.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Hospital Amerimed, Mérida</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>45-90 minutos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span>Anestesiólogo certificado</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="endoprotesis biliar" position="hero" />
                      <WhatsAppButton service="endoprotesis biliar" position="hero" />
                </div>
              </div>
            </div>

            {/* Image/Visual - Right Side */}
            <div className="flex-1 lg:max-w-lg">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent-light/20 to-accent-strong/20 rounded-3xl border border-accent-light/30 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-accent-strong/20 rounded-full flex items-center justify-center mx-auto">
                      <TrendingUp className="h-10 w-10 text-accent-strong" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-serif font-semibold text-lg text-foreground">Flujo Biliar Restaurado</p>
                      <p className="text-sm text-foreground/70">Stents metálicos o plásticos</p>
                      <p className="text-xs text-foreground/60">Procedimiento CPRE especializado</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent-strong text-accent-strong-foreground rounded-2xl p-4 shadow-xl">
                  <p className="font-bold text-sm">Mérida, Yucatán</p>
                  <p className="text-xs opacity-90">Hospital Amerimed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT ARE BILIARY STENTS SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué son las Endoprótesis Biliares y Para Qué Sirven?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Stents especializados que mantienen abierta la vía biliar cuando está obstruida
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Función de las Endoprótesis Biliares
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Las endoprótesis biliares son tubos pequeños (stents) que se colocan durante una CPRE para mantener 
                  abierta la vía biliar obstruida. Permiten que la bilis fluya normalmente desde el hígado hasta el 
                  intestino, aliviando la ictericia y mejorando la digestión.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Cuándo se necesitan:</h4>
                <div className="grid gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80">Cálculos biliares impactados que no se pueden extraer</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80">Tumores que obstruyen el conducto biliar</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80">Estenosis biliares (estrechamiento del conducto)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80">Complicaciones post-cirugía biliar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8">
              <h4 className="font-serif font-semibold text-foreground mb-6">Beneficios vs Cirugía Abierta</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Sin incisiones - procedimiento endoscópico</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Alta en 24-48 horas vs semanas de hospitalización</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Alivio inmediato de ictericia y síntomas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Menor riesgo que procedimientos quirúrgicos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Recuperación más rápida y cómoda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF STENTS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Tipos de Stents Biliares Disponibles en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Selección personalizada según el caso y expectativa de vida
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Plastic Stents */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Microscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Stents Plásticos
              </h3>
              <div className="space-y-4 text-foreground/80">
                <p>Ideales para obstrucciones temporales o pacientes con expectativa de resolución.</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Duración: 3-6 meses</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Menor costo inicial</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Fácil remoción y reemplazo</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Ideal para estenosis benignas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metal Stents */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 bg-accent-strong/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Stents Metálicos
              </h3>
              <div className="space-y-4 text-foreground/80">
                <p>Para obstrucciones permanentes o casos oncológicos con mejor flujo a largo plazo.</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Duración: Permanente o semi-permanente</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Mejor flujo biliar a largo plazo</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Autoexpandibles y más duraderos</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Ideal para casos oncológicos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-accent-light/10 to-accent-strong/10 border border-accent-light/30">
            <h4 className="font-serif font-semibold text-foreground mb-4">Selección del Stent Apropiado</h4>
            <p className="text-foreground/80 mb-4">
              El Dr. Omar Quiroz selecciona el tipo de endoprótesis biliar más adecuado basándose en:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-foreground/80">
              <div className="flex items-start gap-2">
                <Target className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                <p>Causa de la obstrucción (benigna vs maligna)</p>
              </div>
              <div className="flex items-start gap-2">
                <Target className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                <p>Expectativa de vida del paciente</p>
              </div>
              <div className="flex items-start gap-2">
                <Target className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                <p>Anatomía del conducto biliar</p>
              </div>
              <div className="flex items-start gap-2">
                <Target className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                <p>Preferencias del paciente y costo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Cómo se Colocan las Endoprótesis Biliares en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Procedimiento CPRE completo en 5 pasos con fluoroscopía y sedación segura
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {[
              {
                n: 1,
                t: "Sedación Profunda",
                d: "Anestesiólogo certificado - sedación segura en Hospital Amerimed (15 min)",
              },
              { n: 2, t: "Duodenoscopio", d: "Endoscopio especializado hasta duodeno con acceso biliar (10 min)" },
              { n: 3, t: "Cateterización Biliar", d: "Acceso a vía biliar obstruida guiado por fluoroscopía (15 min)" },
              { n: 4, t: "Colocación de Stent", d: "Inserción del stent biliar y verificación de posición (20 min)" },
              { n: 5, t: "Verificación", d: "Flujo biliar restaurado confirmado por contraste (5 min)" },
            ].map((s) => (
              <div key={s.n} className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.n}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.t}</h3>
                <p className="text-sm text-foreground/80">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-accent-light/5 border border-primary/20">
            <div className="text-center space-y-4">
              <h4 className="font-serif font-semibold text-foreground">Duración y Equipo Especializado</h4>
              <p className="text-foreground/80">
                <strong>Duración total:</strong> 45-90 minutos según complejidad anatómica | 
                <strong> Ubicación:</strong> Hospital Amerimed, Mérida | 
                <strong> Equipo:</strong> Duodenoscopio Olympus + Fluoroscopía de alta resolución
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Ventajas de las Endoprótesis Biliares vs Otros Tratamientos
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comparación con alternativas quirúrgicas y otros métodos de drenaje
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Endoprosthesis Benefits */}
            <div className="p-8 rounded-2xl border border-green-200 bg-green-50">
              <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Ventajas de las Endoprótesis Biliares
              </h3>
              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Mínimamente invasivo - sin incisiones quirúrgicas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Recuperación rápida - alta en 24-48 horas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Alivio inmediato de ictericia y síntomas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Menor dolor comparado con cirugía abierta</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Menor riesgo que procedimientos quirúrgicos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>No requiere estancia hospitalaria prolongada</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Efectividad &gt;90% para restaurar flujo biliar</p>
                </div>
              </div>
            </div>

            {/* Alternative Disadvantages */}
            <div className="space-y-8">
              {/* Surgery Disadvantages */}
              <div className="p-8 rounded-2xl border border-red-200 bg-red-50">
                <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center mb-6">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="text-lg font-serif font-semibold text-foreground mb-4">
                  Desventajas Cirugía Abierta
                </h4>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p>Incisión grande en abdomen</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p>Hospitalización 7-14 días</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p>Recuperación de 4-8 semanas</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p>Mayor riesgo de complicaciones</p>
                  </div>
                </div>
              </div>

              {/* Percutaneous Drainage Disadvantages */}
              <div className="p-6 rounded-2xl border border-orange-200 bg-orange-50">
                <h4 className="text-lg font-serif font-semibold text-foreground mb-4">
                  Desventajas Drenaje Percutáneo
                </h4>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <p>Tubo externo permanente</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <p>Menos cómodo para el paciente</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <p>Riesgo de infección del sitio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREPARATION & RECOVERY SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Preparación para Endoprótesis Biliar en Mérida y Recuperación
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Proceso completo antes, durante y después del procedimiento
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Before Procedure */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Antes del Procedimiento
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Ayuno de 12 horas</p>
                    <p className="text-sm text-foreground/70">Sin alimentos ni líquidos desde medianoche</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Suspender anticoagulantes</p>
                    <p className="text-sm text-foreground/70">Si aplica, según indicación médica</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Exámenes pre-operatorios</p>
                    <p className="text-sm text-foreground/70">Laboratorios y estudios de imagen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Acompañante obligatorio</p>
                    <p className="text-sm text-foreground/70">Para traslado posterior a sedación</p>
                  </div>
                </div>
              </div>
            </div>

            {/* After Procedure */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Durante la Recuperación
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Observación 2-4 horas</p>
                    <p className="text-sm text-foreground/70">Monitoreo de signos vitales post-procedimiento</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Evaluación de dolor</p>
                    <p className="text-sm text-foreground/70">Control del dolor y medicación si necesaria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Instrucciones de alta</p>
                    <p className="text-sm text-foreground/70">Cuidados en casa y señales de alarma</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Seguimiento 48-72 horas</p>
                    <p className="text-sm text-foreground/70">Control incluido en el precio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Warning Signs */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200">
            <h4 className="font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Señales de Alarma - Contactar Inmediatamente
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-foreground/80">
              <div className="space-y-2">
                <p>• Fiebre persistente &gt;38°C</p>
                <p>• Dolor abdominal intenso</p>
              </div>
              <div className="space-y-2">
                <p>• Náusea/vómito persistente</p>
                <p>• Ictericia progresiva</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE TRANSPARENCY SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Costo de Endoprótesis Biliares en Mérida, Yucatán
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Precio variable según tipo de stent y complejidad - Cotización transparente previa
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Quote Only */}
            <div className="p-8 rounded-2xl border border-border bg-background text-center">
              <div className="w-16 h-16 bg-accent-strong/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Precio Personalizado
              </h3>
              <div className="text-3xl font-bold text-accent-strong mb-2">Cotización</div>
              <p className="text-sm text-foreground/70 mb-4">Según tipo de prótesis y complejidad del caso</p>
              <div className="text-left space-y-2 text-sm text-foreground/80">
                <p>• Procedimiento CPRE completo</p>
                <p>• Sedación con anestesiólogo</p>
                <p>• Stent biliar especializado</p>
                <p>• Fluoroscopía y contraste</p>
                <p>• Observación post-procedimiento</p>
              </div>
            </div>

            {/* Factors */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Factores que Afectan el Costo
              </h3>
              <div className="space-y-4 text-sm text-foreground/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Tipo de prótesis (plástica vs metálica)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Complejidad anatómica de la obstrucción</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Procedimientos adicionales necesarios</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Tiempo de estancia hospitalaria</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Marca y especificaciones del stent</p>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Opciones de Pago
              </h3>
              <div className="space-y-4 text-sm text-foreground/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Seguros médicos (verificación previa)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Pagos a plazos disponibles</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Cotización sin compromiso</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Transparencia total en precios</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center font-medium text-foreground">
                  <strong>Contacto para precio:</strong>
                </p>
                <p className="text-center text-accent-strong font-semibold">
                  WhatsApp (999) 236-0153
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIST SECTION - REDESIGNED */}
<section className="py-16 sm:py-24 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
        Especialista en Endoprótesis Biliares en Mérida
      </h2>
      <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
        Dr. Omar Quiroz - Experiencia certificada en CPRE y stents biliares
      </p>
    </div>

    {/* Doctor Info Card */}
    <div className="max-w-4xl mx-auto mb-12">
      <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent-light/5">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-foreground">
              Dr. Omar Quiroz
            </h3>
            <p className="text-lg text-foreground/80">
              Cirujano Especialista en Endoscopia Digestiva
            </p>
          </div>

          {/* Certifications in horizontal layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-xl bg-background/80 border border-border/50">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <p className="text-xs font-medium text-foreground">Médico Cirujano</p>
              <p className="text-xs text-foreground/60">UNAM</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-background/80 border border-border/50">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <p className="text-xs font-medium text-foreground">Cirugía General</p>
              <p className="text-xs text-foreground/60">Especialidad</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-background/80 border border-border/50">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <p className="text-xs font-medium text-foreground">Endoscopia</p>
              <p className="text-xs text-foreground/60">Fellowship</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-background/80 border border-border/50">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <p className="text-xs font-medium text-foreground">CPRE Avanzada</p>
              <p className="text-xs text-foreground/60">Certificación</p>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-strong/10 border border-accent-strong/20">
            <Stethoscope className="h-5 w-5 text-accent-strong" />
            <span className="font-semibold text-accent-strong">Más de 1,000 CPRE realizadas</span>
          </div>
        </div>
      </div>
    </div>

    {/* Why Choose Us - 3 Column Grid */}
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
          Por Qué Elegir Nuestro Servicio
        </h3>
        <p className="text-foreground/70">
          Experiencia, tecnología y atención personalizada en Mérida
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Expertise */}
        <div className="text-center p-6 rounded-2xl border border-border bg-background">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h4 className="text-lg font-serif font-semibold text-foreground mb-4">
            Experiencia Comprobada
          </h4>
          <div className="space-y-3 text-sm text-foreground/80">
            <p>• Especialista certificado en endoscopia</p>
            <p>• Experiencia específica en CPRE y stents</p>
            <p>• Más de 1,000 procedimientos realizados</p>
            <p>• Manejo de casos complejos</p>
          </div>
        </div>

        {/* Technology */}
        <div className="text-center p-6 rounded-2xl border border-border bg-background">
          <div className="w-16 h-16 bg-accent-strong/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Microscope className="h-8 w-8 text-accent-strong" />
          </div>
          <h4 className="text-lg font-serif font-semibold text-foreground mb-4">
            Tecnología Avanzada
          </h4>
          <div className="space-y-3 text-sm text-foreground/80">
            <p>• Duodenoscopio Olympus última generación</p>
            <p>• Fluoroscopía de alta resolución</p>
            <p>• Hospital Amerimed certificado</p>
            <p>• Equipos especializados para CPRE</p>
          </div>
        </div>

        {/* Care */}
        <div className="text-center p-6 rounded-2xl border border-border bg-background">
          <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-green-600" />
          </div>
          <h4 className="text-lg font-serif font-semibold text-foreground mb-4">
            Atención Integral
          </h4>
          <div className="space-y-3 text-sm text-foreground/80">
            <p>• Anestesiólogos certificados</p>
            <p>• Seguimiento personalizado incluido</p>
            <p>• Disponibilidad para emergencias</p>
            <p>• Atención pre y post procedimiento</p>
          </div>
        </div>
      </div>
    </div>

    {/* Hospital Information */}
    <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-muted/30 to-muted/10 border border-border">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Hospital Amerimed, Mérida</span>
        </div>
        
        <h4 className="text-xl font-serif font-semibold text-foreground">
          Instalaciones de Primer Nivel
        </h4>
        
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Consultorio 517 en Hospital Amerimed, Chichí Suárez, Mérida, Yucatán. 
          Instalaciones hospitalarias certificadas con los más altos estándares de seguridad 
          y tecnología para procedimientos endoscópicos avanzados.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-foreground/70 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-accent-strong" />
            <span>Hospital certificado</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-accent-strong" />
            <span>Urgencias disponibles</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-accent-strong" />
            <span>Estacionamiento gratuito</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* COVERAGE AREAS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Áreas de Mérida que Atendemos
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ubicación estratégica en Hospital Amerimed con fácil acceso desde toda la ciudad
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Main Location */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Ubicación Principal
              </h3>
              <div className="space-y-3 text-foreground/80">
                <p className="font-medium">Hospital Amerimed, Consultorio 517</p>
                <p>Calle 54, Chichí Suárez, Mérida, Yucatán</p>
                
                <div className="pt-4 space-y-2 text-sm">
                  <h4 className="font-semibold text-foreground">Facilidades de acceso:</h4>
                  <p>• Estacionamiento gratuito disponible</p>
                  <p>• Acceso en transporte público</p>
                  <p>• Cerca de la carretera Mérida-Cancún</p>
                </div>
              </div>
            </div>

            {/* Coverage Areas */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Zonas de Cobertura
              </h3>
              <div className="grid grid-cols-1 gap-4 text-sm text-foreground/80">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Mérida Centro:</h4>
                  <p>Centro Histórico, Santiago, San Sebastián</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Norte de Mérida:</h4>
                  <p>Montejo, Pensiones, García Ginerés, Campestre</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Fraccionamientos:</h4>
                  <p>Chichí Suárez, Montecristo, Francisco de Montejo</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Área Metropolitana:</h4>
                  <p>Umán, Kanasín, Progreso, Temozón Norte</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Interior del Estado:</h4>
                  <p>Valladolid, Izamal, Ticul, Motul</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary/10 to-accent-strong/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Agenda tu Cita para Endoprótesis Biliar en Mérida
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                ¿Necesitas una endoprótesis biliar en Mérida? No esperes más. El Dr. Omar Quiroz y su equipo 
                están listos para ayudarte. Contacta ahora para cotización y programación.
              </p>
            </div>

            {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="endoprotesis biliar" position="cta section" />
                      <WhatsAppButton service="endoprotesis biliar" position="cta section" />
                </div>

            <div className="grid gap-6 sm:grid-cols-3 text-sm text-foreground/70 max-w-2xl mx-auto">
              <div className="space-y-1">
                <p className="font-semibold text-foreground">Contacto directo</p>
                <p>Respuesta rápida - Mismo día</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-foreground">Cotización sin compromiso</p>
                <p>Precio transparente según caso</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-foreground">Agenda flexible</p>
                <p>Incluyendo urgencias digestivas</p>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-foreground/60">
                <Link href="/cpre-merida" className="text-primary hover:underline">CPRE</Link> • 
                <Link href="/emergencias-digestivas-merida" className="text-primary hover:underline ml-2">Emergencias</Link> • 
                <Link href="/dr-omar-quiroz" className="text-primary hover:underline ml-2">Dr. Omar Quiroz</Link> • 
                <Link href="/contacto" className="text-primary hover:underline ml-2">Contacto</Link>
              </p>
              <p className="text-xs text-foreground/50 mt-2">
                Evalúa todas tus opciones antes de considerar cirugía mayor.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* GOOGLE REVIEWS COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleReviews className="mt-8" />
        </div>
      </section>

      {/* PROCEDURES GRID COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProceduresGrid />
        </div>
      </section>

      {/* FAQ LIST COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Faq routeKey="endoprotesis_biliares" />
        </div>
      </section>
    </>
  )
}
