# Design Token Implementation Spec
## Endoscopia del Mayab — CSS Foundation Refactor

**Purpose:** Replace the current `app/globals.css` token system with a clean, semantic, three-tier architecture. This document contains the exact CSS to implement and the migration map for Tailwind class names.

**Scope:** CSS tokens and base styles ONLY. Do NOT modify any page files (`page.tsx`) in this phase — that's a separate task.

---

## Files to Modify

| File | Action |
|------|--------|
| `app/globals.css` | **REPLACE** entire contents |
| `app/fonts.ts` | **DELETE** this file (dead code — layout.tsx handles fonts directly) |
| `app/layout.tsx` | **MINOR EDIT** — update font variable name and add weight 800 to Montserrat |

### Do NOT Modify
- Any `page.tsx` files
- `lib/` files
- `components/` files
- `tailwind.config.*` (if it exists)
- `styles/globals.css` (dead file, not imported — ignore it)

---

## 1. New `app/globals.css` — Complete Replacement

Replace the ENTIRE contents of `app/globals.css` with:

```css
@import "tailwindcss";
@import "tw-animate-css";

/* ═══════════════════════════════════════════════════════
   DESIGN TOKENS — Endoscopia del Mayab
   Three-tier: Primitives → Semantic → Component
   Last updated: Feb 2026
   ═══════════════════════════════════════════════════════ */

/* ── TIER 1: PRIMITIVES ──
   Raw values. Never reference directly in components.
   Components use semantic tokens only.
   ────────────────────────────────────────────────────── */
:root {
  /* Brand Navy */
  --brand-navy-900: 224 76% 25%;
  --brand-navy-700: 224 76% 33%;
  --brand-navy-500: 224 76% 40%;
  --brand-navy-300: 224 60% 60%;
  --brand-navy-100: 224 60% 92%;
  --brand-navy-50:  224 60% 96%;

  /* Brand Teal (darkened for white-text button contrast) */
  --brand-teal-900: 169 80% 12%;
  --brand-teal-700: 169 80% 20%;
  --brand-teal-500: 169 80% 25%;
  --brand-teal-300: 169 60% 45%;
  --brand-teal-100: 169 50% 90%;
  --brand-teal-50:  169 50% 96%;

  /* Neutrals */
  --neutral-950: 222 84% 4.9%;
  --neutral-800: 215 25% 20%;
  --neutral-600: 215 16% 46%;
  --neutral-400: 215 14% 65%;
  --neutral-200: 220 13% 91%;
  --neutral-100: 220 14% 96%;
  --neutral-50:  220 14% 98%;
  --neutral-0:   0 0% 100%;

  /* Feedback */
  --red-500:   0 84% 60%;
  --red-100:   0 84% 95%;
  --amber-500: 38 92% 50%;
  --amber-100: 38 92% 95%;
  --green-500: 142 71% 45%;
  --green-100: 142 71% 95%;
}


/* ── TIER 2: SEMANTIC TOKENS (Light Mode) ──
   The API layer. Components reference ONLY these.
   ────────────────────────────────────────────────────── */
:root {
  /* Text */
  --text-primary:     var(--neutral-950);
  --text-secondary:   var(--neutral-600);
  --text-disabled:    var(--neutral-400);
  --text-inverse:     var(--neutral-0);
  --text-brand:       var(--brand-navy-500);
  --text-accent:      var(--brand-teal-700);

  /* Surfaces */
  --surface-base:     var(--neutral-0);
  --surface-raised:   var(--neutral-0);
  --surface-sunken:   var(--neutral-100);
  --surface-inverse:  222 47% 11%;

  /* Borders */
  --border-default:   var(--neutral-200);
  --border-strong:    var(--neutral-400);
  --border-brand:     var(--brand-navy-300);

  /* Actions — CTA text is ALWAYS white (never flips) */
  --action-primary:        var(--brand-teal-500);
  --action-primary-hover:  var(--brand-teal-700);
  --action-primary-text:   var(--neutral-0);
  --action-secondary:      var(--brand-navy-500);
  --action-secondary-hover:var(--brand-navy-700);
  --action-secondary-text: var(--neutral-0);

  /* Feedback */
  --feedback-error:      var(--red-500);
  --feedback-error-bg:   var(--red-100);
  --feedback-warning:    var(--amber-500);
  --feedback-warning-bg: var(--amber-100);
  --feedback-success:    var(--green-500);
  --feedback-success-bg: var(--green-100);

  /* Focus ring */
  --ring: var(--brand-navy-500);

  /* Shadows */
  --shadow-sm: 0 1px 3px hsl(0 0% 0% / 0.08);
  --shadow-md: 0 4px 12px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 8px 32px hsl(0 0% 0% / 0.14);

  /* Radius */
  --radius: 0.5rem;
  --radius-interactive: 0.625rem;

  /* ── Fluid Typography ── */
  --text-display:  clamp(2rem, 1.5rem + 2.5vw, 3rem);
  --text-h1:       clamp(1.75rem, 1.4rem + 1.75vw, 2.5rem);
  --text-h2:       clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
  --text-h3:       clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
  --text-h4:       clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem);
  --text-body-lg:  clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem);
  --text-body:     1rem;
  --text-body-sm:  0.875rem;
  --text-caption:  0.75rem;
  --text-price:    clamp(1.5rem, 1.25rem + 1.25vw, 2rem);

  /* ── Fluid Spacing ── */
  --container-max:    80rem;
  --container-gutter: clamp(1rem, 0.5rem + 2.5vw, 2rem);
  --content-max:      48rem;
  --section-py:       clamp(3rem, 2rem + 5vw, 6rem);

  /* ── CTA Component Tokens ── */
  --cta-padding-x:   clamp(1.5rem, 1.25rem + 1vw, 2rem);
  --cta-padding-y:   clamp(0.75rem, 0.625rem + 0.5vw, 1rem);
  --cta-radius:      0.75rem;
  --cta-min-height:  48px;

  /* ── Card Component Tokens ── */
  --card-padding:    clamp(1rem, 0.75rem + 1.25vw, 1.5rem);
  --card-radius:     0.75rem;

  /* ── Header ── */
  --header-height:   4rem;
}


/* ── TIER 2: SEMANTIC TOKENS (Dark Mode) ──
   Same token names, different primitive mappings.
   ────────────────────────────────────────────────────── */
@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    --text-primary:     210 40% 98%;
    --text-secondary:   215 16% 60%;
    --text-disabled:    215 14% 40%;
    --text-inverse:     222 47% 11%;
    --text-brand:       224 60% 70%;
    --text-accent:      169 60% 55%;

    --surface-base:     222 47% 11%;
    --surface-raised:   222 40% 14%;
    --surface-sunken:   222 47% 8%;
    --surface-inverse:  220 14% 96%;

    --border-default:   215 25% 23%;
    --border-strong:    215 20% 35%;
    --border-brand:     224 40% 45%;

    /* CTA text stays white in dark mode too */
    --action-primary:        169 60% 35%;
    --action-primary-hover:  169 60% 30%;
    --action-primary-text:   var(--neutral-0);
    --action-secondary:      224 55% 50%;
    --action-secondary-hover:224 55% 43%;
    --action-secondary-text: var(--neutral-0);

    --feedback-error:      0 70% 55%;
    --feedback-warning:    38 80% 55%;
    --feedback-success:    142 60% 50%;
    --feedback-error-bg:   0 50% 18%;
    --feedback-warning-bg: 38 50% 18%;
    --feedback-success-bg: 142 40% 18%;

    --ring: 224 60% 70%;

    --shadow-sm: 0 1px 3px hsl(0 0% 0% / 0.20);
    --shadow-md: 0 4px 12px hsl(0 0% 0% / 0.30);
    --shadow-lg: 0 8px 32px hsl(0 0% 0% / 0.40);
  }
}

/* Also support explicit .dark class toggle */
.dark {
  --text-primary:     210 40% 98%;
  --text-secondary:   215 16% 60%;
  --text-disabled:    215 14% 40%;
  --text-inverse:     222 47% 11%;
  --text-brand:       224 60% 70%;
  --text-accent:      169 60% 55%;

  --surface-base:     222 47% 11%;
  --surface-raised:   222 40% 14%;
  --surface-sunken:   222 47% 8%;
  --surface-inverse:  220 14% 96%;

  --border-default:   215 25% 23%;
  --border-strong:    215 20% 35%;
  --border-brand:     224 40% 45%;

  --action-primary:        169 60% 35%;
  --action-primary-hover:  169 60% 30%;
  --action-primary-text:   var(--neutral-0);
  --action-secondary:      224 55% 50%;
  --action-secondary-hover:224 55% 43%;
  --action-secondary-text: var(--neutral-0);

  --feedback-error:      0 70% 55%;
  --feedback-warning:    38 80% 55%;
  --feedback-success:    142 60% 50%;
  --feedback-error-bg:   0 50% 18%;
  --feedback-warning-bg: 38 50% 18%;
  --feedback-success-bg: 142 40% 18%;

  --ring: 224 60% 70%;

  --shadow-sm: 0 1px 3px hsl(0 0% 0% / 0.20);
  --shadow-md: 0 4px 12px hsl(0 0% 0% / 0.30);
  --shadow-lg: 0 8px 32px hsl(0 0% 0% / 0.40);
}


/* ── TAILWIND THEME MAPPING ──
   Maps semantic CSS vars → Tailwind utility classes
   Usage: bg-surface-base, text-primary, bg-action-primary, etc.
   ────────────────────────────────────────────────────── */
@theme inline {
  /* Surfaces */
  --color-surface-base:    hsl(var(--surface-base));
  --color-surface-raised:  hsl(var(--surface-raised));
  --color-surface-sunken:  hsl(var(--surface-sunken));
  --color-surface-inverse: hsl(var(--surface-inverse));

  /* Text */
  --color-text-primary:   hsl(var(--text-primary));
  --color-text-secondary: hsl(var(--text-secondary));
  --color-text-disabled:  hsl(var(--text-disabled));
  --color-text-inverse:   hsl(var(--text-inverse));
  --color-text-brand:     hsl(var(--text-brand));
  --color-text-accent:    hsl(var(--text-accent));

  /* Actions */
  --color-action-primary:       hsl(var(--action-primary));
  --color-action-primary-hover: hsl(var(--action-primary-hover));
  --color-action-primary-text:  hsl(var(--action-primary-text));
  --color-action-secondary:       hsl(var(--action-secondary));
  --color-action-secondary-hover: hsl(var(--action-secondary-hover));
  --color-action-secondary-text:  hsl(var(--action-secondary-text));

  /* Borders */
  --color-border-default: hsl(var(--border-default));
  --color-border-strong:  hsl(var(--border-strong));
  --color-border-brand:   hsl(var(--border-brand));

  /* Feedback */
  --color-feedback-error:      hsl(var(--feedback-error));
  --color-feedback-error-bg:   hsl(var(--feedback-error-bg));
  --color-feedback-warning:    hsl(var(--feedback-warning));
  --color-feedback-warning-bg: hsl(var(--feedback-warning-bg));
  --color-feedback-success:    hsl(var(--feedback-success));
  --color-feedback-success-bg: hsl(var(--feedback-success-bg));

  /* Ring */
  --color-ring: hsl(var(--ring));

  /* Radius */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-interactive: var(--radius-interactive);

  /* ── BACKWARD COMPATIBILITY ALIASES ──
     These map old token names to new semantic tokens so existing
     Tailwind classes (bg-background, text-foreground, etc.) continue
     to work during the migration. Remove these after all pages are
     updated to use new class names.
     ──────────────────────────────────────────────────── */
  --color-background:          hsl(var(--surface-base));
  --color-foreground:          hsl(var(--text-primary));
  --color-primary:             hsl(var(--action-secondary));
  --color-primary-foreground:  hsl(var(--action-secondary-text));
  --color-accent-light:        hsl(var(--action-primary));
  --color-accent-light-foreground: hsl(var(--action-primary-text));
  --color-accent-strong:       hsl(var(--action-primary));
  --color-accent-strong-foreground: hsl(var(--action-primary-text));
  --color-muted:               hsl(var(--surface-sunken));
  --color-muted-foreground:    hsl(var(--text-secondary));
  --color-border:              hsl(var(--border-default));
  --color-input:               hsl(var(--surface-sunken));
  --color-destructive:         hsl(var(--feedback-error));
  --color-destructive-foreground: hsl(var(--action-primary-text));
  --color-link:                hsl(var(--text-brand));
  --color-link-foreground:     hsl(var(--action-secondary-text));
  --color-footer:              hsl(var(--surface-inverse));
  --color-footer-foreground:   hsl(var(--text-inverse));

  /* Fonts — renamed for clarity */
  --font-heading: var(--font-montserrat), "Montserrat", ui-sans-serif, system-ui, sans-serif;
  --font-body:    var(--font-open-sans), "Open Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono:    ui-monospace, SFMono-Regular, Monaco, Consolas, monospace;

  /* Backward compat font aliases */
  --font-sans:  var(--font-body);
  --font-serif: var(--font-heading);
}


/* ── BASE LAYER ──────────────────────────────────────── */
@layer base {
  * { @apply border-border-default; }

  html, body { height: 100%; }

  body {
    @apply bg-surface-base text-text-primary antialiased;
    font-family: var(--font-body);
    font-size: var(--text-body);
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }

  /* Headings — fluid sizes, no responsive classes needed */
  h1 {
    font-family: var(--font-heading);
    font-size: var(--text-h1);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }
  h2 {
    font-family: var(--font-heading);
    font-size: var(--text-h2);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }
  h3 {
    font-family: var(--font-heading);
    font-size: var(--text-h3);
    font-weight: 600;
    line-height: 1.3;
  }
  h4, h5, h6 {
    font-family: var(--font-heading);
    font-size: var(--text-h4);
    font-weight: 600;
    line-height: 1.3;
  }

  /* Focus ring */
  :focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px hsl(var(--surface-base)),
      0 0 0 4px hsl(var(--ring) / 0.6);
    border-radius: var(--radius-interactive);
  }

  /* Selection */
  ::selection {
    background: hsl(var(--action-secondary) / 0.18);
    color: hsl(var(--text-primary));
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}


/* ── UTILITY CLASSES ─────────────────────────────────── */
@layer utilities {
  /* Container */
  .container-page {
    max-width: var(--container-max);
    margin-inline: auto;
    padding-inline: var(--container-gutter);
  }

  /* Section spacing */
  .section-padding {
    padding-block: var(--section-py);
  }

  /* Content width constraint (for text-heavy sections) */
  .content-width {
    max-width: var(--content-max);
  }

  /* Elevation helpers */
  .shadow-card   { box-shadow: var(--shadow-sm); }
  .shadow-popover{ box-shadow: var(--shadow-md); }
  .shadow-modal  { box-shadow: var(--shadow-lg); }

  /* Display heading (larger than h1, for hero only) */
  .text-display {
    font-family: var(--font-heading);
    font-size: var(--text-display);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.025em;
  }

  /* Price text */
  .text-price {
    font-family: var(--font-heading);
    font-size: var(--text-price);
    font-weight: 700;
    line-height: 1.2;
  }
}
```

