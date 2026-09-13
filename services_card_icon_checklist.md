# Services Page — Replace Number Badge with Icon Checklist

## Goal
Remove the gold number badges (`01`, `02`, `03`, ...) from each `.service-card` and replace them with a small tasteful icon (e.g. a gold tooth/dental SVG or a generic luxury accent icon) that fits the premium aesthetic.

---

## Section 1 — CSS: Update `.service-card-num` → `.service-card-icon`
**File**: `app/globals.css`

- [x] 1.1 Remove or repurpose `.service-card-num` styles (the large `3rem` gold number badge).
- [x] 1.2 Add new `.service-card-icon` styles:
  - `display: flex; align-items: center; justify-content: center;`
  - `width: 40px; height: 40px;`
  - `color: var(--accent-color);`
  - `margin-bottom: 1rem;` (inside `.service-card-body`)

---

## Section 2 — JSX: Replace Badge with SVG Icon in `app/services/page.tsx`
**File**: `app/services/page.tsx`

- [x] 2.1 Remove `<span className="service-card-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>`
- [x] 2.2 Remove `index` parameter from `.map((service, index) => ...)` → `.map((service) => ...)`
- [x] 2.3 Add a small gold SVG icon inside `.service-card-body`, above the title:
  ```tsx
  <div className="service-card-icon" aria-hidden="true">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C9.5 2 7 4 7 7c0 2.5 1 4.5 2 6l1 5c.2 1 1 1.5 2 1.5s1.8-.5 2-1.5l1-5c1-1.5 2-3.5 2-6 0-3-2.5-5-5-5z" />
    </svg>
  </div>
  ```

---

## Section 3 — Update Checklist & Project Log
- [ ] 3.1 Mark all items above as complete.
- [ ] 3.2 Update `PROJECT_CONTEXT.md` work log.

---
