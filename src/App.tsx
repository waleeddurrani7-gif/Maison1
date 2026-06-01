import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { CurrencyProvider } from './context/CurrencyContext';
import Navbar from './components/Navbar';
import Popups from './components/Popups';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import ArtistSignup from './pages/ArtistSignup';
import Journal from './pages/Journal';
import ArtistStories from './pages/ArtistStories';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Legal, { SHIPPING_CONTENT, SUSTAINABILITY_CONTENT, PRIVACY_CONTENT } from './pages/Support';
import { motion, useScroll, useSpring } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <CurrencyProvider>
        <CartProvider>
          <ScrollToTop />
        <div className="font-sans text-cacao selection:bg-cacao selection:text-white bg-stone min-h-screen">
          {/* High-end scroll progress bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-[2px] bg-terracotta z-[60] origin-left" 
            style={{ scaleX }}
          />

          <Navbar />
          <Popups />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/artist-signup" element={<ArtistSignup />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/artist-stories" element={<ArtistStories />} />
            <Route path="/shipping-returns" element={<Legal title="Shipping & Returns" content={SHIPPING_CONTENT} />} />
            <Route path="/sustainability" element={<Legal title="Sustainability" content={SUSTAINABILITY_CONTENT} />} />
            <Route path="/privacy" element={<Legal title="Privacy Policy" content={PRIVACY_CONTENT} />} />
          </Routes>

          <Footer />

          {/* Aesthetic side indicators - Studio Context */}
          <div className="fixed left-6 bottom-12 z-40 hidden xl:flex flex-col gap-12 pointer-events-none">
            <div className="flex flex-col items-center gap-6">
              <span className="text-[9px] uppercase tracking-[0.4em] origin-center -rotate-90 text-cacao/20 font-mono">Curated Selection</span>
              <div className="w-px h-12 bg-cacao/10" />
            </div>
          </div>
        </div>
      </CartProvider>
     </CurrencyProvider>
    </Router>
  );
}

