import { useState, FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-24 md:py-40 border-t border-black/5 bg-[#fdfdfc]">
      <div className="lux-container max-w-4xl">
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-medium block mb-6">Maison List</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Private access only</h2>
          <p className="text-black/60 font-light text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Join the inner circle for early drops, private collections, and quiet discounts.
          </p>

          {submitted ? (
            <div className="bg-black/5 p-8 inline-block animate-pulse">
              <p className="text-sm font-medium tracking-wide uppercase">You are on the list. Resonance awaits.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 bg-transparent border-b border-black/20 py-4 text-sm focus:outline-none focus:border-black transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-black text-white px-10 py-5 text-[11px] uppercase tracking-widest font-medium hover:bg-black/90 transition-all"
              >
                Join Maison List
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
