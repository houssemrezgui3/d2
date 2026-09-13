# Checklist: WhatsApp CTA Button After Service & Sub-Service Content

- [x] **1. Create / Verify WhatsApp CTA Component**
  - [x] Option A: Created reusable `components/WhatsAppCta.tsx` component with custom message, WhatsApp SVG icon, responsive layout, luxury/emerald styling, and direct link (`https://wa.me/21650149159`).

- [x] **2. Integrate CTA in Main Service Pages**
  - [x] Update `app/services/[slug]/page.tsx` to render the WhatsApp CTA section directly after `<article className="prose">`.
  - [x] Include dynamic context/title in CTA message if applicable (e.g., "Contacter le docteur via WhatsApp pour [Nom du Service]").

- [ ] **3. Integrate CTA in Sub-Service Pages**
  - [ ] Update `app/services/[slug]/[subSlug]/page.tsx` to render the WhatsApp CTA section directly after `<article className="prose">`.
  - [ ] Include dynamic context/title in CTA message if applicable (e.g., "Contacter le docteur via WhatsApp pour [Nom du Sub-Service]").

- [x] **4. Styling & Mobile Responsiveness**
  - [x] Ensure smooth hover effects, clear gold/green branding accents, shadow, and mobile responsiveness.
  - [x] Verify alignment with site design system (Playfair Display / Inter / Soft Cream / Gold accents).

- [ ] **5. Verification & Build Check**
  - [ ] Run `npm run build` to verify standard static page generation and compilation with no TypeScript or Next.js errors.
