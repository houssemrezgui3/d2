# Services Page — Horizontal Grid Redesign Checklist

## Goal
Replace the current vertical list / basic grid on `/services` with a **premium horizontal card grid**
(3 columns desktop · 2 columns tablet · 1 column mobile) where every service is displayed
**side-by-side**, not stacked in a list.

---

## Section 1 — CSS: Add `.services-grid` & `.service-card` Styles
**File**: `app/globals.css`

- [x] 1.1 Add `.services-grid` — `display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; align-items: stretch;`
- [x] 1.2 Add `.service-card` — `position: relative; background #FFFFFF; border 1px solid rgba(42,51,44,0.08); border-radius 8px; overflow hidden; display flex; flex-direction column; box-shadow; transition`
- [x] 1.3 Add `.service-card::before` — gold left-border accent bar (0 width by default, expands to 4px on hover via `::before` pseudo-element)
- [x] 1.4 Add `.service-card:hover` — `transform: translateY(-6px); box-shadow` deepens; `::before` width animates to `4px`
- [x] 1.5 Add `.service-card-num` — large gold Playfair Display number badge (`font-size: 3rem; color: var(--accent-color); opacity 0.25; font-weight 700`)
- [x] 1.6 Add `.service-card-body` — `padding: 2rem 2rem 1.5rem; flex: 1; display flex; flex-direction column`
- [x] 1.7 Add `.service-card-title` (scoped to `.service-card`) — Playfair Display, `1.4rem`, `var(--text-dark)`, `margin-bottom 0.75rem`
- [x] 1.8 Add `.service-card-desc` (scoped to `.service-card`) — `0.875rem`, `var(--text-muted)`, `line-height 1.75`, `flex: 1`
- [x] 1.9 Add `.service-card-cta` — gold text link `var(--accent-color)`, `font-size 0.8rem`, `letter-spacing 0.1em`, uppercase, `border-top 1px solid rgba(42,51,44,0.08); padding 1rem 2rem`; arrow animates right on hover
- [x] 1.10 Add responsive breakpoints:
  - `@media (max-width: 1024px)` → `grid-template-columns: repeat(2, 1fr)` (2 side-by-side on tablet)
  - `@media (max-width: 640px)` → `grid-template-columns: 1fr` (1 column on mobile)`

---

## Section 2 — JSX: Restructure `app/services/page.tsx`
**File**: `app/services/page.tsx`

- [x] 2.1 Replace outer grid `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">` with `<div className="services-grid">`
- [x] 2.2 Replace `<article className="seo-card ...">` with `<article className="service-card">`
- [x] 2.3 Remove the existing `<div className="seo-card-icon">` with its inline tooth SVG
- [x] 2.4 Add gold number badge at the top of each card using `index`:
  ```tsx
  <span className="service-card-num" aria-hidden="true">
    {String(index + 1).padStart(2, '0')}
  </span>
  ```
- [x] 2.5 Update `.map()` callback to include `index`: `.map((service, index) => (...))`
- [x] 2.6 Wrap title + description in `<div className="service-card-body">`
- [x] 2.7 Change `<h2 className="seo-card-title ...">` → `<h2 className="service-card-title">`
- [x] 2.8 Change `<p className="seo-card-desc ...">` → `<p className="service-card-desc">`
- [x] 2.9 Move `<Link>` outside `service-card-body`, apply `service-card-cta` class:
  ```tsx
  <Link href={`/services/${service.slug}`} className="service-card-cta">
    Voir les détails <span aria-hidden="true">→</span>
  </Link>
  ```

---

## Section 3 — Verification
- [ ] 3.1 Open `http://localhost:3000/services` — confirm 3 cards displayed side-by-side on desktop
- [ ] 3.2 Resize browser to ~900px — confirm 2 columns (tablet breakpoint)
- [ ] 3.3 Resize browser to ~500px — confirm 1 column (mobile breakpoint)
- [ ] 3.4 Hover each card — confirm gold left-bar animation + lift (`translateY(-6px)`)
- [ ] 3.5 Confirm number badges (01, 02, 03…) appear on each card
- [ ] 3.6 Confirm CTA arrow animates on hover
- [ ] 3.7 Confirm page header, gold-line divider, and hero text are unaffected
- [ ] 3.8 Confirm no regression on `/services/[slug]` or `/services/[slug]/[subSlug]` pages

---

## Notes
- Do **not** delete `.seo-card` or `.seo-cards` from `globals.css` — they are still used by `components/SeoBlock.tsx`
- New classes are intentionally namespaced as `.service-card*` (singular) vs `.seo-card*` to avoid collision
- The page `<header>` block in `page.tsx` requires **no changes**
