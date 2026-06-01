export default function ArtistSection() {
  return (
    <section className="py-24 bg-[#fdfdfc] border-b border-black/5">
      <div className="lux-container">
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-medium block mb-6">Our Perspective</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">The artists we work with</h2>
          <div className="space-y-6 text-black/70 leading-relaxed font-light text-xl italic font-serif">
            <p>
              “We collaborate with artists who prioritize expression over output. Their work isn’t made to trend — it’s made to stay.”
            </p>
            <p className="not-italic text-lg font-sans">
              We don’t chase volume. We chase resonance.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[1,2,3,4].map((i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer">
              <img
                src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?w=600&auto=format&fit=crop`}
                alt="Artist studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
