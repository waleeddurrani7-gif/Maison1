import { Mail, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-24 bg-espresso text-stone border-t border-espresso/10">
      <div className="lux-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-serif mb-8 block tracking-tighter text-white">Maison Lune Studio</Link>
            <p className="text-latte/40 font-light max-w-sm leading-relaxed mb-8 font-serif italic text-lg">
              Art made by two hearts, for spaces that feel alive. A curated collection of contemporary pieces designed by artists.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-terracotta hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-terracotta hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-terracotta hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-bold block mb-8 font-mono">Navigation</span>
            <ul className="space-y-4 text-sm font-light text-latte/80 font-sans">
              <li><Link to="/collections" className="hover:text-terracotta transition-colors">Collections</Link></li>
              <li><Link to="/artist-stories" className="hover:text-terracotta transition-colors">Artist Stories</Link></li>
              <li><Link to="/journal" className="hover:text-terracotta transition-colors">Journal</Link></li>
              <li><Link to="/shop" className="hover:text-terracotta transition-colors">Curated Shop</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-bold block mb-8 font-mono">Experience</span>
            <ul className="space-y-4 text-sm font-light text-latte/80 font-sans">
              <li><Link to="/shipping-returns" className="hover:text-terracotta transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/sustainability" className="hover:text-terracotta transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:text-terracotta transition-colors">Talk To Us</Link></li>
              <li><Link to="/privacy" className="hover:text-terracotta transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-latte/5 gap-8">
          <p className="text-[10px] uppercase tracking-widest text-latte/30 font-medium font-mono">
            &copy; {new Date().getFullYear()} Maison Lune Studio — Curated for Residence.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-latte/30 font-medium font-mono">
            <Link to="/privacy" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Legal</Link>
            <p className="text-terracotta/60">Dubai — London</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
