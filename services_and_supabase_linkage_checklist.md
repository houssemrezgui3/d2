# Supabase-Linked Services & Sub-Services Setup Checklist

Checklist to create the database tables in Supabase, set up the main `/services` listing page, connect dynamic service and sub-service routes, and link homepage service buttons.

---

## 1. Supabase Database Schema Setup
- [x] **Create `services` Table**:
  - Run SQL to create `public.services` table (`id`, `slug`, `title`, `description`, `seo_title`, `seo_description`, `content_html`, `created_at`).
- [x] **Create `sub_services` Table**:
  - Run SQL to create `public.sub_services` table with foreign key reference `service_id -> services(id)`.
- [x] **Configure Row Level Security (RLS)**:
  - Enable RLS on both tables and add public read policies (`SELECT USING (true)`).
- [x] **Seed Sample Service Data**:
  - Insert the 7 specified services into Supabase `services` table:
    1. `implants-dentaires` (Implants Dentaires)
    2. `dentisterie-generale` (Dentisterie Générale)
    3. `dentisterie-esthetique` (Dentisterie Esthétique)
    4. `orthodontie` (Orthodontie)
    5. `urgences-dentaires` (Urgences Dentaires)
    6: `soins-pediatriques` (Soins Pédiatriques)
    7. `chirurgie-orale` (Chirurgie Orale)
  - Insert corresponding sub-services for each main service category.

---

## 2. Main Services Page (`app/services/page.tsx`)
- [x] **Create Services Index Page**:
  - Path: `app/services/page.tsx`
  - Fetch all active services from Supabase `services` table server-side using `supabase.from('services').select('*')`.
  - Render a luxury grid layout displaying all services with titles, descriptions, and direct links to `/services/[slug]`.
- [x] **Add SEO Metadata**:
  - Implement static metadata export for `/services` with title and meta description.

---

## 3. Dynamic Service & Sub-Service Detail Pages
- [x] **Update Primary Dynamic Service Route (`app/services/[slug]/page.tsx`)**:
  - Connect to Supabase to fetch specific service details and list related `sub_services`.
  - Render full HTML content with `applyInternalLinks`.
- [x] **Update Sub-Service Route (`app/services/[slug]/[subSlug]/page.tsx`)**:
  - Connect to Supabase to fetch sub-service content matching `slug` and `subSlug`.

---

## 4. Homepage Navigation & Service Buttons Linkage
- [x] **Update Homepage Links**:
  - Update "Voir tous les services" button in [`components/SeoBlock.tsx`](file:///c:/Users/dell/d2/components/SeoBlock.tsx) to point to `/services` instead of `#services`.
  - Update any header/footer navigation links to point to `/services`.

---

## 5. Verification & Testing
- [ ] Verify database connection and query response in Next.js server components.
- [ ] Test navigation flow: Homepage -> `/services` -> `/services/[slug]` -> `/services/[slug]/[subSlug]`.