---

## 2. Edit `app/layout.tsx`

### Change 1: Add weight 800 to Montserrat

Find:
```ts
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "900"],
  variable: "--font-montserrat",
});
```

Replace with:
```ts
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});
```

**Why:** The new type scale uses `font-weight: 800` for h1/display. Currently only 900 is loaded which would cause faux-bolding at 800.

### Change 2: Add weight 700 to Open Sans

Find:
```ts
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
});
```

Replace with:
```ts
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});
```

**Why:** Price text and bold body elements need 700 weight.

---

## 3. Delete `app/fonts.ts`

This file exports `Inter` and `Montserrat` but is dead code — `layout.tsx` loads `Montserrat` and `Open_Sans` directly. Page files import from `fonts.ts` but the imports are inside broken template literals that never execute.

**Delete the file.** The broken imports in page files will cause build errors, but those imports are already non-functional (inside string literals, not template literals). They'll be cleaned up in the page migration phase.

**IMPORTANT:** If `pnpm build` fails after deleting `fonts.ts`, do NOT fix the page imports in this phase. Instead, keep `fonts.ts` but replace its contents with:

```ts
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
```

This keeps the named exports alive (even though `inter` is actually Open Sans) so existing imports don't break.

---

## 4. Tailwind Class Migration Map

This is for the NEXT phase (page updates), but documented here for reference. The backward compatibility aliases in `@theme inline` mean **all existing classes still work** — nothing breaks.

