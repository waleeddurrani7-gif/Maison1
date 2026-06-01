import { motion } from 'motion/react';

export default function BrandStory() {
  return (
    <section className="py-24 md:py-40 bg-[#fdfdfc]">
      <div className="lux-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-medium block mb-6">Our DNA</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Created by two, <br /> shaped for many</h2>
            <div className="space-y-6 text-black/70 leading-relaxed font-light text-lg">
              <p>
                Maison Lune Studio began as a shared obsession — not with art, but with how art changes silence in a room.
              </p>
              <p>
                We are not a mass marketplace. We are a couple curating work that carries emotional weight, restraint, and presence.
              </p>
              <p>
                Every piece you see here passed through both of us — not just for beauty, but for feeling.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1200&auto=format&fit=crop"
                alt="The Founders Studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 hidden md:block border border-black/5 shadow-xl">
              <p className="font-serif italic text-xl">"Art doesn't just fill space. It defines it."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
