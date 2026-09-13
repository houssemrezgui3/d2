# Separate H1 & Title Tag Checklist

## 1. Supabase Schema Update
- [x] **Add `h1_title` Column to `services` Table**:
  - Add a new nullable text column `h1_title` to the `services` table.
  - This column will control the visible H1 heading on each service detail page independently from the browser `<title>` tag.

---

## 2. Update `app/services/[slug]/page.tsx`
- [x] **Update `generateMetadata` Function**:
  - Keep `<title>` tag rendering as: `page.seo_title || page.title`.
- [x] **Update H1 Heading Rendering**:
  - Change H1 to render: `service.h1_title || service.seo_title || service.title`.

---

## 3. Column Responsibilities Summary (for reference)
| Supabase Column | Controls |
|---|---|
| `title` | Card title shown on `/services` grid |
| `seo_title` | Browser `<title>` tag (SEO) |
| `h1_title` | Visible H1 heading on service detail page |

---

## 4. Verification & Testing
- [x] Update `h1_title` for `implants-dentaires` row directly in Supabase dashboard.
- [x] Verify that `/services/implants-dentaires` shows the correct H1 heading.
- [x] Verify that browser tab/`<title>` tag still shows the correct `seo_title`.
- [ ] Verify that `/services` grid still shows the clean `title` card label.
