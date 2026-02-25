import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="hero-campaign" id="top">
      <nav className="hero-nav">
        <Link href="#">NEW ARRIVALS</Link>
        <Link href="#">COLLECTION (09)</Link>
        <Link href="#">ARCHIVE</Link>
        <Link href="#">JOURNAL</Link>
        <Link href="#">CART (01)</Link>
      </nav>

      <div className="hero-display" aria-hidden="true">
        <div className="line line-1">WINTER</div>
        <div className="line line-2">THE</div>
        <div className="line line-3">LAYER</div>
      </div>

      <Reveal className="hero-side hero-left" delay={0.2}>
        <p>Elevated Casual</p>
        <p>Urban Form</p>
        <p>Daily Wear</p>
        <p>Off-Duty</p>
        <p>The Modern Set</p>
      </Reveal>

      <Reveal className="hero-side hero-right" delay={0.3}>
        <p>Modern clothing</p>
        <p>Engineered for the</p>
        <p>Future wardrobe</p>
        <Link href="#new-releases" className="hero-link">VIEW OUR COLLECTION +</Link>
      </Reveal>

      <Reveal className="hero-tag" delay={0.1}>NEW ARRIVAL</Reveal>

      <Reveal className="hero-model" delay={0.1}>
        <Image 
          src="https://plus.unsplash.com/premium_photo-1686839181367-febb561faa53?q=80&w=900&auto=format&fit=crop" 
          alt="Editorial fashion model" 
          width={900}
          height={1200}
          priority
          referrerPolicy="no-referrer"
        />
      </Reveal>

      <Reveal className="hero-meta" delay={0.4}>
        <p>Fashion Director — Paris</p>
        <p>Alex Pereira</p>
        <p>Winner, Visual Design Award 2024</p>
      </Reveal>

      <Reveal delay={0.5}>
        <Link href="#new-releases" className="hero-cta">SHOP NOW</Link>
      </Reveal>
    </section>
  );
}
