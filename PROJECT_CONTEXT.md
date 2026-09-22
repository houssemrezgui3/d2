# Project Context

## Project Identity & Tech Stack
- **Framework**: Next.js (App Router), React, TypeScript
- **Database**: Supabase
- **Styling**: Tailwind CSS / Custom CSS

## Work Log
- **2026-09-12**: Created `supabase_nextjs_seo_checklist.md` covering Supabase Client Setup, Dynamic Routes, Static Generation, Metadata, ISR Revalidation, and Automated Internal Linking Utility.
- **2026-09-12**: Connected and verified Supabase credentials for `houssemrezgui3's Project` (`tetrqnzrpzldrxjicrvo`) in `.env.local` and `mcp_config.json`.
- **2026-09-12**: Installed `@supabase/supabase-js` dependency and marked Dependencies Installation as complete in `supabase_nextjs_seo_checklist.md`.
- **2026-09-12**: Created `src/lib/supabase.ts` singleton client and marked item complete in `supabase_nextjs_seo_checklist.md`. Updated `AGENTS.md` to only require planning mode when explicitly requested.
- **2026-09-12**: Created primary dynamic route (`app/services/[slug]/page.tsx`) and nested dynamic route (`app/services/[slug]/[subSlug]/page.tsx`). Checked items off in `supabase_nextjs_seo_checklist.md`.
- **2026-09-12**: Added `generateStaticParams`, `generateMetadata`, and Server Component 404 data fetching in `app/services/[slug]/page.tsx`. Marked items complete in `supabase_nextjs_seo_checklist.md`.
- **2026-09-12**: Configured ISR revalidation (`export const revalidate = 60`) in dynamic routes and checked item off in `supabase_nextjs_seo_checklist.md`.
- **2026-09-12**: Created `src/lib/seo-links.ts` utility for automated SEO internal linking and integrated it into `app/services/[slug]/page.tsx`. Marked Section 5 completed in `supabase_nextjs_seo_checklist.md`.
- **2026-09-12**: Created `typescript_module_resolution_fix_checklist.md` and moved `src/lib/supabase.ts` and `src/lib/seo-links.ts` to root `lib/`. Removed `src/` directory.
- **2026-09-12**: Created `services_and_supabase_linkage_checklist.md` to cover Supabase tables creation, `/services` page implementation, and homepage button linkage.
- **2026-09-12**: Executed Section 1 of `services_and_supabase_linkage_checklist.md`: created `services` & `sub_services` tables, configured RLS read policies, and inserted seed data for 7 main services and sub-services.
- **2026-09-12**: Executed Section 2 of `services_and_supabase_linkage_checklist.md`: created `app/services/page.tsx` with Supabase server-side fetching, luxury grid layout, and static SEO metadata export.
- **2026-09-12**: Executed Section 3 of `services_and_supabase_linkage_checklist.md`: updated dynamic routes `app/services/[slug]/page.tsx` and `app/services/[slug]/[subSlug]/page.tsx` to fetch content from Supabase, display sub-services, dynamic metadata, and automated internal links.
- **2026-09-12**: Executed Section 4 of `services_and_supabase_linkage_checklist.md`: updated `components/SeoBlock.tsx`, `components/Header.tsx`, and `components/Footer.tsx` to link to `/services`.
- **2026-09-12**: Created `services_page_styling_fix_checklist.md` to address `/services` page header overlap, margin clearance, and theme palette alignment (Cream/Gold/Sage).
- **2026-09-12**: Executed Section 1 of `services_page_styling_fix_checklist.md`: added `pt-32 pb-16` padding across `app/services/page.tsx`, `app/services/[slug]/page.tsx`, and `app/services/[slug]/[subSlug]/page.tsx` to clear fixed header.
- **2026-09-12**: Executed Section 2 of `services_page_styling_fix_checklist.md`: updated all services pages (`app/services/page.tsx`, `app/services/[slug]/page.tsx`, and `app/services/[slug]/[subSlug]/page.tsx`) to match site design tokens (Soft Cream background `--primary-bg`, Playfair Display titles, Warm Champagne Gold accents `--accent-color`, Muted Charcoal Sage text).
- **2026-09-12**: Executed Section 3 of `services_page_styling_fix_checklist.md`: refactored `app/services/page.tsx` grid layout with standard `container` max-width, gold accent icons, `seo-card` styling, and styled gold "Voir les détails →" buttons.
- **2026-09-12**: Executed Section 4 of `services_page_styling_fix_checklist.md`: refactored dynamic detail routes (`app/services/[slug]/page.tsx` and `app/services/[slug]/[subSlug]/page.tsx`) with gold breadcrumbs, Playfair Display headers, cream container card layout, and sub-services grid.
- **2026-09-13**: Executed Section 1 of `services_page_grid_redesign_checklist.md`: Added `.services-grid`, `.service-card`, gold left-border accent hover animation, number badges, card typography, CTA border styling, and responsive media query breakpoints to `app/globals.css`.
- **2026-09-13**: Executed Section 2 of `services_page_grid_redesign_checklist.md`: Restructured `app/services/page.tsx` JSX to use `.services-grid`, `.service-card`, gold number badges (`01`, `02`, ...), `.service-card-body`, and `.service-card-cta`. Updated H1 header to "Nos Services Dentaires à Tunis".
- **2026-09-13**: Created `service_content_styling_and_links_fix_checklist.md` and `implementation_plan.md` to fix raw markdown link text rendering, self-referencing links, hardcoded localhost URLs, and article typography design system.
- **2026-09-13**: Executed Section 1 of `service_content_styling_and_links_fix_checklist.md`: Implemented `parseMarkdownToHtml` and `cleanLocalhostUrls` utility in `lib/markdown.ts` to convert raw markdown links `[text](url)` to HTML `<a>` tags and strip hardcoded `http://localhost:3000` prefixes into clean relative URLs.
- **2026-09-13**: Executed Section 2 of `service_content_styling_and_links_fix_checklist.md`: Updated `applyInternalLinks` in `lib/seo-links.ts` with `currentPath` support, self-referencing link prevention, markdown pre-parsing integration, and `.seo-internal-link` relative paths.
- **2026-09-13**: Executed Section 3 of `service_content_styling_and_links_fix_checklist.md`: Added `.prose` and `.seo-internal-link` typography & styling rules to `app/globals.css` (Gold link accents, Playfair Display headers, generous spacing, white card container with soft gold border).
- **2026-09-13**: Executed Section 4 of `service_content_styling_and_links_fix_checklist.md`: Updated dynamic service routes (`app/services/[slug]/page.tsx` and `app/services/[slug]/[subSlug]/page.tsx`) to pass `currentPath` to `applyInternalLinks`.
- **2026-09-13**: Fixed "Accueil" and logo navigation links in `components/Header.tsx` and `components/Footer.tsx` by replacing `#` / `#hero` anchor links with Next.js `<Link href="/">` and `<Link href="/#section">`.

