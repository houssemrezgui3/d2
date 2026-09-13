# Checklist: Add MedicalProcedure Schema to Dynamic Service Pages

## Overview
This checklist outlines the implementation plan for adding `MedicalProcedure` JSON-LD structured data to dynamic service (`app/services/[slug]/page.tsx`) and sub-service (`app/services/[slug]/[subSlug]/page.tsx`) pages, linking them directly to the global `Dentist` entity defined in `app/layout.tsx`.

---

## 1. Context & Global Identifiers
- [x] Verified values from `app/layout.tsx`:
  - **Global Dentist `@id`**: `https://smilevip.net/#dentist`
  - **Global Clinic Name**: `Cabinet dentaire Dr rezgui Houssem`
  - **Base Domain**: `https://smilevip.net`

---

## 2. Dynamic Service Pages (`app/services/[slug]/page.tsx`)
- [x] Construct `MedicalProcedure` JSON-LD `@graph` object containing:
  - `Dentist` node referencing `@id: https://smilevip.net/#dentist`, `name: Cabinet dentaire Dr rezgui Houssem`, `url: https://smilevip.net`.
  - `MedicalProcedure` node with:
    - `@type`: `MedicalProcedure`
    - `@id`: `https://smilevip.net/services/${service.slug}`
    - `name`: `service.title`
    - `description`: `service.meta_description || service.description`
    - `url`: `https://smilevip.net/services/${service.slug}`
    - `recognizingAuthority`: `{ "@id": "https://smilevip.net/#dentist" }`
- [x] Inject `<script type="application/ld+json">` block into `app/services/[slug]/page.tsx`.

---

## 3. Dynamic Sub-Service Pages (`app/services/[slug]/[subSlug]/page.tsx`)
- [x] Construct `MedicalProcedure` JSON-LD `@graph` object containing:
  - `Dentist` node referencing `@id: https://smilevip.net/#dentist`, `name: Cabinet dentaire Dr rezgui Houssem`, `url: https://smilevip.net`.
  - `MedicalProcedure` node with:
    - `@type`: `MedicalProcedure`
    - `@id`: `https://smilevip.net/services/${service.slug}/${subService.slug}`
    - `name`: `subService.title`
    - `description`: `subService.meta_description || subService.description`
    - `url`: `https://smilevip.net/services/${service.slug}/${subService.slug}`
    - `recognizingAuthority`: `{ "@id": "https://smilevip.net/#dentist" }`
- [x] Inject `<script type="application/ld+json">` block into `app/services/[slug]/[subSlug]/page.tsx`.

---

## 4. Verification & Testing
- [ ] Run `npm run build` to ensure zero compilation or TypeScript errors.
- [ ] Validate JSON-LD structure using Schema Markup Validator / Rich Results Test guidelines.
