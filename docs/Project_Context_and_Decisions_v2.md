# Project Context & Design Decisions
## Endoscopia del Mayab — Website Redesign Project

**Last Updated:** February 9, 2026
**Related Documents:**
- `Endoscopia_del_Mayab_Persona_Guidelines.md` — 5 patient personas from Ads + Search Console data
- `GA4_Site_Behavior_Analysis.md` — On-site behavior analysis from Google Analytics
- `Local_SEO_Alignment_Analysis.md` — Full GBP ↔ Website entity alignment audit

---

## Business Profile

**Practice:** Endoscopia del Mayab
**Doctor:** Dr. Omar Quiroz (solo practitioner)
**Location:** Hospital Amerimed Mérida, Consultorio 517, Chichi Suárez, 97306 Mérida, Yuc.
**Staff:** Dr. Quiroz + anesthesiologist + nurse
**Domain:** www.endoscopiadelmayab.com

Dr. Quiroz also runs a separate bariatric/general surgery practice with its own website and GA4 property (Omar.Doctor). The two practices share the same doctor profile but serve different patient populations and should maintain distinct sites. The endoscopy practice legitimately includes "Retiro de Balón Gástrico" as it is an endoscopic procedure — balloon placement belongs to the bariatric practice, balloon removal belongs here.

---

## NAP+W Standard (Single Source of Truth)

Every digital touchpoint must use these exact formats. This is the foundation for local SEO entity verification — if NAP+W is inconsistent, all other optimization is undermined.

| Data Point | Canonical Format | Technical Format |
|------------|------------------|------------------|
| **Name** | Endoscopia del Mayab | Exact. No qualifiers. |
| **Address** | Hospital Amerimed Mérida, Consultorio 517, Chichi Suárez, 97306 Mérida, Yuc. | See PostalAddress schema below |
| **Phone** | 999 236 0153 | `tel:+529992360153` for links / `+52-999-236-0153` for schema |
| **WhatsApp** | 999 236 0153 | `https://wa.me/529992360153` |
| **Website** | https://www.endoscopiadelmayab.com | Canonical with www. All variants redirect here. |
| **Instagram** | @endoscopiadelmayab | `https://www.instagram.com/endoscopiadelmayab/` |
| **Hours** | 7:00 AM – 9:00 PM, Monday through Sunday | `07:00`–`21:00` in schema |

### Where NAP+W Must Appear Identically
- Google Business Profile (verified ✅)
- Website footer (every page, crawlable text — not image)
- Schema JSON-LD (every page)
- Doctoralia profile
- Any future directory listings

---

## Google Business Profile Configuration

### Profile Data (Verified February 9, 2026)

| Field | Value |
|-------|-------|
| **Business Name** | Endoscopia del Mayab |
| **Primary Category** | Endoscopist |
| **Secondary Category** | Medical office |
| **Phone** | 999 236 0153 |
| **Chat** | https://wa.me/529992360153 |
| **Website** | https://www.endoscopiadelmayab.com/ |
| **Services Link** | ⚠️ Currently `http://www.endoscopiadelmayab.com/servicios` — **must change** (see Actions below) |
| **Instagram** | https://www.instagram.com/endoscopiadelmayab/ |
| **Opening Date** | June 1, 2025 |
| **Hours** | 7:00 AM – 9:00 PM, every day |
| **Appointment Required** | Yes |
| **Languages** | English, Spanish |

### GBP Service Area
Mérida (primary) + surrounding municipalities: Umán, Conkal, Kanasín, Progreso, Dzityá, Cholul, Caucel, Komchen, Chuburná, Chicxulub, Col. Altabrisa, Montebello, Yucatán Country Club, Temozon Norte, Francisco de Montejo, Hacienda Chichi Suárez.

State-level: Yucatán, Mexico.

### GBP Services (27 total)

**Endoscopist category (22 services):**

