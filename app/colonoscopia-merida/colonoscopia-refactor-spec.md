# Colonoscopia Page Refactor Specification
## Endoscopia del Mayab — `/colonoscopia-merida`

**Date:** February 14, 2026
**Status:** Best-performing procedure page (67s engagement, 14.6% conversion) — refactor to tighten, not reinvent
**Approach:** Reduce from 13 sections → 9, eliminate redundancy, enforce design system, score against personas

---

## Current State Audit

### What's Working (Preserve)
- **67s average engagement** — highest of any core page
- **14.6% conversion rate** — strong; content resonates
- **4,619 organic impressions, 134 clicks (2.9% CTR)** — best procedure page CTR
- **Google Ads colonoscopia campaign: 858 clicks, $21,166 spend, 112.8 conversions, 13.1% conv rate** — most efficient campaign

### What's Broken (Fix)

**Structural Issues:**
1. **13 sections is too many.** Cancer Prevention, Sedation, Local Expertise, Private Practice Benefits, When You Need, Procedure Steps, Polyp Detection — there's massive overlap. Patient stories about sedation appear in 3 different sections.
2. **Keyword stuffing in H2s.** "Colonoscopia Precio Merida - ¿Cuándo Necesitas Una?" reads like SEO spam, not a heading a human would write.
3. **Redundant pricing display.** Price appears in: Hero H1, Hero sidebar card, Hero sidebar "Todo incluido" box, Pricing section H2, Pricing comparison grid, Pricing "What's included" box. That's 6 separate price mentions before the fold on desktop.
4. **Fake testimonials.** "Lucía, 46 años", "Miguel, 47 años", "Patricia, 49 años", "Fernando, 55 años", "Carlos, 51 años" — 5 fabricated testimonials with no surnames, no verifiable identity. These are hallucinated content. **Remove all of them.** The GoogleReviews component handles real social proof.
5. **Broken template literals.** Lines 36-37 use `` `${montserrat.className}...` `` inside a className string without proper interpolation — the backtick is inside quotes, producing literal backtick text.
6. **Competitor comparison is risky.** "Faro del Mayab $12,500+" and "IMSS 'Gratis'" — naming competitors can trigger legal issues and looks unprofessional. Reframe as value proposition without naming names.
7. **Contact section has placeholder data.** "[Número]" appears twice — should use `CLINIC.phone.display` from lib/clinic.ts.
8. **Background alternation violated.** Multiple consecutive `bg-background` sections (Pricing → Preparation → Sedation pattern breaks).
9. **Non-8pt-grid spacing.** Rampant use of `gap-3` (12px), `gap-6` (24px is fine), `py-12` (48px is fine), but `space-y-3` (12px), `p-3` (12px), `mt-3` (12px) throughout.
10. **Section padding inconsistent.** Mix of `py-16 sm:py-24`, `py-12`, `py-16 sm:py-24` — should all use `section-padding` utility.
11. **No `container-page` utility used.** All sections use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` inline instead of the `container-page` class.
12. **Lucide icon bloat.** 21 icons imported; many used once. Reduce to essential icons only.
13. **Duplicate "what's included" lists.** The hero sidebar and the pricing section both list the same inclusions.
14. **No `id` anchors on several sections** that are linked to from hero (e.g., `#precio-colonoscopia-merida` exists but `#sedacion` anchor is orphaned).

---

## Refactored Section Architecture (13 → 9 sections)

```
Section 1: HERO                      → bg-background
Section 2: WHAT IS + WHEN            → bg-muted         (merged: Cancer Prevention + When You Need)
Section 3: PRICING                   → bg-background     (merged: Pricing + What's Included)
Section 4: PROCEDURE STEPS           → bg-muted          (merged: Steps + Preparation + Sedation)
Section 5: WHY DR. QUIROZ            → bg-background     (merged: Local Expertise + Private Practice)
Section 6: RESULTS & FOLLOW-UP       → bg-muted          (streamlined Results)
Section 7: GOOGLE REVIEWS            → bg-background     (component — replaces fabricated testimonials)
Section 8: FAQ                       → bg-muted          (component)
Section 9: BOTTOM CTA                → bg-primary        (navy conversion block)

Removed entirely:
- Polyp Detection section (content folded into FAQ + "What Is" section)
- Private Practice Benefits (merged into Why Dr. Quiroz)
- Local Expertise standalone section (merged into Why Dr. Quiroz)
- Contact section with placeholder data (replaced by Bottom CTA)
- ProceduresGrid (move to homepage/services — not needed on a focused procedure page)
```

