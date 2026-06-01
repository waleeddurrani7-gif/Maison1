import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { formatPrice } from '../lib/currency';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

export default function ProductGrid() {
  const { addToCart } = useCart();

  return (
    <section className="py-24 bg-stone">
      <div className="lux-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-terracotta font-medium block mb-4 font-mono">Storefront</span>
            <h2 className="text-4xl font-serif leading-tight text-espresso">Featured Pieces</h2>
          </div>
          <Link to="/shop" className="text-[11px] uppercase tracking-widest font-medium border-b border-espresso/10 pb-1 hover:border-terracotta transition-colors">View All Archive</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {PRODUCTS.slice(0, 6).map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden mb-8 bg-latte shadow-sm">
                <Link to={`/product/${product.id}`} className="block aspect-[4/5]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/5 transition-colors duration-500" />
                </Link>
                
                {/* Quick Add Button */}
                <button 
                  onClick={() => addToCart(product)}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md text-espresso py-4 text-[10px] uppercase tracking-[0.2em] font-bold translate-y-20 group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center gap-2 hover:bg-espresso hover:text-white"
                >
                  <Plus size={14} /> Quick Add
                </button>

                {/* Scarcity label */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] font-medium border border-espresso/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Limited Release
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-terracotta font-medium block mb-1 font-mono">
                      {product.collection}
                    </span>
                    <h3 className="text-xl font-serif text-espresso leading-none">{product.title}</h3>
                  </div>
                  <span className="text-sm font-light text-espresso/80 font-mono tracking-tighter">
                    {formatPrice(product.price)}
                  </span>
                </div>
                
                <p className="text-[12px] italic text-espresso/60 font-serif border-l border-terracotta/20 pl-4 py-1">
                  “{product.tagline}”
                </p>

                <Link to={`/product/${product.id}`} className="w-full mt-4 bg-transparent border border-espresso/5 py-4 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-espresso hover:text-white transition-all cursor-pointer flex justify-center">
                  View Detail
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link to="/shop" className="inline-block bg-espresso text-white px-12 py-5 text-sm uppercase tracking-[0.2em] font-medium hover:bg-umber transition-all hover:-translate-y-1 shadow-lg">
            Shop The Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
