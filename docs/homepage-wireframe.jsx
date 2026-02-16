import { useState } from "react";

// Design tokens (light only for wireframe)
const t = {
  "surface-base": "hsl(0 0% 100%)",
  "surface-raised": "hsl(0 0% 100%)",
  "surface-sunken": "hsl(220 14% 96%)",
  "surface-inverse": "hsl(222 47% 11%)",
  "text-primary": "hsl(222 84% 4.9%)",
  "text-secondary": "hsl(215 16% 46%)",
  "text-accent": "hsl(169 80% 20%)",
  "text-brand": "hsl(224 76% 40%)",
  "text-inverse": "#ffffff",
  "action-primary": "hsl(169 80% 25%)",
  "action-secondary": "hsl(224 76% 40%)",
  "border-default": "hsl(220 13% 91%)",
  "brand-teal-50": "hsl(169 50% 96%)",
  "brand-teal-100": "hsl(169 50% 90%)",
  "brand-teal-300": "hsl(169 60% 45%)",
  "brand-navy-50": "hsl(224 60% 96%)",
  "brand-navy-100": "hsl(224 60% 92%)",
  shadow: "0 4px 12px hsl(0 0% 0% / 0.10)",
};

const heading = "'Montserrat', system-ui, sans-serif";
const body = "'Open Sans', system-ui, sans-serif";

// ── ICONS ──
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const CheckIcon = ({ color }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color || t["action-primary"]} strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
);
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="hsl(38 92% 50%)" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const ChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

// ── DATA ──
const coreProcedures = [
  { name: "Endoscopia", desc: "Diagnóstico del tracto digestivo superior", price: "$4,500", url: "/endoscopia-merida", tag: "Más solicitado" },
  { name: "Colonoscopia", desc: "Prevención de cáncer colorrectal", price: "$5,000", url: "/colonoscopia-merida", tag: "Prevención" },
  { name: "CPRE", desc: "Desobstrucción de conductos biliares", price: "$24,700", url: "/cpre-merida", tag: "Especializado" },
];

const therapeuticProcedures = [
  { name: "Ligadura de Hemorroides Internas", price: "$17,000", url: "/ligadura-hemorroides-internas-merida" },
  { name: "Ligadura de Várices Esofágicas", price: "$19,000", url: "/ligadura-varices-esofagicas-merida" },
  { name: "Gastrostomía Endoscópica (PEG)", price: "$19,000", url: "/gastrostomia-endoscopica-peg-merida" },
  { name: "Extracción de Cuerpos Extraños", price: "$9,500", url: "/extraccion-cuerpos-extranos-endoscopia-merida" },
  { name: "Dilatación Esofágica", price: "$15,000", url: "/dilatacion-esofagica-merida" },
  { name: "Dilatación Biliar", price: "$25,000", url: "/dilatacion-biliar-merida" },
  { name: "Dilatación Colónica", price: "$15,000", url: "/dilatacion-colonica-merida" },
  { name: "Retiro de Balón Gástrico", price: "$11,900", url: "/retiro-balon-gastrico-merida" },
  { name: "Coagulación con Plasma de Argón (APC)", price: "$19,000", url: "/apc-coagulacion-plasma-argon-merida" },
  { name: "Panendoscopia", price: "$4,500", url: "/panendoscopia-merida" },
];

const advancedProcedures = [
  { name: "Endoprótesis Esofágicas", url: "/endoprotesis-esofagicas-merida" },
  { name: "Endoprótesis Biliares", url: "/endoprotesis-biliares-merida" },
  { name: "Endoprótesis Duodenales", url: "/endoprotesis-duodenales-merida" },
  { name: "Endoprótesis Colónicas", url: "/endoprotesis-colonicas-merida" },
  { name: "Cierre de Fístulas por Clips", url: "/cierre-fistulas-clips-endoscopicos-merida" },
  { name: "Sutura Endoscópica", url: "/sutura-endoscopica-merida" },
  { name: "Disección Endoscópica Submucosa (ESD)", url: "/diseccion-endoscopica-submucosa-esd-merida" },
  { name: "Resección Endoscópica Mucosa (EMR)", url: "/reseccion-endoscopica-mucosa-emr-merida" },
];