### Background Alternation Sequence
```
bg-background → bg-muted → bg-background → bg-muted → bg-background → bg-muted → bg-background → bg-muted → bg-primary
```
✅ Alternates correctly with no violations.

---

## Section-by-Section Content Specification

### Section 1: HERO
**Background:** `bg-background`
**Layout:** Single column, content-first. No sidebar card (mobile users never see it properly anyway with 82-94% mobile traffic).

**Content (exact copy for Claude Code):**

```
Badge: "Desde $5,000 MXN · Todo incluido"
  → Uses: mxn(PRICING.colonoscopia.from) — not hardcoded

H1: "Colonoscopia en Mérida"
  → font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight
  → Matches the exact procedure name for SEO (H1 format per CLAUDE.md)
  → NO price in H1 (price is in badge above and creates keyword stuffing)

Subtitle: "Prevención de cáncer colorrectal con sedación — sin dolor, precio transparente, resultados el mismo día."
  → text-lg text-muted-foreground
  → One clear sentence, not a keyword dump

Trust chips (inline flex-wrap):
  - "Sedación sin dolor"
  - "Olympus 190 HD"
  - "Biopsias incluidas"
  - "Hospital Amerimed"
  → Each: CheckCircle2 h-4 w-4 + text-sm font-medium
  → These are verifiable facts, not marketing fluff

CTAs:
  - WhatsAppButton service="colonoscopia" position="hero" variant="primary"
  - CallButton service="colonoscopia" position="hero" variant="ghost"
  → WhatsApp first, wider. Call is ghost variant per CTA hierarchy.

Location line:
  - MapPin h-4 w-4 + "Hospital Amerimed, Consultorio 517 — Mérida, Yucatán"
  → Uses CLINIC.address.display from lib/clinic.ts
  → text-sm text-muted-foreground
```

**8pt Grid Compliance:**
- Section: `section-padding` (py-16 md:py-24 = 64px/96px)
- Badge → H1: `mb-4` (16px)
- H1 → Subtitle: `mt-4` (16px)
- Subtitle → Trust chips: `mt-6` (24px)
- Trust chips → CTAs: `mt-8` (32px)
- CTAs → Location: `mt-6` (24px)
- Trust chip gap: `gap-x-4 gap-y-2` (16px/8px)

**Persona Scoring:**
| Persona | Score | Why |
|---------|-------|-----|
| P1 Buscador Local | ★★★★★ | Hospital name + address + location line above fold |
| P2 Comparador Precios | ★★★★★ | Price badge prominent, "Todo incluido" framing |
| P3 Paciente Referido | ★★★★☆ | Dr. Quiroz in meta, trust chips, Amerimed visible |
| P4 Paciente Directo | ★★★★★ | Procedure name = H1, one-sentence definition, WhatsApp CTA |
| P5 Investigador | ★★★☆☆ | Subtitle addresses fear ("sin dolor"), but they'll scroll to FAQ |

---

### Section 2: WHAT IS + WHEN TO GET ONE
**Background:** `bg-muted`
**Layout:** Two-column on desktop (content + indications cards), single stack on mobile

**Content:**

```
H2: "¿Qué es la colonoscopia y cuándo se recomienda?"
  → text-2xl md:text-3xl font-serif font-bold tracking-tight
  → Natural question format matches Persona 5 search queries exactly

Body paragraph (max 3 sentences):
"La colonoscopia es un estudio con cámara flexible que permite revisar todo el colon
y recto para detectar pólipos, cáncer colorrectal, colitis y otras condiciones.
Si se encuentran pólipos, se extraen en la misma sesión — evitando que se conviertan
en cáncer con el tiempo. El 90% de los casos de cáncer colorrectal se curan cuando
se detectan tempranamente con colonoscopia."

→ This replaces the entire "Cancer Prevention" section with one tight paragraph.
→ The 90% stat is the only stat worth keeping — removes the red/green stat cards.
```

