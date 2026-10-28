import Link from 'next/link';

export default function HomeImplantsBanner() {
  return (
    <section className="home-implants-banner">
      <div className="container">
        <div className="home-implants-banner-content">
          <Link href="/services/implants-dentaires" className="home-implants-banner-link">
            Implants dentaires a Tunis
          </Link>
          <p className="home-implants-banner-desc">
            Remplacement permanent et naturel de vos dents manquantes.
          </p>
        </div>
      </div>
    </section>
  );
}
