# Supabase Keyword Routing & Destination Checklist

## 1. Supabase Database Table Configuration (`seo_keyword_links`)
- [x] Verify `seo_keyword_links` table structure in Supabase:
  - `keyword` (Text, Primary/Unique key or index)
  - `target_url` (Text, Destination page route e.g. `/services/orthodontie/gouttieres-invisibles`)
  - `is_active` (Boolean, default true)
- [x] Configure RLS read policy allowing public select access (`is_active = true`).


## 2. Keyword & Target URL Mappings
- [x] Define primary target keywords and their destination URLs:
  - `implants dentaires` -> `/services/implants-dentaires`
  - `implant unitaire` -> `/services/implants-dentaires/implant-unitaire`
  - `greffe osseuse` -> `/services/implants-dentaires/greffe-osseuse`
  - `orthodontie` -> `/services/orthodontie`
  - `gouttières invisibles` -> `/services/orthodontie/gouttieres-invisibles`
  - `blanchiment dentaire` -> `/services/dentisterie-esthetique/blanchiment-dentaire`
  - `facettes dentaires` -> `/services/dentisterie-esthetique/facettes-dentaires`


## 3. SEO Dynamic Linking & Routing Integration
- [x] Ensure `lib/seo-links.ts` fetches active mappings from Supabase.
- [x] Confirm self-referencing check prevents linking a page to itself.
- [x] Ensure HTML anchor tags route smoothly using clean relative URLs.


## 4. Verification & Testing
- [ ] Execute `npm run build` to confirm zero compilation errors.
- [ ] Verify keyword links direct users to expected target pages on click.
