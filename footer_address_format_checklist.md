# Footer Address Format Checklist

Use this checklist to fix the address format in the footer and project context documentation.

## 1. Goal
- Change address formatting from `23 Av. Iben Kholdoun, 1064 Tunis, Tunisie` to `23 Av. Iben Kholdoun, Tunis 1064, Tunisie`.

## 2. Implementation Steps

- [x] **Update Footer component**:
  - Open [Footer.tsx](file:///c:/Users/dell/d2/components/Footer.tsx)
  - Locate line 29: `23 Av. Iben Kholdoun, 1064 Tunis, Tunisie`
  - Change it to: `23 Av. Iben Kholdoun, Tunis 1064, Tunisie`

- [x] **Update Project Context documentation**:
  - Open [PROJECT_CONTEXT.md](file:///c:/Users/dell/d2/.agents/PROJECT_CONTEXT.md)
  - Locate line 106 under Business Details table
  - Change `23 Av. Iben Kholdoun, 1064 Tunis, Tunisie` to `23 Av. Iben Kholdoun, Tunis 1064, Tunisie`

- [x] **Update Verification Guide documentation**:
  - Open [seo-verification-guide.md](file:///c:/Users/dell/d2/seo-verification-guide.md)
  - Locate line 58
  - Update any verification text matching this format if applicable.

## 3. Verification
- [ ] Run the dev server (`npm run dev`) and visually inspect the footer to verify the updated address format.
