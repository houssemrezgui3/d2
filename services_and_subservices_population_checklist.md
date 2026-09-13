# Services & Sub-Services Population Checklist

## 1. Supabase Database Population
- [x] **Insert/Update Main Services**:
  - `Orthodontie`
  - `Dentisterie Générale`
  - `Urgences Dentaires`
  - `Soins Pédiatriques`
  - `Chirurgie Orale`
  - `Implants Dentaires` (Focused Primary Service)
- [x] **Insert Sub-Services**:
  - **Orthodontie**: Bagues métalliques, Bagues céramiques, Aligneurs transparents (Invisalign / gouttières), Contention post-orthodontique, Orthodontie interceptive (enfants), Traitement des malocclusions
  - **Dentisterie Générale**: Détartrage & nettoyage professionnel, Soins des caries (obturations), Couronnes dentaires, Bridges, Facettes dentaires, Blanchiment des dents, Implants dentaires, Prothèses amovibles (dentiers), Traitement des gencives (parodontologie)
  - **Urgences Dentaires**: Douleur dentaire aiguë, Dent cassée ou fissurée, Dent avulsée (expulsée), Abcès dentaire, Couronne ou bridge décollé, Plombage perdu
  - **Soins Pédiatriques**: Première consultation enfant, Soins des caries sur dents de lait, Scellements de sillons (prévention), Fluoration, Extraction des dents de lait, Traitement de l'anxiété dentaire (enfants), Éducation à l'hygiène bucco-dentaire
  - **Chirurgie Orale**: Extraction de dents de sagesse, Extraction dentaire simple, Pose d'implants dentaires, Greffe osseuse, Greffe gingivale, Apicectomie, Biopsie buccale

---

## 2. Selective Sub-Service Clickability Logic
- [x] **Update Dynamic Sub-Service Rendering** (`app/services/[slug]/page.tsx`):
  - Check if sub-service slug belongs to the focused **Implants Dentaires** category (or has active detailed content / flag).
  - If focused (**Implants Dentaires**): render full clickable card navigating to `/services/[slug]/[subSlug]`.
  - If non-focused: render card cleanly as non-clickable (static badge/card with title and description, without navigation link or pointer interaction).

---

## 3. Verification & Testing
- [x] Verify Supabase database records for all services and sub-services.
- [x] Verify `/services/[slug]` dynamic routes.
- [x] Confirm sub-services under **Implants Dentaires** are clickable and navigate properly.
- [x] Confirm sub-services under other categories display cleanly as non-clickable cards.
