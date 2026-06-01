export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-[#fdfdfc]">
      <div className="lux-container py-24">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-medium block mb-6">Talk To Us</span>
            <h1 className="text-4xl md:text-5xl font-serif mb-12">Contact The Studio</h1>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-4">Direct Inquiry</h4>
                <p className="text-lg font-light text-black/70">studio@maisonlune.art</p>
              </div>
              
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-4">Collectors Support</h4>
                <p className="text-lg font-light text-black/70">concierge@maisonlune.art</p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-4">Global Hubs</h4>
                <div className="flex gap-12">
                  <p className="text-sm font-light text-black/50 uppercase tracking-widest">Dubai</p>
                  <p className="text-sm font-light text-black/50 uppercase tracking-widest">London</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-12 pt-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-black/40 font-medium">Inquiry Type</label>
              <select className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black appearance-none rounded-none">
                <option>Acquisition Inquiry</option>
                <option>Custom Commission</option>
                <option>Trade Program</option>
                <option>Press</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-black/40 font-medium">Full Name</label>
              <input className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-black/40 font-medium">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black resize-none" />
            </div>

            <button className="bg-black text-white px-12 py-5 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-black/90 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
