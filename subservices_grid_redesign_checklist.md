# Sub-Services Grid Layout Redesign Checklist

This checklist outlines the plan to refactor the Sub-Services layout on main service detail pages (`app/services/[slug]/page.tsx`) so that sub-services are displayed side-by-side in a multi-column grid (`.services-grid` / `.service-card`) identical to the main `/services` page.

---

## 1. JSX Structure Refactoring in `app/services/[slug]/page.tsx`
- [x] Replace `grid-cols-1 md:grid-cols-2 gap-6` in the sub-services section of `app/services/[slug]/page.tsx` with the `.services-grid` container class (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`).
- [x] Replace `seo-card` styling with `.service-card` cards.
- [x] Add the luxury tooth/lightbulb icon, title, description, and gold CTA button (`VOIR LES DÉTAILS →`) inside each sub-service card.

---

## 2. Layout & Responsive Verification
- [ ] Verify that sub-services render 3 cards per row on large screens (`lg:grid-cols-3`), 2 per row on medium screens (`md:grid-cols-2`), and 1 per row on mobile screens (`grid-cols-1`).
- [ ] Confirm hover animations (gold left border, card lift, arrow shift) match the main `/services` page cards exactly.
