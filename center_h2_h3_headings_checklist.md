# Center H2 & H3 Headings Checklist

## Objective
Center all `h2` and `h3` heading elements (specifically inside article prose and service detail pages, e.g. "Le moment où tout change") to align in the middle of their containers (`text-align: center`).

---

## Section 1: CSS Global Prose Styling Updates (`app/globals.css`)
- [x] Add `text-align: center;` to `.prose h2` and `.prose h3` rules in `app/globals.css`.
- [x] Ensure any parent or section headings for `h2` and `h3` within `.prose` or general article sections have standard centered alignment and margin auto resetting.

---

## Section 2: Page Component Inspection & Alignment Verification
- [x] Check `app/services/[slug]/page.tsx` prose content rendering for centered `h2` and `h3` headings.
- [x] Check `app/services/[slug]/[subSlug]/page.tsx` prose content rendering for centered `h2` and `h3` headings.
- [x] Inspect raw HTML / Markdown output parsed by `lib/markdown.ts` to ensure centered alignment works smoothly with rendered HTML `<h2 id="...">` and `<h3>` tags.

---

## Section 3: Verification & Next.js Build Check
- [ ] Test locally in browser on `/services/implants-dentaires` or sub-service pages to verify `h2` and `h3` headings (such as "Le moment où tout change") appear centered in the middle.
- [ ] Run `npm run build` to verify clean compilation without build errors.