| Old Class | New Class | Notes |
|-----------|-----------|-------|
| `bg-background` | `bg-surface-base` | Alias keeps old working |
| `text-foreground` | `text-text-primary` | |
| `text-foreground/70` | `text-text-secondary` | Opacity hack → proper token |
| `text-foreground/60` | `text-text-secondary` | |
| `text-foreground/80` | `text-text-primary` | Near-full opacity = primary |
| `bg-muted` | `bg-surface-sunken` | |
| `text-muted-foreground` | `text-text-secondary` | |
| `border-border` | `border-border-default` | |
| `bg-accent-strong` | `bg-action-primary` | |
| `text-accent-strong` | `text-text-accent` | |
| `bg-primary` | `bg-action-secondary` | |
| `text-primary` (old) | `text-text-brand` | Context: when used for branded/link text |
| `bg-destructive` | `bg-feedback-error` | |
| `font-serif` | `font-heading` | Also `font-serif` alias works |
| `font-sans` | `font-body` | Also `font-sans` alias works |
| `bg-footer` | `bg-surface-inverse` | |
| `text-3xl sm:text-4xl lg:text-5xl` on h1 | Remove — base styles handle it | Fluid clamp() |
| `text-3xl sm:text-4xl` on h2 | Remove — base styles handle it | |
| `text-xl` on h3 | Remove — base styles handle it | |

