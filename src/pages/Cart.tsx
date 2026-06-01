import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/currency';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="pt-32 min-h-screen bg-stone">
      <div className="lux-container py-12">
        <header className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-cacao/40 font-medium block mb-4">Your Selection</span>
          <h1 className="text-4xl md:text-5xl font-serif">Shopping Bag</h1>
        </header>

        {items.length === 0 ? (
          <div className="text-center py-20 border-y border-cacao/5">
            <ShoppingBag size={48} className="mx-auto mb-6 text-cacao/10" />
            <p className="text-xl font-serif mb-8">Your bag is empty.</p>
            <Link 
              to="/shop" 
              className="inline-block bg-cacao text-white px-12 py-5 text-sm uppercase tracking-[0.2em] font-medium hover:bg-black transition-all"
            >
              Explore The Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            <div className="lg:col-span-2 space-y-12">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col sm:flex-row gap-8 border-b border-cacao/5 pb-12"
                  >
                    <div className="w-full sm:w-40 aspect-[4/5] bg-latte overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-cacao/40 font-medium">{item.collection}</span>
                          <h3 className="text-xl font-serif mt-1">{item.title}</h3>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-cacao/30 hover:text-terracotta transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-sm font-mono text-cacao/60">{formatPrice(item.price)}</p>
                      
                      <div className="flex items-center gap-6 pt-4">
                        <div className="flex items-center border border-cacao/10">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-3 hover:bg-cacao/5 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-12 text-center text-sm font-mono">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-3 hover:bg-cacao/5 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-mono font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <aside className="lg:sticky lg:top-32 h-fit bg-white p-8 border border-cacao/5 shadow-sm">
              <h3 className="text-lg font-serif mb-8 border-b border-cacao/5 pb-4">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-cacao/60">Subtotal</span>
                  <span className="font-mono">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cacao/60">Shipping</span>
                  <span className="text-[10px] uppercase tracking-widest font-medium text-terracotta">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cacao/60">International Insurance</span>
                  <span className="text-[10px] uppercase tracking-widest font-medium text-terracotta">Included</span>
                </div>
              </div>
              <div className="border-t border-cacao/5 pt-6 mb-10 flex justify-between items-baseline">
                <span className="text-lg font-serif">Total</span>
                <span className="text-xl font-mono font-semibold">{formatPrice(cartTotal)}</span>
              </div>
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-cacao text-white py-5 text-sm uppercase tracking-[0.2em] font-medium hover:bg-black transition-all flex items-center justify-center gap-3"
              >
                Proceed to Checkout <ArrowRight size={16} />
              </button>
              <p className="text-[10px] text-center mt-6 text-cacao/30 uppercase tracking-[0.2em]">
                Secure boutique transaction
              </p>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
