# Next.js (App Router) + Supabase Dynamic SEO Architecture Checklist

Comprehensive checklist for building a Next.js (App Router) application integrated with Supabase for dynamic, ultra-fast, and SEO-optimized content rendering.

---

## 1. Supabase Client Setup

- [x] **Dependencies Installation**:
  - Install `@supabase/supabase-js`:
    ```bash
    npm install @supabase/supabase-js
    ```
- [x] **Environment Configuration**:
  - Add Supabase credentials to `.env.local`:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=https://tetrqnzrpzldrxjicrvo.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
    ```
- [x] **Singleton Supabase Client (`src/lib/supabase.ts`)**:
  - Create the Supabase client utility:
    ```typescript
    import { createClient } from '@supabase/supabase-js';

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables');
    }

    export const supabase = createClient(supabaseUrl, supabaseAnonKey);
    ```

---

## 2. Dynamic Routes & Folder Structure

- [x] **Primary Dynamic Route**:
  - Path: `app/services/[slug]/page.tsx`
  - Handles top-level dynamic entities (e.g., `/services/cosmetic-dentistry`).
- [x] **Nested Dynamic Route**:
  - Path: `app/services/[slug]/[subSlug]/page.tsx`
  - Handles nested dynamic entities (e.g., `/services/cosmetic-dentistry/teeth-whitening`).

---

## 3. Server-Side Data Fetching & Pre-rendering

- [x] **Static Generation (`generateStaticParams`)**:
  - Fetch all valid slugs at build time to statically pre-render pages for optimal performance:
    ```typescript
    export async function generateStaticParams() {
      const { data: services } = await supabase.from('services').select('slug');
      return (services || []).map((service) => ({
        slug: service.slug,
      }));
    }
    ```
- [x] **Dynamic SEO Metadata (`generateMetadata`)**:
  - Query Supabase dynamically per request to output `<title>`, `<meta name="description">`, OpenGraph, and `canonical` links:
    ```typescript
    import type { Metadata } from 'next';

    export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
      const { data: page } = await supabase
        .from('services')
        .select('title, description, seo_title, seo_description, slug')
        .eq('slug', params.slug)
        .single();

      if (!page) return {};

      const title = page.seo_title || page.title;
      const description = page.seo_description || page.description;
      const canonicalUrl = `https://yourdomain.com/services/${page.slug}`;

      return {
        title,
        description,
        alternates: {
          canonical: canonicalUrl,
        },
        openGraph: {
          title,
          description,
          url: canonicalUrl,
          type: 'website',
        },
      };
    }
    ```
- [x] **Server Component Data Fetching & 404 Handling**:
  - Query Supabase inside the Server Component and trigger `notFound()` if no match is returned:
    ```typescript
    import { notFound } from 'next/navigation';

    export default async function ServicePage({ params }: { params: { slug: string } }) {
      const { data: service } = await supabase
        .from('services')
        .select('*, sub_services(*)')
        .eq('slug', params.slug)
        .single();

      if (!service) {
        notFound();
      }

      return (
        <main>
          <h1>{service.title}</h1>
          {/* Page Content */}
        </main>
      );
    }
    ```

---

## 4. Caching & Revalidation (ISR)

- [x] **Incremental Static Regeneration Configuration**:
  - Export `revalidate` in dynamic route pages to enable background caching updates:
    ```typescript
    export const revalidate = 60; // Revalidate content every 60 seconds
    ```

---

## 5. Automated Internal Linking Utility (SEO)

- [x] **Utility Implementation (`src/lib/seo-links.ts`)**:
  - Create internal link injection logic for rich-text HTML content:
    ```typescript
    export interface LinkMapping {
      keyword: string;
      url: string;
    }

    export function applyInternalLinks(htmlContent: string, mappings: LinkMapping[]): string {
      let processedHtml = htmlContent;

      mappings.forEach(({ keyword, url }) => {
        // Regex matches keyword outside existing HTML tags/anchors
        const regex = new RegExp(`(?<!<[^>]*)\\b(${keyword})\\b(?![^<]*?>)`, 'gi');
        let replaced = false;
        
        processedHtml = processedHtml.replace(regex, (match) => {
          if (!replaced) {
            replaced = true;
            return `<a href="${url}" class="seo-internal-link" title="${match}">${match}</a>`;
          }
          return match; // Replace only first occurrence per keyword
        });
      });

      return processedHtml;
    }
    ```
- [x] **Render Processed HTML in Page Component**:
  - Apply internal links to raw rich-text from Supabase and render safely:
    ```typescript
    const linkMappings: LinkMapping[] = [
      { keyword: 'teeth whitening', url: '/services/cosmetic-dentistry/teeth-whitening' },
      { keyword: 'dental implants', url: '/services/implantology/implants' },
    ];

    const processedContent = applyInternalLinks(service.content_html, linkMappings);

    return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
    ```

---

## 6. Verification & SEO Audit Checklist

- [ ] Run `npm run build` to verify static generation of dynamic routes without build errors.
- [ ] Verify HTTP `<head>` metadata output (`<title>`, `<meta name="description">`, `og:image`, `<link rel="canonical">`).
- [ ] Verify `404` status code and page rendering when requesting invalid dynamic slugs.
- [ ] Check rendered DOM to ensure anchor tags inserted by `applyInternalLinks` are valid and navigate correctly.
