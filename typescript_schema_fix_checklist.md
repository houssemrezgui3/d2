# Checklist: Fix TypeScript Errors in Service Detail Pages

## Overview
This checklist addresses TypeScript scoping errors introduced during the JSON-LD schema injection in `app/services/[slug]/page.tsx` and `app/services/[slug]/[subSlug]/page.tsx`.

---

## 1. Dynamic Service Page (`app/services/[slug]/page.tsx`)
- [x] Restore missing `subServices` variable definition (`const subServices: SubService[] = service.sub_services || [];`).
- [x] Ensure `jsonLd` object and `subServices` declaration exist side-by-side before the JSX return.

---

## 2. Dynamic Sub-Service Page (`app/services/[slug]/[subSlug]/page.tsx`)
- [x] Restore missing `processedContent` variable definition (`const processedContent = applyInternalLinks(rawContent, linkMappings, currentPath);`).
- [x] Ensure `jsonLd` object and `processedContent` declaration exist side-by-side before the JSX return.

---

## 3. Verification & Testing
- [ ] Run `npm run build` to verify clean TypeScript compilation and zero build errors.