| # | GBP Service Name | Website URL | From Price |
|---|-----------------|-------------|------------|
| 1 | Endoscopia | /endoscopia-merida | $4,500 |
| 2 | Colonoscopia | /colonoscopia-merida | $5,000 |
| 3 | Panendoscopia | /panendoscopia-merida | $4,500 |
| 4 | CPRE | /cpre-merida | $24,700 |
| 5 | Ligadura de Várices | /ligadura-varices-esofagicas-merida | $19,000 |
| 6 | Gastrostomía | /gastrostomia-endoscopica-peg-merida | $19,000 |
| 7 | Extracción de Cuerpos Extraños | /extraccion-cuerpos-extranos-endoscopia-merida | $9,500 |
| 8 | Dilatación Esofágica | /dilatacion-esofagica-merida | $15,000 |
| 9 | Esclerosis de Várices Gástricas | → redirect to /ligadura-varices-esofagicas-merida | $15,000 |
| 10 | Dilatación Biliar | /dilatacion-biliar-merida | $25,000 |
| 11 | Dilatación Colónica | /dilatacion-colonica-merida | $15,000 |
| 12 | Endoprótesis Esofágicas | /endoprotesis-esofagicas-merida | Quote |
| 13 | Endoprótesis Biliares | /endoprotesis-biliares-merida | Quote |
| 14 | Endoprótesis Duodenales | /endoprotesis-duodenales-merida | Quote |
| 15 | Endoprótesis Colónicas | /endoprotesis-colonicas-merida | Quote |
| 16 | Sutura Endoscópica | /sutura-endoscopica-merida | Quote |
| 17 | Disección Endoscópica Submucosa (ESD) | /diseccion-endoscopica-submucosa-esd-merida | Quote |
| 18 | Resección Endoscópica Mucosa (EMR) | /reseccion-endoscopica-mucosa-emr-merida | Quote |
| 19 | Retiro de Balón Gástrico | /retiro-balon-gastrico-merida | $11,900 |
| 20 | Coagulación con Plasma de Argón (APC) | /apc-coagulacion-plasma-argon-merida | $19,000 |
| 21 | Cierre de Fístulas por Clips Endoscópicos | /cierre-fistulas-clips-endoscopicos-merida | Quote |
| 22 | Ligadura de Hemorroides Internas | /ligadura-hemorroides-internas-merida | $17,000 |

**Medical office category (5 consultation services):**

| # | GBP Service Name | Website URL | Notes |
|---|-----------------|-------------|-------|
| 23 | Consulta de Urgencias Digestivas | /emergencias-digestivas-merida | Name alignment needed |
| 24 | Control Post-Endoscopia | /consultas-digestivas-merida (as H2 section) | **No dedicated page — add as section** |
| 25 | Valoración Pre-Endoscópica | /consultas-digestivas-merida (as H2 section) | **No dedicated page — add as section** |
| 26 | Chequeo Digestivo Preventivo | /consultas-digestivas-merida (as H2 section) | **No dedicated page — add as section** |
| 27 | Atención a Emergencias Gastrointestinales | /emergencias-digestivas-merida | Overlaps with #23 |

### GBP Description (Recommended Update)
**Current:** "Endoscopía del Mayab es una clínica especializada en endoscopía, colonoscopía y balón gástrico..."
**Problem:** "balón gástrico" implies balloon placement, which is the bariatric practice (Omar.Doctor).
**Recommended:**
> Endoscopia del Mayab es una clínica especializada en endoscopia, colonoscopia y CPRE, ubicada dentro del Hospital Amerimed en Mérida, Yucatán. Ofrecemos diagnóstico y tratamiento de enfermedades digestivas con tecnología avanzada y médico certificado. Precios transparentes desde $4,500 MXN. Atención directa con el Dr. Quiroz.

Changes: Replaced "balón gástrico" with "CPRE" (highest-margin procedure, worst-performing page — needs visibility). Added pricing signal and direct-doctor differentiator.

---

## Competitive Positioning

### Price Advantage
Endoscopia del Mayab is the **lowest-priced endoscopy provider in Mérida and likely the Yucatán Peninsula.** This isn't a budget-quality play — the low pricing is possible because Dr. Quiroz owns his equipment outright (paid in cash), and his hospital overhead is fixed at ~$20,000 MXN/month.

**Competitive price comparisons:**

| Procedure | Endoscopia del Mayab | Mérida Competitors | Cancún | Campeche |
|---|---|---|---|---|
| Endoscopia | Desde $4,500 MXN | ~$5,500–6,500 | — | — |
| Colonoscopia | Desde $5,000 MXN | ~$6,000–7,000 | — | $13,000 |
| CPRE | Desde $24,700 MXN | ~$34,000 | ~$40,000 | — |

