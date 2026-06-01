import { Check } from 'lucide-react';

const PERKS = [
  "Curated by two founders, not algorithms",
  "Limited, intentional selection only",
  "No mass listings, no filler pieces",
  "Artist-first collaborations",
  "Museum-grade materials & print quality",
  "Global insured shipping"
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="lux-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* Visual accent */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 blur-3xl rounded-full" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium block mb-6">The Maison Promise</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-12 leading-tight">Why collectors choose <br /> Maison Lune</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
              {PERKS.map((perk, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <Check size={14} className="text-white/40" />
                  </div>
                  <p className="text-sm font-light text-white/80 leading-relaxed font-sans">{perk}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square border border-white/10 p-12 overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200&auto=format&fit=crop"
                alt="Art close up quality"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating geometric detail */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/20 rotate-45 pointer-events-none group-hover:rotate-90 transition-transform duration-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}
