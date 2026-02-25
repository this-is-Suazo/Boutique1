import Image from 'next/image';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, User } from 'lucide-react';

export function HeroAtelier() {
  return (
    <section className="hero-atelier-wrapper" id="top">
      <div className="hero-atelier-frame">
        {/* Split Backgrounds */}
        <div className="split-left"></div>
        <div className="split-right"></div>

        {/* Navbar */}
        <nav className="atelier-nav">
          <div className="nav-left">
            <Link href="#">Home</Link>
            <Link href="#">Shop</Link>
            <Link href="#">Categories</Link>
          </div>
          <div className="nav-center">
            <span>ATELIER</span>
          </div>
          <div className="nav-right">
            <Link href="#">Sale</Link>
            <Link href="#">About</Link>
            <div className="nav-icons">
              <button><Search size={18} strokeWidth={1.5} /></button>
              <button><Heart size={18} strokeWidth={1.5} /></button>
              <button><ShoppingBag size={18} strokeWidth={1.5} /></button>
              <button><User size={18} strokeWidth={1.5} /></button>
            </div>
          </div>
        </nav>

        {/* Giant Typography */}
        <div className="giant-text-container">
          <div className="giant-text text-left">ATELIER</div>
          <div className="giant-text text-right">ATELIER</div>
        </div>

        {/* Model */}
        <div className="atelier-model">
          {/* Ideal: Replace with a transparent PNG model */}
          <Image 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
            alt="Atelier Model"
            width={800}
            height={1000}
            priority
            className="model-img"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Product Cards */}
        <div className="floating-card card-a">
          <Image src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=200&auto=format&fit=crop" width={60} height={80} alt="Trousers" referrerPolicy="no-referrer" />
          <div className="card-info">
            <h4>Velvet Tuxedo-Stripe Flared Trousers in Red</h4>
            <p className="price">$ 188.00 USD</p>
            <div className="rating">★★★★★</div>
          </div>
          <button className="add-btn">+</button>
        </div>

        <div className="floating-card card-b">
          <Image src="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=200&auto=format&fit=crop" width={60} height={80} alt="Blazer" referrerPolicy="no-referrer" />
          <div className="card-info">
            <h4>Single Velvet Blazer in Red</h4>
            <p className="price">$ 268.00 USD</p>
            <div className="rating">★★★★★</div>
          </div>
          <button className="add-btn">+</button>
        </div>

        <div className="floating-card card-c">
          <Image src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=200&auto=format&fit=crop" width={60} height={80} alt="Shoes" referrerPolicy="no-referrer" />
          <div className="card-info">
            <h4>Womens Designer Shoe</h4>
            <p className="price">$ 270.00 USD</p>
            <div className="rating">★★★★☆</div>
          </div>
          <button className="add-btn">+</button>
        </div>

        {/* Copy & CTA */}
        <div className="atelier-copy">
          <p>Craft a visual identity that feels personal,<br/>yet instantly recognizable. Explore our<br/>collection and define who you are.</p>
          <Link href="#new-releases" className="atelier-cta">Shop Now</Link>
        </div>

      </div>
    </section>
  );
}