The price gap is significant — $1,000–2,000 MXN cheaper than Mérida competitors on basic procedures, and $9,000–15,000 MXN cheaper on CPRE vs. competitors in Mérida and Cancún.

### Transparency Advantage
Most competitors do not publish pricing. Endoscopia del Mayab lists prices on the website with "Desde $X MXN" format. This directly serves Persona 2 (El Comparador de Precios) who bounces instantly from "contact us for pricing" pages. The pricing transparency is a core brand differentiator and should be amplified, not hidden.

### Accessibility Advantage
Dr. Quiroz personally answers WhatsApp messages and phone calls — patients communicate directly with the doctor, not a receptionist or call center. He works weekends and evenings when other providers are unavailable. This is a major trust signal for patients who are scared or have urgent needs (Persona 5: El Investigador, and emergency cases).

---

## Pricing Structure

### Fixed "Desde" Pricing (14 services)

| Service | URL Path | From Price |
|---|---|---|
| Endoscopia (EGD) | /endoscopia-merida | $4,500 MXN |
| Colonoscopia | /colonoscopia-merida | $5,000 MXN |
| Panendoscopia | /panendoscopia-merida | $4,500 MXN |
| CPRE | /cpre-merida | $24,700 MXN |
| Ligadura de hemorroides internas | /ligadura-hemorroides-internas-merida | $17,000 MXN |
| Ligadura de várices esofágicas | /ligadura-varices-esofagicas-merida | $19,000 MXN |
| Gastrostomía endoscópica (PEG) | /gastrostomia-endoscopica-peg-merida | $19,000 MXN |
| Extracción de cuerpos extraños | /extraccion-cuerpos-extranos-endoscopia-merida | $9,500 MXN |
| Dilatación esofágica | /dilatacion-esofagica-merida | $15,000 MXN |
| Esclerosis de várices gástricas | → /ligadura-varices-esofagicas-merida (redirect) | $15,000 MXN |
| Dilatación biliar | /dilatacion-biliar-merida | $25,000 MXN |
| Dilatación colónica | /dilatacion-colonica-merida | $15,000 MXN |
| Retiro de balón gástrico | /retiro-balon-gastrico-merida | $11,900 MXN |
| Coagulación con plasma de argón (APC) | /apc-coagulacion-plasma-argon-merida | $19,000 MXN |

### Quote-Only Services (8 services)

| Service | URL Path |
|---|---|
| Endoprótesis esofágicas | /endoprotesis-esofagicas-merida |
| Endoprótesis biliares | /endoprotesis-biliares-merida |
| Endoprótesis duodenales | /endoprotesis-duodenales-merida |
| Endoprótesis colónicas | /endoprotesis-colonicas-merida |
| Cierre de fístulas por clips endoscópicos | /cierre-fistulas-clips-endoscopicos-merida |
| Sutura endoscópica | /sutura-endoscopica-merida |
| Disección endoscópica submucosa (ESD) | /diseccion-endoscopica-submucosa-esd-merida |
| Resección endoscópica mucosa (EMR) | /reseccion-endoscopica-mucosa-emr-merida |

Quote-only services display "Precio bajo cotización" instead of a number. These are complex/variable procedures where pricing depends on the specific case.

### Pricing Notes
- All prices are base rates for scheduled weekday procedures (Monday–Friday)
- Weekend and holiday procedures may cost more
- Prices use "Desde" (starting from) format — actual cost may be higher depending on complexity
- The pricing.ts file already has helpers for formatting, schema markup, and display — reuse in redesign

### What's Included in the Price
This is a critical differentiator vs. budget labs and other providers:
- **Anesthesia:** Included
- **Biopsy collection:** Included — Dr. Quiroz charges a single flat fee regardless of how many biopsies are taken in a session (competitors charge per biopsy)
- **Biopsy readings (pathology):** NOT included — $1,200 MXN additional, performed by a separate pathology technician
- **Recovery room:** Included
- **Pre-procedure consultation:** Included

**Competitive advantage to highlight:** Most competitors charge per biopsy — if they take 3 biopsies, the patient pays 3x. Dr. Quiroz charges once, no matter how many are needed. This "no surprises" approach directly supports the transparent pricing brand positioning.

