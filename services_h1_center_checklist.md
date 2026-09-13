# Services Pages — Center H1 Heading Checklist

## Goal
Ensure the `<h1>` heading is always horizontally centered on all three services pages:
- `/services` (listing page)
- `/services/[slug]` (service detail page)
- `/services/[slug]/[subSlug]` (sub-service detail page)

---

## Section 1 — `/services` listing page
**File**: `app/services/page.tsx`

- [x] 1.1 Confirm `<header>` has `text-center w-full` (already done).
- [x] 1.2 Confirm `<h1>` has `textAlign: 'center'` in inline style (already done).

---

## Section 2 — `/services/[slug]` detail page
**File**: `app/services/[slug]/page.tsx`

- [x] 2.1 Add `text-center` to `<header className="mb-12">` → `<header className="mb-12 text-center">`.
- [x] 2.2 Add `textAlign: 'center'` to `<h1>` inline style.
- [x] 2.3 Add `style={{ textAlign: 'center' }}` to the description `<p>` so it also centers under the title.

---

## Section 3 — `/services/[slug]/[subSlug]` detail page
**File**: `app/services/[slug]/[subSlug]/page.tsx`

- [x] 3.1 Add `text-center` to `<header className="mb-12">` → `<header className="mb-12 text-center">`.
- [x] 3.2 Add `textAlign: 'center'` to `<h1>` inline style.
- [x] 3.3 Add `style={{ textAlign: 'center' }}` to the description `<p>` so it also centers under the title.

---

## Section 4 — Update Project Log
- [ ] 4.1 Update `PROJECT_CONTEXT.md` work log.

---
