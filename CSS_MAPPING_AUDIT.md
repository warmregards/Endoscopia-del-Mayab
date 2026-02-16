# CSS Mapping Audit: page.tsx → globals.css

## ✅ WORKING — Already Mapped Correctly

### Layout System
```tsx
<div className="container-page section-padding">
```
✅ Both defined in globals.css utilities layer

### Core Color Classes
| Class Used | Status | CSS Source |
|------------|--------|------------|
| `bg-background` | ✅ Working | `--color-background` in @theme inline |
| `bg-muted` | ✅ Working | `--color-muted` in @theme inline |
| `bg-card` | ✅ Working | `--color-card` in @theme inline |
| `bg-accent-light` | ✅ Working | `--color-accent-light` in @theme inline |
| `bg-primary` | ✅ Working | `--color-primary` in @theme inline |
| `text-foreground` | ✅ Working | `--color-foreground` in @theme inline |
| `text-muted-foreground` | ✅ Working | `--color-muted-foreground` in @theme inline |
| `text-primary` | ✅ Working | `--color-primary` in @theme inline |
| `text-text-accent` | ✅ Working | `--color-text-accent` in @theme inline |
| `text-text-inverse` | ✅ Working | `--color-text-inverse` in @theme inline |
| `border-border` | ✅ Working | `--color-border` in @theme inline |
| `border-accent/20` | ✅ Working | HSL triplets support opacity |
| `text-accent` | ✅ Working | `--color-accent` in @theme inline |

### Typography
```tsx
className="font-serif font-bold tracking-tight"
```
✅ All working — `font-serif` maps to Montserrat via CSS variables

---

## ❌ MISSING — Need to Add to globals.css

### 1. Star Rating Colors (Line 62)
```tsx
<Star className="h-4 w-4 fill-feedback-warning text-feedback-warning" />
```
**Problem:** `feedback-warning` is NOT defined in @theme inline

**Fix Needed:** Add to @theme inline:
```css
--color-feedback-warning: hsl(var(--clinical-amber));
```

### 2. Red Color Scale (Emergency Section, Line 376-402)
```tsx
<section className="bg-red-50 border-y border-red-200">
  <h2 className="text-red-900">¿Emergencia digestiva?</h2>
  <p className="text-red-800">Sangrado, obstrucción...</p>
  <button className="bg-red-600 hover:bg-red-700">
  <CallButton className="border-red-300 text-red-700 hover:bg-red-100" />
```

**Problem:** Red color scale NOT in @theme inline (only `--clinical-red: 0 84% 60%`)

**Fix Needed:** Add full red scale:
```css
--color-red-50: 0 86% 97%;
--color-red-100: 0 93% 94%;
--color-red-200: 0 96% 89%;
--color-red-300: 0 94% 82%;
--color-red-600: 0 84% 60%;
--color-red-700: 0 73% 50%;
--color-red-800: 0 70% 35%;
--color-red-900: 0 63% 31%;
```

### 3. Amber Badge (Line 330)
```tsx
<span className="bg-amber-500/10 text-amber-700 border border-amber-500/20">
  Cotización
</span>
```

**Problem:** Amber scale NOT in @theme inline (only base `--clinical-amber`)

**Fix Needed:** Add amber utilities:
```css
--color-amber-500: hsl(var(--clinical-amber));
--color-amber-700: 36 77% 35%;
```

### 4. Green Color (For Check Icons, Line 155, 243)
```tsx
<Check className="h-3 w-3 text-accent" />
```
**Status:** Currently uses `text-accent` (teal) — works but semantically should be green

**Optional Fix:** Add green utilities:
```css
--color-green-50: 142 71% 97%;
--color-green-700: hsl(var(--clinical-green));
```

---

## 🎯 RECOMMENDATIONS

### Critical (Must Fix)
1. **Add red color scale** — Emergency section will look broken without it
2. **Add feedback-warning** — Star ratings won't display correctly

### High Priority (Should Fix)
3. **Add amber utilities** — Badge won't style properly
4. **Add component utilities** — Reduce repetition in page.tsx

### Nice to Have (Optional)
5. **Refactor repeated patterns** into utility classes

---

## 🔧 PROPOSED CSS ADDITIONS

Add these to your `@theme inline` block in globals.css:

