# Checklist: Service Detail Sub-Services Layout Reordering

This checklist outlines the plan to reorder the layout on service detail pages (such as `/services/implants-dentaires` in [`app/services/[slug]/page.tsx`](file:///c:/Users/dell/d2/app/services/%5Bslug%5D/page.tsx)), ensuring that the **Sub-Services & Specialized Care section** (`Sous-services & Prestations Spécialisées`) is displayed **above/before** the main article content section.

---

## 1. File Inspection & Structure Analysis
- [x] Inspect [`app/services/[slug]/page.tsx`](file:///c:/Users/dell/d2/app/services/%5Bslug%5D/page.tsx) JSX structure:
  - Header & Intro (`<header>...</header>`)
  - Sub-services Section (`{subServices.length > 0 && <section>...</section>}`)
  - Main Article Content (`<article className="prose...">...</article>`)

---

## 2. Reordering Layout Components
- [x] Move the `{subServices.length > 0 && <section>...</section>}` block directly above the `<article className="prose ...">` block.
- [x] Adjust vertical spacing (`mb-12`, `mb-16`, `pb-8`, `border-b`) between header, sub-services grid, and main prose content to maintain visual aesthetics.
- [x] Verify sub-service cards and details links (e.g. for `implants-dentaires`) function correctly in the new position.

---

## 3. Verification & Work Log Update
- [x] Test Next.js build compilation (`npm run build` or `npx next build`).
- [x] Update [`PROJECT_CONTEXT.md`](file:///c:/Users/dell/d2/PROJECT_CONTEXT.md) Work Log and Open Items sections.