### Insurance
Dr. Quiroz works with all major insurance companies in the region. A specific list will be added to the site (likely on /contacto or as a section on the pricing page).

### Profit Context (for internal prioritization only — not for site)
- Endoscopia/Colonoscopia: ~$3,500 MXN profit per procedure
- CPRE: ~$15,000 MXN profit (requires hospital surgery room)
- Ligadura de várices: ~$15,000–17,000 MXN profit
- Hospital fixed cost: ~$20,000 MXN/month

This means CPRE and ligadura are the highest-margin services. The CPRE page's poor performance (worst CTR, worst conversion rate, worst engagement) is not just a UX problem — it's directly impacting revenue on the highest-margin procedure.

---

## Service Scope & Site Architecture

### Post-Redesign Sitemap (27 live pages + 1 new)

**Core Procedure Pages (high traffic)**
1. / — Homepage (serves as services routing + GBP landing page)
2. /endoscopia-merida — 2,788 GA4 sessions
3. /colonoscopia-merida — 1,436 GA4 sessions
4. /cpre-merida — 997 GA4 sessions
5. /panendoscopia-merida — 17 GA4 sessions

**Therapeutic Procedures**
6. /ligadura-varices-esofagicas-merida — 143 GA4 sessions
7. /ligadura-hemorroides-internas-merida — 20 sessions, 130s engagement, 25% conv
8. /gastrostomia-endoscopica-peg-merida
9. /extraccion-cuerpos-extranos-endoscopia-merida
10. /dilatacion-esofagica-merida
11. /dilatacion-biliar-merida
12. /dilatacion-colonica-merida

**Advanced/Specialty Procedures**
13. /endoprotesis-esofagicas-merida
14. /endoprotesis-biliares-merida
15. /endoprotesis-duodenales-merida
16. /endoprotesis-colonicas-merida
17. /cierre-fistulas-clips-endoscopicos-merida
18. /sutura-endoscopica-merida
19. /diseccion-endoscopica-submucosa-esd-merida
20. /reseccion-endoscopica-mucosa-emr-merida
21. /apc-coagulacion-plasma-argon-merida
22. /retiro-balon-gastrico-merida

**Service & Info Pages**
23. /emergencias-digestivas-merida
24. /consultas-digestivas-merida (expanded: add H2 sections for Control Post-Endoscopia, Valoración Pre-Endoscópica, Chequeo Digestivo Preventivo)
25. /dr-omar-quiroz
26. /contacto

**New Page**
27. **/precios** — Dedicated pricing page. #1 new page priority. Supported by 6,219 Search Console price-intent impressions with no page to land on.

### Redirects

| From | To | Type | When |
|------|----|------|------|
| /servicios | / | 301 | Launch day |
| /esclerosis-varices-gastricas-merida | /ligadura-varices-esofagicas-merida | 301 | Launch day |
| All non-www URLs | www equivalents | 301 | **Before redesign** |
| All http:// URLs | https:// equivalents | 301 | **Before redesign** |

### Note: Esclerosis de várices gástricas
This is the same procedure as ligadura de várices esofágicas — "esclerosis" is the colloquial name patients use. It has pricing ($15,000 MXN) in pricing.ts and is listed as a separate service in GBP. **Decision: Do not create a separate page.** Instead, ensure the ligadura-varices page includes "esclerosis de várices gástricas" as an H2 or FAQ entry for SEO capture, and redirect `/esclerosis-varices-gastricas-merida` to `/ligadura-varices-esofagicas-merida`.

---

## Local SEO & Entity Alignment

### Category Strategy

**Primary: Endoscopist** — The most specific GBP category available. Represents ~32% of local pack ranking signal.

**Secondary: Medical office** — Maps to the 5 consultation services.

**Alignment chain:**
```
GBP Primary: "Endoscopist"
  → Homepage H1: "Endoscopia y Colonoscopia en Mérida, Yucatán"
  → Homepage Title: "Endoscopia y Colonoscopia en Mérida | Desde $4,500 MXN | Endoscopia del Mayab"
  → Schema @type: MedicalClinic (medicalSpecialty: Gastroenterology)
```

The category maps to the practice type; individual procedure page H1s map to specific procedure names. The homepage bridges the gap.

