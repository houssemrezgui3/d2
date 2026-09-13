# Services Breadcrumbs & Back Navigation Checklist

This checklist outlines the plan to update the top breadcrumb navigation across service dynamic pages so that users can seamlessly navigate back to previous pages:

1. **Main Service Detail Page (`/services/[slug]`)**:
   - Breadcrumb path: `Accueil` &rarr; `Services` &rarr; `[Service Title]`
   - Users can click **Accueil** to return to the Home page (`/`), or **Services** to return to `/services`.

2. **Sub-Service Detail Page (`/services/[slug]/[subSlug]`)**:
   - Breadcrumb path: `Accueil` &rarr; `Services` &rarr; `[Parent Service Title]` &rarr; `[Sub-Service Title]`
   - Users can click **Accueil** to return to Home (`/`), **Services** to return to `/services`, or **[Parent Service Title]** to return to the parent service page (`/services/[slug]`).

---

## 1. Main Service Dynamic Page (`app/services/[slug]/page.tsx`)
- [x] Update the `<nav>` breadcrumb JSX in `app/services/[slug]/page.tsx`.
- [x] Add the `Accueil` link pointing to `/` before `Services`.
- [x] Ensure consistent styling (uppercase, small tracking, hover gold highlight).

---

## 2. Sub-Service Dynamic Page (`app/services/[slug]/[subSlug]/page.tsx`)
- [x] Update the `<nav>` breadcrumb JSX in `app/services/[slug]/[subSlug]/page.tsx`.
- [x] Add the `Accueil` link pointing to `/` before `Services` and the parent service link.
- [x] Ensure breadcrumb order is: `Accueil` &rarr; `Services` &rarr; `[Parent Service]` &rarr; `[Sub-Service]`.

---

## 3. Verification & Testing
- [x] Test navigation from `/services/[slug]` back to Home (`/`) and Services (`/services`).
- [x] Test navigation from `/services/[slug]/[subSlug]` back to Home (`/`), Services (`/services`), and Parent Service (`/services/[slug]`).

**Do not send a summary in the **chat**
