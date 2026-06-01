import Hero from '../components/Hero';
import BrandStory from '../components/BrandStory';
import CollectionGrid from '../components/CollectionGrid';
import ProductGrid from '../components/ProductGrid';
import TrustSection from '../components/TrustSection';
import ArtistSection from '../components/ArtistSection';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandStory />
      <CollectionGrid />
      <section id="shop">
        <ProductGrid />
      </section>
      <TrustSection />
      <ArtistSection />
      <Testimonials />
      <Newsletter />
      <FinalCTA />
    </main>
  );
}