const faqs = [
  { q: "¿Duele la endoscopia o colonoscopia?", a: "No. Todos los procedimientos se realizan con sedación consciente — no sentirás dolor durante el estudio. La mayoría de los pacientes no recuerdan nada del procedimiento." },
  { q: "¿Qué incluye el precio?", a: "El precio incluye: anestesia, toma de biopsias (sin límite — un solo costo sin importar cuántas se tomen), sala de recuperación y valoración pre-endoscópica. La lectura de biopsias (patología) tiene un costo adicional de $1,200 MXN." },
  { q: "¿Cómo me preparo para el procedimiento?", a: "La preparación varía según el procedimiento. Al agendar tu cita por WhatsApp, el Dr. Quiroz te enviará instrucciones detalladas y personalizadas. En general, se requiere ayuno de 8 horas para endoscopia y una preparación intestinal especial para colonoscopia." },
  { q: "¿Es peligrosa la colonoscopia?", a: "La colonoscopia es uno de los procedimientos más seguros en gastroenterología. Las complicaciones graves son extremadamente raras (menos del 0.1%). El Dr. Quiroz ha realizado más de 300 colonoscopias anuales con equipo Olympus de última generación." },
  { q: "¿Cuánto tiempo dura el procedimiento?", a: "Una endoscopia tarda 10-15 minutos y una colonoscopia 20-30 minutos. Después necesitarás 30-60 minutos en recuperación. En total, planifica unas 2 horas desde tu llegada." },
  { q: "¿Atienden emergencias digestivas?", a: "Sí. El Dr. Quiroz atiende emergencias gastrointestinales los 7 días de la semana, incluyendo sangrado digestivo, cuerpos extraños y obstrucciones. Escríbenos por WhatsApp para atención inmediata." },
];

// ── SECTION ANNOTATION (wireframe helper) ──
const SectionLabel = ({ persona, label, color }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 8,
    padding: "6px 12px", marginBottom: 16, borderRadius: 6,
    backgroundColor: color || "hsl(38 92% 95%)", border: `1px dashed ${color ? color.replace("95%)", "70%)") : "hsl(38 92% 70%)"}`,
    fontFamily: "monospace", fontSize: 11, color: "hsl(38 50% 35%)",
  }}>
    <span style={{ fontWeight: 700 }}>{persona}</span>
    <span style={{ opacity: 0.7 }}>→</span>
    <span>{label}</span>
  </div>
);

