import { ContactInfo, NavLink } from '../types';

// Clinic contact information
export const CONTACT_INFO: ContactInfo = {
  name: 'Elegant Glow Aesthetic Clinic',
  address: 'New Road Phusro (Bokaro), Near Vishal Mega Mart, Opposite Shri Durga Mandir, Pin: 829144',
  phone: '+917488172473',
  email: 'sagar007cena@gmail.com',
  whatsapp: '917488172473',
  socialMedia: {
    facebook: 'https://facebook.com/elegantglow',
    instagram: 'https://instagram.com/elegantglow',
    twitter: 'https://twitter.com/elegantglow',
    linkedin: 'https://linkedin.com/company/elegantglow',
  },
};

// Google Form URL for appointment submissions
export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

// Google Form field IDs (you'll need to replace these with actual IDs from your form)
export const GOOGLE_FORM_FIELDS = {
  name: 'entry.YOUR_NAME_FIELD_ID',
  phone: 'entry.YOUR_PHONE_FIELD_ID',
  service: 'entry.YOUR_SERVICE_FIELD_ID',
  date: 'entry.YOUR_DATE_FIELD_ID',
  message: 'entry.YOUR_MESSAGE_FIELD_ID',
};

// Navigation links
export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'gallery', label: 'Gallery', href: '/gallery' },
  { id: 'testimonials', label: 'Testimonials', href: '/testimonials' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

// Service categories
export const SERVICE_CATEGORIES = [
  'Skin Treatment',
  'Laser Hair Removal',
  'Acne Treatment',
  'Anti-Aging Treatment',
  'Hair Treatment',
  'Pigmentation Treatment',
] as const;

// Gallery categories
export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'skin', label: 'Skin' },
  { id: 'hair', label: 'Hair' },
  { id: 'laser', label: 'Laser' },
  { id: 'anti-aging', label: 'Anti-Aging' },
] as const;

// WhatsApp default message
export const WHATSAPP_DEFAULT_MESSAGE = "Hi, I'd like to know more about your services.";

// Form validation messages
export const VALIDATION_MESSAGES = {
  required: 'This field is required',
  invalidPhone: 'Please enter a valid Indian phone number',
  invalidEmail: 'Please enter a valid email address',
  minLength: (min: number) => `Minimum ${min} characters required`,
  maxLength: (max: number) => `Maximum ${max} characters allowed`,
};

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// SEO metadata
export const SEO_METADATA = {
  title: 'Elegant Glow Aesthetic Clinic | Skin & Hair Treatments in Bokaro',
  description: 'Premium skin, hair, and aesthetic treatments in Bokaro. Expert care, advanced technology, personalized results. Book your appointment today.',
  keywords: 'aesthetic clinic Bokaro, skin treatment, laser hair removal, acne treatment, anti-aging, dermatology Bokaro, beauty clinic',
  author: 'Elegant Glow Aesthetic Clinic',
  siteUrl: 'https://elegantglowclinic.com',
  ogImage: '/og-image.jpg',
  twitterImage: '/twitter-image.jpg',
};

// Business hours
export const BUSINESS_HOURS = {
  weekdays: 'Monday - Saturday: 10:00 AM - 8:00 PM',
  weekend: 'Sunday: Closed',
};

// Google Maps embed URL
export const GOOGLE_MAPS_EMBED_URL = 
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.234567890123!2d86.1511!3d23.6693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQwJzA5LjUiTiA4NsKwMDknMDQuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin';

// Social media share URLs
export const SOCIAL_SHARE_URLS = {
  facebook: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  twitter: (url: string, text: string) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  whatsapp: (url: string, text: string) => `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
  linkedin: (url: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
};

// Made with Bob
