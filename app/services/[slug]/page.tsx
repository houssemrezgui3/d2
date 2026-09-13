import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { applyInternalLinks, getDynamicKeywordMappings } from '@/lib/seo-links';
import WhatsAppCta from '@/components/WhatsAppCta';

export const revalidate = 60;

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const { data: services } = await supabase.from('services').select('slug');
  return (services || []).map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: page } = await supabase
    .from('services')
    .select('title, description, seo_title, seo_description, slug')
    .eq('slug', slug)
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

interface SubService {
  id: string;
  slug: string;
  title: string;
  description: string;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const { data: service } = await supabase
    .from('services')
    .select('*, sub_services(*)')
    .eq('slug', slug)
    .single();

  if (!service) {
    notFound();
  }

  const linkMappings = await getDynamicKeywordMappings();
  const rawContent = service.content_html || service.description || '';
  const currentPath = `/services/${service.slug}`;
  const processedContent = applyInternalLinks(rawContent, linkMappings, currentPath);
  const subServices: SubService[] = service.sub_services || [];
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
        '@id': `https://smilevip.net/services/${service.slug}`,
        name: service.title,
        description: service.seo_description || service.description || '',
        url: `https://smilevip.net/services/${service.slug}`,
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
          <span style={{ color: 'var(--accent-color)' }}>{service.title}</span>
        </nav>

        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-normal mb-4" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', textAlign: 'center' }}>
            {service.h1_title || service.seo_title || service.title}
          </h1>
          <span className="gold-line mx-auto mb-6"></span>

          {service.description && (
            <p className="text-xl leading-relaxed font-light max-w-3xl mx-auto" style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
              {service.description}
            </p>
          )}
        </header>

        {subServices.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-8" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)' }}>
              Sous-services & Prestations Spécialisées
            </h2>
            <div className="services-grid">
              {subServices.map((sub) => {
                const isClickable = service.slug === 'implants-dentaires';

                return (
                  <article
                    key={sub.id}
                    className="service-card"
                  >
                    <div className="service-card-body">
                      <div className="service-card-icon" aria-hidden="true">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 2C9.5 2 7 4 7 7c0 2.5 1 4.5 2 6l1 5c.2 1 1 1.5 2 1.5s1.8-.5 2-1.5l1-5c1-1.5 2-3.5 2-6 0-3-2.5-5-5-5z" />
                        </svg>
                      </div>
                      <h3 className="service-card-title">
                        {sub.title}
                      </h3>
                      {sub.description && (
                        <p className="service-card-desc">
                          {sub.description}
                        </p>
                      )}
                    </div>

                    {isClickable && (
                      <Link
                        href={`/services/${service.slug}/${sub.slug}`}
                        className="service-card-cta"
                      >
                        <span>Voir les détails</span>
                        <span className="cta-arrow" aria-hidden="true">&rarr;</span>
                      </Link>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        <article
          className="prose max-w-none leading-relaxed mb-16 p-8 bg-white"
          style={{
            color: 'var(--text-dark)',
            border: '1px solid rgba(42, 51, 44, 0.08)',
            boxShadow: 'var(--card-shadow)',
          }}
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />

        <WhatsAppCta serviceTitle={service.title} />
      </div>
    </main>
  );
}
