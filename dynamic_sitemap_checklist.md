# Checklist: Dynamic Sitemap Implementation (`app/sitemap.ts`)

## Overview
This checklist outlines replacing the static `public/sitemap.xml` with a dynamic Next.js App Router sitemap (`app/sitemap.ts`) that fetches all static routes, main services, and sub-services from Supabase to automatically generate clean, SEO-optimized XML sitemap entries.

---

## 1. Remove Static Sitemap File
- [x] Remove static `public/sitemap.xml` file to avoid route collisions with Next.js dynamic sitemap builder.

---

## 2. Dynamic Sitemap Route (`app/sitemap.ts`)
- [x] Create `app/sitemap.ts` implementing `MetadataRoute.Sitemap` from `'next'`.
- [x] Initialize Supabase client (`lib/supabase.ts`).
- [x] Query all active `services` from Supabase (`slug`, `updated_at` / `created_at`).
- [x] Query all active `sub_services` from Supabase joined with parent service slugs (`slug`, `updated_at` / `created_at`, `service_id`).
- [x] Define static route entries:
  - Homepage: `https://www.smilevip.net/` (`priority: 1.0`, `changeFrequency: 'weekly'`)
  - Services index: `https://www.smilevip.net/services` (`priority: 0.9`, `changeFrequency: 'weekly'`)
- [x] Map Supabase services into dynamic entries:
  - `https://www.smilevip.net/services/${slug}` (`priority: 0.8`, `changeFrequency: 'monthly'`)
- [x] Map Supabase sub-services into dynamic entries:
  - `https://www.smilevip.net/services/${parentSlug}/${subSlug}` (`priority: 0.7`, `changeFrequency: 'monthly'`)
- [x] Set `export const revalidate = 3600;` (1 hour ISR cache revalidation).

---

## 3. Robots.txt Sitemap Declaration (`public/robots.txt`)
- [x] Verify `public/robots.txt` includes: `Sitemap: https://www.smilevip.net/sitemap.xml`.

---

## 4. Verification & Testing
- [ ] Visit `http://localhost:3000/sitemap.xml` in browser / curl to verify correct XML output.
- [ ] Execute `npm run build` to verify clean build compilation with zero TypeScript or Next.js build errors.
