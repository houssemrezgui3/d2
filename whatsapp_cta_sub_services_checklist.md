# WhatsApp CTA Integration for Sub-Service Pages Checklist

This checklist outlines the steps to integrate the rededisgned luxury `WhatsAppCta` component into sub-service detail pages (e.g. `/services/implants-dentaires/[subSlug]`).

---

## Section 1 — Component Integration in `app/services/[slug]/[subSlug]/page.tsx`

- [x] **1.1 Import Component**: Import `WhatsAppCta` from `@/components/WhatsAppCta` at the top of `app/services/[slug]/[subSlug]/page.tsx`.
- [x] **1.2 Render CTA**: Place `<WhatsAppCta serviceTitle={subService.title} />` directly below the main `<article className="prose ...">` element inside the container layout.

---

## Section 2 — Verification & Testing

- [ ] **2.1 Visual Verification**: Confirm that sub-service pages (e.g. `/services/implants-dentaires/implant-dentaire-titane`) render the luxury WhatsApp CTA card after the prose content.
- [ ] **2.2 Link & Parameter Verification**: Test clicking the WhatsApp button on a sub-service page to confirm it opens WhatsApp with pre-filled text containing the sub-service title (e.g., `...concernant : Implant Dentaire en Titane`).
- [ ] **2.3 Build Verification**: Run `npm run build` to ensure 0 TypeScript or Next.js build errors.
