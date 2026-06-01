import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="py-32 md:py-48 bg-white border-t border-black/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-px bg-black/5 rotate-[-15deg] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-px bg-black/5 rotate-[15deg] pointer-events-none" />

      <div className="lux-container relative z-10 text-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-medium block mb-8">Define Your Aura</span>
        <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-[1.1] tracking-tight">
          Find the piece that <br /> understands your space
        </h2>
        <p className="text-black/60 font-light text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
          You’re not decorating. You’re defining atmosphere.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-black text-white px-12 py-5 text-sm uppercase tracking-[0.2em] font-medium hover:bg-black/90 transition-all hover:-translate-y-1">
            Shop The Collection
          </button>
          <button className="bg-transparent border border-black/10 text-black px-12 py-5 text-sm uppercase tracking-[0.2em] font-medium hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
            Talk To Us
          </button>
        </div>
      </div>
    </section>
  );
}