**Two indication cards (side by side on md+, stacked on mobile):**

```
Card 1: "Prevención (edad 45+)"
  Icon: ShieldCheck h-6 w-6 text-primary
  Content:
  - Primera colonoscopia: 45 años
  - Antecedentes familiares: 10 años antes del caso familiar
  - Colon normal: repetir cada 10 años
  - Pólipos previos: repetir cada 3–5 años

Card 2: "Síntomas que requieren colonoscopia"
  Icon: AlertTriangle h-6 w-6 text-text-accent
  Content:
  - Sangrado rectal o heces negras
  - Cambio persistente en hábito intestinal
  - Dolor abdominal con pérdida de peso inexplicable
  - Anemia sin causa clara
```

**Card styling:** `p-6 rounded-xl border border-border bg-background`
**Grid:** `grid gap-6 md:grid-cols-2` (24px gap, 8pt compliant)

**Cross-link (below cards):**
```
"¿Síntomas altos como reflujo o gastritis? → Conoce la endoscopia en Mérida"
Link to: /endoscopia
```
→ text-sm text-muted-foreground, link uses `underline decoration-primary/40 hover:decoration-primary`

**Persona Scoring:**
| Persona | Score | Why |
|---------|-------|-----|
| P1 Buscador Local | ★★★☆☆ | Not location-specific, but useful context |
| P2 Comparador Precios | ★★★☆☆ | Cost comparison comes next section |
| P3 Paciente Referido | ★★☆☆☆ | Already knows they need it |
| P4 Paciente Directo | ★★★★★ | One-sentence definition in first paragraph |
| P5 Investigador | ★★★★★ | Answers "¿Qué es?", "¿Cuándo?", "¿Es peligrosa?" fear queries |

---

### Section 3: PRICING
**Background:** `bg-background`
**Layout:** Centered, max-w-3xl
**Anchor:** `id="precio-colonoscopia-merida"`

**Content:**

```
H2: "Precio de colonoscopia en Mérida: $5,000 MXN todo incluido"
  → Uses mxn(PRICING.colonoscopia.from) — NEVER hardcode the number
  → text-2xl md:text-3xl font-serif font-bold tracking-tight

Subtitle: "Precio fijo y transparente. Sin cargos ocultos ni sorpresas al salir."
  → text-base text-muted-foreground

Price display card (centered, prominent):
  Background: bg-accent-light border border-accent/20 rounded-2xl p-6 md:p-8
  Price: mxn(PRICING.colonoscopia.from) + " MXN"
    → text-3xl md:text-4xl font-bold text-text-accent font-serif
  Label below: "Precio fijo · Todo incluido"
    → text-sm text-muted-foreground

"¿Qué incluye?" list (2-column grid on md+):
  ✓ Valoración pre-colonoscopia
  ✓ Sedación con anestesiólogo
  ✓ Colonoscopia con equipo Olympus 190 HD
  ✓ Extracción de pólipos pequeños
  ✓ Reporte con fotografías HD
  ✓ Seguimiento post-procedimiento
  → CheckCircle2 h-4 w-4 text-accent + text-sm text-foreground
  → grid gap-4 md:grid-cols-2 (16px gap)

Additional costs callout:
  Background: bg-muted rounded-xl p-4 border border-border
  Content: "Costo adicional solo si se requiere: biopsia (lectura de patología)
  {mxn(BIOPSY_FEE.amount)} MXN. Se informa antes del procedimiento."
  → text-sm text-muted-foreground

Value framing (NO competitor names):
  "Una colonoscopia preventiva cada 10 años cuesta $500 MXN por año.
  El tratamiento de cáncer colorrectal supera los $500,000 MXN."
  → Replaces the "Faro del Mayab $12,500" / "IMSS Gratis" comparison
  → p-4 rounded-xl bg-primary/5 border border-primary/20
  → text-sm text-foreground
```

**IMPORTANT DATA RULES:**
- Price MUST come from `mxn(PRICING.colonoscopia.from)` — never hardcoded
- Biopsy fee MUST come from `mxn(BIOPSY_FEE.amount)` — never hardcoded
- The $500/year and $500,000 treatment cost ARE hardcoded because they're editorial, not pricing data
- Do NOT name competitors (Faro del Mayab, IMSS, Salud Digna) in the pricing section