// ── MAIN COMPONENT ──
export default function HomepageWireframe() {
  const [viewport, setViewport] = useState("mobile");
  const [openFaq, setOpenFaq] = useState(null);
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [showAllTherapeutic, setShowAllTherapeutic] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const maxW = viewport === "mobile" ? 375 : viewport === "tablet" ? 768 : 1024;

  const Note = ({ persona, label, color }) => showAnnotations ? <SectionLabel persona={persona} label={label} color={color} /> : null;

  return (
    <div style={{ backgroundColor: "hsl(220 14% 94%)", minHeight: "100vh", fontFamily: body }}>
      {/* ── WIREFRAME CONTROLS ── */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        backgroundColor: "hsl(222 47% 11%)", padding: "10px 16px",
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8,
      }}>
        <span style={{ color: "#fff", fontFamily: heading, fontWeight: 700, fontSize: 13 }}>
          WIREFRAME: Homepage — Endoscopia del Mayab
        </span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <label style={{ display: "flex", alignItems: "center", gap: 6, color: "hsl(38 92% 70%)", fontSize: 12, cursor: "pointer" }}>
            <input type="checkbox" checked={showAnnotations} onChange={() => setShowAnnotations(!showAnnotations)} />
            Persona annotations
          </label>
          <div style={{ display: "flex", borderRadius: 6, overflow: "hidden", border: "1px solid hsl(215 25% 30%)" }}>
            {["mobile", "tablet", "desktop"].map(v => (
              <button key={v} onClick={() => setViewport(v)} style={{
                padding: "5px 12px", fontSize: 11, fontWeight: 600, border: "none", cursor: "pointer",
                backgroundColor: viewport === v ? t["action-primary"] : "transparent",
                color: viewport === v ? "#fff" : "hsl(215 20% 60%)",
              }}>
                {v === "mobile" ? "📱 375" : v === "tablet" ? "📱 768" : "💻 1024"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── PAGE CONTAINER ── */}
      <div style={{
        maxWidth: maxW, margin: "16px auto", backgroundColor: t["surface-base"],
        boxShadow: "0 0 40px hsl(0 0% 0% / 0.15)", borderRadius: 12, overflow: "hidden",
      }}>

        {/* ══════════════════════════════════════════════
            SECTION 1: HERO — Above the fold
            Personas: 1 (Location), 4 (Referred), ALL
            ══════════════════════════════════════════════ */}
        <div style={{ padding: viewport === "mobile" ? "24px 16px 28px" : "40px 32px 36px" }}>
          <Note persona="P1+P4" label="Entity confirmation + CTA — must load in <2s, visible without scroll" />

          {/* Trust strip */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap",
            marginBottom: 16,
          }}>
            <div style={{ display: "flex", gap: 2 }}>
              {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: t["text-primary"] }}>52 reseñas</span>
            <span style={{ fontSize: 13, color: t["text-secondary"] }}>·</span>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <ClockIcon />
              <span style={{ fontSize: 13, color: t["text-secondary"] }}>7 días, 7am–9pm</span>
            </div>
          </div>

          {/* H1 */}
          <h1 style={{
            fontFamily: heading, fontSize: viewport === "mobile" ? 28 : 40,
            fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em",
            color: t["text-primary"], margin: "0 0 12px",
          }}>
            Endoscopia y Colonoscopia en Mérida, Yucatán
          </h1>

          {/* Subtitle — plain language for P5 */}
          <p style={{
            fontSize: viewport === "mobile" ? 16 : 18, lineHeight: 1.5,
            color: t["text-secondary"], margin: "0 0 20px", maxWidth: 520,
          }}>
            Diagnóstico y tratamiento de enfermedades digestivas con precios transparentes. Cuando nos escribes, te contesta el Dr. Quiroz directamente.
          </p>

          {/* Price anchor — P2 immediate need */}
          <div style={{
            display: "inline-flex", alignItems: "baseline", gap: 6,
            fontFamily: heading, marginBottom: 20,
          }}>
            <span style={{ fontSize: viewport === "mobile" ? 24 : 30, fontWeight: 700, color: t["text-accent"] }}>
              Desde $4,500 MXN
            </span>
            <span style={{ fontSize: 14, color: t["text-secondary"] }}>· Sedación incluida</span>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "#25D366", color: "#fff",
              padding: "14px 24px", borderRadius: 12, border: "none",
              fontSize: 16, fontWeight: 700, cursor: "pointer",
              boxShadow: "0 4px 12px hsl(142 60% 40% / 0.3)",
            }}>
              <WhatsAppIcon /> Agendar por WhatsApp
            </button>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: t["action-secondary"], color: "#fff",
              padding: "14px 24px", borderRadius: 12, border: "none",
              fontSize: 16, fontWeight: 600, cursor: "pointer",
            }}>
              <PhoneIcon /> 999 236 0153
            </button>
          </div>

          {/* Location bar — P1 critical need */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "10px 14px", borderRadius: 10,
            backgroundColor: t["surface-sunken"],
            border: `1px solid ${t["border-default"]}`,
          }}>
            <MapPinIcon />
            <span style={{ fontSize: 14, color: t["text-secondary"] }}>
              Hospital Amerimed Mérida, Consultorio 517 — Chichi Suárez
            </span>
          </div>
        </div>

        {/* ── Included strip — P2 value proposition ── */}
        <div style={{
          backgroundColor: t["brand-teal-50"],
          borderTop: `1px solid ${t["brand-teal-100"]}`,
          borderBottom: `1px solid ${t["brand-teal-100"]}`,
          padding: viewport === "mobile" ? "16px" : "16px 32px",
        }}>
          <Note persona="P2" label="'What's included' — prevents bounce from price shoppers" color="hsl(169 50% 92%)" />
          <div style={{
            display: "flex", flexWrap: "wrap", gap: viewport === "mobile" ? 12 : 24,
            justifyContent: viewport === "mobile" ? "flex-start" : "center",
          }}>
            {["Anestesia incluida", "Biopsias sin límite", "Sala de recuperación", "Valoración incluida"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <CheckIcon />
                <span style={{ fontSize: 14, fontWeight: 500, color: t["text-primary"] }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 2: CORE PROCEDURES — First scroll
            Personas: 2 (Price), 3 (Procedure), 1 (Location)
            ══════════════════════════════════════════════ */}
        <div style={{ padding: viewport === "mobile" ? "32px 16px" : "48px 32px" }}>
          <Note persona="P2+P3" label="Core procedures with visible pricing — this IS the services page" />

          <h2 style={{
            fontFamily: heading, fontSize: viewport === "mobile" ? 22 : 28,
            fontWeight: 700, lineHeight: 1.2, color: t["text-primary"],
            margin: "0 0 6px",
          }}>
            Procedimientos Principales
          </h2>
          <p style={{ fontSize: 15, color: t["text-secondary"], margin: "0 0 24px" }}>
            Precios transparentes — sin sorpresas, sin costos ocultos
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: viewport === "mobile" ? "1fr" : viewport === "tablet" ? "1fr 1fr" : "1fr 1fr 1fr",
            gap: 16,
          }}>
            {coreProcedures.map(proc => (
              <div key={proc.name} style={{
                border: `1px solid ${t["border-default"]}`,
                borderRadius: 14, padding: 20, backgroundColor: t["surface-raised"],
                boxShadow: t.shadow, cursor: "pointer",
                transition: "box-shadow 0.2s",
              }}>
                {proc.tag && (
                  <span style={{
                    display: "inline-block", fontSize: 11, fontWeight: 600,
                    padding: "3px 8px", borderRadius: 4, marginBottom: 10,
                    backgroundColor: t["brand-teal-50"], color: t["text-accent"],
                    border: `1px solid ${t["brand-teal-100"]}`,
                  }}>{proc.tag}</span>
                )}
                <h3 style={{ fontFamily: heading, fontSize: 18, fontWeight: 700, margin: "0 0 6px", color: t["text-primary"] }}>
                  {proc.name}
                </h3>
                <p style={{ fontSize: 14, color: t["text-secondary"], margin: "0 0 12px", lineHeight: 1.4 }}>
                  {proc.desc}
                </p>
                <div style={{
                  fontFamily: heading, fontSize: 22, fontWeight: 700,
                  color: t["text-accent"], marginBottom: 12,
                }}>
                  Desde {proc.price} <span style={{ fontSize: 13, fontWeight: 400, color: t["text-secondary"] }}>MXN</span>
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: 6,
                  fontSize: 14, fontWeight: 600, color: t["text-brand"],
                }}>
                  Ver detalles <ArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 3: FULL SERVICE CATALOG
            Personas: 3 (Procedure), 2 (Price)
            ══════════════════════════════════════════════ */}
        <div style={{
          padding: viewport === "mobile" ? "32px 16px" : "48px 32px",
          backgroundColor: t["surface-sunken"],
        }}>
          <Note persona="P3+P2" label="Full catalog — doubles as /servicios replacement" color="hsl(224 60% 94%)" />

          <h2 style={{
            fontFamily: heading, fontSize: viewport === "mobile" ? 22 : 28,
            fontWeight: 700, color: t["text-primary"], margin: "0 0 6px",
          }}>
            Todos los Servicios
          </h2>
          <p style={{ fontSize: 15, color: t["text-secondary"], margin: "0 0 24px" }}>
            22 procedimientos endoscópicos · Atención 7 días a la semana
          </p>

          {/* Therapeutic */}
          <h3 style={{
            fontFamily: heading, fontSize: 16, fontWeight: 600,
            color: t["text-secondary"], margin: "0 0 12px",
            textTransform: "uppercase", letterSpacing: "0.05em",
          }}>
            Procedimientos Terapéuticos
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: viewport === "desktop" ? "1fr 1fr" : "1fr",
            gap: 1, backgroundColor: t["border-default"], borderRadius: 10,
            overflow: "hidden", marginBottom: 8,
          }}>
            {(showAllTherapeutic ? therapeuticProcedures : therapeuticProcedures.slice(0, 4)).map(proc => (
              <div key={proc.name} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 16px", backgroundColor: t["surface-raised"],
                cursor: "pointer",
              }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: t["text-primary"] }}>{proc.name}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: t["text-accent"], whiteSpace: "nowrap", marginLeft: 12 }}>
                  Desde {proc.price}
                </span>
              </div>
            ))}
          </div>
          {!showAllTherapeutic && (
            <button onClick={() => setShowAllTherapeutic(true)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 14, fontWeight: 600, color: t["text-brand"],
              padding: "8px 0", display: "flex", alignItems: "center", gap: 4,
            }}>
              Ver {therapeuticProcedures.length - 4} procedimientos más <ChevronDown />
            </button>
          )}

          {/* Advanced */}
          <div style={{ marginTop: 24 }}>
            <button onClick={() => setShowAdvanced(!showAdvanced)} style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8, padding: 0,
            }}>
              <h3 style={{
                fontFamily: heading, fontSize: 16, fontWeight: 600,
                color: t["text-secondary"], margin: 0,
                textTransform: "uppercase", letterSpacing: "0.05em",
              }}>
                Procedimientos Avanzados
              </h3>
              <span style={{
                fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4,
                backgroundColor: t["brand-navy-50"], color: t["text-brand"],
              }}>
                Precio bajo cotización
              </span>
              <ChevronDown />
            </button>
            {showAdvanced && (
              <div style={{
                display: "grid",
                gridTemplateColumns: viewport === "desktop" ? "1fr 1fr" : "1fr",
                gap: 1, backgroundColor: t["border-default"], borderRadius: 10,
                overflow: "hidden", marginTop: 12,
              }}>
                {advancedProcedures.map(proc => (
                  <div key={proc.name} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "14px 16px", backgroundColor: t["surface-raised"],
                    cursor: "pointer",
                  }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: t["text-primary"] }}>{proc.name}</span>
                    <span style={{ fontSize: 13, color: t["text-secondary"], whiteSpace: "nowrap", marginLeft: 12 }}>
                      Cotización →
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Link to /precios */}
          <div style={{
            marginTop: 24, padding: "16px 20px", borderRadius: 12,
            backgroundColor: t["surface-raised"], border: `1px solid ${t["border-default"]}`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            cursor: "pointer",
          }}>
            <div>
              <div style={{ fontFamily: heading, fontSize: 16, fontWeight: 700, color: t["text-primary"], marginBottom: 2 }}>
                Ver todos los precios detallados
              </div>
              <div style={{ fontSize: 13, color: t["text-secondary"] }}>
                Comparativa completa con lo que incluye cada procedimiento
              </div>
            </div>
            <ArrowRight />
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 4: DOCTOR TRUST — P4 + P5
            ══════════════════════════════════════════════ */}
        <div style={{ padding: viewport === "mobile" ? "32px 16px" : "48px 32px" }}>
          <Note persona="P4+P5" label="Doctor credibility — converts referred patients, reassures fearful ones" color="hsl(280 50% 94%)" />

          <div style={{
            display: "flex", gap: 24,
            flexDirection: viewport === "mobile" ? "column" : "row",
            alignItems: viewport === "mobile" ? "flex-start" : "center",
          }}>
            {/* Photo placeholder */}
            <div style={{
              width: viewport === "mobile" ? 80 : 120, height: viewport === "mobile" ? 80 : 120,
              borderRadius: "50%", backgroundColor: t["brand-navy-50"],
              border: `3px solid ${t["brand-navy-100"]}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, fontSize: 12, color: t["text-secondary"], textAlign: "center",
              fontFamily: "monospace",
            }}>
              Dr. Quiroz<br/>foto
            </div>

            <div style={{ flex: 1 }}>
              <h2 style={{
                fontFamily: heading, fontSize: viewport === "mobile" ? 20 : 26,
                fontWeight: 700, color: t["text-primary"], margin: "0 0 4px",
              }}>
                Dr. Omar Quiroz
              </h2>
              <p style={{
                fontSize: 15, color: t["text-accent"], fontWeight: 600,
                margin: "0 0 10px",
              }}>
                Endoscopista Certificado · Hospital Amerimed Mérida
              </p>
              <p style={{
                fontSize: 14, color: t["text-secondary"], lineHeight: 1.6, margin: "0 0 14px",
              }}>
                Médico egresado de la UNAM con más de 15 años de experiencia y alta especialidad en endoscopia (Cédula EGI230072). Certificado por el Consejo Mexicano de Cirugía General. Cuando escribes, te contesta directamente el doctor — no una recepcionista.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "UNAM · Cirugía General",
                  "Cédula Esp. EGI230072",
                  "Consejo CMCG: C18044318",
                  "AMCE · COFEPRIS",
                  "Equipo Olympus HD",
                  "15+ años experiencia",
                ].map(item => (
                  <span key={item} style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    fontSize: 12, fontWeight: 500, padding: "4px 10px",
                    borderRadius: 6, backgroundColor: t["surface-sunken"],
                    color: t["text-primary"],
                  }}>
                    <ShieldIcon /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            marginTop: 20, textAlign: "center",
          }}>
            <span style={{
              fontSize: 14, fontWeight: 600, color: t["text-brand"],
              cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4,
            }}>
              Ver perfil completo del Dr. Quiroz <ArrowRight />
            </span>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 5: FAQ — P5 (Investigador)
            ══════════════════════════════════════════════ */}
        <div style={{
          padding: viewport === "mobile" ? "32px 16px" : "48px 32px",
          backgroundColor: t["surface-sunken"],
        }}>
          <Note persona="P5" label="Fear-based FAQ — captures informational queries organically, FAQPage schema" color="hsl(340 50% 94%)" />

          <h2 style={{
            fontFamily: heading, fontSize: viewport === "mobile" ? 22 : 28,
            fontWeight: 700, color: t["text-primary"], margin: "0 0 6px",
          }}>
            Preguntas Frecuentes
          </h2>
          <p style={{ fontSize: 15, color: t["text-secondary"], margin: "0 0 24px" }}>
            Lo que más nos preguntan los pacientes antes de su primera cita
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                backgroundColor: t["surface-raised"],
                borderRadius: i === 0 ? "10px 10px 2px 2px" : i === faqs.length - 1 ? "2px 2px 10px 10px" : "2px",
                overflow: "hidden",
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", padding: "16px", border: "none",
                    backgroundColor: "transparent", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    gap: 12, textAlign: "left",
                  }}
                >
                  <span style={{
                    fontSize: 15, fontWeight: 600, color: t["text-primary"],
                    lineHeight: 1.3,
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    transform: openFaq === i ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s", flexShrink: 0,
                    color: t["text-secondary"],
                  }}>
                    <ChevronDown />
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{
                    padding: "0 16px 16px",
                    fontSize: 14, lineHeight: 1.6, color: t["text-secondary"],
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Soft CTA for P5 */}
          <div style={{
            marginTop: 24, textAlign: "center",
            padding: "20px", borderRadius: 12,
            backgroundColor: t["surface-raised"],
            border: `1px solid ${t["border-default"]}`,
          }}>
            <p style={{ fontSize: 15, color: t["text-secondary"], margin: "0 0 12px" }}>
              ¿Tienes otra pregunta? El Dr. Quiroz te puede orientar personalmente.
            </p>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "#25D366", color: "#fff",
              padding: "12px 24px", borderRadius: 12, border: "none",
              fontSize: 15, fontWeight: 600, cursor: "pointer",
            }}>
              <WhatsAppIcon /> Escríbenos por WhatsApp
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 6: EMERGENCIES — Secondary
            ══════════════════════════════════════════════ */}
        <div style={{ padding: viewport === "mobile" ? "24px 16px" : "32px 32px" }}>
          <div style={{
            padding: "20px", borderRadius: 12,
            backgroundColor: "hsl(0 84% 97%)",
            border: "1px solid hsl(0 84% 90%)",
            display: "flex", gap: 16,
            flexDirection: viewport === "mobile" ? "column" : "row",
            alignItems: viewport === "mobile" ? "flex-start" : "center",
            justifyContent: "space-between",
          }}>
            <div>
              <div style={{ fontFamily: heading, fontSize: 16, fontWeight: 700, color: "hsl(0 60% 40%)", marginBottom: 4 }}>
                Emergencias Digestivas — 7 días
              </div>
              <div style={{ fontSize: 14, color: "hsl(0 40% 50%)" }}>
                Sangrado digestivo, obstrucciones, cuerpos extraños. Atención inmediata.
              </div>
            </div>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              backgroundColor: "hsl(0 84% 60%)", color: "#fff",
              padding: "10px 20px", borderRadius: 10, border: "none",
              fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
            }}>
              <PhoneIcon /> Llamar ahora
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            FOOTER — Entity verification (NAP)
            ══════════════════════════════════════════════ */}
        <footer style={{
          backgroundColor: t["surface-inverse"],
          padding: viewport === "mobile" ? "32px 16px 24px" : "48px 32px 32px",
        }}>
          <Note persona="SEO" label="NAP must match GBP exactly — crawlable text, not image" color="hsl(142 50% 92%)" />

          <div style={{
            display: "grid",
            gridTemplateColumns: viewport === "desktop" ? "1.5fr 1fr 1fr" : "1fr",
            gap: 32,
          }}>
            {/* Brand */}
            <div>
              <div style={{ fontFamily: heading, fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 8 }}>
                Endoscopia del Mayab
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "hsla(0,0%,100%,0.65)", margin: "0 0 12px" }}>
                Clínica especializada en endoscopia, colonoscopia y CPRE. Diagnóstico y tratamiento de enfermedades digestivas en Mérida, Yucatán.
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <span style={{ fontSize: 12, color: "hsla(0,0%,100%,0.5)" }}>@endoscopiadelmayab</span>
              </div>
            </div>

            {/* NAP */}
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "hsla(0,0%,100%,0.8)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Ubicación
              </div>
              <address style={{ fontStyle: "normal", fontSize: 14, lineHeight: 1.7, color: "hsla(0,0%,100%,0.65)" }}>
                Hospital Amerimed Mérida<br/>
                Consultorio 517<br/>
                Chichi Suárez, 97306<br/>
                Mérida, Yuc.
              </address>
            </div>

            {/* Contact + Hours */}
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "hsla(0,0%,100%,0.8)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Contacto
              </div>
              <div style={{ fontSize: 14, lineHeight: 2, color: "hsla(0,0%,100%,0.65)" }}>
                <div>Tel: 999 236 0153</div>
                <div>WhatsApp: 999 236 0153</div>
                <div style={{ marginTop: 8 }}>
                  <span style={{ color: "hsla(0,0%,100%,0.8)", fontWeight: 500 }}>Horario:</span>
                  <br/>Lunes a Domingo
                  <br/>7:00 AM – 9:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div style={{
            marginTop: 32, height: 120, borderRadius: 10,
            backgroundColor: "hsla(0,0%,100%,0.08)",
            border: "1px dashed hsla(0,0%,100%,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, color: "hsla(0,0%,100%,0.4)", fontFamily: "monospace",
          }}>
            [Embedded Google Map — Hospital Amerimed Mérida]
          </div>

          <div style={{
            marginTop: 24, paddingTop: 16,
            borderTop: "1px solid hsla(0,0%,100%,0.1)",
            fontSize: 12, color: "hsla(0,0%,100%,0.35)",
            textAlign: "center",
          }}>
            © 2026 Endoscopia del Mayab. Todos los derechos reservados.
          </div>
        </footer>

        {/* ── STICKY MOBILE CTA ── */}
        {viewport === "mobile" && (
          <div style={{
            position: "sticky", bottom: 0, left: 0, right: 0,
            backgroundColor: "hsla(0,0%,100%,0.95)",
            backdropFilter: "blur(8px)",
            borderTop: `1px solid ${t["border-default"]}`,
            padding: "10px 16px",
            display: "flex", gap: 8,
            zIndex: 50,
          }}>
            <button style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              backgroundColor: "#25D366", color: "#fff",
              padding: "12px 0", borderRadius: 10, border: "none",
              fontSize: 15, fontWeight: 700, cursor: "pointer",
            }}>
              <WhatsAppIcon /> WhatsApp
            </button>
            <button style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              backgroundColor: t["action-secondary"], color: "#fff",
              padding: "12px 16px", borderRadius: 10, border: "none",
              cursor: "pointer",
            }}>
              <PhoneIcon />
            </button>
          </div>
        )}
      </div>

      {/* ── WIREFRAME NOTES ── */}
      {showAnnotations && (
        <div style={{
          maxWidth: maxW, margin: "16px auto", padding: "20px",
          backgroundColor: "hsl(38 92% 97%)", borderRadius: 12,
          border: "1px solid hsl(38 80% 85%)",
        }}>
          <div style={{ fontFamily: heading, fontSize: 14, fontWeight: 700, marginBottom: 12, color: "hsl(38 50% 30%)" }}>
            Architecture Notes for Claude Code
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.7, color: "hsl(38 30% 35%)" }}>
            <div style={{ marginBottom: 8 }}><strong>Title tag:</strong> Endoscopia y Colonoscopia en Mérida | Desde $4,500 MXN | Endoscopia del Mayab</div>
            <div style={{ marginBottom: 8 }}><strong>Canonical:</strong> https://www.endoscopiadelmayab.com/</div>
            <div style={{ marginBottom: 8 }}><strong>Schema @graph:</strong> WebSite + Organization + MedicalClinic + Physician + FAQPage</div>
            <div style={{ marginBottom: 8 }}><strong>301 redirect:</strong> /servicios → / (homepage absorbs services function)</div>
            <div style={{ marginBottom: 8 }}><strong>Sticky CTA:</strong> WhatsApp + Phone — mobile only, appears after scrolling past hero CTAs</div>
            <div style={{ marginBottom: 8 }}><strong>Priority order:</strong> Hero (P1/P4) → Pricing (P2) → Catalog (P3) → Doctor (P4/P5) → FAQ (P5)</div>
            <div><strong>Event tracking:</strong> whatsapp_click, phone_click, scroll_depth (25/50/75/90), cta_view, pricing_view, faq_expand</div>
          </div>
        </div>
      )}
    </div>
  );
}
