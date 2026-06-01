import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, ArrowRight, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { useNavigate } from 'react-router-dom';

export default function Popups() {
  const navigate = useNavigate();
  const { cartItems, cartCount, cartTotal } = useCart();
  const { formatPrice } = useCurrency();

  const [showWelcome, setShowWelcome] = useState(false);
  const [showExit, setShowExit] = useState(false);
  const [showCartReminder, setShowCartReminder] = useState(false);
  const [email, setEmail] = useState('');
  const [hasConverted, setHasConverted] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);

  // 15-minute countdown timer logic for urgency
  const [timeLeft, setTimeLeft] = useState(900); // 15 mins in seconds

  useEffect(() => {
    // 1. Welcome subscription popup after 4 seconds (if cart is empty)
    const timer = setTimeout(() => {
      const shown = localStorage.getItem('maison_welcome_shown');
      if (!shown && cartCount === 0) {
        setShowWelcome(true);
      }
    }, 4000);

    // 2. Abandoned bottom-right reminder appears after 12 seconds if cart has items
    const reminderTimer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('maison_reminder_dismissed');
      if (cartCount > 0 && !dismissed) {
        setShowCartReminder(true);
      }
    }, 12000);

    // 3. Exit Intent interceptor
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0) {
        const exitShown = localStorage.getItem('maison_exit_shown');
        if (!exitShown) {
          setShowExit(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      clearTimeout(reminderTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cartCount]);

  // Countdown clock tick
  useEffect(() => {
    if (!showExit && !showCartReminder) return;
    const ticker = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(ticker);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(ticker);
  }, [showExit, showCartReminder]);

  const formatCountdown = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const closeWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem('maison_welcome_shown', 'true');
  };

  const closeExit = () => {
    setShowExit(false);
    localStorage.setItem('maison_exit_shown', 'true');
  };

  const closeReminder = () => {
    setShowCartReminder(false);
    sessionStorage.setItem('maison_reminder_dismissed', 'true');
  };

  const handleSubmitWelcome = (e: FormEvent) => {
    e.preventDefault();
    setHasConverted(true);
    localStorage.setItem('maison_converted', 'true');
    setTimeout(() => {
      closeWelcome();
      setHasConverted(false);
    }, 2000);
  };

  const handleClaimOffer = () => {
    setDiscountApplied(true);
    localStorage.setItem('maison_discount_claimed', 'LUNE15');
    // Direct checkout or cart navigation
    setTimeout(() => {
      setShowExit(false);
      navigate('/cart');
    }, 1000);
  };

  return (
    <AnimatePresence>
      {/* 
        A. WELCOME MAILING LIST POPUP
        Only shows if cart is empty on initial research.
      */}
      {showWelcome && !hasConverted && (
        <div key="welcome" className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-[#fdfdfc] max-w-md w-full p-8 relative shadow-2xl border border-espresso/10"
          >
            <button 
              onClick={closeWelcome} 
              className="absolute top-4 right-4 text-espresso/40 hover:text-espresso p-1 cursor-pointer"
            >
              <X size={18} />
            </button>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#c68a4c] font-bold block mb-4 font-mono">Exclusive Entry Offer</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-espresso mb-3 leading-tight">A quiet gift for your space</h2>
            <p className="text-espresso/70 mb-8 text-xs sm:text-sm leading-relaxed font-light">
              Join our private list and receive early access to new seasonal drops + <strong className="text-espresso font-semibold">10% off</strong> your first original canvas.
            </p>
            <form onSubmit={handleSubmitWelcome} className="space-y-4">
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent border-b border-espresso/20 py-3 text-sm focus:outline-none focus:border-terracotta transition-colors text-espresso font-serif placeholder:text-espresso/30"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="w-full bg-espresso text-[#fdfdfc] py-4 text-xs tracking-widest uppercase font-bold hover:bg-terracotta transition-colors cursor-pointer">
                Unlock Access
              </button>
            </form>
            <button onClick={closeWelcome} className="w-full text-center mt-6 text-[10px] uppercase tracking-wider text-espresso/30 hover:text-espresso/60 transition-colors font-mono cursor-pointer">
              No noise. Just art.
            </button>
          </motion.div>
        </div>
      )}

      {/* 
        B. HIGH CONVERSION ABANDONED CART EXIT POPUP
        If cart contains items on exit intent, we intercept with this masterpiece popup.
      */}
      {showExit && !discountApplied && (
        <div key="exit" className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            className="bg-espresso text-stone max-w-lg w-full rounded-xl overflow-hidden relative shadow-ff-xl border border-white/10"
          >
            <button 
              onClick={closeExit} 
              className="absolute top-4 right-4 text-stone/40 hover:text-white p-1.5 rounded-full hover:bg-white/5 z-20 cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Header Promo Banner */}
            <div className="bg-terracotta text-white px-6 py-2.5 text-[9px] uppercase tracking-[0.25em] font-mono font-bold flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              Hold Your Placement: 15% Urgent discount Reserved
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.3em] text-terracotta font-bold font-mono">Before you step away</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-white leading-tight">These pieces rarely rest.</h2>
                <p className="text-stone/60 text-xs sm:text-sm leading-relaxed max-w-sm">
                  Limited series collections often sell out complete runs. We have held yours in high-vault storage for <span className="text-[#f1c40f] font-mono font-bold">{formatCountdown(timeLeft)}</span> before release.
                </p>
              </div>

              {/* Display items left behind */}
              {cartCount > 0 && (
                <div className="bg-white/5 border border-white/5 rounded-lg p-4 max-h-[160px] overflow-y-auto space-y-3">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#d8c3a5]/50 block font-mono">Your Curation Bag ({cartCount})</span>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center justify-between">
                      <div className="flex gap-3 items-center">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-10 h-12 object-cover rounded" 
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-xs font-serif text-white leading-none">{item.title}</p>
                          <p className="text-[10px] font-mono text-stone/40 mt-1">{item.collection}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-terracotta">{formatPrice(item.price)}</span>
                    </div>
                  ))}
                  <div className="border-t border-white/5 pt-2 flex justify-between items-center text-xs">
                    <span className="font-light text-stone/50 font-serif italic">Pending curation total</span>
                    <span className="font-mono text-white font-semibold">{formatPrice(cartTotal)}</span>
                  </div>
                </div>
              )}

              {/* Offer Claim CTA */}
              <div className="pt-3 space-y-3">
                <button
                  onClick={handleClaimOffer}
                  className="w-full bg-[#fdfdfc] text-espresso py-4 rounded-lg text-xs uppercase tracking-[0.2em] font-bold hover:bg-terracotta hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  Apply 15% Code: <strong className="font-bold underline">LUNE15</strong> <ArrowRight size={13} />
                </button>
                <div className="text-center">
                  <span className="text-[9px] text-[#f5eae0] font-mono uppercase tracking-[0.15em]">Expires in {formatCountdown(timeLeft)} • Complimentary White Glove Delivery</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* 
        C. GENTLE STICKY CORNER RECOVER BADGE (ABANDONED BAG DRAWER)
        Quiet luxury floating sticky overlay in bottom-right corner.
      */}
      {showCartReminder && !showExit && cartCount > 0 && (
        <motion.div
          key="cart-reminder"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[90] max-w-[340px] w-full bg-[#fdfdfc] border border-espresso/15 shadow-2xl p-4 rounded-xl flex gap-4 text-espresso max-sm:left-4 max-sm:right-4 max-sm:w-[calc(100%-2rem)]"
        >
          <div className="relative">
            <div className="w-12 h-14 bg-espresso font-serif text-white flex flex-col items-center justify-center rounded overflow-hidden">
              <ShoppingBag size={14} className="mb-0.5" />
              <span className="text-xs font-mono font-bold">{cartCount}</span>
            </div>
            <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-terracotta text-[8px] text-white flex items-center justify-center font-bold">!</span>
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <span className="text-[8px] uppercase tracking-widest font-mono text-terracotta font-bold flex items-center gap-1">
                <Flame size={10} className="text-terracotta animate-pulse" /> Limited Release Holdup
              </span>
              <button 
                onClick={closeReminder} 
                className="text-espresso/30 hover:text-espresso p-0.5 cursor-pointer"
              >
                <X size={12} />
              </button>
            </div>
            <p className="text-xs font-serif font-semibold text-espresso truncate mt-1">Don't lose your curation</p>
            <p className="text-[10px] text-espresso/60 leading-tight mt-0.5 font-light">Acquire these original canvases with dynamic localization rates now.</p>
            
            <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-espresso/5">
              <span className="text-xs font-mono font-bold">{formatPrice(cartTotal)}</span>
              <button 
                onClick={() => {
                  setShowCartReminder(false);
                  navigate('/cart');
                }}
                className="text-[9px] uppercase tracking-wider text-terracotta hover:text-espresso font-bold flex items-center gap-1 font-mono cursor-pointer"
              >
                Checkout <ArrowRight size={10} />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Core Success Newsletter Status message */}
      {hasConverted && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 right-8 z-[110] bg-espresso text-stone px-6 py-4 shadow-ff-xl text-xs font-mono uppercase tracking-[0.15em] border border-white/10"
        >
          Welcome to the Private Maison Circle.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