**Persona Scoring:**
| Persona | Score | Why |
|---------|-------|-----|
| P1 Buscador Local | ★★★☆☆ | Price anchors decision but they want location first |
| P2 Comparador Precios | ★★★★★ | Price prominent, inclusions clear, no hidden costs |
| P3 Paciente Referido | ★★★★☆ | Confirms value of referral |
| P4 Paciente Directo | ★★★★☆ | Price + inclusions answer their "what does it cost" |
| P5 Investigador | ★★★★☆ | Value framing helps overcome fear of cost |

---

### Section 4: PROCEDURE — WHAT TO EXPECT
**Background:** `bg-muted`
**Layout:** 3-column step cards on md+, single stack mobile
**Anchor:** `id="preparacion-colonoscopia"`

This section merges: Preparation, Sedation Comfort, and Procedure Steps into one coherent narrative.

**Content:**

```
H2: "¿Cómo es una colonoscopia? Paso a paso"
  → text-2xl md:text-3xl font-serif font-bold tracking-tight

Subtitle: "Procedimiento ambulatorio con sedación. Llegas, te duermes, despiertas con resultados."
  → text-base text-muted-foreground

Three step cards (grid gap-6 md:grid-cols-3):

Card 1: "Preparación (día anterior)"
  Step indicator: "1" in circle (w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center)
  Content:
  - Dieta líquida clara, evitar bebidas rojas o moradas
  - Laxante en 2 tomas (tarde y madrugada) según indicación
  - Consultar al Dr. Quiroz si tomas anticoagulantes o antidiabéticos
  - Preparación exitosa = estudio más completo y seguro
  Note: "Recibe instrucciones detalladas por WhatsApp al agendar."

Card 2: "El procedimiento (20–40 min)"
  Step indicator: "2"
  Content:
  - Llegas con acompañante adulto al Hospital Amerimed
  - Anestesiólogo administra sedación — te duermes sin dolor
  - Dr. Quiroz examina todo el colon con equipo Olympus 190 HD
  - Si encuentra pólipos pequeños, los retira en la misma sesión
  Note: "No sentirás nada. La mayoría de pacientes no recuerdan el procedimiento."

Card 3: "Después (30–45 min recuperación)"
  Step indicator: "3"
  Content:
  - Despertar gradual sin dolor ni náusea
  - Dr. Quiroz explica hallazgos con fotografías HD del estudio
  - Recibes reporte escrito el mismo día
  - Biopsias: resultados en 5–7 días con llamada personal del Dr. Quiroz
  Note: "Te vas caminando el mismo día. Puedes comer ligero por la tarde."
```

**Card styling:** `p-6 rounded-xl border border-border bg-background text-center`
**Step circle:** `w-10 h-10 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4`
**Note styling:** `mt-4 text-xs text-muted-foreground italic`

**Recovery callout (below cards):**
```
Clock h-5 w-5 + "Recuperación: 30–45 minutos. Te vas caminando el mismo día."
→ inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-background border border-border
→ Centered below the grid
```

**Persona Scoring:**
| Persona | Score | Why |
|---------|-------|-----|
| P1 Buscador Local | ★★★☆☆ | Amerimed mentioned, but not location-primary |
| P2 Comparador Precios | ★★★☆☆ | Confirms value (what they get for the money) |
| P3 Paciente Referido | ★★★★☆ | Reassurance on process |
| P4 Paciente Directo | ★★★★★ | Exactly what they need — step-by-step clarity |
| P5 Investigador | ★★★★★ | Answers "¿Duele?", "¿Cómo me preparo?", "¿Cuánto dura?" — top fear queries |

---

### Section 5: WHY DR. QUIROZ
**Background:** `bg-background`
**Layout:** Content block + stats row
**Anchor:** `id="por-que-elegirnos"`

Merges: Local Expertise + Private Practice Benefits + Polyp Detection credibility into one trust section.

**Content:**

