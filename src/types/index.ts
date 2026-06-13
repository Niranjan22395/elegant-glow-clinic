// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  image?: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  avatar?: string;
}

// Gallery types
export interface GalleryCategory {
  id: string;
  label: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'all' | 'facial' | 'skin' | 'body' | 'laser' | 'injectables';
  title: string;
}

// Appointment form types
export interface AppointmentFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  message?: string;
  honeypot?: string; // Spam protection field
}

// Contact info types
export interface ContactInfo {
  name: string;
  address: string;
  phone: string;
  email?: string;
  whatsapp: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// Navigation types
export interface NavLink {
  id: string;
  label: string;
  href: string;
}

// Made with Bob
