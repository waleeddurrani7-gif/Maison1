import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../constants';
import { Sparkles, ShoppingBag, Eye } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();
  
  const [revealLayout, setRevealLayout] = useState(false);
  const [preloaderActive, setPreloaderActive] = useState(true);

  // We feature our signature master piece: "The Silent Anchor" by Julian Thorne
  const featuredProduct = PRODUCTS.find(p => p.id === '1') || PRODUCTS[0];

  useEffect(() => {
    // 1. Reveal stage layouts shortly after mount
    const revealTimer = setTimeout(() => {
      setRevealLayout(true);
    }, 150);

    // 2. Completely unmount loader curtains after transition finishes (1.8s) to free up DOM interaction
    const loaderTimer = setTimeout(() => {
      setPreloaderActive(false);
    }, 1800);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-espresso select-none py-16 sm:py-24">
      {/* 
        Aesthetic Curtain Reveal:
        Three organic linens sliding upwards to completely reveal the art gallery.
        Once completed, we clear them from the DOM to ensure touch/clicks are never blocked on mobile.
      */}
      <AnimatePresence>
        {preloaderActive && (
          <motion.div 
            className="fixed inset-0 z-50 pointer-events-none flex flex-col h-full w-full"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Linen Layer 1: Dark Wash */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: '-100%' }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-espresso z-30"
            />
            {/* Linen Layer 2: Warm Umber */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: '-100%' }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-umber z-20"
            />
            {/* Linen Layer 3: Raw Clay Tint */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: '-100%' }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-clay z-10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 
        Background Canvas Layers with extremely deep vignette 
        to ensure high legibility of the heading text.
      */}
      <motion.div 
        initial={{ scale: 1.05, filter: "blur(8px)" }}
        animate={revealLayout ? { scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 h-full w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-espresso/70 to-black/90 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=82&w=2560"
          alt="Painted Abstraction"
          className="w-full h-full object-cover pointer-events-none opacity-60"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Main Two-Column Container */}
      <div className="lux-container relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column Left: Visual Heading, Subtext and Core CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={revealLayout ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-terracotta/30 bg-espresso/60 backdrop-blur-md rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.35em] font-medium text-latte"
            >
              <Sparkles size={11} className="text-terracotta animate-pulse" />
              <span>Studio Curation — Archive 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={revealLayout ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl min-[360px]:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-serif text-white leading-[1.08] tracking-tight max-w-2xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] font-bold mb-4"
            >
              Art made by <span className="italic text-terracotta relative">two hearts<span className="absolute bottom-1 left-0 w-full h-[6px] bg-terracotta/20 rounded-full blur-[1px]" /></span>, <br className="hidden sm:block" />
              for spaces <br className="sm:hidden" /> that feel alive.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={revealLayout ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-latte/95 leading-relaxed font-light font-sans max-w-xl pb-4 font-serif italic"
            >
              A curated, limited-release of contemporary pieces designed by international artists, selected by hand — to turn your space into deep emotion, not decoration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={revealLayout ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button 
                onClick={() => navigate('/shop')}
                className="bg-terracotta text-white px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-espresso transition-all transform hover:-translate-y-0.5 shadow-2xl active:scale-[0.98] cursor-pointer"
              >
                Explore The Collection
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="bg-espresso/50 border border-white/20 backdrop-blur-sm text-stone px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-espresso transition-all transform hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                Meet The Studio
              </button>
            </motion.div>
          </div>

          {/* Column Right: Gorgeous Floating Interactive Preview Card (Answering "add floating card") */}
          <div className="lg:col-span-5 flex justify-center items-center w-full mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={revealLayout ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1.6, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-full max-w-[370px] bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-ff-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/20 transition-all duration-700"
            >
              {/* Highlight Glow Effect behind card */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-terracotta/20 to-umber/20 rounded-2xl blur-2xl opacity-45 group-hover:opacity-75 transition-opacity pointer-events-none" />

              {/* Card visual art link */}
              <Link to={`/product/${featuredProduct.id}`} className="block relative aspect-[4/5] overflow-hidden rounded-xl bg-black mb-5">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Micro Label */}
                <div className="absolute top-3 left-3 bg-espresso/80 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[8px] uppercase tracking-[0.15em] font-bold text-terracotta rounded">
                  Piece of the Season
                </div>
              </Link>

              {/* Information Row */}
              <div className="space-y-3 relative z-10 text-stone">
                <div className="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-[#d8c3a5]">
                  <span>{featuredProduct.collection}</span>
                  <span className="text-terracotta font-bold text-xs">
                    {formatPrice(featuredProduct.price)}
                  </span>
                </div>

                <div className="border-b border-white/10 pb-3">
                  <h3 className="font-serif text-xl text-white group-hover:text-terracotta transition-colors">
                    {featuredProduct.title}
                  </h3>
                  <p className="text-[11px] font-mono text-stone/60">
                    by Julian Thorne
                  </p>
                </div>

                {/* Micro Actions */}
                <div className="flex gap-2.5 pt-1.5">
                  <button 
                    onClick={() => addToCart(featuredProduct)}
                    className="flex-1 bg-white hover:bg-terracotta hover:text-white text-espresso transition-all duration-300 py-3 rounded-lg text-[9px] uppercase tracking-[0.15em] font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md active:scale-95"
                  >
                    <ShoppingBag size={11} /> Acquire Original
                  </button>
                  <Link 
                    to={`/product/${featuredProduct.id}`}
                    className="px-4 border border-white/10 hover:border-white/30 text-stone hover:text-white transition-all py-3 rounded-lg text-[9px] uppercase tracking-[0.15em] font-medium flex items-center justify-center cursor-pointer"
                  >
                    <Eye size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Canvas Edge Spot */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />
    </section>
  );
}
