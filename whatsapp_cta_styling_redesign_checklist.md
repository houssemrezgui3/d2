# Checklist: WhatsApp CTA Full Visual Redesign (Vanilla CSS)

## Root Cause
The project uses Vanilla CSS with CSS custom properties (`app/globals.css`).
The `WhatsAppCta.tsx` component was built with Tailwind utility classes (`bg-gradient-to-br`, `p-8`, `rounded-2xl`, `inline-flex`, etc.) which are **not processed** by the build pipeline, resulting in a completely unstyled, broken layout.

---

## Section 1 — Add CSS Rules to `app/globals.css`

- [x] **1.1 Card Container** — `.whatsapp-cta-card`
  - [x] Background: soft cream gradient (`#FAF9F5` → `#FDFBF7`)
  - [x] Border: `1px solid rgba(195, 164, 105, 0.25)` (champagne gold)
  - [x] Box shadow: `0 10px 40px rgba(42, 51, 44, 0.09)`
  - [x] Border radius: `16px`
  - [x] Padding: `3rem 2.5rem`
  - [x] Text-align: center
  - [x] Margin: `3rem 0`

- [x] **1.2 Icon Wrapper** — `.whatsapp-cta-icon`
  - [x] Display: `inline-flex`, centered
  - [x] Width & height: `64px`
  - [x] Border radius: `50%`
  - [x] Background: `rgba(37, 211, 102, 0.10)`
  - [x] Color: `#25D366`
  - [x] Margin-bottom: `1.25rem`

- [x] **1.3 Title** — `.whatsapp-cta-title`
  - [x] Font-family: `var(--font-serif)` (Playfair Display)
  - [x] Font-size: `1.6rem`
  - [x] Color: `var(--text-dark)`
  - [x] Margin-bottom: `0.75rem`
  - [x] Font-weight: `400`

- [x] **1.4 Description** — `.whatsapp-cta-desc`
  - [x] Color: `var(--text-muted)`
  - [x] Font-size: `1rem`
  - [x] Line-height: `1.7`
  - [x] Max-width: `560px`
  - [x] Margin: `0 auto 1.75rem`

- [x] **1.5 WhatsApp Button** — `.whatsapp-cta-btn`
  - [x] Display: `inline-flex`, `align-items: center`, `gap: 10px`
  - [x] Padding: `14px 36px`
  - [x] Background: `#25D366`
  - [x] Color: `#FFFFFF`
  - [x] Font-family: `var(--font-sans)`
  - [x] Font-size: `1rem`
  - [x] Font-weight: `500`
  - [x] Border-radius: `999px` (pill)
  - [x] Box-shadow: `0 4px 20px rgba(37, 211, 102, 0.35)`
  - [x] Transition: `background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease`
  - [x] Hover: darken to `#1ebc5b`, `transform: translateY(-2px)`, stronger shadow

- [x] **1.6 Mobile Responsive (`max-width: 768px`)**
  - [x] `.whatsapp-cta-card` padding reduced to `2rem 1.25rem`
  - [x] `.whatsapp-cta-title` font-size reduced to `1.35rem`

---

## Section 2 — Refactor `components/WhatsAppCta.tsx`

- [x] **2.1** Strip all Tailwind utility classes from JSX elements
- [x] **2.2** Replace `<section className="...tailwind...">` with `<section className="whatsapp-cta-card">`
- [x] **2.3** Replace icon wrapper `<div className="...tailwind...">` with `<div className="whatsapp-cta-icon">`
- [x] **2.4** Replace `<h3 className="...tailwind...">` with `<h3 className="whatsapp-cta-title">`
- [x] **2.5** Replace `<p className="...tailwind...">` with `<p className="whatsapp-cta-desc">`
- [x] **2.6** Replace `<a className="...tailwind...">` with `<a className="whatsapp-cta-btn">`
- [x] **2.7** Keep `serviceTitle` prop and dynamic `wa.me` URL generation unchanged

---

## Section 3 — Verification

- [ ] **3.1** Visually verify the CTA renders as a styled card with icon, heading, body text, and pill button
- [ ] **3.2** Run `npm run build` and confirm 0 TypeScript or Next.js compilation errors
