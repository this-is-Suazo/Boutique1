import { Reveal } from './Reveal';

export function TrustStrip() {
  const items = [
    {
      title: 'Fast Shipping',
      desc: 'Express delivery available',
    },
    {
      title: 'Easy Returns',
      desc: '14-day return window',
    },
    {
      title: 'Assured Quality',
      desc: 'Premium fabrics, tested fit',
    },
    {
      title: 'Styled by Occasion',
      desc: 'Curated sets for every moment',
    },
  ];

  return (
    <section className="trust-strip">
      {items.map((item, index) => (
        <Reveal key={index} delay={0.1 * index} className="trust-item">
          <strong>{item.title}</strong>
          <span>{item.desc}</span>
        </Reveal>
      ))}
    </section>
  );
}
