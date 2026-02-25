import Image from 'next/image';
import { Reveal } from './Reveal';

const products = [
  {
    id: 1,
    name: 'The Classic Corset Shift',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=715&auto=format&fit=crop',
    badge: 'NEW',
  },
  {
    id: 2,
    name: 'Midnight Back-Tie Dress',
    price: '$105',
    image: 'https://plus.unsplash.com/premium_photo-1671649240322-2124cd07eaae?q=80&w=627&auto=format&fit=crop',
    badge: 'LIMITED',
  },
  {
    id: 3,
    name: 'Weekend Linen Form',
    price: '$89',
    image: 'https://plus.unsplash.com/premium_photo-1673029925648-af80569efc46?q=80&w=687&auto=format&fit=crop',
    badge: 'NEW',
  },
  {
    id: 4,
    name: 'Tailored Formal Shift',
    price: '$115',
    image: 'https://plus.unsplash.com/premium_photo-1685655611311-9f801b43b9fa?q=80&w=627&auto=format&fit=crop',
    badge: 'EDITOR’S PICK',
  },
];

export function NewReleases() {
  return (
    <section className="shop-section" id="new-releases">
      <Reveal className="section-head" delay={0.1}>
        <p className="eyebrow">NEW SEASON</p>
        <h2>Shop New Releases</h2>
        <div className="tabs">
          <button className="tab active">NEW TODAY</button>
          <button className="tab">PARTY LOOKS</button>
          <button className="tab">DAY WEAR</button>
          <button className="tab">BESTSELLERS</button>
        </div>
      </Reveal>

      <div className="product-grid">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={0.1 * index} className="product-card">
            <div className="product-media">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={400}
                height={500}
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <span className="badge">{product.badge}</span>
              )}
            </div>
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
