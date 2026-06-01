import { useState } from 'react';
import { PRODUCTS, COLLECTIONS, ARTISTS } from '../constants';
import { useCurrency } from '../context/CurrencyContext';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { useCart } from '../context/CartContext';
import { Plus, SlidersHorizontal, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Shop() {
  const { addToCart } = useCart();
  const { currentCurrency, formatPrice, convertToLocal } = useCurrency();
  const [filters, setFilters] = useState({
    collection: 'All',
    artist: 'All',
    priceRange: 'All'
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Dynamic price ranges based on PKR or converted equivalent
  const priceRanges = [
    { label: 'All Prices', value: 'All' },
    { label: `Under ${currentCurrency.code === 'PKR' ? 'Rs. 300,000' : formatPrice(1000)}`, value: 'under-300' },
    { label: `${currentCurrency.code === 'PKR' ? 'Rs. 300,000 - Rs. 600,000' : `${formatPrice(1000)} - ${formatPrice(2000)}`}`, value: '300-600' },
    { label: `Over ${currentCurrency.code === 'PKR' ? 'Rs. 600,000' : formatPrice(2000)}`, value: 'over-600' }
  ];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCollection = filters.collection === 'All' || product.collection === filters.collection;
    const matchesArtist = filters.artist === 'All' || product.artistId === filters.artist;
    
    let matchesPrice = true;
    const itemLocalPrice = convertToLocal(product.price);
    
    // Evaluate based on PKR (multiplier 280 roughly mapped for PKR matching consistency)
    const factorToPKR = 280 / currentCurrency.rate;
    const pricePKREquivalent = itemLocalPrice * factorToPKR;
    
    if (filters.priceRange === 'under-300') matchesPrice = pricePKREquivalent < 300000;
    else if (filters.priceRange === '300-600') matchesPrice = pricePKREquivalent >= 300000 && pricePKREquivalent <= 600000;
    else if (filters.priceRange === 'over-600') matchesPrice = pricePKREquivalent > 600000;

    return matchesCollection && matchesArtist && matchesPrice;
  });

  return (
    <div className="pt-24 min-h-screen bg-stone">
      <Breadcrumbs />
      
      <div className="lux-container py-12">
        <header className="mb-12 border-b border-espresso/5 pb-8 flex items-end justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-terracotta font-medium block mb-3 font-mono">Archive 24</span>
            <h1 className="text-3xl md:text-5xl font-serif text-espresso">The Collection</h1>
          </div>
          <button 
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden flex items-center justify-center gap-2 bg-espresso text-white py-3 px-5 text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer"
          >
            <SlidersHorizontal size={12} /> Filters
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block space-y-12">
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-terracotta font-mono pb-2 border-b border-espresso/10">Collections</h3>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setFilters({ ...filters, collection: 'All' })}
                  className={`text-left text-sm transition-colors cursor-pointer ${filters.collection === 'All' ? 'text-espresso font-semibold' : 'text-espresso/40 hover:text-espresso'}`}
                >
                  All Collections
                </button>
                {COLLECTIONS.map(c => (
                  <button 
                    key={c.id}
                    onClick={() => setFilters({ ...filters, collection: c.name })}
                    className={`text-left text-sm transition-colors cursor-pointer ${filters.collection === c.name ? 'text-espresso font-semibold' : 'text-espresso/40 hover:text-espresso'}`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-terracotta font-mono pb-2 border-b border-espresso/10">Artists</h3>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setFilters({ ...filters, artist: 'All' })}
                  className={`text-left text-sm transition-colors cursor-pointer ${filters.artist === 'All' ? 'text-espresso font-semibold' : 'text-espresso/40 hover:text-espresso'}`}
                >
                  All Artists
                </button>
                {ARTISTS.map(a => (
                  <button 
                    key={a.id}
                    onClick={() => setFilters({ ...filters, artist: a.id })}
                    className={`text-left text-sm transition-colors cursor-pointer ${filters.artist === a.id ? 'text-espresso font-semibold' : 'text-espresso/40 hover:text-espresso'}`}
                  >
                    {a.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-terracotta font-mono pb-2 border-b border-espresso/10">Price Range</h3>
              <div className="flex flex-col gap-3">
                {priceRanges.map(range => (
                  <button 
                    key={range.value}
                    onClick={() => setFilters({ ...filters, priceRange: range.value })}
                    className={`text-left text-sm transition-colors cursor-pointer ${filters.priceRange === range.value ? 'text-espresso font-semibold' : 'text-espresso/40 hover:text-espresso'}`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setFilters({ collection: 'All', artist: 'All', priceRange: 'All' })}
              className="text-[10px] uppercase tracking-widest font-bold text-terracotta border-b border-terracotta/20 pb-1 hover:border-terracotta transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
              <AnimatePresence mode="popLayout font-serif">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group block space-y-5"
                  >
                    <div className="relative overflow-hidden bg-latte shadow-sm">
                      <Link to={`/product/${product.id}`} className="block aspect-[4/5]">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/5 transition-colors duration-500" />
                      </Link>

                      {/* Quick Add Button */}
                      <button 
                        onClick={() => addToCart(product)}
                        className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md text-espresso py-3.5 text-[9px] uppercase tracking-[0.2em] font-bold translate-y-20 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-1.5 hover:bg-espresso hover:text-white z-10 cursor-pointer"
                      >
                        <Plus size={12} /> Quick Add
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-terracotta font-medium font-mono">
                          {product.collection}
                        </span>
                        <span className="text-xs font-mono text-espresso/60 font-medium">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif text-espresso group-hover:italic transition-all duration-300">{product.title}</h3>
                      <p className="text-[11px] italic text-espresso/60 font-serif border-l border-terracotta/30 pl-3 py-0.5">
                        “{product.tagline}”
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-32">
                <p className="font-serif text-lg text-espresso/40 italic">No pieces found matching your filter frequency.</p>
                <button 
                  onClick={() => setFilters({ collection: 'All', artist: 'All', priceRange: 'All' })}
                  className="mt-6 text-[10px] uppercase tracking-widest font-bold text-terracotta border-b border-terracotta/20 pb-0.5 cursor-pointer"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Slide-up Filter Sheets Overlay */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm lg:hidden"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-[#fdfdfc] z-[60] rounded-t-2xl p-6 lg:hidden border-t border-espresso/10"
            >
              <div className="flex items-center justify-between border-b border-espresso/5 pb-4 mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-espresso font-mono">Filters & Sorting</span>
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="p-1.5 hover:bg-stone/50 rounded-full cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-8">
                {/* 1. collections */}
                <div className="space-y-3">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-terracotta font-mono">Collections</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      onClick={() => setFilters({ ...filters, collection: 'All' })}
                      className={`px-3 py-1.5 text-xs font-medium border rounded-full transition-all cursor-pointer ${filters.collection === 'All' ? 'bg-espresso text-white border-espresso' : 'bg-transparent text-espresso/60 border-espresso/10'}`}
                    >
                      All Collections
                    </button>
                    {COLLECTIONS.map(c => (
                      <button
                        key={c.id}
                        onClick={() => setFilters({ ...filters, collection: c.name })}
                        className={`px-3 py-1.5 text-xs font-medium border rounded-full transition-all cursor-pointer ${filters.collection === c.name ? 'bg-espresso text-white border-espresso' : 'bg-transparent text-espresso/60 border-espresso/10'}`}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. artists */}
                <div className="space-y-3">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-terracotta font-mono">Artists</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      onClick={() => setFilters({ ...filters, artist: 'All' })}
                      className={`px-3 py-1.5 text-xs font-medium border rounded-full transition-all cursor-pointer ${filters.artist === 'All' ? 'bg-espresso text-white border-espresso' : 'bg-transparent text-espresso/60 border-espresso/10'}`}
                    >
                      All Artists
                    </button>
                    {ARTISTS.map(a => (
                      <button
                        key={a.id}
                        onClick={() => setFilters({ ...filters, artist: a.id })}
                        className={`px-3 py-1.5 text-xs font-medium border rounded-full transition-all cursor-pointer ${filters.artist === a.id ? 'bg-espresso text-white border-espresso' : 'bg-transparent text-espresso/60 border-espresso/10'}`}
                      >
                        {a.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. price range */}
                <div className="space-y-3">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-terracotta font-mono">Price Range</span>
                  <div className="flex flex-col gap-2 pt-1">
                    {priceRanges.map(range => (
                      <button
                        key={range.value}
                        onClick={() => setFilters({ ...filters, priceRange: range.value })}
                        className={`flex items-center justify-between p-3 border rounded-lg text-left text-xs text-espresso transition-all cursor-pointer ${filters.priceRange === range.value ? 'border-terracotta bg-terracotta/5 font-semibold' : 'border-espresso/5 bg-transparent'}`}
                      >
                        <span>{range.label}</span>
                        {filters.priceRange === range.value && <Check size={14} className="text-terracotta" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-espresso/5 flex gap-4">
                <button
                  onClick={() => {
                    setFilters({ collection: 'All', artist: 'All', priceRange: 'All' });
                  }}
                  className="flex-1 py-3 border border-espresso/20 text-xs font-mono text-espresso uppercase font-bold text-center cursor-pointer"
                >
                  Reset
                </button>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="flex-1 py-3 bg-espresso text-white text-xs font-mono uppercase font-bold text-center cursor-pointer"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
