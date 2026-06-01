import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useCurrency, CURRENCY_LIST, CurrencyCode } from '../context/CurrencyContext';
import { ShoppingBag, Globe, Check } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { cartCount } = useCart();
  const { currentCurrency, setCurrency } = useCurrency();
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-stone/80 backdrop-blur-md border-b border-cacao/5">
      <div className="lux-container h-20 flex items-center justify-between relative">
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium max-md:hidden">
          <Link to="/collections" className="hover:text-terracotta transition-colors">Collections</Link>
          <Link to="/artist-stories" className="hover:text-terracotta transition-colors">Artists</Link>
          <Link to="/shop" className="hover:text-terracotta transition-colors">Shop</Link>
        </div>
        
        {/* Mobile menu link toggle or simple Shop */}
        <div className="flex gap-4 text-[11px] uppercase tracking-[0.2em] font-medium md:hidden">
          <Link to="/shop" className="hover:text-terracotta transition-colors">Shop</Link>
        </div>
        
        <Link to="/" className="text-lg md:text-2xl font-serif tracking-tighter absolute left-1/2 -translate-x-1/2 text-cacao">
          Maison Lune Studio
        </Link>

        <div className="flex items-center gap-4 md:gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          <Link to="/journal" className="hover:text-terracotta transition-colors max-md:hidden">Journal</Link>
          
          {/* Active Currency Multi-choice trigger */}
          <div className="relative">
            <button 
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              className="flex items-center gap-1.5 py-1 px-2.5 rounded border border-cacao/10 hover:border-terracotta/40 hover:text-terracotta transition-all text-[11px] font-mono cursor-pointer"
            >
              <span>{currentCurrency.flag}</span>
              <span>{currentCurrency.code}</span>
            </button>
            
            {showCurrencyDropdown && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowCurrencyDropdown(false)}
                />
                <div className="absolute right-0 mt-2.5 w-44 bg-[#fdfdfc] border border-cacao/10 shadow-xl z-50 py-1.5 flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-cacao/40 border-b border-cacao/5 px-3 py-1.5 font-bold font-mono">
                    Select Currency
                  </span>
                  {Object.values(CURRENCY_LIST).map((cur) => (
                    <button
                      key={cur.code}
                      onClick={() => {
                        setCurrency(cur.code as CurrencyCode);
                        setShowCurrencyDropdown(false);
                      }}
                      className="flex items-center justify-between px-3 py-2 text-left text-xs text-cacao hover:bg-stone/50 hover:text-terracotta tracking-wider transition-colors font-mono cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span>{cur.flag}</span>
                        <span>{cur.code} ({cur.symbol.trim()})</span>
                      </div>
                      {currentCurrency.code === cur.code && (
                        <Check size={11} className="text-terracotta" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <Link to="/cart" className="flex items-center gap-2 hover:text-terracotta transition-colors group">
            <ShoppingBag size={14} className="group-hover:scale-110 transition-transform" />
            <span>Bag ({cartCount})</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
