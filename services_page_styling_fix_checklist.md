# Services Page Styling & Layout Fix Checklist

Checklist to fix the design mismatch, missing top padding (overlap with fixed header), and styling on the `/services` index page and dynamic detail pages (`/services/[slug]` and `/services/[slug]/[subSlug]`).

---

## 1. Header Margin & Layout Spacing Fix
- [x] **Add Fixed Header Clearance**:
  - Update `app/services/page.tsx`, `app/services/[slug]/page.tsx`, and `app/services/[slug]/[subSlug]/page.tsx` top container padding from `py-16` to `pt-32 pb-16` so the page title and content are not hidden behind the fixed header (`.header` is 100px fixed height).

---

## 2. Match Site Design System & Theme Palette
- [x] **Replace Dark Slate Theme with Cream & Gold Theme**:
  - Replace dark Tailwind classes (`bg-slate-950`, `text-slate-100`, `bg-slate-900/60`, `border-slate-800`, `text-teal-400`) with the site's design tokens defined in `globals.css`:
    - **Background**: Soft Cream (`var(--primary-bg)` / `#FAF9F5`)
    - **Card Background**: White (`#FFFFFF`) with subtle border (`rgba(42, 51, 44, 0.08)`) and soft shadow (`0 4px 20px rgba(42, 51, 44, 0.07)`)
    - **Headings**: Serif font (`Playfair Display`, `var(--font-serif)`) in Soft Charcoal Sage (`#2A332C`)
    - **Accent / Links**: Warm Champagne Gold (`var(--accent-color)` / `#C3A469`) with elegant hover states
    - **Body / Descriptions**: Muted Charcoal Sage (`var(--text-muted)`)

---

## 3. Services Index Grid Layout (`app/services/page.tsx`)
- [x] **Refactor Index Page Layout**:
  - Align container width to site standard (`max-width: 1200px` / `container` class).
  - Update service cards to feature gold accent icons, Playfair Display titles, muted descriptions, and styled gold link buttons ("Voir les détails →").

---

## 4. Service & Sub-Service Detail Pages (`app/services/[slug]`)
- [x] **Refactor Detail Pages Layout**:
  - Apply cream background, gold breadcrumb navigation, Playfair Display headings, and structured card grid for sub-services.
  - Fix typography styles inside `prose` container to match the light luxury theme.

---

## 5. Verification & Testing
- [ ] Test `/services` in browser to ensure clean header clearance and visual alignment with homepage design.
- [ ] Test dynamic routes `/services/[slug]` and `/services/[slug]/[subSlug]`.
