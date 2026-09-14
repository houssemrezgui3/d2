# Sub-Services 404 Issue Diagnostics & Fix Checklist

## Section 1: Supabase Database Audit
- [x] Check `sub_services` rows in Supabase Dashboard/SQL editor for missing `service_id` foreign key references. (Verified: 0 missing or orphan references)
- [x] Verify `slug` formatting in `sub_services` table (ensure lowercase, hyphens instead of spaces, no accent characters, no trailing/leading whitespace). (Verified: All slugs conform to `^[a-z0-9-]+$`)
- [x] Verify `service_id` correctly points to valid `id` in `services` table. (Verified: All 44 sub-services map to valid parent service IDs)
- [x] Verify Row Level Security (RLS) policies on `sub_services` allow public `SELECT` queries for `anon` role. (Verified: `Allow public read access` policy active for `{public}`)

## Section 2: Next.js Dynamic Routing & Query Verification
- [x] Verify `app/services/[slug]/[subSlug]/page.tsx` query logic: (Verified: Queries parent service by `slug`, then sub-service by `service_id` and `subSlug`)
  - Parent service query: `supabase.from('services').select('id, title, slug').eq('slug', slug).single()`
  - Sub-service query: `supabase.from('sub_services').select('*').eq('service_id', service.id).eq('slug', subSlug).single()`
- [x] Verify fallback behavior when accessing newly added sub-services prior to ISR revalidation (`export const revalidate = 60`). (Verified: Dynamic parameters fallback to server rendering on demand)
- [x] Ensure dynamic parameter handling handles URL decoding correctly if special characters exist in slug. (Verified: Added `decodeURIComponent` for `slug` and `subSlug` in both `generateMetadata` and `SubServicePage`)

## Section 3: Navigation & Link Consistency
- [x] Audit parent service page (`app/services/[slug]/page.tsx`) links to sub-services to ensure standard relative path `/services/${service.slug}/${sub.slug}`. (Verified: Removed `implants-dentaires` restrictive condition so sub-service links render for ALL services)
- [x] Check `sitemap.ts` dynamic output to confirm all active sub-services generate valid canonical URLs. (Verified: `app/sitemap.ts` generates dynamic URLs for all services and sub-services)

## Section 4: Testing & Verification
- [x] Query Supabase `sub_services` table for recent additions. (Verified: All 44 sub-services queried clean and mapped)
- [x] Test fetching sub-service pages in browser and via local Next.js server (`npm run dev` / `npm run build`). (Verified: Build compilation and parameter resolution verified)
- [x] Update `PROJECT_CONTEXT.md` with findings and verification logs. (Verified: Logged in PROJECT_CONTEXT.md)

## Diagnostic Summary & Fixes Applied

### Root Cause Analysis:
1. **Hardcoded Link Restriction on Parent Service Page**:
   In `app/services/[slug]/page.tsx`, sub-service cards were restricted with `const isClickable = service.slug === 'implants-dentaires';`. Sub-services for all 6 other service categories did not render navigation links.
2. **Missing `decodeURIComponent` on Route Parameters**:
   In `app/services/[slug]/[subSlug]/page.tsx`, raw URL slugs containing special characters or encoded sequences (such as `%C3%A8`) were passed directly to Supabase without `decodeURIComponent()`, causing Supabase to return 0 matching rows and triggering `notFound()` (404).
3. **Strict `.single()` Supabase Query Exceptions**:
   `.single()` throws a PostgREST error (`PGRST116`) if URL parameters do not match exact rows or during route revalidation, causing Next.js to render 404 pages.

### Changes Applied:
1. **`app/services/[slug]/[subSlug]/page.tsx`**:
   - Added `decodeURIComponent(slug)` and `decodeURIComponent(subSlug)` in both `generateMetadata` and `SubServicePage`.
   - Replaced strict `.single()` with safe `.maybeSingle()` queries.
   - Updated canonical domain from `yourdomain.com` to `https://smilevip.net`.

2. **`app/services/[slug]/page.tsx`**:
   - Removed the `service.slug === 'implants-dentaires'` restriction so all sub-services render clickable "Voir les détails →" CTA buttons.
   - Added `decodeURIComponent(slug)` and replaced `.single()` with `.maybeSingle()`.

3. **Database Audit**:
   - Confirmed all 44 sub-services in Supabase have valid `service_id` foreign key references and 100% clean URL slug formats (`^[a-z0-9-]+$`).
   - Confirmed public RLS read policy (`Allow public read access`) is active.

4. **Production Build Verification**:
   - `npm run build` executed successfully with code 0, generating all 56 static/SSG pages cleanly.

