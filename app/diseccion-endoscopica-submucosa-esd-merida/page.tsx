import Image from "next/image"
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
  Zap
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";
import { inter, montserrat } from "@/app/fonts";

export const revalidate = 86400
export const metadata = metaFor("esd")

export default function DilatacionSubmucosaPage() {
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/10 border border-accent-light/20">
                  <Zap className="h-4 w-4 text-accent-strong" />
                  <span className="text-sm font-medium text-foreground">Técnica Oncológica Avanzada</span>
                </div>

                <h1 className="`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight`">
                  Dilatación Endoscópica Submucosa en Mérida | Dr. Omar Quiroz - Resección Completa de Lesiones
                </h1>

                <p className="`${inter.className} text-lg text-foreground/80 leading-relaxed`">
                  La dilatación endoscópica submucosa en Mérida (ESD) es un procedimiento oncológico especializado para 
                  resección completa de lesiones submucosas sin cirugía abierta. El Dr. Omar Quiroz realiza disección 
                  submucosa en Hospital Amerimed, Mérida, Yucatán, ofreciendo esta técnica avanzada con precio bajo 
                  cotización según complejidad de la lesión.
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Sin cirugía abierta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Resección completa en una sesión</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Preserva órgano completo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Hospital Amerimed Mérida</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="diseccion ESD" position="hero" />
                      <WhatsAppButton service="diseccion ESD" position="hero" />
                </div>
            </div>

            {/* Pricing Card - Right Side */}
            <div className="flex-1 lg:max-w-md">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-strong/20 to-primary/20 rounded-3xl transform rotate-3" />
                <div className="relative bg-background rounded-3xl p-8 border border-border shadow-2xl">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent-strong/10 flex items-center justify-center mx-auto">
                      <Target className="h-8 w-8 text-accent-strong" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground/60">Dr. Omar Quiroz</div>
                      <div className="text-2xl font-bold text-accent-strong">Cotización personalizada</div>
                      <div className="text-sm text-foreground/80">Según complejidad de lesión</div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-4 text-center">
                      Procedimiento ESD incluye
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Sedación especializada</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Disección submucosa completa</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Análisis histopatológico</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Seguimiento post-procedimiento</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Reporte detallado con fotos</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-xl bg-accent-light/10 border border-accent-light/20">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">¿Por qué cotización personalizada?</h4>
                      <p className="text-xs text-foreground/80">
                        Cada lesión requiere tiempo y técnica diferentes. El precio se calcula según tamaño y ubicación.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  ¿Qué es la Disección Endoscópica Submucosa en Mérida?
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  La disección endoscópica submucosa (ESD) es una técnica oncológica avanzada que permite extraer 
                  lesiones submucosas complejas de manera completa, sin necesidad de cirugía mayor. En Mérida, 
                  el Dr. Omar Quiroz realiza este procedimiento en Hospital Amerimed para pacientes que requieren 
                  resección precisa de tumores benignos o malignos tempranos.
                </p>
                
                <p className="text-foreground/80">
                  A diferencia de la resección mucosa simple, la ESD permite extraer lesiones grandes y complejas 
                  en una sola pieza, proporcionando mejor análisis histológico y menor riesgo de recurrencia.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl border border-border bg-accent-light/5">
                  <div className="flex items-center gap-3 mb-2">
                    <Microscope className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground text-sm">Precisión Oncológica</span>
                  </div>
                  <p className="text-xs text-foreground/80">Resección completa con bordes libres</p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-primary/5">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground text-sm">Preservación</span>
                  </div>
                  <p className="text-xs text-foreground/80">Órgano completamente preservado</p>
                </div>
              </div>
            </div>

            {/* Doctor Card */}
            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-background to-muted/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">Dr. Omar Quiroz</h3>
                  <p className="text-foreground/70">Especialista en ESD</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-strong">150+</div>
                  <div className="text-xs text-foreground/70">Procedimientos ESD</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-foreground/70">Resección completa</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-strong">5</div>
                  <div className="text-xs text-foreground/70">Años especializado</div>
                </div>
              </div>

              <Link 
                href="/dr-omar-quiroz" 
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                <span>Ver perfil completo</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS VS SURGERY SECTION */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Ventajas de la Disección Submucosa vs Cirugía Oncológica
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Evalúa todas tus opciones antes de considerar cirugía mayor oncológica.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* ESD Advantages */}
            <div className="p-8 rounded-2xl border border-green-200 bg-green-50">
              <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Ventajas de la Disección Submucosa
              </h3>
              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Resección completa en una sesión</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Preserva órgano completamente</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Mínimo sangrado y dolor</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Alta hospitalaria mismo día</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Sin incisiones externas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Análisis histológico completo</p>
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
                Desventajas de la Cirugía Oncológica Mayor
              </h3>
              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Requiere hospitalización 7-15 días</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Resección de órgano o segmento completo</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Incisiones grandes abdominales</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Recuperación 6-12 semanas</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Riesgo de anastomosis y complicaciones</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Posibles secuelas permanentes</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Costo 5-8 veces mayor</p>
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
              Tu Disección Endoscópica Submucosa en Mérida en 5 Pasos
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Proceso completo desde evaluación oncológica hasta análisis histológico completo
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {[
              {
                n: 1,
                t: "Evaluación Oncológica",
                d: "Análisis detallado de lesión y estadificación completa (consulta)",
              },
              { n: 2, t: "Sedación Profunda", d: "Sedación con anestesiólogo en Hospital Amerimed (15 min)" },
              { n: 3, t: "Marcaje y Disección", d: "Marcaje de bordes + disección submucosa especializada (60-120 min)" },
              { n: 4, t: "Recuperación", d: "Observación hasta función digestiva normal (4-8 horas)" },
              { n: 5, t: "Análisis Histológico", d: "Resultado de patología incluido + seguimiento oncológico" },
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

      {/* PRICE TRANSPARENCY SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Costo de Disección Endoscópica Submucosa en Mérida - {mxn(PRICING.esd.from)}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Precio según complejidad de lesión y localización anatómica, sin sorpresas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Base Price */}
            <div className="p-8 rounded-2xl border border-border bg-background text-center">
              <div className="w-16 h-16 bg-accent-strong/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Precio Disección Submucosa
              </h3>
              <div className="text-2xl font-bold text-accent-strong mb-2">{mxn(PRICING.esd.from)}</div>
              <p className="text-sm text-foreground/70 mb-4">Varía según tamaño y complejidad de lesión</p>
              <div className="text-left space-y-2 text-sm text-foreground/80">
                <p>• Evaluación oncológica incluida</p>
                <p>• Procedimiento ESD completo</p>
                <p>• Sedación profunda</p>
                <p>• Instrumentos especializados</p>
                <p>• Análisis histológico</p>
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
                  <p>Procedimiento ESD completo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Sedación profunda con anestesiólogo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Endoscopio de alta definición</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Instrumental submucoso especializado</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Análisis histológico completo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Seguimiento oncológico incluido</p>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 bg-accent-light/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Opciones de Pago</h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Pago efectivo con descuento</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Tarjetas de crédito aceptadas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Planes de pago disponibles</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Cotización sin compromiso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPECTATION MANAGEMENT SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Qué Esperar de tu Disección Submucosa
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Información transparente sobre el procedimiento y resultados esperados
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Preparation */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Preparación Previa
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Ayuno de 12 horas</strong> antes del procedimiento</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Medicamentos:</strong> Consultar ajustes con Dr. Omar</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Anticoagulantes:</strong> Suspensión temporal necesaria</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Acompañante adulto</strong> obligatorio</p>
                </div>
              </div>
            </div>

            {/* Procedure Expectations */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Durante la Disección Submucosa</h3>
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
                    <strong>Duración:</strong> 60-120 minutos según complejidad
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Resección completa de lesión submucosa</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-accent-light/10 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Después del ESD
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Observación:</strong> 4-8 horas en hospital</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Dieta:</strong> Líquidos primeras 24 horas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Actividad:</strong> Reposo relativo 48 horas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Seguimiento:</strong> Control a 7 días incluido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Resultados de Disección Endoscópica Submucosa en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Estadísticas reales del Dr. Omar Quiroz en Hospital Amerimed
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-8 rounded-2xl border border-border bg-background">
              <div className="space-y-2 mb-6">
                <div className="text-4xl font-bold text-accent-strong">95-98%</div>
                <p className="text-sm text-foreground/70">Resección completa exitosa</p>
              </div>
              <p className="text-xs text-foreground/80">
                Porcentaje de resecciones completas en una sola sesión en Mérida
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl border border-border bg-background">
              <div className="space-y-2 mb-6">
                <div className="text-4xl font-bold text-primary">85-90%</div>
                <p className="text-sm text-foreground/70">Evita cirugía oncológica mayor</p>
              </div>
              <p className="text-xs text-foreground/80">
                Pacientes que evitan resección quirúrgica de órgano
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl border border-border bg-background">
              <div className="space-y-2 mb-6">
                <div className="text-4xl font-bold text-accent-strong">24-48h</div>
                <p className="text-sm text-foreground/70">Regreso a actividades normales</p>
              </div>
              <p className="text-xs text-foreground/80">
                Tiempo promedio de recuperación vs semanas en cirugía
              </p>
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
                Agenda tu Evaluación para Disección Submucosa en Mérida
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Preserva tu órgano con tratamiento oncológico mínimamente invasivo. Resección completa sin cirugía mayor.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center max-w-4xl mx-auto">
              {/* Contact Info */}
              <div className="p-8 rounded-2xl border border-border bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">
                      Hospital Amerimed Mérida
                    </h3>
                    <p className="text-foreground/70">Consultorio 517, Chichi Suarez, Merida</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-foreground/80">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-accent-strong" />
                    <span>Lunes a Viernes: 8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-accent-strong" />
                    <span>Sábados: 8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-accent-strong" />
                    <span>Emergencias 24/7 disponibles</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="diseccion ESD" position="cta section" className="w-full justify-center !px-1 !py-3 rounded-xl border shadow-sm" />
                      <WhatsAppButton service="diseccion ESD" position="cta section" className="w-full justify-center !px-2 !py-3 rounded-xl border shadow-sm" />
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-foreground/70 mb-4">
                    Respuesta inmediata para evaluación oncológica urgente
                  </p>
                  <Link 
                    href="/contacto" 
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>Ver más opciones de contacto</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
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
          <Faq routeKey="esd" />
        </div>
      </section>
    </>
  )
}
