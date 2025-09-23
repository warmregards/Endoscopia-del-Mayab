import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"
import { Stethoscope, MapPin, Phone, MessageCircle, Globe, CheckCircle2, ShieldCheck, Microscope, Hospital, Clock, Star, Award, Users, Heart, TrendingUp, Target, Activity, Brain, AlertTriangle } from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";
import { inter, montserrat } from "@/app/fonts";


export const revalidate = 86400
export const metadata = metaFor("home")

export default function Page() {
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
                  <Star className="h-4 w-4 text-accent-strong" />
                  <span className="text-sm font-medium text-foreground">500+ Endoscopias | 300+ Colonoscopias Anuales</span>
                </div>
                
                <h1 className="`${montserrat.className} text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-tight`">
                  Endoscopia y Colonoscopia en Mérida | Dr. Omar Quiroz - Precios Fijos
                </h1>
                
                <div className="`{inter.className} space-y-4 text-lg text-foreground/80 leading-relaxed`">
                  <p>
                    ¿Problemas digestivos y necesitas respuestas claras? Dr. Omar Quiroz realiza endoscopias y colonoscopias en Mérida con precios fijos transparentes.
                  </p>
                  
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong" />
                      <span className="font-medium">500+ endoscopias anuales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-medium">300+ colonoscopias anuales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong" />
                      <span className="font-medium">Equipo Olympus 180 HD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-medium">Sedación cómoda sin dolor</span>
                    </div>
                  </div>
                  
                  <p>
                    Triple certificado UNAM y Florida. Detecta problemas que otros especialistas pueden pasar por alto.
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-left gap-4">
                  <CallButton service="home" position="hero" />
                  <WhatsAppButton service="home" position="hero" />
                </div>
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="flex-1 lg:max-w-md">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-strong/20 rounded-3xl transform rotate-3" />
                <div className="relative bg-background rounded-3xl p-8 border border-border shadow-2xl">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Stethoscope className="h-10 w-10 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-serif font-bold text-foreground">Dr. Omar Quiroz</h3>
                      <p className="text-sm text-foreground/60">Especialista Certificado</p>
                    </div>
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-sm font-medium text-foreground/60">Endoscopia</div>
                        <div className="text-2xl font-bold text-accent-strong">{mxn(PRICING.endoscopia.from)}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-foreground/60">Colonoscopia</div>
                        <div className="text-2xl font-bold text-primary">{mxn(PRICING.colonoscopia.from)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE STATS SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Endoscopia y Colonoscopia Mérida - Estadísticas Reales
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Dr. Omar Quiroz - Único especialista triple certificado península
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-12">
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="text-3xl font-bold text-accent-strong mb-2">500+</div>
              <div className="text-sm font-medium text-foreground/70">Endoscopias Anuales</div>
            </div>
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm font-medium text-foreground/70">Colonoscopias Anuales</div>
            </div>
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="text-3xl font-bold text-accent-strong mb-2">100+</div>
              <div className="text-sm font-medium text-foreground/70">CPREs Anuales</div>
            </div>
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm font-medium text-foreground/70">Años Mérida</div>
            </div>
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="text-3xl font-bold text-accent-strong mb-2">&lt;0.1%</div>
              <div className="text-sm font-medium text-foreground/70">Complicaciones</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent-strong/10 border border-primary/20">
            <p className="text-center text-foreground/80">
              <strong>Referencias médicas:</strong> Gastroenterólogos, internistas, médicos familiares Mérida refieren pacientes cuando necesitan endoscopia y colonoscopia de calidad comprobada.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN PROCEDURES SECTION - MOBILE OPTIMIZED */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Procedimientos Principales - Precios Transparentes
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Endoscopia, colonoscopia y CPRE con tecnología de vanguardia
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Endoscopia - Simplified Card */}
            <div className="group p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-strong/10 flex items-center justify-center">
                  <Microscope className="h-5 w-5 text-accent-strong" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground">Endoscopia</h3>
                  <div className="text-2xl font-bold text-accent-strong">{mxn(PRICING.endoscopia.from)}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-foreground/80 font-medium">¿Dolor estómago constante?</p>
                <p className="text-sm text-foreground/70">Endoscopia encuentra la causa real en 20 minutos</p>
                
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>✓ 500+ procedimientos anuales</div>
                  <div>✓ Sedación cómoda - sin dolor</div>
                  <div>✓ Resultados inmediatos con fotos</div>
                  <div>✓ 60% menos que hospitales</div>
                </div>
              </div>
              
              <Link 
                href="/endoscopia-merida" 
                className="inline-flex items-center gap-2 text-accent-strong font-semibold hover:text-accent-strong/80 transition-colors text-sm"
              >
                Ver detalles →
              </Link>
            </div>

            {/* Colonoscopia - Simplified Card */}
            <div className="group p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground">Colonoscopia</h3>
                  <div className="text-2xl font-bold text-primary">{mxn(PRICING.colonoscopia.from)}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-foreground/80 font-medium">¿45+ años sin chequeo?</p>
                <p className="text-sm text-foreground/70">Prevención que puede salvarte la vida</p>
                
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>✓ 300+ procedimientos anuales</div>
                  <div>✓ Extracción pólipos incluida</div>
                  <div>✓ Sedación profunda - cómoda</div>
                  <div>✓ 90% supervivencia detección temprana</div>
                </div>
              </div>
              
              <Link 
                href="/colonoscopia-merida" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors text-sm"
              >
                Ver detalles →
              </Link>
            </div>

            {/* CPRE - Simplified Card */}
            <div className="group p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-light/10 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-accent-strong" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground">CPRE</h3>
                  <div className="text-2xl font-bold text-accent-strong">{mxn(PRICING.cpre.from)}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-foreground/80 font-medium">¿Problemas vesícula/páncreas?</p>
                <p className="text-sm text-foreground/70">Evita cirugía abierta con tecnología SpyGlass</p>
                
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>✓ 100+ procedimientos anuales</div>
                  <div>✓ Único especialista península</div>
                  <div>✓ Tecnología más avanzada</div>
                  <div>✓ 30% menos que competencia</div>
                </div>
              </div>
              
              <Link 
                href="/cpre-merida" 
                className="inline-flex items-center gap-2 text-accent-strong font-semibold hover:text-accent-strong/80 transition-colors text-sm"
              >
                Ver detalles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITIVE PRICING SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Precios Endoscopia y Colonoscopia Mérida - Comparación Real
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              ¿Por qué 60% más barato que hospitales? Mismo equipo, precio justo
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {/* Endoscopia Pricing */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
                Precio de Endoscopia
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-muted/30">
                  <span className="font-medium text-foreground/60">Hospital Star Médica</span>
                  <span className="font-bold text-foreground/60 line-through">$8,500+ extras</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                  <span className="font-medium text-foreground">Dr. Omar Quiroz</span>
                  <span className="font-bold text-accent-strong">{mxn(PRICING.endoscopia.from)} fijos</span>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-sm font-semibold text-accent-strong">
                  Ahorro: $4,000+ pesos
                </div>
              </div>
            </div>

            {/* Colonoscopia Pricing */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
                Precio Colonoscopia
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-muted/30">
                  <span className="font-medium text-foreground/60">Hospital Faro Mayab</span>
                  <span className="font-bold text-foreground/60 line-through">$12,500+ estudios</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <span className="font-medium text-foreground">Dr. Omar Quiroz</span>
                  <span className="font-bold text-primary">{mxn(PRICING.colonoscopia.from)} fijos</span>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-sm font-semibold text-primary">
                  Ahorro: $7,500+ pesos
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-light/10 border border-accent-light/20">
              <Target className="h-5 w-5 text-accent-strong" />
              <span className="font-semibold text-foreground">Precio colonoscopia y endoscopia transparente:</span>
              <span className="text-foreground/70">Sin deudas hospitalarias, mismo equipo Olympus</span>
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL OFFICE SECTION - GBP ALIGNMENT */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Consultas Digestivas Mérida - Valoración Especializada
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Oficina médica independiente - Comunicación directa Dr. Quiroz
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Pre-Endoscopic Assessment */}
            <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-3">Valoración Pre-Endoscópica</h4>
              <p className="text-sm text-foreground/80">
                Evaluación personalizada síntomas. Dr. Quiroz explica opciones tratamiento antes procedimientos.
              </p>
            </div>

            {/* Post-Procedure Control */}
            <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-accent-strong" />
              </div>
              <h4 className="font-semibold text-foreground mb-3">Control Post-Endoscopia</h4>
              <p className="text-sm text-foreground/80">
                Seguimiento personalizado después endoscopia y colonoscopia. Revisión resultados biopsias.
              </p>
            </div>

            {/* Preventive Checkup */}
            <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-3">Chequeo Digestivo Preventivo</h4>
              <p className="text-sm text-foreground/80">
                Evaluación digestiva después 45 años. Planificación endoscopia y colonoscopia preventiva.
              </p>
            </div>

            {/* Emergency Consultations */}
            <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-accent-strong" />
              </div>
              <h4 className="font-semibold text-foreground mb-3">Urgencias Digestivas</h4>
              <p className="text-sm text-foreground/80">
                Atención emergencias gastrointestinales fines de semana. Evaluación inmediata síntomas alarmantes.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20">
              <Hospital className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Consulta médica especializada:</span>
              <span className="text-foreground/70">$800 pesos - Sin intermediarios hospitalarios</span>
            </div>
          </div>


          <div className="mt-12 text-center">
            <Link 
                  href="/consultas-digestivas-merida" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Conocer más sobre Consultas →
                </Link>
          </div>


        </div>
      </section>

      {/* WHY CHOOSE DR. OMAR - VALUE PROPOSITION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Por Qué Dr. Quiroz vs. Hospitales?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ventajas consulta independiente especializada
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Price Advantage */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                60% Más Barato
              </h3>
              <div className="space-y-2 text-foreground/80">
                <p>• Mismo equipo Olympus profesional</p>
                <p>• Sin sobrecargos hospitalarios</p>
                <p>• Precios fijos transparentes</p>
                <p>• Endoscopia precio merida: {mxn(PRICING.endoscopia.from)}</p>
              </div>
            </div>

            {/* Speed */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Sin Listas Espera
              </h3>
              <div className="space-y-2 text-foreground/80">
                <p>• Citas disponibles esta semana</p>
                <p>• Atención emergencias fines de semana</p>
                <p>• Resultados inmediatos - no esperas semanas</p>
                <p>• Colonoscopia precio merida: {mxn(PRICING.colonoscopia.from)}</p>
              </div>
            </div>

            {/* Personal Care */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Comunicación Directa
              </h3>
              <div className="space-y-2 text-foreground/80">
                <p>• Hablas directamente con Dr. Quiroz</p>
                <p>• No residentes ni estudiantes</p>
                <p>• Explicaciones claras comprensibles</p>
                <p>• Seguimiento personalizado casos</p>
              </div>
            </div>

            {/* Experience */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Experiencia Comprobada
              </h3>
              <div className="space-y-2 text-foreground/80">
                <p>• 500+ endoscopias anuales realizadas</p>
                <p>• 300+ colonoscopias anuales realizadas</p>
                <p>• Triple certificación UNAM y Florida</p>
                <p>• Detecta problemas otros pierden</p>
              </div>
            </div>
          </div>

          {/* Clear Value Proposition Callout */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent-strong/10 border border-primary/20">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
              ¿Por qué Dr. Quiroz vs. hospitales?
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent-strong" />
                <span className="font-medium text-foreground">60% más barato - mismo equipo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="font-medium text-foreground">Sin listas espera - citas rápidas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent-strong" />
                <span className="font-medium text-foreground">Comunicación directa - no residentes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="font-medium text-foreground">Resultados inmediatos - no esperas semanas</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SOCIAL PROOF SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Pacientes Satisfechos Recomiendan Dr. Quiroz
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              5/5 estrellas Google Reviews - 20+ reseñas verificadas
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="p-6 rounded-xl border border-border bg-background text-center">
              <div className="text-3xl font-bold text-accent-strong mb-2">5/5</div>
              <div className="text-sm font-medium text-foreground/70">Estrellas Google</div>
            </div>
            <div className="p-6 rounded-xl border border-border bg-background text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm font-medium text-foreground/70">Reseñas Verificadas</div>
            </div>
            <div className="p-6 rounded-xl border border-border bg-background text-center">
              <div className="text-3xl font-bold text-accent-strong mb-2">95%</div>
              <div className="text-sm font-medium text-foreground/70">Pacientes Recomiendan</div>
            </div>
          </div>

          
        </div>
      </section>

      
{/* DR. OMAR SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Triple Certificación Médica</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  Dr. Omar Quiroz - Especialista en Endoscopia
                </h2>
                
                <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    El Dr. Quiroz es cirujano general y endoscopista certificado con 15+ años de experiencia en Mérida, Yucatán.
                  </p>
                  
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Certificado UNAM Cirugía General</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong" />
                      <span>Fellowship Endoscopia Florida</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Miembro Sociedad Mexicana Endoscopia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong" />
                      <span>15+ años experiencia Mérida</span>
                    </div>
                  </div>
                  
                  <p>
                    Su enfoque es explicar todo claramente, usar la mejor tecnología disponible, y mantener precios justos para que todos puedan acceder a procedimientos digestivos de calidad.
                  </p>
                </div>
                
                <Link 
                  href="/dr-omar-quiroz" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Conocer más sobre Dr. Quiroz →
                </Link>
              </div>
            </div>
            
            {/* Image with certifications below */}
            <div className="flex-1 lg:max-w-md">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-strong/20 rounded-3xl transform -rotate-3" />
                <div className="relative bg-background rounded-3xl p-8 border border-border shadow-2xl">
                  {/* Schedule Now Image */}
                  <div className="relative mb-6">
                    <Image 
                      src="/schedule-now.webp"
                      alt="Agendar consulta con Dr. Omar Quiroz"
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-xl"
                      priority
                    />
                  </div>
                  
                  {/* Certifications Content Below Image */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif font-bold text-foreground">Dr. Omar Quiroz</h3>
                      <p className="text-foreground/60">Cirujano General y Endoscopista</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-foreground/60">Certificaciones:</div>
                      <div className="space-y-1 text-sm font-medium text-foreground">
                        <div>UNAM - Cirugía General</div>
                        <div>Florida - Endoscopia Avanzada</div>
                        <div>SME - Endoscopia Digestiva</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Consultorio 517 en Chichí Suárez - Citas Disponibles
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ubicación céntrica, fácil acceso desde toda la ciudad
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Dirección</div>
                    <div className="text-foreground/70">Hospital Amerimed Mérida, Consultorio 517, Chichí Suárez, 97306 Mérida, Yuc.</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background">
                  <Phone className="h-6 w-6 text-accent-strong" />
                  <div>
                    <div className="font-semibold text-foreground">Teléfono</div>
                    <div className="text-foreground/70">999-236-0153</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Horarios</div>
                    <div className="text-foreground/70">Lun-Vie 7:00-19:00, Urgencias fines de semana</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Áreas que Atendemos
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="text-foreground/80">• Temozon Norte</div>
                  <div className="text-foreground/80">• Montebello</div>
                  <div className="text-foreground/80">• Centro Histórico</div>
                  <div className="text-foreground/80">• Cholul</div>
                  <div className="text-foreground/80">• Norte de Mérida</div>
                  <div className="text-foreground/80">• Conkal</div>
                </div>
              </div>

            
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="aspect-[4/3] md:aspect-[16/9]">
                  <iframe
                    title="Ubicación del consultorio - Endoscopia del Mayab"
                    aria-label="Mapa de Google con la ubicación del consultorio"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2246452050617!2d-89.55689432227041!3d20.98363028932237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567136033f05e9%3A0xe0f304c9458a28b2!2sEndoscopia%20del%20Mayab!5e0!3m2!1sen!2smx!4v1756155121463!5m2!1sen!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Listo para Obtener Respuestas Claras?
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Procedimientos digestivos con precios fijos. Citas disponibles esta semana.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-strong">Endoscopia</div>
                <div className="text-lg font-semibold text-foreground">{mxn(PRICING.endoscopia.from)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Colonoscopia</div>
                <div className="text-lg font-semibold text-foreground">{mxn(PRICING.colonoscopia.from)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-strong">CPRE</div>
                <div className="text-lg font-semibold text-foreground">{mxn(PRICING.cpre.from)}</div>
              </div>
            </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <CallButton service="home" position="cta section" />
                  <WhatsAppButton service="home" position="cta section" />
                </div>
            <div className="text-sm text-foreground/60">
              Atención emergencias digestivas fines de semana disponible
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
          <Faq routeKey="home" />
        </div>
      </section>
    </>
  )
}
