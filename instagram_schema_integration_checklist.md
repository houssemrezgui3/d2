# Instagram Integration & Schema.org Checklist

This checklist details adding the official Instagram profile link to the website's Schema.org JSON-LD structured data and the website footer.

**Instagram URL**: `https://www.instagram.com/cabinet_dr.rezgui_houssem`

---

## Section 1 — Schema.org JSON-LD Update (`app/layout.tsx`)

- [x] **1.1 Add `sameAs` Array**: Update the `jsonLd` object in `app/layout.tsx` to include `sameAs: ['https://www.instagram.com/cabinet_dr.rezgui_houssem']`.

---

## Section 2 — Footer Instagram Link Integration (`components/Footer.tsx` & `app/globals.css`)

- [x] **2.1 Add Instagram Link in Footer**: Add an Instagram link/icon inside `components/Footer.tsx` pointing to `https://www.instagram.com/cabinet_dr.rezgui_houssem`.
- [x] **2.2 Footer Styling**: Ensure standard CSS styling for the Instagram footer link/icon aligns with the existing theme palette in `app/globals.css`.

---

## Section 3 — Verification & Testing

- [ ] **3.1 Schema.org Verification**: Verify that the HTML rendered contains the JSON-LD script with `sameAs: ["https://www.instagram.com/cabinet_dr.rezgui_houssem"]`.
- [ ] **3.2 Link Verification**: Confirm clicking the Instagram link in the footer opens `https://www.instagram.com/cabinet_dr.rezgui_houssem` in a new tab (`target="_blank" rel="noopener noreferrer"`).
- [ ] **3.3 Build Check**: Run `npm run build` to ensure 0 compilation or type errors.
