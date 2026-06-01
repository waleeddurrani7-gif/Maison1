import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Upload, CheckCircle } from 'lucide-react';

export default function ArtistSignup() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#fdfdfc]">
      <div className="lux-container py-24 max-w-4xl">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-medium block mb-6">Collaborate</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Join Maison Lune as an Artist</h1>
          <p className="text-black/60 text-lg font-light leading-relaxed max-w-2xl">
            We are always looking for resonance over volume. If your work carries emotional weight and restraint, we would love to hear from you.
          </p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/5 p-12 text-center"
          >
            <CheckCircle className="mx-auto mb-6 text-black/20" size={48} />
            <h2 className="text-2xl font-serif mb-4">Submission Received</h2>
            <p className="text-black/60 font-light">
              Our curators review submissions weekly. We will reach out if there is resonance.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-black/40 font-medium">Full Name</label>
                <input required className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-black/40 font-medium">Email Address</label>
                <input required type="email" className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-black/40 font-medium">Portfolio/Website Link</label>
              <input required className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-black/40 font-medium">Your Story (Brief)</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black resize-none" />
            </div>

            <div className="border-2 border-dashed border-black/5 p-12 text-center group hover:border-black/20 transition-colors cursor-pointer">
              <Upload className="mx-auto mb-4 text-black/20 group-hover:text-black/40 transition-colors" />
              <p className="text-sm font-medium tracking-wide">Upload Samples of your Work (PDF/JPG)</p>
              <p className="text-[11px] text-black/40 mt-2">Maximum 5 files, 20MB total.</p>
            </div>

            <button type="submit" className="bg-black text-white px-12 py-5 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-black/90 transition-all">
              Submit Portfolio
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
