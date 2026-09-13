# TypeScript Alias Module Resolution Fix Checklist

Checklist to fix the TypeScript error:
`Cannot find module '@/lib/supabase' or its corresponding type declarations.`

---

## Root Cause Analysis
The project uses root-level directories (`/app`, `/lib`, `/components`) instead of `/src` (e.g., `lib/supabase.ts` vs `src/lib/supabase.ts`).
In `tsconfig.json`, the path alias `"@/*": ["./*"]` maps `@/` to the project root `./`. 
Currently `supabase.ts` and `seo-links.ts` are located in `src/lib/` instead of `lib/`.

---

## 1. Resolution Options

- [x] **Option A (Recommended): Move `src/lib/` utilities to `lib/`**:
  - Move `src/lib/supabase.ts` -> `lib/supabase.ts`
  - Move `src/lib/seo-links.ts` -> `lib/seo-links.ts`
  - Remove empty `src/` directory if no longer needed.

- [ ] **Option B: Update `tsconfig.json` path mappings**:
  - Update `tsconfig.json` `paths` configuration to include `src`:
    ```json
    "paths": {
      "@/*": ["./*", "./src/*"]
    }
    ```

---

## 2. Verification

- [ ] Verify TypeScript compilation (`npx tsc --noEmit`) passes without module resolution errors.
- [ ] Confirm import `@/lib/supabase` resolves cleanly in `app/services/[slug]/page.tsx` and `app/services/[slug]/[subSlug]/page.tsx`.