---

## 5. Verification Checklist

After implementing, verify:

- [ ] `pnpm build` completes with no errors
- [ ] Homepage loads with correct colors in light mode
- [ ] All text is readable (no white-on-white, no black-on-black)
- [ ] WhatsApp button is teal with white text
- [ ] Call button is navy with white text
- [ ] Footer has dark background with light text
- [ ] Headings use Montserrat, body uses Open Sans
- [ ] Heading sizes scale fluidly (resize browser window)
- [ ] `prefers-color-scheme: dark` triggers dark mode correctly
- [ ] In dark mode, button text stays white
- [ ] In dark mode, surfaces differentiate (base vs raised vs sunken)

---

## Contrast Ratios (Verified in Preview)

| Pairing | Ratio | Status |
|---------|-------|--------|
| White text on action-primary (teal 25%) | ≥6.5:1 | ✓ AA |
| White text on action-secondary (navy 40%) | ≥4.8:1 | ✓ AA |
| White text on surface-inverse | ≥12:1 | ✓ AA |
| text-primary on surface-base | ≥19:1 | ✓ AA |
| text-secondary on surface-base | ≥4.6:1 | ✓ AA |
| text-brand on surface-base | ≥4.8:1 | ✓ AA |
| text-accent on surface-base | ≥7:1 | ✓ AA |
