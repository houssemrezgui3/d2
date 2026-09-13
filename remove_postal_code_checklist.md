# Checklist: Remove Postal Code (1064) from Address & Schema.org

## Overview
This checklist outlines removing the postal code `1064` from both the visible footer address and the global Schema.org structured data in `app/layout.tsx`.

---

## 1. Footer Component (`components/Footer.tsx`)
- [x] Locate line 61 in `components/Footer.tsx`.
- [x] Update address string from `23 Av. Iben Kholdoun, Tunis 1064, Tunisie` to `23 Av. Iben Kholdoun, Tunis, Tunisie`.

---

## 2. Schema.org Global Layout (`app/layout.tsx`)
- [x] Locate `jsonLd.address` object in `app/layout.tsx`.
- [x] Remove `postalCode: '1064'` field from the `PostalAddress` object.

---

## 3. Verification & Testing
- [ ] Run `npm run build` to verify clean compilation with zero errors.
- [ ] Check footer UI rendering and inspect Schema.org JSON-LD output in browser page source.
