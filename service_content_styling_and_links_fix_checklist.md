# Service Content Styling & Internal Links Fix Checklist

This checklist outlines the plan to fix raw markdown link output, self-referencing hardcoded links, and ugly unstyled article content boxes across dynamic service pages (`/services/[slug]` and `/services/[slug]/[subSlug]`).

---

## 1. Markdown Parsing & Content Normalization
- [x] Implement a markdown-to-HTML parser utility (or convert raw markdown links `[text](url)` to `<a href="url">text</a>`) before rendering `dangerouslySetInnerHTML`.
- [x] Ensure any hardcoded `http://localhost:3000` domain prefixes are stripped out and converted into clean relative URLs (`/services/...`).

## 2. Internal Linking Engine Optimization (`lib/seo-links.ts`)
- [x] Update `applyInternalLinks(htmlContent, mappings, currentPath)` in `lib/seo-links.ts`.
- [x] Prevent self-referencing links: filter out mapping URLs that match the `currentPath`.
- [x] Parse both raw HTML `<a href="...">` and markdown `[text](url)` patterns gracefully.
- [x] Ensure generated links use relative paths with `.seo-internal-link` styling class.

## 3. Luxury Article Typography & Link Styling (`app/globals.css`)
- [x] Add `.prose` and `.seo-internal-link` styling rules to `app/globals.css`:
  - Gold accent link color (`var(--accent-color)`) with subtle underline and smooth hover transition.
  - Generous paragraph spacing (`margin-bottom: 1.5rem`), line-height (`1.8`), font size (`1.05rem`).
  - Styled headers (`h2`, `h3`) with `Playfair Display` serif font.
  - Refined white container styling (`border: 1px solid rgba(195, 164, 105, 0.2)`, soft shadow, refined padding).

## 4. Dynamic Pages Integration
- [x] Update `app/services/[slug]/page.tsx` to pass `currentPath` to link processing.
- [x] Update `app/services/[slug]/[subSlug]/page.tsx` to pass `currentPath` to link processing.

## 5. Verification & Testing
- [ ] Test `/services/implants-dentaires` to confirm raw markdown `[text](url)` is rendered as styled HTML links.
- [ ] Confirm no self-referencing links exist (e.g. `implant dentaire` on `/services/implants-dentaires` does not link to itself).
- [ ] Verify link hover animations and overall luxury typography aesthetics.


**Do not send a summary in the **chat**