- **2026-09-13**: Executed Section 1 of `page_scoped_keyword_routing_checklist.md`: Added `source_url` (Text, nullable) column to `seo_keyword_links` table in Supabase database.
- **2026-09-13**: Executed Section 2 of `page_scoped_keyword_routing_checklist.md`: Updated `lib/seo-links.ts` (`LinkMapping` interface, `getDynamicKeywordMappings()` query, and `applyInternalLinks()` source page path-matching).
- **2026-09-13**: Executed Section 3 of `page_scoped_keyword_routing_checklist.md`: Dropped `UNIQUE (keyword)` single-column constraint and inserted seed page-scoped keyword links in Supabase (`source_url: /services/implants-dentaires`).

- **2026-09-13**: Executed Section 1 of `separate_h1_and_title_tag_checklist.md`: Added `h1_title` column to `services` table in Supabase.
- **2026-09-13**: Executed Section 2 of `separate_h1_and_title_tag_checklist.md`: Updated `app/services/[slug]/page.tsx` H1 heading rendering to fallback from `service.h1_title` -> `service.seo_title` -> `service.title`.
- **2026-09-13**: Verified Next.js build compilation with `npm run build` and marked all checklist items complete.
- **2026-09-13**: Created `service_detail_layout_reorder_checklist.md` to outline placing the sub-services section before the main content on service detail pages (such as `/services/implants-dentaires`).
- **2026-09-13**: Executed Section 1 of `service_detail_layout_reorder_checklist.md`: Inspected JSX structure of `app/services/[slug]/page.tsx` (`<header>`, `{subServices.length > 0 && <section>}`, and `<article className="prose">`).
- **2026-09-13**: Executed Section 2 of `service_detail_layout_reorder_checklist.md`: Reordered `app/services/[slug]/page.tsx` so sub-services grid renders above the main article prose content block.
- **2026-09-13**: Created `whatsapp_cta_service_pages_checklist.md` and `implementation_plan.md` outlining the addition of a luxury WhatsApp CTA button after content on service and sub-service pages.
- **2026-09-13**: Created `whatsapp_cta_styling_redesign_checklist.md` outlining full Vanilla CSS redesign of `WhatsAppCta.tsx` to replace broken Tailwind utility classes with native CSS rules in `app/globals.css`.

