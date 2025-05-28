export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface PricingTier {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  priceId: string;
  mode: 'payment' | 'subscription';
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}