# Service Title & H1 Customization Checklist

## 1. Supabase Service Title Update
- [x] **Update `services` Table Record**:
  - Update `title` from `"Implants Dentaires a Tunis"` to `"Implants Dentaires"` for `slug = 'implants-dentaires'`.
  - Maintain `seo_title` as `"Implants Dentaires à Tunis"` (or custom H1 title) for SEO & page heading rendering.

---

## 2. Dynamic Service Detail Page H1 Heading Logic (`app/services/[slug]/page.tsx`)
- [x] **Ensure Flexible H1 Heading**:
  - Verify that `app/services/[slug]/page.tsx` renders `service.seo_title || service.title` in the main H1 tag.
  - This allows the card title on `/services` to be clean (`"Implants Dentaires"`) while allowing customized H1 headings on detail pages.

---

## 3. Verification & Testing
- [ ] Verify card title on `/services` grid displays as `"Implants Dentaires"`.
- [ ] Verify H1 heading on `/services/implants-dentaires` detail page.
