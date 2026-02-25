import Link from 'next/link';
import { Reveal } from './Reveal';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Reveal className="footer-brand" delay={0.1}>
          <h3>LOOPSIPUM</h3>
          <p>Modern clothing engineered for long-term wear.</p>
        </Reveal>
        <Reveal className="footer-col" delay={0.2}>
          <h4>Shop</h4>
          <Link href="#">New Arrivals</Link>
          <Link href="#">Collections</Link>
          <Link href="#">Occasions</Link>
          <Link href="#">Archive</Link>
        </Reveal>
        <Reveal className="footer-col" delay={0.3}>
          <h4>Support</h4>
          <Link href="#">Shipping</Link>
          <Link href="#">Returns</Link>
          <Link href="#">Sizing</Link>
          <Link href="#">Contact</Link>
        </Reveal>
        <Reveal className="footer-col" delay={0.4}>
          <h4>Journal</h4>
          <Link href="#">Editorial</Link>
          <Link href="#">Campaigns</Link>
          <Link href="#">Care</Link>
          <Link href="#">Materials</Link>
        </Reveal>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Loopsipum. All rights reserved.</span>
        <span className="status"><i></i> Store Online</span>
      </div>
    </footer>
  );
}
