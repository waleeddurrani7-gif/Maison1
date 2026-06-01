import { motion } from 'motion/react';
import { COLLECTIONS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CollectionGrid() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="lux-container">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium block mb-4">The Collections</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Curated emotional collections</h2>
          <p className="text-white/60 font-light max-w-xl text-lg mb-10 leading-relaxed">
            Each collection is built like a mood — not a category. You don’t browse here. You feel your way through.
          </p>
          <Link to="/collections" className="inline-flex items-center gap-4 text-xs uppercase tracking-widest font-medium hover:gap-6 transition-all border-b border-white/20 pb-2">
            Enter The Collections <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLLECTIONS.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link to="/shop">
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{collection.name}</h3>
                <p className="text-white/40 font-light text-sm line-clamp-2 leading-relaxed">
                  {collection.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
