# Restore implants-dentaires Only Clickable Sub-Services

## Goal
Revert the `isClickable` logic in `app/services/[slug]/page.tsx` so that
only sub-services under the `implants-dentaires` parent service render a
clickable "Voir les détails →" link. All other service categories display
their sub-service cards as **non-clickable** (no link, no CTA button).

---

## Section 1: Revert `isClickable` Condition

**File**: `app/services/[slug]/page.tsx` — line ~141

### Current (wrong) state:
```ts
const isClickable = Boolean(sub.slug);
```
This makes every sub-service clickable regardless of parent service.

### Target (correct) state:
```ts
const isClickable = service.slug === 'implants-dentaires';
```
This ensures only `implants-dentaires` sub-service cards get the
"Voir les détails →" CTA link. All others render as display-only cards.

- [x] Replace `const isClickable = Boolean(sub.slug);` with `const isClickable = service.slug === 'implants-dentaires';` in `app/services/[slug]/page.tsx`

---

## Section 2: Verification

- [ ] Run `npm run build` and confirm 0 TypeScript errors.
- [ ] Check `/services/implants-dentaires` — sub-service cards should show the "Voir les détails →" link.
- [ ] Check any other service page (e.g. `/services/blanchiment-dentaire`) — sub-service cards should show NO link.
- [ ] Update `PROJECT_CONTEXT.md` Work Log with this change.

---

## Notes
- The other two fixes from `sub_services_404_fix_checklist.md` (Section 2)
  are kept: `decodeURIComponent` and `.maybeSingle()` remain in place.
  Only the `isClickable` logic is being reverted.
- No database changes required.