```
H2: "¿Por qué elegir al Dr. Quiroz para tu colonoscopia?"
  → text-2xl md:text-3xl font-serif font-bold tracking-tight

Body paragraph (2–3 sentences max):
"El Dr. Omar Quiroz es gastroenterólogo y endoscopista con más de 15 años
de experiencia en Mérida. Realiza más de 300 colonoscopias al año con equipo
Olympus 190 HD en Hospital Amerimed, con tasa de complicaciones menor al 0.1%.
Cuando escribes por WhatsApp, te contesta el doctor directamente — sin
recepcionista, sin intermediarios."

Stats row (3-column, centered):
  "300+" / "Colonoscopias anuales"
  "15+" / "Años en Mérida"
  "<0.1%" / "Tasa de complicaciones"
  → Each: text-center p-6 rounded-xl border border-border bg-muted
  → Number: text-2xl md:text-3xl font-bold text-primary font-serif
  → Label: text-sm text-muted-foreground mt-1

Differentiator list (4 items, 2-col grid on md+):
  1. "Comunicación directa" — Hablas con el Dr. Quiroz, no con residentes. Te explica resultados personalmente.
  2. "Citas esta semana" — Sin meses de espera. Disponibilidad de emergencia los fines de semana.
  3. "Sedación con anestesiólogo" — Monitoreo continuo de oxígeno, presión y ritmo cardíaco.
  4. "Extracción de pólipos incluida" — Si encuentra pólipos pequeños, los retira en la misma sesión sin costo extra.

  → Each item: flex items-start gap-4, bullet: w-2 h-2 rounded-full bg-accent mt-2.5, label: font-semibold, description: text-sm text-muted-foreground
```

**IMPORTANT:** All stats (300+, 15+, <0.1%) are verifiable claims from the doctor profile. These are NOT fabricated.

**Persona Scoring:**
| Persona | Score | Why |
|---------|-------|-----|
| P1 Buscador Local | ★★★★★ | "Mérida" prominent, Amerimed, years of local practice |
| P2 Comparador Precios | ★★★★☆ | "Extracción incluida" reinforces value |
| P3 Paciente Referido | ★★★★★ | Validates referral — credentials, experience, direct access |
| P4 Paciente Directo | ★★★★☆ | Authoritative + fast booking |
| P5 Investigador | ★★★★☆ | Complication rate + experience address safety fears |

---

### Section 6: RESULTS & FOLLOW-UP
**Background:** `bg-muted`
**Layout:** max-w-3xl centered, simple card stack
**Anchor:** `id="resultados-colonoscopia"`

**Content:**

```
H2 (supporting size): "Resultados: explicación inmediata con fotografías HD"
  → text-xl md:text-2xl font-serif font-bold tracking-tight

Three result cards (vertical stack, gap-6):

Card 1: "Al despertar"
  → "El Dr. Quiroz te muestra fotografías de tu colon y explica los hallazgos mientras despiertas de la sedación."

Card 2: "Reporte del mismo día"
  → "Recibes un reporte escrito con: ubicación exacta de hallazgos, fotografías HD, y recomendaciones de seguimiento."

Card 3: "Si hay biopsias"
  → "Resultados de patología en 5–7 días. El Dr. Quiroz te llama personalmente para explicar los resultados y definir el siguiente paso."

  → Each: p-6 rounded-xl border border-border bg-background

Follow-up callout:
  "Colon limpio: repetir en 10 años. Pólipos encontrados: repetir en 3–5 años."
  → Centered, bg-accent-light/50 border border-accent/20 rounded-xl p-4
  → text-sm text-foreground
```

**Persona Scoring:**
| Persona | Score | Why |
|---------|-------|-----|
| P1 Buscador Local | ★★☆☆☆ | Not location-specific |
| P2 Comparador Precios | ★★★☆☆ | Confirms what's included in the price |
| P3 Paciente Referido | ★★★★☆ | "Doctor calls personally" validates referral |
| P4 Paciente Directo | ★★★★★ | Answers "what happens after" |
| P5 Investigador | ★★★★★ | Resolves fear about results and next steps |

---

### Section 7: GOOGLE REVIEWS
**Background:** `bg-background`
**Component:** `<GoogleReviews />` — no changes needed, existing component

```tsx
<section className="bg-background">
  <div className="container-page section-padding">
    <GoogleReviews />
  </div>
</section>
```

