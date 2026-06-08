export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  highlights: string[];
  featured?: boolean;
}

export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  image: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  included: string[];
  description: string;
  featured?: boolean;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  destination: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  date: string;
  travelers: number;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
