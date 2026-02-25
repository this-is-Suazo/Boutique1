import { HeroAtelier } from '@/components/HeroAtelier';
import { HeroBridge } from '@/components/HeroBridge';
import { TrustStrip } from '@/components/TrustStrip';
import { NewReleases } from '@/components/NewReleases';
import { PromoBanner } from '@/components/PromoBanner';
import { OccasionStyles } from '@/components/OccasionStyles';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { GSAPAnimations } from '@/components/GSAPAnimations';

export default function Home() {
  return (
    <main className="boutique-site">
      <GSAPAnimations />
      <HeroAtelier />
      <HeroBridge />
      <TrustStrip />
      <NewReleases />
      <PromoBanner />
      <OccasionStyles />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
