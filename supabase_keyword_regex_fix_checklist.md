# Supabase Keyword Regex & Special Characters Linking Checklist

## Objective
Fix why phrases like `"votre situation All-on-4"` or keywords containing hyphens, numbers, accented French characters (`é`, `è`, `à`), and multi-word spaces fail to automatically link when configured in Supabase `seo_keyword_links`.

## Root Cause Analysis
1. **Regex Word Boundary (`\b`) Limitation**: Standard ASCII `\b` regex in JavaScript fails when keywords contain hyphens (`-`), numbers, or special punctuation (e.g. `All-on-4`). `\b` expects non-word characters after word characters, causing matching failures.
2. **French Accented Punctuation**: Standard `\b` in ASCII regular expressions does not recognize Unicode accented characters (`é`, `è`, `à`, etc.) as word boundaries, preventing matches on French phrases.
3. **Existing HTML/Anchor Exclusions**: `applyInternalLinks` checks for open `<a` tags before replacement, but rigid regex boundary checks prevent multi-word phrases or phrase matches with hyphens.

---

## Tasks

### Section 1: Refactor Keyword Matching Regex in `lib/seo-links.ts`
- [x] Update regex generation in `lib/seo-links.ts` to replace rigid `\b` word boundaries with lookbehinds/lookaheads that support hyphens, numbers, spaces, and French accented characters.
- [x] Add case-insensitive and accents-aware phrase matching so phrases like `"votre situation All-on-4"` match cleanly in content without breaking HTML tags.

### Section 2: Verification & Test
- [ ] Verify keyword replacement logic on test strings containing `"votre situation All-on-4"` and French accented terms.
- [ ] Ensure existing HTML tags (`<a>`, `<h1>`, `<h2>`, `<h3>`) are not corrupted.
- [ ] Run Next.js build compilation (`npm run build`) to ensure zero TypeScript/SSR errors.
