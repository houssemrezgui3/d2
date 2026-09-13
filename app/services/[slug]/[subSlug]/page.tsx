import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { applyInternalLinks, getDynamicKeywordMappings } from '@/lib/seo-links';

import WhatsAppCta from '@/components/WhatsAppCta';

export const revalidate = 60;

interface SubServicePageProps {
  params: Promise<{
    slug: string;
    subSlug: string;
  }>;
}

export async function generateStaticParams() {
  const { data: subServices } = await supabase
    .from('sub_services')
    .select('slug, service_id, services(slug)');

  if (!subServices) return [];

  const paramsList: Array<{ slug: string; subSlug: string }> = [];

  for (const sub of subServices) {
    const parentService = sub.services as unknown as { slug: string } | null;
    if (parentService && typeof parentService.slug === 'string') {
      paramsList.push({
        slug: parentService.slug,
        subSlug: sub.slug,
      });
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: SubServicePageProps): Promise<Metadata> {
  const { slug, subSlug } = await params;

  const { data: service } = await supabase
    .from('services')
    .select('id')
    .eq('slug', slug)
    .single();

  if (!service) return {};

  const { data: subService } = await supabase
    .from('sub_services')
    .select('title, description, seo_title, seo_description, slug')
    .eq('service_id', service.id)
    .eq('slug', subSlug)
    .single();

  if (!subService) return {};

  const title = subService.seo_title || subService.title;
  const description = subService.seo_description || subService.description;
  const canonicalUrl = `https://yourdomain.com/services/${slug}/${subService.slug}`;

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

export default async function SubServicePage({ params }: SubServicePageProps) {
  const { slug, subSlug } = await params;

  const { data: service } = await supabase
    .from('services')
    .select('id, title, slug')
    .eq('slug', slug)
    .single();

  if (!service) {
    notFound();
  }

  const { data: subService } = await supabase
    .from('sub_services')
    .select('*')
    .eq('service_id', service.id)
    .eq('slug', subSlug)
    .single();

  if (!subService) {
    notFound();
  }

  const linkMappings = await getDynamicKeywordMappings();
  const rawContent = subService.content_html || subService.description || '';
  const currentPath = `/services/${service.slug}/${subService.slug}`;
  const processedContent = applyInternalLinks(rawContent, linkMappings, currentPath);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Dentist',
        '@id': 'https://smilevip.net/#dentist',
        name: 'Cabinet dentaire Dr rezgui Houssem',
        url: 'https://smilevip.net',
      },
      {
        '@type': 'MedicalProcedure',
        '@id': `https://smilevip.net/services/${service.slug}/${subService.slug}`,
        name: subService.title,
        description: subService.seo_description || subService.description || '',
        url: `https://smilevip.net/services/${service.slug}/${subService.slug}`,
        recognizingAuthority: {
          '@id': 'https://smilevip.net/#dentist',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen pb-20" style={{ paddingTop: '160px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">
        <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest font-medium mb-8" style={{ color: 'var(--text-muted)' }}>
          <Link href="/" className="hover:text-[#C3A469] transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#C3A469] transition-colors">
            Services
          </Link>
          <span>/</span>
          <Link href={`/services/${service.slug}`} className="hover:text-[#C3A469] transition-colors">
            {service.title}
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--accent-color)' }}>{subService.title}</span>
        </nav>

        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-normal mb-4" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', textAlign: 'center' }}>
            {subService.title}
          </h1>
          <span className="gold-line mb-6 mx-auto"></span>

          {subService.description && (
            <p className="text-xl leading-relaxed font-light max-w-3xl mx-auto" style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
              {subService.description}
            </p>
          )}
        </header>

        <article
          className="prose max-w-none leading-relaxed mb-12 p-8 bg-white"
          style={{
            color: 'var(--text-dark)',
            border: '1px solid rgba(42, 51, 44, 0.08)',
            boxShadow: 'var(--card-shadow)',
          }}
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />

        <WhatsAppCta serviceTitle={subService.title} />
      </div>
    </main>
  );
}
