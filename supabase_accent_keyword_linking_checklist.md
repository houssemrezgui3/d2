# Supabase Keyword Matching Accent Fix Checklist

## Overview
This checklist tracks the implementation of Unicode-aware regex matching for French accented keywords in the Supabase SEO internal linking utility (`lib/seo-links.ts`), as well as auditing target URL routing rules.

---

## 1. Codebase Regex Fix (`lib/seo-links.ts`)
- [ ] Inspect existing `\b` ASCII word boundary regex in `lib/seo-links.ts`.
- [ ] Upgrade regex pattern to Unicode-aware boundaries `(?<![\p{L}\p{N}_])` and `(?![\p{L}\p{N}_])` with flag `u`.
- [ ] Ensure case-insensitive matching preserves French accented characters (`é`, `è`, `à`, `ç`, `ô`, `î`).

---

## 2. Supabase Data Audit
- [ ] Verify `seo_keyword_links` table rows for `is_active = true`.
- [ ] Check `source_url` filters to confirm whether page-level scoping is intended.
- [ ] Confirm `target_url` paths match actual website routing slugs.

---

## 3. Verification & Build
- [ ] Run dynamic server test or test content through `applyInternalLinks`.
- [ ] Execute `npm run build` to confirm zero build errors or TypeScript regressions.