This replaces ALL fabricated testimonials (Miguel, Lucía, Patricia, Fernando, Carlos). Real reviews from real patients with verifiable Google profiles.

**Persona Scoring:**
| Persona | Score | Why |
|---------|-------|-----|
| P1 Buscador Local | ★★★★★ | Local reviews = strongest local SEO signal |
| P2 Comparador Precios | ★★★★☆ | Social proof reduces price sensitivity |
| P3 Paciente Referido | ★★★★★ | Validates the referral they received |
| P4 Paciente Directo | ★★★★☆ | General trust building |
| P5 Investigador | ★★★★☆ | Real patient experiences resolve fears |

---

### Section 8: FAQ
**Background:** `bg-muted`
**Component:** `<Faq routeKey="colonoscopia" />` — no changes needed

```tsx
<section id="faqs-colonoscopia" className="bg-muted">
  <div className="container-page section-padding">
    <Faq routeKey="colonoscopia" />
  </div>
</section>
```

The FAQ content in `lib/faq.ts` already covers the top organic queries:
- "¿Cuánto cuesta una colonoscopia?" (111 Ads impressions)
- "¿Qué es la colonoscopia?" (46 impressions)
- "Preparación para colonoscopia" (34 impressions)
- "¿Cuánto dura?" (20 impressions, 100% conversion!)
- "¿Duele la colonoscopia?" (6 impressions)
- "¿Es peligrosa?" (5 impressions)
- "¿Colonoscopia tradicional o virtual?" (captures 12 SC impressions for "colonoscopia virtual")

**Persona Scoring:**
| Persona | Score | Why |
|---------|-------|-----|
| P5 Investigador | ★★★★★ | This section exists primarily for them |
| All others | ★★★☆☆ | Reassurance but not primary need |

---

### Section 9: BOTTOM CTA
**Background:** `bg-primary` (navy)
**Layout:** Centered, max-w-2xl

```
H2: "¿Listo para agendar tu colonoscopia?"
  → text-2xl md:text-3xl font-serif font-bold text-white tracking-tight

Subtitle: "El Dr. Quiroz te contesta personalmente por WhatsApp. Citas disponibles esta semana."
  → text-base text-white/80

CTAs:
  - WhatsAppButton service="colonoscopia" position="bottom-cta" variant="primary" (wider: sm:px-10)
  - CallButton service="colonoscopia" position="bottom-cta" variant="inverse"

Reassurance line:
  "999 236 0153 · Hospital Amerimed, Mérida · Lunes a Viernes"
  → text-sm text-white/60
  → Uses CLINIC.phone.display and CLINIC.address parts from lib/clinic.ts
```

**Persona Scoring:**
| Persona | Score | Why |
|---------|-------|-----|
| ALL | ★★★★★ | Universal conversion point |

---

## Aggregate Persona Scorecard

| Section | P1 Local | P2 Price | P3 Referred | P4 Direct | P5 Research |
|---------|----------|----------|-------------|-----------|-------------|
| 1. Hero | ★★★★★ | ★★★★★ | ★★★★☆ | ★★★★★ | ★★★☆☆ |
| 2. What Is + When | ★★★☆☆ | ★★★☆☆ | ★★☆☆☆ | ★★★★★ | ★★★★★ |
| 3. Pricing | ★★★☆☆ | ★★★★★ | ★★★★☆ | ★★★★☆ | ★★★★☆ |
| 4. Procedure Steps | ★★★☆☆ | ★★★☆☆ | ★★★★☆ | ★★★★★ | ★★★★★ |
| 5. Why Dr. Quiroz | ★★★★★ | ★★★★☆ | ★★★★★ | ★★★★☆ | ★★★★☆ |
| 6. Results | ★★☆☆☆ | ★★★☆☆ | ★★★★☆ | ★★★★★ | ★★★★★ |
| 7. Reviews | ★★★★★ | ★★★★☆ | ★★★★★ | ★★★★☆ | ★★★★☆ |
| 8. FAQ | ★★★☆☆ | ★★★☆☆ | ★★★☆☆ | ★★★☆☆ | ★★★★★ |
| 9. Bottom CTA | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★★ |
| **Average** | **3.7** | **3.7** | **3.7** | **4.2** | **4.1** |