```css
@theme inline {
  /* ... existing colors ... */

  /* Red scale (for emergency sections) */
  --color-red-50: 0 86% 97%;
  --color-red-100: 0 93% 94%;
  --color-red-200: 0 96% 89%;
  --color-red-300: 0 94% 82%;
  --color-red-600: 0 84% 60%;
  --color-red-700: 0 73% 50%;
  --color-red-800: 0 70% 35%;
  --color-red-900: 0 63% 31%;

  /* Amber scale (for warning badges) */
  --color-amber-500: hsl(var(--clinical-amber));
  --color-amber-700: 36 77% 35%;

  /* Feedback colors (for ratings/status) */
  --color-feedback-warning: hsl(var(--clinical-amber));
  --color-feedback-success: hsl(var(--clinical-green));
  --color-feedback-error: hsl(var(--clinical-red));

  /* Green scale (optional, for success states) */
  --color-green-50: 142 71% 97%;
  --color-green-700: hsl(var(--clinical-green));
}
```

---

## 📦 SUGGESTED UTILITY CLASSES

Add to `@layer utilities` to reduce repetition in components:

```css
@layer utilities {
  /* Procedure card (used 3 times) */
  .procedure-card {
    @apply bg-card rounded-xl border border-border shadow-sm p-6;
    @apply hover:shadow-md hover:border-accent/30 transition-all;
  }

  /* Service row (used 20+ times) */
  .service-row {
    @apply flex flex-col sm:flex-row sm:justify-between sm:items-center;
    @apply px-4 py-4 bg-card hover:bg-muted/50 transition-colors;
    @apply border-l-2 border-l-transparent hover:border-l-accent;
  }

  /* Popular badge (line 138) */
  .badge-popular {
    @apply absolute -top-2.5 left-4 inline-flex items-center;
    @apply text-[11px] font-bold uppercase tracking-wide;
    @apply px-2.5 py-0.5 rounded-full bg-primary text-white;
  }

  /* Star rating container */
  .rating-stars {
    @apply flex gap-0.5;
  }

  /* Credential chip (line 181) */
  .credential-chip {
    @apply inline-flex items-center gap-1.5 text-xs sm:text-sm;
    @apply font-medium text-primary;
  }
}
```

---

## 🚨 BREAKING ISSUES (Must Fix Immediately)

### Issue #1: Star Ratings Won't Display
**Location:** Line 62
**Problem:** `fill-feedback-warning text-feedback-warning` → class doesn't exist
**Impact:** Stars will be black/default color instead of gold/yellow
**Fix:** Add `--color-feedback-warning` to @theme inline

### Issue #2: Emergency Section Styling Broken
**Location:** Lines 376-402
**Problem:** All `red-*` utilities missing except base red
**Impact:** Emergency banner will have unstyled/broken appearance
**Fix:** Add full red scale to @theme inline

### Issue #3: Amber Badge Unstyled
**Location:** Line 330-332
**Problem:** `amber-500/10`, `amber-700`, `amber-500/20` → classes don't exist
**Impact:** "Cotización" badge won't have proper styling
**Fix:** Add amber utilities to @theme inline

---

## 📊 COVERAGE SUMMARY

| Category | Total Classes | Mapped | Missing | % Coverage |
|----------|--------------|--------|---------|------------|
| Layout | 2 | 2 | 0 | 100% |
| Core Colors | 12 | 12 | 0 | 100% |
| Typography | 8 | 8 | 0 | 100% |
| State Colors | 15 | 3 | 12 | 20% ⚠️ |
| Utilities | 20+ | 20+ | 0 | 100% |
| **TOTAL** | **57+** | **45** | **12** | **79%** |

---

## ✨ NEXT STEPS

1. **Add missing color scales** to @theme inline (red, amber, feedback)
2. **Test star ratings** — verify gold/yellow color displays
3. **Test emergency section** — verify all red shades work
4. **Optional:** Add utility classes to reduce code repetition
5. **Run build** — verify Tailwind compiles all classes

---

## 💡 BONUS OPTIMIZATION

### Current Code (Repetitive):
```tsx
<Link className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 py-4 bg-card hover:bg-muted/50 transition-colors border-l-2 border-l-transparent hover:border-l-accent">
```

### With Utility Class:
```tsx
<Link className="service-row">
```

**Savings:** 20+ instances → ~800 characters removed, more maintainable
