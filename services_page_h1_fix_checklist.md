# Services Page H1 Visibility Fix Checklist

## Goal
Ensure the `<h1>` title (**"Nos Services Dentaires à Tunis"**) and header block on `/services` are fully visible and not hidden behind the fixed navigation header (`.header`).

---

## Section 1 — JSX: Fix Top Clearance in `app/services/page.tsx`
**File**: `app/services/page.tsx`

- [x] 1.1 Add explicit inline top padding `style={{ paddingTop: '160px' }}` to `<main className="min-h-screen pb-20">` to guarantee fixed header clearance.
- [x] 1.2 Verify header element hierarchy contains:
  - `<span className="seo-eyebrow">NOTRE EXPERTISE</span>`
  - `<h1 className="...">Nos Services Dentaires à Tunis</h1>`
  - `<span className="gold-line mx-auto mb-6"></span>`
  - `<p className="seo-subtext...">...</p>`

---

## Section 2 — Verification & Project Log
- [ ] 2.1 Test in browser at `http://localhost:3000/services` — confirm `<h1>` title and eyebrow are fully visible below the fixed header bar.
- [ ] 2.2 Verify detail routes (`/services/[slug]` and `/services/[slug]/[subSlug]`) also have `style={{ paddingTop: '160px' }}` clearance.
- [ ] 2.3 Update `PROJECT_CONTEXT.md` work log and open items.
