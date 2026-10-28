import HeroSection from '@/components/HeroSection';
import HomeImplantsBanner from '@/components/HomeImplantsBanner';
import SeoBlock from '@/components/SeoBlock';
import ReviewsSection from '@/components/ReviewsSection';
import LocationSection from '@/components/LocationSection';
import ConsultSection from '@/components/ConsultSection';
import HomeAgencyCredit from '@/components/HomeAgencyCredit';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HomeImplantsBanner />
      <SeoBlock />
      <ReviewsSection />
      <ConsultSection />
      <LocationSection />
      <HomeAgencyCredit />
    </main>
  );
}
