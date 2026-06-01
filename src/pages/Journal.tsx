import { motion } from 'motion/react';

const JOURNAL_POSTS = [
  {
    title: "The power of empty frames",
    date: "May 12, 2024",
    excerpt: "Why what we leave off the wall is as important as what we hang.",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800"
  },
  {
    title: "Natural pigments in the 21st century",
    date: "April 28, 2024",
    excerpt: "Exploring Sienna Moretti's obsession with earth and mineral colors.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800"
  }
];

export default function Journal() {
  return (
    <div className="pt-24 min-h-screen bg-[#fdfdfc]">
      <div className="lux-container py-24">
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-medium block mb-6">Reflections</span>
          <h1 className="text-4xl md:text-5xl font-serif">The Journal</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {JOURNAL_POSTS.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-black/40 font-mono mb-4 block">{post.date}</span>
              <h2 className="text-2xl font-serif mb-4 group-hover:italic transition-all">{post.title}</h2>
              <p className="text-black/60 font-light leading-relaxed">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
