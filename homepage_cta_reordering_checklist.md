# Homepage CTA Section Placement Checklist

## 1. Homepage Component Reordering (`app/page.tsx`)
- [x] **Reorder Sections in `app/page.tsx`**:
  - Move `<ConsultSection />` (or CTA Banner) above `<LocationSection />`.
  - Ensure logical page flow: `HeroSection` -> `SeoBlock` -> `ReviewsSection` -> `ConsultSection` (CTA) -> `LocationSection`.

---

## 2. Visual & Anchor Link Verification
- [x] **Verify Consultation Form Anchors**:
  - Test `#consultation` anchor links from Header/Hero to ensure smooth scrolling to the newly positioned CTA section.
- [x] **Verify Layout & Margins**:
  - Confirm spacing between `ReviewsSection`, `ConsultSection`, and `LocationSection`.

---

## 3. Verification & Testing
- [ ] Test homepage layout rendering on desktop and mobile.
- [ ] Verify form interactivity and location section display.
