import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from './Reveal';

export function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-image">
        <Image 
          src="https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1600&auto=format&fit=crop" 
          alt="Promotional campaign" 
          width={1600}
          height={900}
          referrerPolicy="no-referrer"
        />
      </div>
      <Reveal className="promo-overlay" delay={0.2}>
        <p className="eyebrow">SUMMER INCOMING</p>
        <h3>30% OFF</h3>
        <p>Capsule styles curated for warm-weather events. Limited sizes available.</p>
        <Link href="#" className="btn-dark">SHOP NOW</Link>
      </Reveal>
    </section>
  );
}
