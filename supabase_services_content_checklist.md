# Supabase Services & Sub-Services Content Management Checklist

This checklist outlines the plan for adding comprehensive content for main services and sub-services, inserting it into Supabase database tables (`services` and `sub_services`), storing keyword-to-page mappings in a dedicated Supabase table (`seo_keyword_links`), and dynamically rendering enriched content with automated keyword links on the main service (`/services/[slug]`) and sub-service (`/services/[slug]/[subSlug]`) pages.

---


## 2. Content & Keyword Mapping Preparation
- [x] Draft full detailed content for main services (e.g., Implantologie Dentaire, Blanchiment Dentaire, Facettes Dentaires, Orthodontie, etc.).
- [x] Draft full detailed content for sub-services linked to each main service parent ID.
- [x] Define dynamic keyword-to-URL mappings list to insert into `seo_keyword_links` table in Supabase.
- [x] Prepare meta titles, meta descriptions, and keywords for optimal SEO performance per service and sub-service.

---

## 3. Supabase Database Insertion & Updates
- [x] Execute SQL queries to create `seo_keyword_links` table and insert keyword mappings.
- [x] Execute SQL upserts/inserts to update the `services` table with complete content and metadata for all primary services.
- [x] Execute SQL upserts/inserts to update the `sub_services` table with complete detailed content linked to the corresponding main service IDs.
- [x] Verify database record accuracy across `services`, `sub_services`, and `seo_keyword_links` using Supabase queries/tools.

---

## 4. Frontend Rendering & Integration
- [x] Update data fetching function to pull dynamic keyword mappings directly from the `seo_keyword_links` table in Supabase.
- [x] Update `app/services/[slug]/page.tsx` to pass fetched service content and dynamic Supabase keyword mappings through `applyInternalLinks` (`lib/seo-links.ts`).
- [x] Update `app/services/[slug]/[subSlug]/page.tsx` to pass fetched sub-service content and dynamic Supabase keyword mappings through `applyInternalLinks` (`lib/seo-links.ts`).
- [x] Verify that `app/services/[slug]/page.tsx` renders full rich content, sub-service list cards, dynamic meta tags, and SEO internal links fetched from Supabase.
- [x] Verify that `app/services/[slug]/[subSlug]/page.tsx` renders full sub-service detail content, breadcrumb links back to parent service, and dynamic SEO metadata fetched from Supabase.
- [x] Ensure proper visual formatting, typography styling, and responsiveness for content sections and internal keyword links (`.seo-internal-link`).

---

## 5. Verification & Review
- [ ] Verify all main service routes (`/services/[slug]`) display updated Supabase content cleanly with functional keyword links dynamically fetched from `seo_keyword_links`.
- [ ] Verify all sub-service routes (`/services/[slug]/[subSlug]`) display updated Supabase content cleanly with functional keyword links dynamically fetched from `seo_keyword_links`.
- [ ] Confirm no broken links or missing dynamic paths.
