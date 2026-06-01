import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fdfdfc]">
      <div className="lux-container">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-medium block mb-4">Atmosphere</span>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">What spaces feel like after</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="relative text-center px-12 md:px-20 py-16 border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex justify-center">
                <span className="text-5xl font-serif text-black/10">“</span>
              </div>
              <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed">
                {t.text}
              </p>
              <div className="h-px w-8 bg-black/20 mx-auto mb-4" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-black/40">
                {t.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
