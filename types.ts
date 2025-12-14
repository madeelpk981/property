export interface Property {
  id: string;
  title: string;
  price: number;
  currency: string;
  location: string;
  beds: number;
  baths: number;
  area: number; // in sq ft
  areaUnit: string;
  type: 'sale' | 'rent';
  category: 'house' | 'apartment' | 'commercial';
  imageUrl: string;
  description: string;
  added: string;
  agent: {
    name: string;
    phone: string;
    image: string;
    email: string;
  };
  features: string[];
  securityDeposit?: number;
  minLease?: number;
}

export interface SearchFilters {
  query: string;
  type: 'sale' | 'rent';
  category: string;
  minPrice: number;
  maxPrice: number;
  beds: number | null;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface User {
  name: string;
  email: string;
  avatar?: string;
}