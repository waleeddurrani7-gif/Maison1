import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS, ARTISTS } from '../constants';
import { formatPrice } from '../lib/currency';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ShoppingBag, ShieldCheck, Globe, Check } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const product = PRODUCTS.find((p) => p.id === id);
  const artist = ARTISTS.find((a) => a.id === product?.artistId);

  if (!product) return <div className="pt-40 text-center font-serif text-cacao">Piece not found.</div>;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-24 min-h-screen bg-stone">
      <Breadcrumbs />
      
      <div className="lux-container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-[4/5] bg-latte overflow-hidden shadow-sm"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="space-y-12">
            <header className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-terracotta font-medium">
                {product.collection}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif leading-tight text-cacao">{product.title}</h1>
              <p className="text-2xl font-mono tracking-tighter text-cacao/80">{formatPrice(product.price)}</p>
            </header>

            <div className="space-y-6">
              <p className="text-lg text-cacao/70 leading-relaxed font-light">
                {product.description}
              </p>
              <p className="text-sm italic text-cacao/50 font-serif border-l border-terracotta/20 pl-4">
                “{product.tagline}”
              </p>
            </div>

            <div className="pt-10 border-t border-cacao/5 space-y-6">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={handleAddToCart}
                  className={`w-full py-5 text-sm uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-3 relative overflow-hidden ${added ? 'bg-terracotta text-white shadow-inner' : 'bg-cacao text-white hover:bg-black shadow-lg hover:shadow-xl hover:-translate-y-0.5'}`}
                >
                  <AnimatePresence mode="wait">
                    {added ? (
                      <motion.div key="check" initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center gap-2">
                        <Check size={18} /> Added to Selection
                      </motion.div>
                    ) : (
                      <motion.div key="bag" initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center gap-2">
                        <ShoppingBag size={18} /> Acquire This Piece
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
                <p className="text-[10px] text-center text-cacao/40 uppercase tracking-widest font-mono">
                  Insured global logistics included
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-12">
                <div className="flex gap-4">
                  <ShieldCheck size={18} className="text-terracotta/60" />
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-semibold mb-1 text-cacao">Certificate</h4>
                    <p className="text-[10px] text-cacao/50 leading-relaxed font-mono">Vault-grade provenance included from the studio.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe size={18} className="text-terracotta/60" />
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-semibold mb-1 text-cacao">Curation</h4>
                    <p className="text-[10px] text-cacao/50 leading-relaxed font-mono">Selected based on emotional frequency and restraint.</p>
                  </div>
                </div>
              </div>
            </div>

            {artist && (
              <div className="pt-12 border-t border-cacao/10 bg-latte/20 p-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-terracotta font-medium block mb-6 font-mono">Creator Biography</span>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-latte overflow-hidden rounded-full">
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-cacao">{artist.name}</h3>
                    <p className="text-xs text-cacao/40 uppercase tracking-widest font-mono">{artist.specialty}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-cacao/60 leading-relaxed font-light italic font-serif">
                  {artist.bio}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
