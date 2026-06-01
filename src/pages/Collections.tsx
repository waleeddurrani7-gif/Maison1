import { COLLECTIONS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Collections() {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <div className="lux-container py-24">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium block mb-6">Discovery</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Explore Our Emotional Collections</h1>
          <p className="text-white/60 font-light text-lg leading-relaxed">
            We categorize by mood, not medium. Each collection is a curated journey through a specific emotional frequency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {COLLECTIONS.map((collection, index) => (
            <div key={collection.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-mono">0{index + 1}</span>
                <h2 className="text-3xl md:text-4xl font-serif">{collection.name}</h2>
                <p className="text-white/60 font-light text-lg leading-relaxed max-w-md">
                  {collection.description}
                </p>
                <Link to="/shop" className="inline-flex items-center gap-4 text-xs uppercase tracking-widest font-medium hover:gap-6 transition-all border-b border-white/20 pb-2">
                  View Pieces <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
