import Image from 'next/image';
import { Reveal } from './Reveal';

export function HeroBridge() {
  return (
    <section className="hero-bridge">
      <div className="bridge-inner">
        <Reveal className="bridge-copy" delay={0.1}>
          <p className="eyebrow">CURATED TRANSITION</p>
          <h2>From campaign energy to <span>everyday wear</span></h2>
          <p>
            Built for occasion-based browsing, elevated styling, and smooth conversion flow.
            Browse by drop, mood, and event without losing the editorial brand feel.
          </p>
        </Reveal>
        <Reveal className="bridge-banner" delay={0.2}>
          <Image 
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop" 
            alt="Boutique banner" 
            width={1600}
            height={900}
            referrerPolicy="no-referrer"
          />
        </Reveal>
      </div>
    </section>
  );
}