### Title Tag & H1 Formulas

**Homepage:**
- Title: `Endoscopia y Colonoscopia en Mérida | Desde $4,500 MXN | Endoscopia del Mayab`
- H1: `Endoscopia y Colonoscopia en Mérida, Yucatán`

**Procedure pages:**
- Title: `[Procedure Name] en Mérida | Desde $X MXN | Endoscopia del Mayab`
- H1: `[Procedure Name] en Mérida`

**Doctor profile:**
- Title: `Dr. Omar Quiroz – Endoscopista en Mérida | Endoscopia del Mayab`
- H1: `Dr. Omar Quiroz – Endoscopista en Mérida`

**Pricing page:**
- Title: `Precios de Endoscopia y Colonoscopia en Mérida | Endoscopia del Mayab`
- H1: `Precios de Procedimientos Endoscópicos en Mérida`

### Schema Architecture

**Global @graph (every page):**
- `WebSite` → publisher links to Organization
- `Organization` → name, url, logo, sameAs (Instagram, Doctoralia)
- `MedicalClinic` → full NAP, geo coordinates, openingHours, hasOfferCatalog (all 27 services), areaServed, knowsAbout
- `Physician` (Dr. Omar Quiroz) → medicalSpecialty, worksFor → MedicalClinic, knowsAbout

**Per-procedure page (added to global):**
- `MedicalProcedure` → name, procedureType, bodyLocation, howPerformed, preparation, offers (price)
- `FAQPage` → question/answer pairs addressing Persona 5 fear-based queries

**Critical schema properties:**
- `@type`: `MedicalClinic` for the business (not generic `LocalBusiness`)
- `@type`: `Physician` for Dr. Quiroz
- `hasOfferCatalog`: Full 27-service catalog with URLs to dedicated pages
- `areaServed`: Mérida + Yucatán (mirrors GBP service area)
- `knowsAbout`: Wikipedia links to Endoscopy, Colonoscopy, ERCP, Gastroenterology (E-E-A-T signal)
- `sameAs`: Instagram, Doctoralia (entity verification)
- `geo`: Hospital Amerimed exact GPS coordinates (must match GBP pin)
- `openingHoursSpecification`: 07:00–21:00, every day (must match GBP)

### Canonical URL Enforcement

**Problem found:** Search Console shows both www and non-www versions indexed separately, plus HTTP variants. Total: ~53 clicks and ~2,546 impressions (~8.5%) leaked to non-canonical URLs.

**Required (server-level, before redesign):**
1. All `http://` → `https://` 301 redirect
2. All `endoscopiadelmayab.com` (non-www) → `www.endoscopiadelmayab.com` 301 redirect
3. `<link rel="canonical" href="https://www.endoscopiadelmayab.com/[path]">` on every page
4. GBP services link: change from `http://www.endoscopiadelmayab.com/servicios` to `https://www.endoscopiadelmayab.com/`

### Homepage as GBP Landing Page

The homepage serves dual duty: brand homepage AND the GBP website landing page. This means it must:
1. Confirm entity identity immediately ("Endoscopia del Mayab — Mérida, Yucatán")
2. Show the full service catalog with pricing signals (Persona 2 from GBP clicks)
3. Provide WhatsApp CTA above the fold (Persona 1 and 4)
4. Display NAP in crawlable footer text (matching GBP exactly)
5. Embed or link to Google Map (GBP ↔ website bridge)

The homepage IS the services page. `/servicios` redirects here after redesign.

### Review Strategy

**Why it matters:** For health services, reviews (33.4%) + review keywords (25.2%) = 58.6% of local pack ranking algorithm.

**Current:** 52 five-star reviews, zero negative. Strong foundation.

**Actions:**
1. Audit existing 52 reviews for procedure-specific keyword mentions
2. Respond to every review within 48 hours, naturally mentioning the procedure + "Mérida"
3. Display procedure-specific review clusters on corresponding landing pages
4. Post-procedure WhatsApp follow-up includes direct Google review link

---

## Geographic Strategy

### Primary Market: Mérida Only
- All paid advertising targets Mérida exclusively
- The clinic operates only at Hospital Amerimed in Chichi Suárez, Mérida
- No satellite locations, no traveling to other cities
- GBP service area: Mérida metro + surrounding municipalities

