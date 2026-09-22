# Canonical URLs Audit & Standardization Checklist

## 1. Project Analysis
- [x] **Framework Identified**: Next.js **App Router** (`app/` directory).
- [x] **Canonical Definition Mechanism**: Next.js `Metadata` objects (`alternates.canonical`) in `layout.tsx` and dynamic `generateMetadata()` methods.

## 2. File Audit & Canonical Tag Locations
- [x] [`app/layout.tsx`](file:///c:/Users/dell/d2/app/layout.tsx): `alternates: { canonical: 'https://www.smilevip.net/' }` ➔ **[NEEDS FIX]**: Add missing `metadataBase: new URL('https://www.smilevip.net')`.
- [x] [`app/services/page.tsx`](file:///c:/Users/dell/d2/app/services/page.tsx): Currently missing explicit canonical tag ➔ **[NEEDS FIX]**: Add `alternates: { canonical: '/services' }`.
- [x] [`app/services/[slug]/page.tsx`](file:///c:/Users/dell/d2/app/services/[slug]/page.tsx): `alternates: { canonical: 'https://smilevip.net/services/${page.slug}' }` ➔ **[NEEDS FIX]**: Missing `www`. Change domain to `https://www.smilevip.net/services/${page.slug}` or relative `/services/${page.slug}`.
- [x] [`app/services/[slug]/[subSlug]/page.tsx`](file:///c:/Users/dell/d2/app/services/[slug]/[subSlug]/page.tsx): `alternates: { canonical: 'https://smilevip.net/services/${slug}/${subService.slug}' }` ➔ **[NEEDS FIX]**: Missing `www`. Change domain to `https://www.smilevip.net/services/${slug}/${subService.slug}` or relative `/services/${slug}/${subService.slug}`.

## 3. Inconsistencies Identified
- [x] Root layout uses `https://www.smilevip.net/` (**WITH www**).
- [x] Detail service pages use `https://smilevip.net/...` (**WITHOUT www**) ➔ **[NEEDS FIX]**: Standardize to include `www`.
- [x] Missing `metadataBase` configuration in root layout ➔ **[NEEDS FIX]**: Add `metadataBase` to `layout.tsx`.

## 4. Implementation Steps Checklist (Plan Mode)
- [x] **Step 1**: Add `metadataBase: new URL('https://www.smilevip.net')` to [`app/layout.tsx`](file:///c:/Users/dell/d2/app/layout.tsx).
- [x] **Step 2**: Add explicit `alternates: { canonical: '/services' }` to static metadata in [`app/services/page.tsx`](file:///c:/Users/dell/d2/app/services/page.tsx).
- [x] **Step 3**: Normalize dynamic canonical URLs in [`app/services/[slug]/page.tsx`](file:///c:/Users/dell/d2/app/services/[slug]/page.tsx) to `https://www.smilevip.net/services/${page.slug}`.
- [x] **Step 4**: Normalize dynamic canonical URLs in [`app/services/[slug]/[subSlug]/page.tsx`](file:///c:/Users/dell/d2/app/services/[slug]/[subSlug]/page.tsx) to `https://www.smilevip.net/services/${slug}/${subService.slug}`.
- [x] **Step 5**: Verify build compilation (`npm run build`).
