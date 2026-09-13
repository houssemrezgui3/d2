import { Metadata } from 'next';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Nos Services Dentaires | Cabinet Dentaire Dr Rezgui Houssem',
  description: 'Découvrez l\'ensemble de nos soins dentaires haut de gamme à Tunis : implants, dentisterie esthétique, orthodontie, urgences et soins pédiatriques.',
};

interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  created_at: string;
}

export default async function ServicesPage() {
  const { data: services, error } = await supabase
    .from('services')
    .select('id, slug, title, description, created_at')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching services:', error);
  }

  const items: ServiceItem[] = services || [];

  return (
    <main className="min-h-screen pb-20" style={{ paddingTop: '160px' }}>
      <div className="container">
        <header className="text-center mb-16 w-full">
          <span className="seo-eyebrow">NOTRE EXPERTISE</span>
          <h1 className="text-4xl sm:text-5xl font-normal mb-4 text-center" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', textAlign: 'center' }}>
            Nos Services Dentaires à Tunis
          </h1>
          <span className="gold-line mx-auto mb-6"></span>
          <p className="seo-subtext text-base sm:text-lg">
            Une prise en charge d'excellence combinant technologies de pointe et soins personnalisés pour la santé et la beauté de votre sourire.
          </p>
        </header>

        <div className="services-grid">
          {items.map((service) => (
            <article
              key={service.id}
              className="service-card"
            >
              <div className="service-card-body">
                <div className="service-card-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C9.5 2 7 4 7 7c0 2.5 1 4.5 2 6l1 5c.2 1 1 1.5 2 1.5s1.8-.5 2-1.5l1-5c1-1.5 2-3.5 2-6 0-3-2.5-5-5-5z" />
                  </svg>
                </div>
                <h2 className="service-card-title">
                  {service.title}
                </h2>
                <p className="service-card-desc">
                  {service.description}
                </p>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="service-card-cta"
              >
                <span>Voir les détails</span>
                <span className="cta-arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
