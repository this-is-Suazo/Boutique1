'use client';

import Image from 'next/image';
import { Reveal } from './Reveal';

export function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-bg">
        <Image 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop" 
          alt="Newsletter fashion" 
          width={1600}
          height={900}
          referrerPolicy="no-referrer"
        />
      </div>
      <Reveal className="newsletter-content" delay={0.2}>
        <p className="eyebrow">PRIVATE ACCESS</p>
        <h2>Join the newsletter</h2>
        <p>Get drop alerts, early access, and styling notes before public release.</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Join</button>
        </form>
      </Reveal>
    </section>
  );
}
