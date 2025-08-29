import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"
import { Stethoscope, MapPin, Phone, MessageCircle, DollarSign, Expand, Globe, CheckCircle2, ShieldCheck, Microscope, Hospital, Clock, Star, Award, Users, Heart, AlertTriangle, Activity, Calendar, Target, FileText, Search, Zap, Users2, Brain } from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";


export const revalidate = 86400
export const metadata = metaFor("dilatacion")

export default function DilatacionEsofagicaPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://endoscopiadelmayab.com").replace(/\/$/, "")

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Content - Left Side */}
            <div className="flex-1 lg:max-w-3xl space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                  <Target className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Alternativa a Cirugía Esofágica</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Dilatación Esofágica en Mérida - {mxn(PRICING.dilatacion_esofagica.from)} | Dr. Omar Quiroz
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Tratamiento especializado para estenosis esofágica sin cirugía abierta. Balones graduados 
                  para dilatar el esófago de forma segura y efectiva.
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    <span>Sin cirugía abierta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    <span>Balones graduados Olympus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    <span>Mejoría inmediata disfagia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    <span>Recuperación mismo día</span>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                  <CallButton service="dilatacion esofagica" position="hero" />
                  <WhatsAppButton service="dilatacion esofagica" position="hero"  />
                </div>
              </div>
            </div>
            
            {/* Pricing Card - Right Side */}
            <div className="flex-1 lg:max-w-md">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                      <Expand className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-500">Dr. Omar Quiroz</div>
                      <div className="text-2xl font-bold text-blue-600">{mxn(PRICING.dilatacion_esofagica.from)}</div>
                      <div className="text-sm text-gray-500">Precio fijo transparente</div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                      Dilatación esofágica incluye
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Endoscopia diagnóstica previa</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Sedación con anestesiólogo</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Balones graduados especializados</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Monitoreo post-dilatación</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Seguimiento médico</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-xl bg-blue-50 border border-blue-100">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">¿Por qué es efectivo?</h4>
                      <p className="text-xs text-gray-600">
                        Dilatación gradual con balones especializados evita perforación
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits Banner */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{mxn(PRICING.dilatacion_esofagica.from)}</div>
              <div className="text-sm text-gray-600">Precio Fijo</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
              <Expand className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900">Sin Cirugía</div>
              <div className="text-sm text-gray-600">Procedimiento Endoscópico</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900">Mismo Día</div>
              <div className="text-sm text-gray-600">Recuperación Rápida</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
              <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900">Especialista</div>
              <div className="text-sm text-gray-600">Dr. Omar Quiroz</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Dilatación Esofágica en Mérida por {mxn(PRICING.dilatacion_esofagica.from)} Pesos - Precio Transparente
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Costo fijo $5,000-10,000 menos que hospitales privados - mismo equipo especializado
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {/* Price Comparison */}
            <div className="p-6 rounded-2xl border border-border bg-background text-center">
              <div className="text-2xl font-bold text-foreground/60 mb-2">Hospitales grandes</div>
              <div className="text-2xl font-bold text-foreground/60 line-through">$25,000+ pesos</div>
            </div>
            
            <div className="p-6 rounded-2xl border border-border bg-background text-center">
              <div className="text-2xl font-bold text-foreground/60 mb-2">Otros especialistas</div>
              <div className="text-2xl font-bold text-foreground/60 line-through">$20,000-22,000 pesos</div>
            </div>
            
            <div className="p-6 rounded-2xl border-2 border-accent-strong bg-accent-strong/5 text-center">
              <div className="text-2xl font-bold text-accent-strong mb-2">Dr. Omar Quiroz</div>
              <div className="text-2xl font-bold text-accent-strong">{mxn(PRICING.dilatacion_esofagica.from)} pesos fijos</div>
            </div>
          </div>

          {/* What's Included */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
              Todo incluido en precio de dilatación esofágica Mérida - {mxn(PRICING.dilatacion_esofagica.from)} pesos
            </h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Sedación profunda segura</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Balones dilatadores especializados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Fluoroscopía durante procedimiento</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Evaluación endoscópica completa</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Seguimiento hospitalario incluido</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Control de síntomas sin costo extra</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-accent-light/10 border border-accent-light/20">
              <h4 className="font-semibold text-foreground mb-2">¿Por qué el costo es más accesible en Mérida?</h4>
              <p className="text-sm text-foreground/80">
                Consulta independiente sin deudas hospitalarias. Acceso directo a fluoroscopía y quirófano especializado sin sobrecargos administrativos en Mérida, Yucatán.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS DILATACION ESOFAGICA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué es la Dilatación Esofágica? Procedimiento en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Tratamiento para abrir esófago estrechado sin cirugía - costo accesible en Mérida
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Procedimiento Especializado
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  La dilatación esofágica en Mérida es un procedimiento endoscópico que utiliza balones especializados para abrir áreas estrechadas del esófago. Dr. Omar Quiroz realiza este tratamiento en Hospital Amerimed con precio fijo transparente.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-accent-strong" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Sin Cirugía Abierta
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Alternativa mínimamente invasiva a la cirugía tradicional. El costo de dilatación esofágica en Mérida incluye sedación y balones graduados que permiten apertura controlada del esófago estrechado.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Microscope className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Tecnología Avanzada
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Utilizamos balones dilatadores Olympus con fluoroscopía en tiempo real. Este equipamiento especializado justifica el precio competitivo de dilatación esofágica en Mérida comparado con otros centros.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                  <Activity className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Mejoría Inmediata
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Pacientes experimentan mejoría en disfagia el mismo día del procedimiento. El costo fijo en Mérida incluye seguimiento para garantizar resultado óptimo de la dilatación esofágica.
                </p>
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
              Tu Dilatación Esofágica en Mérida en 5 Pasos - Precio {mxn(PRICING.dilatacion_esofagica.from)}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Proceso completo desde evaluación hasta mejoría inmediata con costo transparente
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {/* Step 1 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Evaluación Pre-dilatación</h3>
              <p className="text-sm text-foreground/80">Endoscopia diagnóstica + medición estenosis en Mérida (30 min)</p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sedación Segura</h3>
              <p className="text-sm text-foreground/80">Sedación profunda Hospital Amerimed, Mérida (15 min)</p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Dilatación Gradual</h3>
              <p className="text-sm text-foreground/80">Balones graduados + fluoroscopía tiempo real (20-30 min)</p>
            </div>

            {/* Step 4 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-foreground mb-2">Verificación</h3>
              <p className="text-sm text-foreground/80">Control endoscópico apertura esofágica (10 min)</p>
            </div>

            {/* Step 5 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                5
              </div>
              <h3 className="font-semibold text-foreground mb-2">Recuperación</h3>
              <p className="text-sm text-foreground/80">Observación + primera deglución Mérida (2-4 horas)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS TREATED SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Condiciones Esofágicas que Tratamos en Mérida - Precio Fijo
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Especialistas en dilatación esofágica con costo transparente desde {mxn(PRICING.dilatacion_esofagica.from)} pesos
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Estenosis Benigna */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Estenosis Esofágica Benigna
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Estrechamiento no canceroso del esófago. Dilatación esofágica en Mérida efectiva con precio accesible.
              </p>
              <div className="text-xs text-foreground/60">
                <strong>Síntomas:</strong> Disfagia progresiva, regurgitación, dolor al tragar
              </div>
            </div>

            {/* Estenosis Post-quirúrgica */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Estenosis Post-quirúrgica
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Cicatrización después de cirugía esofágica. Costo de dilatación en Mérida incluye seguimiento especializado.
              </p>
              <div className="text-xs text-foreground/60">
                <strong>Síntomas:</strong> Dificultad creciente para tragar después de cirugía
              </div>
            </div>

            {/* Anillos Esofágicos */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Anillos Esofágicos (Schatzki)
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Banda de tejido que estrecha esófago. Dilatación en Mérida con precio transparente y mejoría inmediata.
              </p>
              <div className="text-xs text-foreground/60">
                <strong>Síntomas:</strong> Atragantamiento súbito, "impactación de alimentos"
              </div>
            </div>

            {/* Membranas Esofágicas */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Membranas Esofágicas
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Tejido delgado que obstruye paso. Costo fijo dilatación esofágica Mérida con resultados inmediatos.
              </p>
              <div className="text-xs text-foreground/60">
                <strong>Síntomas:</strong> Disfagia intermitente, sensación obstructiva
              </div>
            </div>

            {/* Estenosis por Reflujo */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Estenosis por Reflujo
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Cicatrización por ácido gástrico crónico. Precio dilatación Mérida incluye manejo integral reflujo.
              </p>
              <div className="text-xs text-foreground/60">
                <strong>Síntomas:</strong> Acidez crónica + dificultad progresiva tragar
              </div>
            </div>

            {/* Estenosis Post-radioterapia */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Estenosis Post-radioterapia
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Secuela de radiación en tórax. Dilatación especializada Mérida con costo accesible y seguimiento oncológico.
              </p>
              <div className="text-xs text-foreground/60">
                <strong>Síntomas:</strong> Disfagia meses después de radioterapia torácica
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREPARATION SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Preparación para tu Dilatación Esofágica en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Instrucciones simples para mejores resultados - precio incluye preparación
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Day Before */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Día anterior
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Continúa medicamentos para presión con sorbo mínimo agua</p>
                </div>
              </div>
            </div>

            {/* Day Of */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Hospital className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Día del procedimiento
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p><strong>Llegar Hospital Amerimed</strong> 1 hora antes</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p><strong>Traer estudios previos</strong> si los tienes</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>Familiar responsable para alta hospitalaria</p>
                </div>
              </div>
            </div>

            {/* After Procedure */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Después del procedimiento
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Dieta líquida</strong> primeras 24 horas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Seguimiento incluido</strong> en precio Mérida</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Control síntomas sin costo adicional</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-accent-light/10 border border-accent-light/20 text-center">
            <h4 className="font-semibold text-foreground mb-2">Costo dilatación esofágica Mérida incluye preparación</h4>
            <p className="text-sm text-foreground/80">
              Precio fijo {mxn(PRICING.dilatacion_esofagica.from)} pesos cubre evaluación, preparación, procedimiento y seguimiento en Hospital Amerimed, Mérida.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Síntomas que Mejoran Inmediatamente - Dilatación Esofágica Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Mejoría notable el mismo día del procedimiento con precio transparente
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Disfagia */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Disfagia (Dificultad para tragar)
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Mejora inmediata después de dilatación esofágica. Costo en Mérida incluye evaluación completa disfagia.
              </p>
              <div className="text-xs text-accent-strong font-medium">
                ✓ Mejoría el mismo día del procedimiento
              </div>
            </div>

            {/* Regurgitación */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Regurgitación de Alimentos
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Reducción significativa después dilatación esofágica Mérida. Precio fijo incluye manejo integral síntomas.
              </p>
              <div className="text-xs text-accent-strong font-medium">
                ✓ Menos episodios desde el primer día
              </div>
            </div>

            {/* Odinofagia */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Dolor al Tragar (Odinofagia)
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Alivio del dolor con deglución después procedimiento. Costo dilatación Mérida con seguimiento dolor incluido.
              </p>
              <div className="text-xs text-accent-strong font-medium">
                ✓ Reducción dolor inmediata
              </div>
            </div>

            {/* Sensación Obstructiva */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Sensación de Obstrucción
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Eliminación sensación "algo atorado" después dilatación esofágica. Precio Mérida transparente sin sorpresas.
              </p>
              <div className="text-xs text-accent-strong font-medium">
                ✓ Sensación normal desde procedimiento
              </div>
            </div>

            {/* Pérdida Peso */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Pérdida de Peso Involuntaria
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Recuperación peso corporal con mejor deglución. Costo fijo dilatación esofágica Mérida incluye seguimiento nutricional.
              </p>
              <div className="text-xs text-accent-strong font-medium">
                ✓ Mejor tolerancia alimentaria
              </div>
            </div>

            {/* Aspiración */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Aspiración Nocturna
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Reducción riesgo broncoaspiración con mejor vaciamiento esofágico. Precio dilatación Mérida previene complicaciones.
              </p>
              <div className="text-xs text-accent-strong font-medium">
                ✓ Menor riesgo aspiración pulmonar
              </div>
            </div>
          </div>
        </div>
      </section>

{/* WHEN TO CALL SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Cuándo Necesitas Dilatación Esofágica en Mérida?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Señales de alarma que indican necesidad del procedimiento - precio transparente desde primera consulta
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="space-y-4">
              <div className="p-6 rounded-2xl border-l-4 border-red-500 bg-red-50/50 border border-red-100">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Dificultad Progresiva para Tragar</h3>
                    <p className="text-sm text-red-700">
                      Empeoramiento gradual disfagia, primero sólidos después líquidos. Consulta dilatación esofágica Mérida precio accesible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border-l-4 border-orange-500 bg-orange-50/50 border border-orange-100">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">Atragantamiento Frecuente</h3>
                    <p className="text-sm text-orange-700">
                      Episodios repetidos "comida atorada" especialmente sólidos. Costo dilatación esofágica Mérida incluye evaluación urgente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border-l-4 border-yellow-500 bg-yellow-50/50 border border-yellow-100">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Regurgitación Inmediata</h3>
                    <p className="text-sm text-yellow-700">
                      Alimentos regresan sin digerir minutos después de comer. Precio fijo dilatación esofágica Mérida mejora síntoma.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl border-l-4 border-red-600 bg-red-50/50 border border-red-100">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-red-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-2">Pérdida de Peso &gt; 5kg en 6 Meses</h3>
                    <p className="text-sm text-red-800">
                      Desnutrición por disfagia crónica. Costo dilatación esofágica Mérida incluye seguimiento nutricional especializado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border-l-4 border-purple-500 bg-purple-50/50 border border-purple-100">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-purple-800 mb-2">Dolor Torácico al Comer</h3>
                    <p className="text-sm text-purple-700">
                      Molestia retroesternal con deglución. Precio transparente dilatación esofágica Mérida alivia dolor inmediatamente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border-l-4 border-blue-500 bg-blue-50/50 border border-blue-100">
                <div className="flex items-start gap-4">
                  <Activity className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Infecciones Respiratorias Recurrentes</h3>
                    <p className="text-sm text-blue-700">
                      Neumonías repetidas por aspiración. Costo fijo dilatación esofágica Mérida previene complicaciones pulmonares.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-200">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-red-800">
                Contacto Inmediato - Dilatación Esofágica Mérida
              </h3>
              <p className="text-red-700 max-w-2xl mx-auto">
                Si presentas dificultad severa para tragar o pérdida rápida de peso, contacta inmediatamente. 
                Precio dilatación esofágica Mérida transparente desde primera llamada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CallButton service="dilatacion esofagica" position="urgencia" />
                  <WhatsAppButton service="dilatacion esofagica" position="urgencia"  />
                </div>
            </div>
          </div>
        </div>
      </section>


      {/* RECOVERY SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Recuperación Rápida Dilatación Esofágica - Mejora el Mismo Día
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Timeline completo incluido en precio {mxn(PRICING.dilatacion_esofagica.from)} pesos Mérida
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">Primeras 4 Horas</h3>
                    <p className="text-sm text-foreground/60">Inmediato post-procedimiento</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Observación médica Hospital Amerimed Mérida</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Primera deglución controlada con líquidos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Evaluación inmediata mejoría disfagia</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">Días 1-2</h3>
                    <p className="text-sm text-foreground/60">Recuperación en casa</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Dieta líquida fría: gelatinas, jugos, caldos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Medicamentos según indicación médica</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Reposo relativo, evitar esfuerzos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">Semana 1</h3>
                    <p className="text-sm text-foreground/60">Progresión dietética</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Progresión a dieta blanda bien masticada</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Control telefónico incluido en precio Mérida</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Actividades normales gradualmente</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">1 Mes</h3>
                    <p className="text-sm text-foreground/60">Evaluación completa</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <span>Evaluación presencial incluida en costo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <span>Dieta normal si tolerancia adecuada</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <span>Plan seguimiento personalizado Mérida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Rates */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent-light/10 to-primary/5 border border-accent-light/20">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
              Resultados Dilatación Esofágica Mérida - Costo {mxn(PRICING.dilatacion_esofagica.from)} Pesos
            </h3>
            
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div className="space-y-3">
                <div className="text-3xl font-bold text-accent-strong">95%</div>
                <div className="text-sm font-medium text-foreground">Mejoría inmediata disfagia</div>
                <div className="text-xs text-foreground/60">Mismo día del procedimiento</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-primary">90%</div>
                <div className="text-sm font-medium text-foreground">Éxito a largo plazo</div>
                <div className="text-xs text-foreground/60">Seguimiento 12 meses</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-green-600">24h</div>
                <div className="text-sm font-medium text-foreground">Alta hospitalaria</div>
                <div className="text-xs text-foreground/60">Recuperación rápida</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Tecnología Especializada Dilatación Esofágica Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Equipo de última generación incluido en precio transparente
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Microscope className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Balones Dilatadores Olympus
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Sistema CRE (Controlled Radial Expansion) con balones graduados desde 12mm hasta 20mm. 
                  Costo dilatación esofágica Mérida incluye balones especializados importados.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    <span>Dilatación controlada y segura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    <span>Menor riesgo perforación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    <span>Resultados predecibles</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Fluoroscopía en Tiempo Real
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Monitoreo radiológico continuo durante dilatación esofágica. Precio en Mérida incluye 
                  uso de fluoroscopio sin costo adicional por tiempo de procedimiento.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Visualización directa dilatación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Control inmediato complicaciones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Mayor precisión procedimiento</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                  <Activity className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Endoscopios Alta Definición
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Sistema Olympus CV-190 con imagen HD para evaluación precisa antes y después dilatación. 
                  Costo fijo Mérida incluye equipamiento de última generación.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>Imagen nítida alta resolución</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>Detección temprana complicaciones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>Documentación completa procedimiento</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Monitoreo Cardiopulmonar
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Vigilancia continua signos vitales durante sedación y dilatación esofágica. 
                  Precio transparente Mérida incluye monitoreo especializado anestesiológico.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    <span>Oximetría de pulso continua</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    <span>Electrocardiografía durante procedimiento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    <span>Presión arterial automatizada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Hospital Amerimed */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent-strong/5 border border-primary/20">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
              ¿Por qué Hospital Amerimed para Dilatación Esofágica Mérida?
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Hospital className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Quirófanos Especializados</h4>
                    <p className="text-sm text-foreground/80">
                      Salas híbridas con fluoroscopía integrada. Costo dilatación esofágica incluye acceso a tecnología hospitalaria avanzada.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Equipo Anestesiológico</h4>
                    <p className="text-sm text-foreground/80">
                      Anestesiólogos certificados disponibles 24/7. Precio Mérida incluye sedación profunda segura.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Cuidados Intensivos</h4>
                    <p className="text-sm text-foreground/80">
                      UCI disponible si complicaciones. Costo fijo dilatación esofágica Mérida incluye respaldo hospitalario completo.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Ubicación Céntrica</h4>
                    <p className="text-sm text-foreground/80">
                      Fácil acceso desde cualquier punto de Mérida. Estacionamiento gratuito incluido en precio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FINAL CONTACT SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-accent-strong/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Agenda tu Dilatación Esofágica en Mérida Hoy
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Recupera tu capacidad de tragar sin dolor. Precio transparente {mxn(PRICING.dilatacion_esofagica.from)} pesos 
                con seguimiento incluido en Hospital Amerimed, Mérida.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 text-sm">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-5 w-5 text-accent-strong" />
                <span><strong>Ubicación:</strong> Hospital Amerimed, Mérida</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-5 w-5 text-accent-strong" />
                <span><strong>Horarios:</strong> Lun-Dom 7:00-19:00</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-5 w-5 text-accent-strong" />
                <span><strong>Disponible:</strong> Fines de semana</span>
              </div>
            </div>

            {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="dilatacion esofagica" position="hero" />
                      <WhatsAppButton service="dilatacion esofagica" position="hero" />
                </div>


            <div className="p-6 rounded-2xl bg-background/50 border border-border">
              <h3 className="font-bold text-foreground mb-2">Costo Dilatación Esofágica Mérida - Precio Fijo</h3>
              <p className="text-sm text-foreground/80">
                <strong>{mxn(PRICING.dilatacion_esofagica.from)} pesos</strong> incluye: procedimiento completo, sedación, 
                balones especializados, fluoroscopía, seguimiento 1 mes, y control síntomas sin costo adicional.
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
          <Faq routeKey="dilatacion" />
        </div>
      </section>

    </>
  )
}