### Organic Peninsula Reach (No Ad Spend)
- Patients do come from Cancún, Playa del Carmen, Campeche, and Ciudad del Carmen
- Search Console shows 1,850+ impressions from Playa del Carmen queries (especially CPRE) with zero clicks
- Google Ads budget was being wasted on these distant locations — now restricted to Mérida
- **Strategy:** Do NOT spend ad budget outside Mérida, but allow organic search to capture peninsula patients naturally
- If organic content mentions "Mérida, Yucatán" consistently, patients from other cities who find the site organically will self-select based on willingness to travel
- The price advantage is strong enough to justify travel: CPRE at $24,700 vs $40,000 in Cancún saves the patient $15,000+ — more than enough to cover the trip

### No English Content (For Now)
- Search Console shows 1,429 US impressions but only 3 clicks
- GA4 from Dr. Quiroz's other site showed English content was entirely bot traffic
- Not worth investing in until organic Spanish performance is optimized

---

## Booking Flow

### Primary CTA: WhatsApp
- Every page features a WhatsApp button as the main call-to-action
- Clicking opens WhatsApp with a pre-filled message to Dr. Quiroz's number: https://wa.me/529992360153
- Dr. Quiroz personally reads and responds to every message
- This is the #1 conversion action — design must make this button prominent, sticky on mobile, and above the fold

### Secondary CTA: Phone Call
- Direct phone number to Dr. Quiroz: 999 236 0153
- Should use `tel:+529992360153` links for mobile tap-to-call
- GA4 shows only 10 phone_click events in 6 months — either tracking is broken or the number isn't prominent enough

### No Online Booking System
- There is no form-based appointment scheduling
- No Doctoralia booking integration on the site
- The entire booking funnel is: Search → Land on page → Tap WhatsApp → Chat with Dr. Quiroz → Schedule
- Design implication: Don't add friction. No forms, no "request a callback," no multi-step booking. WhatsApp IS the booking system.

---

## Brand Voice & Content Tone

### Patient Profile
- ~80% are first-time patients who have never had an endoscopic procedure
- They ask basic, repetitive questions: "How much does it cost?", "When is he available?", "Does it hurt?"
- Communication is casual — not clinical, not formal
- Many are searching on behalf of a family member (parent, spouse)
- Fear and uncertainty are the dominant emotions for first-timers

### Voice Guidelines
- **Lead with warmth, not authority.** Patients are scared. The tone should be reassuring, human, and direct — like a friend who happens to be a doctor.
- **Use simple Spanish.** Avoid clinical jargon in headlines and CTAs. Use procedure names in H1s for SEO, but follow immediately with plain-language explanations. "CPRE" in the H1, "Un procedimiento para desbloquear los conductos biliares" in the subtitle.
- **Answer the real questions.** Every procedure page should address the top 3 patient concerns within the first scroll: "¿Qué es?", "¿Cuánto cuesta?", "¿Duele?"
- **Don't oversell.** Persona 5 (El Investigador) needs trust, not a sales pitch. Educational content should be genuinely helpful. Soft CTAs only: "Si estás listo para agendar, el Dr. Quiroz te puede orientar."
- **Emphasize the human connection.** "Cuando nos escribes, te contesta el Dr. Quiroz directamente" — this is a powerful differentiator vs. clinics where you talk to a receptionist.
- **Price-forward.** Don't bury the price. Show "Desde $X MXN" in the hero section of every procedure page. The data shows patients bounce when they can't find pricing. Transparency is the brand.

### Content Pattern for Procedure Pages
1. **H1:** `[Procedure Name] en Mérida` (exact match for SEO + GBP alignment)
2. **Subtitle:** One-sentence plain-language definition
3. **Hero section:** "Desde $X MXN" + WhatsApp CTA + Hospital Amerimed, Mérida
4. **First fold:** What it is, how long it takes, does it require sedation
5. **Second section:** Preparation instructions, what to expect
6. **Third section:** Dr. Quiroz credentials snippet + trust signals
7. **FAQ section:** Address fear-based queries (¿Duele? ¿Es peligroso? ¿Cuánto dura la recuperación?) — uses FAQPage schema
8. **Bottom CTA:** Soft close with WhatsApp button

