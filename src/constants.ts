import { Product, Collection, Testimonial, Artist } from './types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'quiet-luxury',
    name: 'Quiet Luxury',
    description: 'Minimalist forms and soft neutral tones for peaceful environments.',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'emotional-abstraction',
    name: 'Emotional Abstraction',
    description: 'Dynamic strokes and deep palettes that capture complex feelings.',
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'modern-minimal-forms',
    name: 'Modern Minimal Forms',
    description: 'Architectural precision and geometric harmony for modern spaces.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'soft-chaos',
    name: 'Soft Chaos Series',
    description: 'Where organic fluidity meets deliberate restraint.',
    image: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=800&auto=format&fit=crop'
  }
];

export const ARTISTS: Artist[] = [
  {
    id: 'a1',
    name: 'Julian Thorne',
    bio: 'Julian focuses on the intersection of light and shadow, creating works that change with the day.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    specialty: 'Monochromatic Abstraction'
  },
  {
    id: 'a2',
    name: 'Sienna Moretti',
    bio: 'Sienna uses texture to evoke tactile emotional responses, blending sand and plaster with pigment.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    specialty: 'Textured Minimalism'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'The Silent Anchor',
    price: 1200,
    collection: 'Quiet Luxury',
    tagline: 'Where silence becomes visual',
    image: 'https://images.unsplash.com/photo-1515405290399-6331fa5853b7?q=80&w=800&auto=format&fit=crop',
    description: 'A study in minimalist weight. This piece anchor the room with its dense charcoal core and airy ivory boundaries.',
    artistId: 'a1'
  },
  {
    id: '2',
    title: 'Restrained Tension',
    price: 1550,
    collection: 'Emotional Abstraction',
    tagline: 'Controlled emotion in form',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800&auto=format&fit=crop',
    description: 'An exploration of the moments between outbursts. Sharp lines cross soft gradients, representing the balance of self-control.',
    artistId: 'a1'
  },
  {
    id: '3',
    title: 'Modern Monolith',
    price: 850,
    collection: 'Modern Minimal Forms',
    tagline: 'Soft tension, lasting presence',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop',
    description: 'Architectural in spirit. A single geometric form rendered in deep ochre, designed to command attention through simplicity.',
    artistId: 'a2'
  },
  {
    id: '4',
    title: 'Ethereal Echo',
    price: 2100,
    collection: 'Soft Chaos Series',
    tagline: 'Made to anchor a room, not fill it',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
    description: 'Fluid strokes that seem to move as you watch them. This series captures the beauty of unpredictable nature.',
    artistId: 'a2'
  },
  {
    id: '5',
    title: 'Timeless Breath',
    price: 3200,
    collection: 'Quiet Luxury',
    tagline: 'A moment you don’t outgrow',
    image: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=800&auto=format&fit=crop',
    description: 'A large-scale immersion in white and off-white. It speaks to the infinite and the pause.',
    artistId: 'a1'
  },
  {
    id: '6',
    title: 'Midnight Resonance',
    price: 1800,
    collection: 'Emotional Abstraction',
    tagline: 'Controlled emotion in form',
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop',
    description: 'Deep blues and blacks interplay to create a field of resonance that pulls the viewer in.',
    artistId: 'a2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: 'This didn’t just fit my home. It changed it.',
    author: 'Elena Ross'
  },
  {
    id: 't2',
    text: 'It feels like the wall finally has something to say.',
    author: 'Marcus J.'
  }
];
