import { Reveal } from './Reveal';

const testimonials = [
  {
    quote: "The fit and quality exceeded my expectations. The fabric feels premium and the silhouette looks polished without being uncomfortable.",
    author: "María J.",
    role: "Content Creator",
  },
  {
    quote: "I found outfits for two different events in one order. The occasion categories made it easy to browse exactly what I needed.",
    author: "Daniela R.",
    role: "Creative Director",
  },
];

export function Testimonials() {
  return (
    <section className="shop-section testimonials">
      <Reveal className="section-head" delay={0.1}>
        <p className="eyebrow">SOCIAL PROOF</p>
        <h2>What Our Customers Say</h2>
      </Reveal>

      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <Reveal key={index} delay={0.1 * index} className="testimonial-card">
            <div className="quote-mark">“</div>
            <p>{testimonial.quote}</p>
            <h4>{testimonial.author}</h4>
            <span>{testimonial.role}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
