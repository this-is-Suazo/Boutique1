import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from './Reveal';

const occasions = [
  {
    name: 'Evening Wear',
    image: 'https://plus.unsplash.com/premium_photo-1671105035554-7f8c2a587201?q=80&w=627&auto=format&fit=crop',
  },
  {
    name: 'Party Wear',
    image: 'https://plus.unsplash.com/premium_photo-1686750875748-d00684d36b1e?q=80&w=687&auto=format&fit=crop',
  },
  {
    name: 'Festive Wear',
    image: 'https://plus.unsplash.com/premium_photo-1686844462591-393ceae12be0?q=80&w=764&auto=format&fit=crop',
  },
  {
    name: 'Wedding Wear',
    image: 'https://plus.unsplash.com/premium_photo-1675598468920-878ae1e46f14?q=80&w=764&auto=format&fit=crop',
  },
];

export function OccasionStyles() {
  return (
    <section className="shop-section">
      <Reveal className="section-head" delay={0.1}>
        <p className="eyebrow">SEGMENTED BROWSING</p>
        <h2>Occasion Styles</h2>
      </Reveal>

      <div className="occasion-grid">
        {occasions.map((occasion, index) => (
          <Reveal key={occasion.name} delay={0.1 * index}>
            <Link href="#" className="occasion-card block">
              <Image 
                src={occasion.image} 
                alt={occasion.name} 
                width={400}
                height={500}
                referrerPolicy="no-referrer"
              />
              <span>{occasion.name}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
