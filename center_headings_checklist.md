# Center H2 & H3 Headings on Service Pages

## Goal
Center-align the following headings on service pages:

1. **H2** — "Sous-services & Prestations Spécialisées" section title
   (`app/services/[slug]/page.tsx`, line 136)
2. **H3** — Each sub-service card title (`.service-card-title`)
   (CSS in `app/globals.css`, line 1558)

The H1 is already centered. Only H2 and H3 need to be updated.

---

## Section 1: Center the H2 Section Title (JSX)

**File**: `app/services/[slug]/page.tsx` — line 136

### Current state:
```tsx
<h2 className="text-2xl font-normal mb-8" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)' }}>
  Sous-services & Prestations Spécialisées
</h2>
```
No `text-center` or `textAlign: 'center'` — left-aligned by default.

### Target state:
```tsx
<h2 className="text-2xl font-normal mb-8" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', textAlign: 'center' }}>
  Sous-services & Prestations Spécialisées
</h2>
```

- [x] Add `textAlign: 'center'` to the inline `style` of the H2 in `app/services/[slug]/page.tsx`

---

## Section 2: Center the H3 Card Titles (CSS)

**File**: `app/globals.css` — line 1558–1564

### Current state:
```css
.service-card .service-card-title {
    font-family: var(--font-serif);
    font-size: 1.4rem;
    color: var(--text-dark);
    margin-bottom: 0.75rem;
    font-weight: 400;
}
```
No `text-align: center` — left-aligned by default.

### Target state:
```css
.service-card .service-card-title {
    font-family: var(--font-serif);
    font-size: 1.4rem;
    color: var(--text-dark);
    margin-bottom: 0.75rem;
    font-weight: 400;
    text-align: center;
}
```

- [x] Add `text-align: center;` to `.service-card .service-card-title` in `app/globals.css`

---

## Section 3: Verification

- [ ] Check `/services/implants-dentaires` in the browser — H2 section title and H3 card titles should be centered.
- [ ] Check any other service page — same H2/H3 centering should apply.
- [ ] Update `PROJECT_CONTEXT.md` Work Log with this change.

---

## Notes
- Only H2 and H3 are changed. H1 is already centered (`textAlign: 'center'` in JSX).
- The sub-service (`[subSlug]`) page has no H2 or H3 in JSX — no changes needed there.
- No database changes required.
