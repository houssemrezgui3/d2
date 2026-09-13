# LinkedIn Integration & Schema.org Checklist

This checklist details adding the official LinkedIn company page link to the website's Schema.org JSON-LD structured data and the website footer.

**LinkedIn URL**: `https://linkedin.com/company/cabinet-dentaire-dr-rezgui-houssem`

---

## Section 1 — Schema.org JSON-LD Update (`app/layout.tsx`)

- [x] **1.1 Add LinkedIn to `sameAs` Array**: Update the `sameAs` array inside `jsonLd` object in `app/layout.tsx` to include `'https://linkedin.com/company/cabinet-dentaire-dr-rezgui-houssem'`.

---

## Section 2 — Footer LinkedIn Link Integration (`components/Footer.tsx` & `app/globals.css`)

- [x] **2.1 Add LinkedIn Link in Footer**: Add a LinkedIn link with icon inside `components/Footer.tsx` pointing to `https://linkedin.com/company/cabinet-dentaire-dr-rezgui-houssem` (`target="_blank" rel="noopener noreferrer"`).
- [x] **2.2 Footer Styling**: Verify standard CSS hover and alignment styles in `app/globals.css` match the existing theme palette and Instagram social icon styling.

---

## Section 3 — Verification & Testing

- [ ] **3.1 Schema.org Verification**: Verify that the HTML rendered contains the JSON-LD script with both Instagram and LinkedIn in `sameAs`.
- [ ] **3.2 Link Verification**: Confirm clicking the LinkedIn link in the footer opens `https://linkedin.com/company/cabinet-dentaire-dr-rezgui-houssem` in a new tab.
- [ ] **3.3 Build Check**: Run `npm run build` to ensure 0 compilation or type errors.
