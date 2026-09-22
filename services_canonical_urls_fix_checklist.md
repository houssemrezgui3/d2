# Services Overview Page (`/services`) Canonical URL Fix Checklist

## 1. Scope & Focus
- [x] **Clarified Scope**: This checklist strictly and exclusively targets the main Services page ([`app/services/page.tsx`](file:///c:/Users/dell/d2/app/services/page.tsx)).
- [x] **Identified Cause**: Next.js App Router metadata system requires relative path `canonical: '/services'` (or `./`) when `metadataBase` (`new URL('https://www.smilevip.net')`) is configured in root `layout.tsx`. Passing full absolute strings can cause canonical resolution conflicts or homepage fallbacks (`https://www.smilevip.net/`).

## 2. Implementation Steps

### Section 1: Update Services Page Canonical Tag ([`app/services/page.tsx`](file:///c:/Users/dell/d2/app/services/page.tsx))
- [x] Update `alternates.canonical` in `app/services/page.tsx` metadata export to use relative path format: `alternates: { canonical: '/services' }`.

### Section 2: Verification
- [x] Verify static metadata export in `app/services/page.tsx`.
- [x] Verify build compilation (`npm run build`).
