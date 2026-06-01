export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  collection: string;
  tagline: string;
  description?: string;
  artistId?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
}

export interface Artist {
  id: string;
  name: string;
  bio: string;
  image: string;
  specialty: string;
}
