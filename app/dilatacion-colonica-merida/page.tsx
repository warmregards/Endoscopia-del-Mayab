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
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";
import { inter, montserrat } from "@/app/fonts";


export const revalidate = 86400
export const metadata = metaFor("dilatacion_colonica")

export default function DilatacionColonicaPage() {
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                  <Target className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Alternativa a Cirugía de Colon</span>
                </div>

                <h1 className="`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight`">
                  Dilatación Colónica Endoscópica en Mérida | Dr. Omar Quiroz - Tratamiento de Estenosis Intestinales
                </h1>

                <p className="`${inter.className} text-lg text-foreground/80 leading-relaxed`">
                  La dilatación colónica endoscópica en Mérida es un procedimiento especializado para tratar estenosis del
                  colon sin cirugía abierta. El Dr. Omar Quiroz realiza dilatación colónica en Hospital Amerimed, Mérida,
                  Yucatán, ofreciendo esta técnica mínimamente invasiva con precio transparente desde $15,000 MXN.
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Alternativa a cirugía de colon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Mejora el tránsito intestinal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Desde {mxn(PRICING.dilatacion_colonica.from)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Hospital Amerimed con sedación profunda</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="dilatacion colonica" position="hero" />
                      <WhatsAppButton service="dilatacion colonica" position="hero" />
                </div>


              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-strong" />
                  <span>Hospital Amerimed, Consultorio 517</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent-strong" />
                  <span>Evaluaciones programadas</span>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="flex-1 lg:max-w-lg">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-light/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
                <div className="relative bg-background rounded-2xl p-8 border border-border shadow-lg">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-accent-strong/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Stethoscope className="h-8 w-8 text-accent-strong" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                        Dilatación Colónica Especializada
                      </h3>
                      <p className="text-foreground/80">
                        Procedimiento endoscópico para abrir estrechamientos del colon mejorando el tránsito intestinal
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <div className="font-semibold text-foreground">30-45 min</div>
                        <div className="text-foreground/70">Duración</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <div className="font-semibold text-foreground">2-4 horas</div>
                        <div className="text-foreground/70">Recuperación</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE TRANSPARENCY SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Costo de Dilatación Colónica en Mérida - Precio Transparente desde {mxn(PRICING.dilatacion_colonica.from)}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Precio claro según localización específica de la estenosis, sin sorpresas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Base Price */}
            <div className="p-8 rounded-2xl border border-border bg-background text-center">
              <div className="w-16 h-16 bg-accent-strong/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Precio Base Dilatación Colónica
              </h3>
              <div className="text-3xl font-bold text-accent-strong mb-2">{mxn(PRICING.dilatacion_colonica.from)}</div>
              <p className="text-sm text-foreground/70 mb-4">Varía según localización y complejidad de la estenosis</p>
              <div className="text-left space-y-2 text-sm text-foreground/80">
                <p>• Procedimiento completo</p>
                <p>• Sedación profunda</p>
                <p>• Colonoscopio HD</p>
                <p>• Balones de dilatación especializados</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Costo Incluye</h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Procedimiento dilatación colónica completo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Sedación profunda con anestesiólogo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Colonoscopio de alta definición</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Balones de dilatación graduales</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Seguimiento post-procedimiento</p>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 bg-accent-light/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Facilidades de Pago</h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Seguros médicos principales en Mérida</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Cotización gratuita personalizada</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Precio según localización específica</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Sin costos hospitalarios adicionales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS DILATACION COLONICA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué es la Dilatación Colónica en Mérida? Apertura Endoscópica de Estrechamientos Intestinales
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Procedimiento especializado para tratar estenosis del colon mejorando el tránsito intestinal
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
            {/* Explanation */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Dilatación Colónica: Colonoscopia + Balones Especializados para Abrir Estrechamientos
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  La dilatación colónica en Mérida es un procedimiento especializado que utiliza balones de dilatación
                  durante colonoscopia para abrir el colon que se ha estrechado por diferentes causas.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>¿Cómo funciona?</strong> Se introduce un colonoscopio hasta localizar la estenosis, se coloca un
                  balón de dilatación gradual y se abre el estrecho mejorando el tránsito intestinal inmediatamente.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>¿Qué la hace especial?</strong> La dilatación colónica endoscópica preserva la anatomía intestinal
                  normal, evitando cirugías mayores que requieren resección de colon sano.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <h4 className="font-semibold text-foreground mb-2">
                  ¿Cuándo se necesita dilatación colónica en Mérida?
                </h4>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>• Estenosis post-quirúrgicas (después de cirugías de colon)</p>
                  <p>• Estenosis por enfermedad inflamatoria intestinal (Crohn, colitis)</p>
                  <p>• Estrechamientos por cicatrices o inflamación crónica</p>
                  <p>• <strong>SÍNTOMAS:</strong> Dolor abdominal, estreñimiento severo, evacuaciones delgadas</p>
                </div>
              </div>
            </div>

            {/* Visual Comparison */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background">
                <h4 className="text-lg font-serif font-semibold text-foreground mb-4">
                  Dilatación Colónica vs Otros Tratamientos
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Dilatación Colónica Endoscópica en Mérida</p>
                      <p className="text-sm text-foreground/70">Abre intestino endoscópicamente, preserva anatomía</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 border border-red-200">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Cirugía de Colon Abierta</p>
                      <p className="text-sm text-foreground/70">Requiere incisiones grandes y resección intestinal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Sin Tratamiento</p>
                      <p className="text-sm text-foreground/70">Riesgo de obstrucción intestinal completa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Por qué Elegir Dilatación Colónica Endoscópica en Mérida sobre Cirugía de Colon?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ventajas significativas preservando la anatomía intestinal normal
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Endoscopic Advantages */}
            <div className="p-8 rounded-2xl border border-green-200 bg-green-50">
              <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Ventajas de la Dilatación Colónica Endoscópica
              </h3>
              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Sin incisiones abdominales</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Recuperación inmediata (2-4 horas)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Preserva la anatomía intestinal normal</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Regreso a alimentación normal en 24 horas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Menor riesgo de complicaciones</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Costo significativamente menor</p>
                </div>
              </div>
            </div>

            {/* Surgery Disadvantages */}
            <div className="p-8 rounded-2xl border border-red-200 bg-red-50">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Desventajas de la Cirugía de Colon
              </h3>
              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Requiere hospitalización 5-10 días</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Incisiones grandes o múltiples puertos</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Puede requerir resección de intestino sano</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Recuperación de 4-8 semanas completas</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Riesgo de anastomosis y complicaciones</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Costo 3-4 veces mayor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Tu Dilatación Colónica en Mérida en 5 Pasos
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Proceso completo desde evaluación hasta recuperación con mejoría inmediata
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {[
              {
                n: 1,
                t: "Evaluación y Preparación",
                d: "Preparación intestinal y análisis pre-dilatación colónica (24 horas)",
              },
              { n: 2, t: "Sedación Segura", d: "Sedación profunda en Hospital Amerimed, Mérida (15 min)" },
              { n: 3, t: "Dilatación Colónica", d: "Colonoscopio + localización + dilatación gradual (30-45 min)" },
              { n: 4, t: "Recuperación", d: "Observación hasta evacuación normal en Mérida (2-4 horas)" },
              { n: 5, t: "Seguimiento", d: "Control de síntomas incluido en precio sin costo adicional" },
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
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Señales de Alarma: Cuándo Necesitas Dilatación Colónica en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Reconoce los síntomas que indican estenosis colónica
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Warning Signs */}
            <div className="lg:col-span-2 p-8 rounded-2xl border border-blue-200 bg-background">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    Busca Dilatación Colónica en Mérida si tienes:
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <AlertTriangle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Estreñimiento severo persistente</p>
                    <p className="text-sm text-foreground/70">Que no mejora con laxantes o cambios en dieta</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <AlertTriangle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Dolor abdominal tipo cólico recurrente</p>
                    <p className="text-sm text-foreground/70">Especialmente después de comer</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <AlertTriangle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Evacuaciones muy delgadas o en forma de cinta</p>
                    <p className="text-sm text-foreground/70">Cambios en el calibre de las heces</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <AlertTriangle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Sensación de evacuación incompleta</p>
                    <p className="text-sm text-foreground/70">Tenesmo rectal persistente</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <AlertTriangle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Distensión abdominal progresiva</p>
                    <p className="text-sm text-foreground/70">Inflamación que empeora con el tiempo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Important */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                ¿Por qué la Dilatación Colónica es Necesaria?
              </h3>

              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Previene obstrucción:</strong> Evita obstrucción intestinal completa
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Evita cirugía urgente:</strong> Tratamiento antes de emergencias
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Mejora calidad de vida:</strong> Alivio inmediato de síntomas
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <h4 className="font-semibold text-foreground mb-3">Disponibilidad en Mérida:</h4>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>• Evaluaciones programadas Hospital Amerimed</p>
                  <p>• Consultas segunda opinión disponibles</p>
                  <p>• Preparación intestinal supervisada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR'S ADVANTAGE SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Dr. Omar: Endoscopista + Cirujano = Evaluación Completa de Casos Colónicos
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              La ventaja única de tener ambas especialidades para manejo integral
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Problem */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                ¿Qué pasa si la dilatación colónica no es suficiente?
              </h3>

              <div className="space-y-4 text-foreground/80">
                <p>
                  En un porcentaje de casos (15-20%), las estenosis colónicas pueden requerir manejo quirúrgico adicional
                  debido a la severidad de la fibrosis o la localización específica de la estenosis.
                </p>

                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <h4 className="font-semibold text-foreground mb-2">Otros endoscopistas:</h4>
                  <p className="text-sm text-foreground/80">
                    Te envían a cirugía de colon con otro especialista después de intentar dilatación
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                  <h4 className="font-semibold text-foreground mb-2">Dr. Omar:</h4>
                  <p className="text-sm text-foreground/80">
                    Evalúa opciones quirúrgicas laparoscópicas el mismo día si es necesario
                  </p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Su Doble Especialidad para Casos Colónicos
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Endoscopia colónica avanzada:</strong> Dilatación colónica especializada
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Cirugía de colon laparoscópica:</strong> Backup quirúrgico inmediato
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Evaluación integral:</strong> Todas las opciones terapéuticas disponibles
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Manejo multidisciplinario:</strong> En una sola consulta
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <p className="text-foreground/80 text-sm">
                  La mayoría de casos (80-85%) se resuelven exitosamente con dilatación colónica endoscópica. En casos
                  complejos, tendrás evaluación quirúrgica inmediata sin esperar otro especialista.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="https://www.omar.doctor/cirugia-general-merida"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver perfil quirúrgico completo
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT & TECHNOLOGY SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Tecnología Especializada para Dilatación Colónica en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Equipo de alta definición en Hospital Amerimed para dilatación colónica precisa
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Equipment Features */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">Colonoscopio HD</h3>
              <p className="text-foreground/80 text-sm">Endoscopio de alta definición para visualización precisa de estenosis</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">Balones de Dilatación</h3>
              <p className="text-foreground/80 text-sm">Dispositivos especializados desde 12mm hasta 30mm para dilatación gradual</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-light/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">Sedación Profunda</h3>
              <p className="text-foreground/80 text-sm">Anestesiólogo certificado para comodidad total durante procedimiento</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">Monitoreo Continuo</h3>
              <p className="text-foreground/80 text-sm">Signos vitales monitoreados durante toda la dilatación colónica</p>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-accent-light/5 border border-accent-light/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-light/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-accent-strong" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  ¿Por qué no todos pueden hacer dilatación colónica en Mérida?
                </h3>
                <div className="grid gap-3 md:grid-cols-2 text-foreground/80">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Requiere experiencia en colonoscopia terapéutica</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Manejo de complicaciones durante procedimiento</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Selección adecuada: dilatación vs cirugía</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Experiencia en casos complejos de estenosis colónica</p>
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
              Preparación para Dilatación Colónica en Mérida y Recuperación
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Proceso completo antes, durante y después del procedimiento
            </p>
          </div>

        <div className="grid gap-8 lg:grid-cols-3">
            {/* Before */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Antes de la Dilatación Colónica</h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Preparación intestinal completa</strong> (similar a colonoscopia)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Dieta líquida 24 horas antes del procedimiento</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Suspender ciertos medicamentos según indicación</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Venir acompañado a Hospital Amerimed, Mérida</p>
                </div>
              </div>
            </div>

            {/* During */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Durante la Dilatación Colónica</h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Sedación profunda</strong> - no sientes molestias
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Monitoreo constante por anestesiólogo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Duración:</strong> 30-45 minutos típicamente
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Dilatación gradual y controlada de estenosis</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-accent-light/10 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Después de la Dilatación Colónica</h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Observación:</strong> 2-4 horas hasta evacuación normal
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Alta el mismo día</strong> (mayoría de casos)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Alimentación gradual:</strong> líquida inicialmente
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Seguimiento incluido</strong> en precio sin costo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND OPINION SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Te Dijeron que Necesitas Cirugía de Colon? Considera Dilatación Colónica en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Muchas estenosis colónicas pueden tratarse con dilatación colónica endoscópica
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* When to Seek Second Opinion */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">Considera Segunda Opinión Si:</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Te recomendaron cirugía de colon inmediata</p>
                    <p className="text-sm text-foreground/70">Sin evaluar dilatación colónica endoscópica</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Te dijeron "hay que operar sí o sí"</p>
                    <p className="text-sm text-foreground/70">Sin considerar alternativas endoscópicas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Cirugía laparoscópica "no es opción"</p>
                    <p className="text-sm text-foreground/70">Dr. Omar evalúa todas las opciones disponibles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Opinion Benefits */}
            <div className="p-8 rounded-2xl border border-green-200 bg-green-50">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Segunda Opinión Gratuita para Dilatación Colónica:
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Casos programados</strong> para cirugía de colon mayor
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Estenosis colónicas recurrentes</strong> post-quirúrgicas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Complicaciones intestinales</strong> post-operatorias
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Evaluación costo-beneficio</strong> dilatación vs cirugía
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-green-100 border border-green-200">
                <p className="text-green-800 text-sm font-medium">
                  💡 Muchos pacientes preservan su anatomía intestinal normal con dilatación colónica endoscópica. Vale la
                  pena una segunda evaluación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS CASES SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Resultados Reales de Dilatación Colónica en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Casos exitosos que preservaron la anatomía intestinal normal
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Success Case Types */}
            {[
              { t: "Estenosis Post-Quirúrgicas", d: "De colon resueltas endoscópicamente" },
              { t: "Enfermedad de Crohn", d: "Estenosis mejoradas significativamente" },
              { t: "Colitis Cicatricial", d: "Estrechamientos tratados en Mérida" },
              { t: "Cirugía Evitada", d: "Pacientes que evitaron resección de colon" },
            ].map((c) => (
              <div key={c.t} className="p-6 rounded-2xl border border-green-200 bg-green-50 text-center">
                <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{c.t}</h3>
                <p className="text-sm text-foreground/70">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl border border-accent-light/20 bg-accent-light/5">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-serif font-semibold text-foreground">
                Resultados Típicos de Dilatación Colónica en Mérida
              </h3>
              <div className="grid gap-6 md:grid-cols-3 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-strong mb-2">80-85%</div>
                  <p className="text-sm text-foreground/70">Tasa de éxito con dilatación colónica endoscópica</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-strong mb-2">70-75%</div>
                  <p className="text-sm text-foreground/70">Reducción en costo vs cirugía de colon</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-strong mb-2">24h</div>
                  <p className="text-sm text-foreground/70">Regreso a alimentación normal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Agenda tu Evaluación para Dilatación Colónica en Mérida
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Mejora tu calidad de vida con tratamiento endoscópico especializado. Preserva tu anatomía intestinal.
              </p>
            </div>

            {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="dilatacion colonica" position="cta section" />
                      <WhatsAppButton service="dilatacion colonica" position="cta section" />
                </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto text-sm">
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Hospital Amerimed</p>
                  <p className="text-foreground/70">Consultorio 517, Chichí Suárez</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Clock className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Evaluaciones Programadas</p>
                  <p className="text-foreground/70">Consultas disponibles</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Heart className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Seguros Médicos</p>
                  <p className="text-foreground/70">Principales aceptados en Mérida</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <FileText className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Cotización Gratuita</p>
                  <p className="text-foreground/70">Precio según localización específica</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-blue-200 bg-blue-50 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 justify-center mb-3">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-foreground">Preserva tu Anatomía Intestinal Normal</h3>
              </div>
              <p className="text-foreground/80 text-sm">
                La dilatación colónica endoscópica permite tratar estenosis intestinales sin resecciones de colon sano.
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
          <Faq routeKey="dilatacion_colonica" />
        </div>
      </section>
    </>
  )
}
