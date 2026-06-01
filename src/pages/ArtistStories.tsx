import { ARTISTS } from '../constants';

export default function ArtistStories() {
  return (
    <div className="pt-24 min-h-screen bg-stone">
      <div className="lux-container py-24">
        <div className="mb-24 border-b border-espresso/5 pb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-terracotta font-medium block mb-6 font-mono">Archive 24</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-espresso">The Artists We Work With</h1>
          <p className="text-espresso/60 text-lg font-light max-w-2xl italic">
            We collaborate with artists who prioritize expression over output. Their work isn’t made to trend — it’s made to stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {ARTISTS.map((artist) => (
            <div key={artist.id} className="space-y-12">
              <div className="aspect-[4/5] bg-latte overflow-hidden shadow-sm">
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" />
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-espresso/10 pb-4">
                   <h2 className="text-3xl font-serif text-espresso">{artist.name}</h2>
                   <span className="text-[10px] uppercase tracking-widest text-terracotta font-medium font-mono">{artist.specialty}</span>
                </div>
                <p className="text-espresso/70 leading-relaxed font-light text-lg italic font-serif">
                   {artist.bio}
                </p>
                <div className="h-px w-full bg-espresso/5" />
                <button className="text-[11px] uppercase tracking-widest font-bold text-espresso border-b border-espresso/20 hover:border-terracotta transition-colors pb-1">
                  View Artists Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
