import { useState, FormEvent } from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/currency';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Checkout() {
  const { cartTotal, clearCart, items } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: 'United Arab Emirates',
  });

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else {
      // Finalize
      setStep(4);
      setTimeout(() => {
        clearCart();
        navigate('/');
      }, 3000);
    }
  };

  if (items.length === 0 && step < 4) {
    navigate('/shop');
    return null;
  }

  return (
    <div className="pt-32 min-h-screen bg-stone">
      <div className="lux-container py-12 max-w-4xl">
        <div className="flex items-center justify-center gap-4 md:gap-12 mb-16">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-mono transition-colors ${step >= s ? 'bg-cacao text-white' : 'bg-latte text-cacao/30'}`}>
                {s}
              </div>
              <span className={`text-[10px] uppercase tracking-widest hidden sm:block ${step >= s ? 'text-cacao' : 'text-cacao/20'}`}>
                {s === 1 ? 'Information' : s === 2 ? 'Review' : 'Payment'}
              </span>
              {s < 3 && <ChevronRight size={14} className="text-cacao/10" />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 4 ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-8 py-20"
            >
              <CheckCircle2 size={64} className="mx-auto text-terracotta" />
              <h1 className="text-4xl font-serif text-cacao">Aquisition Complete</h1>
              <p className="text-cacao/60 font-light max-w-md mx-auto leading-relaxed">
                Your piece is now being inspected and crated. You will receive tracking coordinates shortly.
              </p>
              <p className="text-[11px] uppercase tracking-widest text-terracotta font-medium">Redirecting to gallery...</p>
            </motion.div>
          ) : (
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-16"
            >
              <div className="lg:col-span-3">
                <form onSubmit={handleNext} className="space-y-12">
                  {step === 1 && (
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-cacao/40 font-medium">Email Address</label>
                        <input 
                          required 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-transparent border-b border-cacao/10 py-3 focus:outline-none focus:border-cacao font-light" 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-cacao/40 font-medium">First Name</label>
                          <input 
                            required 
                            className="w-full bg-transparent border-b border-cacao/10 py-3 focus:outline-none focus:border-cacao font-light" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-cacao/40 font-medium">Last Name</label>
                          <input 
                            required 
                            className="w-full bg-transparent border-b border-cacao/10 py-3 focus:outline-none focus:border-cacao font-light" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-cacao/40 font-medium">Shipping Address</label>
                        <input 
                          required 
                          className="w-full bg-transparent border-b border-cacao/10 py-3 focus:outline-none focus:border-cacao font-light" 
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8">
                      <h3 className="text-xl font-serif">Order Verification</h3>
                      <div className="bg-white p-6 border border-cacao/5 space-y-4">
                        <p className="text-sm font-light text-cacao/60"><span className="text-cacao font-medium uppercase tracking-widest text-[10px] mr-4">Contact:</span> {formData.email}</p>
                        <p className="text-sm font-light text-cacao/60"><span className="text-cacao font-medium uppercase tracking-widest text-[10px] mr-4">Shipping:</span> White-glove delivery, Curated Transit</p>
                      </div>
                      <p className="text-sm italic font-serif text-cacao/50">"Every piece is an investment in atmosphere."</p>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-8">
                      <h3 className="text-xl font-serif">Final Transaction</h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-cacao/40 font-medium">Card Number</label>
                          <input 
                            required 
                            placeholder="**** **** **** ****"
                            className="w-full bg-transparent border-b border-cacao/10 py-3 focus:outline-none focus:border-cacao font-mono" 
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-cacao/40 font-medium">Expiry</label>
                            <input required placeholder="MM/YY" className="w-full bg-transparent border-b border-cacao/10 py-3 focus:outline-none focus:border-cacao font-mono" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-cacao/40 font-medium">CVC</label>
                            <input required placeholder="***" className="w-full bg-transparent border-b border-cacao/10 py-3 focus:outline-none focus:border-cacao font-mono" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    {step > 1 && (
                      <button 
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="flex-1 border border-cacao/10 text-cacao py-5 text-[11px] uppercase tracking-widest font-medium hover:bg-latte transition-all"
                      >
                        Back
                      </button>
                    )}
                    <button 
                      type="submit"
                      className="flex-[2] bg-cacao text-white py-5 text-[11px] uppercase tracking-widest font-medium hover:bg-black transition-all"
                    >
                      {step === 3 ? `Complete Transaction — ${formatPrice(cartTotal)}` : 'Continue'}
                    </button>
                  </div>
                </form>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <div className="bg-latte/50 p-6 space-y-6">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold border-b border-cacao/10 pb-3">Selection</h4>
                  <div className="space-y-4">
                    {items.map(item => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-12 h-16 bg-latte overflow-hidden">
                          <img src={item.image} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 text-[11px]">
                          <p className="text-cacao font-medium">{item.title}</p>
                          <p className="text-cacao/40 font-mono mt-1">{formatPrice(item.price)} × {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-cacao/10 pt-4 flex justify-between items-baseline">
                    <span className="text-[11px] uppercase tracking-widest font-medium">Total</span>
                    <span className="text-lg font-mono font-semibold">{formatPrice(cartTotal)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