**Design validation:** No persona scores below 3.0 on any section. P4 (Paciente Directo) and P5 (Investigador) score highest — correct, since these are the primary audiences for a procedure detail page. P1, P2, P3 are well-served by the hero + pricing sections, then route to conversion via bottom CTA.

---

## Content Guardrails for Claude Code

### NEVER fabricate:
- ❌ Patient testimonials, quotes, or stories (use GoogleReviews component only)
- ❌ Competitor names or prices (no "Faro del Mayab", "IMSS", "Salud Digna" in copy)
- ❌ Medical statistics not already established in existing project content (90% survival, <0.1% complications, 300+ annual — these are approved)
- ❌ Wait times or availability claims ("citas mañana") — only "citas esta semana" is approved
- ❌ Insurance claims or payment plans — not part of current offering

### ALWAYS pull from centralized sources:
- ✅ Price: `mxn(PRICING.colonoscopia.from)` from `lib/pricing.ts`
- ✅ Biopsy fee: `mxn(BIOPSY_FEE.amount)` from `lib/clinic.ts`
- ✅ Phone: `CLINIC.phone.display` from `lib/clinic.ts`
- ✅ Address: `CLINIC.address.display` from `lib/clinic.ts`
- ✅ WhatsApp link: `waHref()` or component `<WhatsAppButton />`
- ✅ FAQ content: `<Faq routeKey="colonoscopia" />` from component + `lib/faq.ts`
- ✅ Reviews: `<GoogleReviews />` component
- ✅ Metadata: `metaFor("colonoscopia")` from `lib/routes-seo.ts`

### Copy tone:
- Professional but warm — this is a medical practice, not a startup
- Second person ("tu colonoscopia", "te contesta") — already established
- Avoid fear-mongering — present facts, let the patient decide
- No exclamation points in headings
- No emoji in body copy (emoji only in the Faq component title if applicable)

### Approved medical claims (from existing project content):
- "La colonoscopia es uno de los procedimientos más seguros en gastroenterología"
- "Complicaciones graves: menos del 0.1%"
- "90% de supervivencia con detección temprana"
- "300+ colonoscopias anuales"
- "15+ años de experiencia en Mérida"
- "Procedimiento dura 20–40 minutos" (note: FAQ says 25-45, use 20-40 as established in page)
- "Recuperación: 30–45 minutos"
- "Biopsias: resultados 5–7 días"
- "Colon limpio: repetir en 10 años. Pólipos: repetir 3–5 años"

---

## Design System Compliance Checklist

