# Hydration Mismatch Fix Checklist

## Section 1: Supabase Database HTML Audit & Cleanup
- [ ] Audit `sub_services` table (`content_html` and `description` columns) for malformed or unclosed HTML tags.
  - Fix `implant-unitaire`: Repair unclosed `<strong>` tags (`<strong>d'implants multiples<strong>.`) to `<strong>d'implants multiples</strong>.` and close nested `<ul>` tags.
- [ ] Audit `services` table (`description` and any HTML content columns) for unclosed tags or invalid HTML structures.

## Section 2: Server-Side HTML Tag Balancing & Sanitization
- [ ] Update `lib/markdown.ts` (or `lib/seo-links.ts`) with an HTML tag sanitizer/balancer utility to auto-close unclosed tags (`<strong>`, `<em>`, `<ul>`, `<ol>`, `<p>`, `<div>`) in `processedContent` before rendering.
- [ ] Verify `app/services/[slug]/[subSlug]/page.tsx` and `app/services/[slug]/page.tsx` pass HTML through tag balancing to protect `<article>` boundaries from leaking unclosed elements.

## Section 3: Component Layout Safety
- [ ] Ensure `<article>` element in `SubServicePage` (`app/services/[slug]/[subSlug]/page.tsx`) and `ServicePage` (`app/services/[slug]/page.tsx`) is self-contained so unclosed tags in content cannot mutate sibling DOM components like `<WhatsAppCta />`.

## Section 4: Testing & Verification
- [ ] Execute `npm run build` to ensure 0 TypeScript or static generation errors.
- [ ] Test `npm run dev` by navigating to `/services/implants-dentaires/implant-unitaire` and checking for 0 hydration mismatch errors (`[browser] Uncaught Error: Hydration failed...`).
- [ ] Update `PROJECT_CONTEXT.md` Work Log and Open Items.