- **2026-09-13**: Executed Section 1 of `whatsapp_cta_styling_redesign_checklist.md`: Added `.whatsapp-cta-card`, `.whatsapp-cta-icon`, `.whatsapp-cta-title`, `.whatsapp-cta-desc`, and `.whatsapp-cta-btn` rules to `app/globals.css` with luxury gradient, shadow, and pill button styles.
- **2026-09-13**: Executed Section 2 of `whatsapp_cta_styling_redesign_checklist.md`: Refactored `components/WhatsAppCta.tsx` to strip all inline Tailwind utility classes and replaced them with standard CSS classnames (`whatsapp-cta-card`, `whatsapp-cta-icon`, `whatsapp-cta-title`, `whatsapp-cta-desc`, `whatsapp-cta-btn`).
- **2026-09-13**: Executed Section 2 of `linkedin_schema_integration_checklist.md`: Integrated LinkedIn company profile link & icon into `components/Footer.tsx` reusing `.footer-social-link` and `.footer-social-icon` CSS styles.
- **2026-09-14**: Created `remove_postal_code_checklist.md` to remove postal code `1064` from `components/Footer.tsx` and Schema.org `PostalAddress` in `app/layout.tsx`.
- **2026-09-14**: Executed Section 1 of `remove_postal_code_checklist.md`: Removed postal code `1064` from `components/Footer.tsx` address line (`23 Av. Iben Kholdoun, Tunis, Tunisie`).
- **2026-09-14**: Executed Section 2 of `remove_postal_code_checklist.md`: Removed `postalCode: '1064'` field from `jsonLd.address` Schema.org object in `app/layout.tsx`.
- **2026-09-14**: Created `dynamic_sitemap_checklist.md` outlining replacement of static `public/sitemap.xml` with dynamic Next.js App Router generator (`app/sitemap.ts`) backed by Supabase.
- **2026-09-14**: Executed Section 1 of `dynamic_sitemap_checklist.md`: Removed static `public/sitemap.xml` file.
- **2026-09-14**: Executed Section 2 of `dynamic_sitemap_checklist.md`: Created dynamic `app/sitemap.ts` Next.js route fetching static pages, services, and sub-services from Supabase with ISR revalidation.
- **2026-09-14**: Executed Section 3 of `dynamic_sitemap_checklist.md`: Verified `public/robots.txt` contains `Sitemap: https://www.smilevip.net/sitemap.xml`.
- **2026-09-14**: Fixed `app/sitemap.ts` Supabase queries by selecting `created_at` instead of non-existent `updated_at` column.
- **2026-09-14**: Created `sub_services_404_fix_checklist.md` and implementation plan to diagnose and resolve 404 errors on sub-services pages when updating content in Supabase.
- **2026-09-14**: Executed Section 1 of `sub_services_404_fix_checklist.md`: Performed SQL audit on `sub_services` and `services` tables. Verified 0 orphan `service_id` references, 100% clean URL slug formats, and active public RLS read policies (`Allow public read access`).
- **2026-09-14**: Executed Section 2 of `sub_services_404_fix_checklist.md`: Updated `app/services/[slug]/[subSlug]/page.tsx` with `decodeURIComponent` parameter resolution, replaced `.single()` with `.maybeSingle()`, and updated canonical URL domain to `smilevip.net`.
- **2026-09-14**: Executed Section 1 of `center_headings_checklist.md`: Added `textAlign: 'center'` to the inline `style` of the H2 "Sous-services & Prestations Spécialisées" in `app/services/[slug]/page.tsx`.
- **2026-09-14**: Executed Section 2 of `center_headings_checklist.md`: Added `text-align: center` to `.service-card .service-card-title` in `app/globals.css`.
- **2026-09-14**: Executed Section 3 & 4 of `sub_services_404_fix_checklist.md`: Removed hardcoded `isClickable` check restricting sub-service links to `implants-dentaires` in `app/services/[slug]/page.tsx` so all sub-services have clickable CTA links. Verified Next.js build compilation (`npm run build` succeeded with code 0, generating all 56 static pages cleanly).
- **2026-09-14**: Created `center_h2_h3_headings_checklist.md` to center `h2` and `h3` prose headings in the middle (`text-align: center`).
- **2026-09-14**: Executed Section 1 of `center_h2_h3_headings_checklist.md`: Added `text-align: center;` to `.prose h2` and `.prose h3` in `app/globals.css`.
- **2026-09-14**: Executed Section 2 of `center_h2_h3_headings_checklist.md`: Verified `app/services/[slug]/page.tsx`, `app/services/[slug]/[subSlug]/page.tsx`, and `lib/markdown.ts` HTML rendering for centered `h2` and `h3` heading compatibility.
- **2026-09-15**: Executed Section 1 of `supabase_keyword_regex_fix_checklist.md`: Refactored `applyInternalLinks` in `lib/seo-links.ts` to replace rigid `\b` word boundaries with Unicode and hyphen-aware regex boundaries (`(?<![a-zA-Z0-9\u00C0-\u024F-])` ... `(?![a-zA-Z0-9\u00C0-\u024F-])`), HTML attribute tag inspection, and flexible `\\s+` whitespace matching for double spaces/newlines in article text.
- **2026-09-22**: Executed and completed canonical URLs standardization across `app/layout.tsx`, `app/services/page.tsx`, `app/services/[slug]/page.tsx`, and `app/services/[slug]/[subSlug]/page.tsx` (added `metadataBase: new URL('https://www.smilevip.net')`, added missing `/services` canonical tag, normalized dynamic canonical URLs with `www`, and completed [`canonical_urls_checklist.md`](file:///c:/Users/dell/d2/canonical_urls_checklist.md)).

## Open Items
- Execute Section 2 of `supabase_keyword_regex_fix_checklist.md` (Verification & build test).
- Complete remaining section (Section 3) of `center_h2_h3_headings_checklist.md` (Verification & build test) when requested.
- Deploy updated codebase to live server / hosting provider so live site benefits from dynamic URL decoding, `.maybeSingle()` queries, and sub-service links.
- Execute Section 4 of `dynamic_sitemap_checklist.md` (Verification & build test).
- Execute Section 3 of `remove_postal_code_checklist.md` (Verification & build test).
- Execute Section 4 of `dynamic_sitemap_checklist.md` (Verification & build test).
- Execute Section 3 of `remove_postal_code_checklist.md` (Verification & build test).
- Proceed with Section 3 of `typescript_schema_fix_checklist.md` (Verification & build test).
- Complete Section 4 of `medical_procedure_schema_checklist.md` (Verification & build test).
- Proceed with Section 3 of `linkedin_schema_integration_checklist.md` (Verification & build test).






