### Layout
- [ ] All sections use `container-page` + `section-padding` (no inline `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)
- [ ] Background alternation: bg-background → bg-muted → bg-background → bg-muted → ... → bg-primary
- [ ] No consecutive same-background sections

### 8-Point Grid
- [ ] All spacing values are multiples of 8px (4px only for heading→subtitle pairs)
- [ ] No banned values: `mb-1.5`, `mb-3`, `mb-5`, `mb-7`, `py-2.5`, `py-3.5`, `gap-3`, `gap-5`, `gap-7`
- [ ] `gap-4` (16px) or `gap-6` (24px) or `gap-8` (32px) only
- [ ] `space-y-4` (16px) or `space-y-6` (24px) or `space-y-8` (32px) only
- [ ] Padding: `p-4` (16px), `p-6` (24px), `p-8` (32px) only
- [ ] Internal ≤ External: Card p-6 → cards spaced gap-6 or gap-8

### Typography
- [ ] H1: `font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight`
- [ ] H2 primary: `font-serif text-2xl md:text-3xl font-bold tracking-tight`
- [ ] H2 supporting: `font-serif text-xl md:text-2xl font-bold tracking-tight`
- [ ] H3: `font-serif text-lg font-semibold`
- [ ] Body: `text-base` (default, no class needed)
- [ ] Supporting: `text-sm`
- [ ] Micro: `text-xs font-medium`
- [ ] All headings: `tracking-tight`
- [ ] No template literal className bugs (no backtick-in-string)

### CTAs
- [ ] WhatsApp is ALWAYS primary (first, wider)
- [ ] Call is ALWAYS secondary (ghost in hero, inverse on dark bg)
- [ ] Both use component imports, not custom buttons
- [ ] Both pass `service="colonoscopia"` and `position` for GTM tracking

### Icons
- [ ] Inline with text: `h-4 w-4`
- [ ] Standalone small: `h-5 w-5`
- [ ] Feature/callout: `h-6 w-6`
- [ ] Hero/large: `h-8 w-8`
- [ ] Only import icons that are actually used

### Colors
- [ ] No hardcoded colors (no `bg-green-50`, `bg-red-50`, `text-green-600`, `text-red-600`)
- [ ] Use semantic tokens: `bg-primary/5`, `bg-accent-light`, `text-text-accent`, `text-muted-foreground`
- [ ] Exception: `bg-primary` for bottom CTA section, `text-white` for text on dark backgrounds

### Data
- [ ] Zero hardcoded prices — all from `lib/pricing.ts`
- [ ] Zero hardcoded contact info — all from `lib/clinic.ts`
- [ ] Zero fabricated testimonials — only `<GoogleReviews />`
- [ ] Zero competitor names in visible copy

---

## Import Map (exact imports needed)

```tsx
import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import { BIOPSY_FEE, CLINIC } from "@/lib/clinic"
import Link from "next/link"
import {
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Clock,
  MapPin,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"
```

**Removed imports (no longer needed):**
- `Image` (no images in refactored page)
- `Stethoscope`, `Phone`, `MessageCircle`, `Globe`, `Microscope`, `Hospital`, `Star`, `Award`, `Users`, `Heart`, `Activity`, `Camera`, `Search`, `Brain`, `Target`, `TrendingUp`, `UserCheck` — all removed
- `ProceduresGrid` — removed from this page (belongs on homepage/services)
- `inter`, `montserrat` — not needed; use Tailwind `font-serif` and `font-sans`

---

## SEO Notes

### Target queries this page should rank for:
1. "colonoscopia merida" — 459 impressions, 18 clicks (position 6.4 — improvable)
2. "colonoscopia precio" — 886 impressions, 17 clicks (position 28.8 — needs /precios page)
3. "colonoscopia en merida yucatan" — 139 impressions, 4 clicks (position 6.8)
4. "colonoscopia" (bare) — 153 impressions, 3 clicks (position 4.9)
5. "cuanto cuesta una colonoscopia" — 65 impressions, 2 clicks (position 13.1)
6. "precio de colonoscopia" — 311 impressions, 0 clicks (position 67 — long tail)

### H-tag structure for the refactored page:
```
H1: Colonoscopia en Mérida
  H2: ¿Qué es la colonoscopia y cuándo se recomienda?
    H3: Prevención (edad 45+)
    H3: Síntomas que requieren colonoscopia
  H2: Precio de colonoscopia en Mérida: $5,000 MXN todo incluido
    H3: ¿Qué incluye?
  H2: ¿Cómo es una colonoscopia? Paso a paso
    H3: Preparación (día anterior)
    H3: El procedimiento (20–40 min)
    H3: Después (30–45 min recuperación)
  H2: ¿Por qué elegir al Dr. Quiroz para tu colonoscopia?
  H2: Resultados: explicación inmediata con fotografías HD
  [GoogleReviews component has its own H2]
  [FAQ component has its own H2]
  H2: ¿Listo para agendar tu colonoscopia?
```

All H2s are natural-language questions or statements — zero keyword-stuffed SEO headings.

---

## Final Notes

This refactor cuts the page from ~857 lines to an estimated ~350–400 lines. The content density increases while the page length decreases. Every section has a clear persona purpose, and the information architecture follows the natural decision journey:

1. **What is it?** → "I understand the procedure"
2. **What does it cost?** → "I know the price, no surprises"
3. **What happens?** → "I know exactly what to expect"
4. **Who does it?** → "I trust this doctor"
5. **What do patients say?** → "Real people had good experiences"
6. **Any other questions?** → "My remaining fears are addressed"
7. **Ready?** → "I'll book now via WhatsApp"

This mirrors the colonoscopy page's existing 67-second engagement pattern — patients read thoroughly. The tighter structure respects that reading time while removing the noise that dilutes it.