---

## Event Tracking Requirements (For Redesign)

The current GA4 setup needs fixes. The new site should launch with clean tracking:

| Event | Trigger | Notes |
|---|---|---|
| whatsapp_click | Actual click on WhatsApp CTA button | Currently may be misconfigured — verify fires on click, not page load |
| phone_click | Click on tel: link | Only 10 events in 6 months — likely broken or number not prominent |
| scroll_depth | 25%, 50%, 75%, 90% thresholds | Need to understand how far patients read |
| page_view | Standard | Working correctly |
| cta_view | WhatsApp button enters viewport | Measures if patients even see the CTA |
| pricing_view | User scrolls to pricing section | Measures if pricing content is being reached |
| faq_expand | User clicks an FAQ accordion item | Measures which questions matter most |

---

## Key Decisions Made

| Decision | Rationale |
|---|---|
| Mérida-only ad targeting | Peninsula patients wasted ad budget; organic will capture them naturally |
| Homepage = services page + GBP landing | Single-location business links GBP → homepage; homepage redesigned as services-routing engine |
| /servicios → / redirect | Homepage absorbs services page function; eliminates duplicate entity signal |
| WhatsApp as sole booking CTA | No forms, no Doctoralia integration — keep funnel simple |
| Price-forward design | Show "Desde $X" in hero of every procedure page; transparency is the brand |
| Spanish only (for now) | English content showed no real engagement; revisit after organic is optimized |
| Solo practitioner positioning | Dr. Quiroz is the brand — personal, accessible, always available |
| Mobile-first design | 82–94% mobile traffic across all data sources |
| MedicalClinic schema @type | Most specific available; "Endoscopist" has no schema.org equivalent |
| Retiro de Balón Gástrico stays | Legitimate endoscopic procedure; balloon placement is Omar.Doctor, removal is here |
| Consultation services as H2 sections | 3 GBP consultation services (Control Post-Endoscopia, Valoración Pre-Endoscópica, Chequeo Digestivo Preventivo) added as H2s on /consultas-digestivas-merida, not separate thin pages |
| Canonical: www with HTTPS | All non-www and HTTP variants 301 redirect to canonical |

---

## Open Items

### Critical (Before Redesign)
1. **Fix canonical URL redirects** — Non-www and HTTP variants are indexed separately; 8.5% of organic impressions split across duplicate URLs
2. **Fix GBP services link** — Currently `http://` (not HTTPS); change to `https://www.endoscopiadelmayab.com/servicios` now, then to `/` after redesign

### High Priority (This Week)
3. **Update GBP description** — Remove "balón gástrico" reference; add CPRE, pricing signal, and direct-doctor differentiator
4. **Get Hospital Amerimed GPS coordinates** — Required for schema `geo` property; must match GBP pin exactly
5. **Get Doctoralia profile URL** — Required for schema `sameAs` property
6. **Verify all procedure page H1 tags** — Must follow `[Procedure Name] en Mérida` format for GBP alignment

### Medium Priority
7. **Audit 52 Google reviews for procedure keywords** — Health services ranking depends 58.6% on reviews + review keywords
8. **Insurance partners list** — Dr. Quiroz works with all major insurers; specific list to be provided and added to site

### Resolved ✅
- ~~Current site visual audit~~
- ~~Google Business Profile status~~ — ✅ Claimed, verified, full data documented above
- ~~What's included in the price?~~ — ✅ Documented (anesthesia, biopsy collection, recovery, consultation included; pathology readings $1,200 extra)
- ~~Patient testimonials/reviews~~ — ✅ 52 five-star Google reviews, zero negative
- ~~GBP services link target~~ — ✅ Decision: homepage (after redesign)
- ~~Extracción price discrepancy~~ — ✅ Correct price is $9,500 MXN
- ~~Address accent: "Chichi" vs "Chichí"~~ — ✅ Correct: Chichi Suárez (no accent)
- ~~Balloon gastric service scope~~ — ✅ Retiro (removal) belongs on this site; placement is Omar.Doctor

---

*Compiled from stakeholder interview responses + Google Analytics + Google Ads + Search Console + Google Business Profile data*
*Period: August 2025 – February 2026*
*Local SEO alignment audit: February 9, 2026*
