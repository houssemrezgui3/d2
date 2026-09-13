# Source Page to Target Page Keyword Routing Checklist

## 1. Supabase Database Schema Update (`seo_keyword_links`)
- [x] Add `source_url` column (Text, nullable) to `seo_keyword_links` in Supabase:
  - If `source_url` is NULL: rule applies globally on all pages.
  - If `source_url` is set (e.g. `/services/implants-dentaires`): rule ONLY applies on that specific source page.

## 2. Dynamic SEO Link Logic Update (`lib/seo-links.ts`)
- [x] Update `LinkMapping` interface to include optional `source_url?: string`.
- [x] Update `getDynamicKeywordMappings()` to fetch `source_url` from Supabase.
- [x] Update `applyInternalLinks()` logic to match `currentPath` against `source_url` before applying keyword links.

## 3. Seed Page-Scoped Keyword Mappings
- [x] Add example page-scoped rules in Supabase:
  - Source: `/services/implants-dentaires` | Keyword: `orthodontie` | Target: `/services/orthodontie`
  - Source: `/services/implants-dentaires` | Keyword: `facettes` | Target: `/services/dentisterie-esthetique/facettes-dentaires`

## 4. Verification & Testing
- [ ] Run `npm run build` to confirm zero compilation or TypeScript errors.
- [ ] Verify that keyword links ONLY appear on their designated source pages and direct users to the correct target pages.
