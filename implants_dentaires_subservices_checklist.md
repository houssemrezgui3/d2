# Implants Dentaires Sub-Services Update Checklist

This checklist outlines the plan for adding and updating the 6 sub-services under the main **Implants Dentaires** service (`slug: implants-dentaires`) in Supabase.

---

## Target Sub-Services List:
1. **Implant unitaire** (`implant-unitaire`)
2. **Implants multiples** (`implants-multiples`)
3. **Prothèse implanto-portée** (`prothese-implanto-portee`)
4. **Greffe osseuse** (`greffe-osseuse`)
5. **Implants à charge immédiate** (`implants-a-charge-immediate`)
6. **All-on-4 / All-on-6** (`all-on-4-all-on-6`)

---

## 1. Preparation & Content Drafting
- [x] Retrieve the parent `service_id` for `implants-dentaires` from Supabase (`313690ae-fbf4-4706-be54-f0ab1f8e777e`).
- [x] Draft detailed titles, descriptions, `content_html` (using `<h2>`, `<h3>`, `<p>`, `<ul>`, `<strong>`), `seo_title`, and `seo_description` for each of the 6 sub-services in `implants_subservices_content_draft.md`.
- [x] Define dynamic keyword mappings for new sub-services in `seo_keyword_links`.

---

## 2. Supabase Database Insertion & Updates
- [x] Execute SQL queries to insert/upsert the 6 sub-services in the `sub_services` table under the `implants-dentaires` `service_id`.
- [x] Insert keyword links into `seo_keyword_links` for any new sub-service terms.
- [x] Verify sub-service records in Supabase.

---

## 3. Frontend Verification & Testing
- [ ] Verify all 6 sub-services appear on the main Implants Dentaires page (`/services/implants-dentaires`).
- [ ] Verify each sub-service page (`/services/implants-dentaires/[subSlug]`) renders rich HTML content (`<h2>`, `<h3>`, etc.) and internal keyword links.
