export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-[#fdfdfc]">
      <div className="lux-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="aspect-square bg-gray-100 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-medium">The Origin</span>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight text-balance">The shared obsession of two hearts.</h1>
            <div className="space-y-6 text-black/70 leading-relaxed font-light text-lg">
              <p>Maison Lune Studio began as a shared obsession — not with art, but with how art changes silence in a room.</p>
              <p>We are a couple curating work that carries emotional weight, restraint, and presence. Every piece you see here passed through both of us — not just for beauty, but for feeling.</p>
              <p>We believe art should anchor a space, providing a moment of pause in a loud world. Our mission is to bridge the gap between pure expression and living environments.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 pt-32 mb-32">
           <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif mb-12">Our Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold">Resonance</h4>
                    <p className="text-sm text-black/60 font-light leading-relaxed">We select pieces that vibrate at a certain frequency. If it doesn't move us, it doesn't make the list.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold">Restraint</h4>
                    <p className="text-sm text-black/60 font-light leading-relaxed">Minimalism is not emptiness. It is deep intention. We value what is left out as much as what is added.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold">Longevity</h4>
                    <p className="text-sm text-black/60 font-light leading-relaxed">Art isn't a trend. Items in our collection are meant to be passed down and lived with forever.</p>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
