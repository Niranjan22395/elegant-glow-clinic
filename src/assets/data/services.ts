import { Service } from '../../types';

export const servicesData: Service[] = [
  {
    id: 'skin-treatment',
    title: 'Skin Treatment',
    description: 'Advanced dermatological solutions for healthy, glowing skin',
    fullDescription: 'Our comprehensive skin treatment services include deep cleansing, chemical peels, microdermabrasion, and customized facial treatments. We use advanced technology and premium products to address various skin concerns including dullness, uneven texture, and early signs of aging. Each treatment is personalized based on your skin type and specific needs, ensuring optimal results and a radiant complexion.',
    icon: 'Sparkles',
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    description: 'Safe, effective, and long-lasting hair removal technology',
    fullDescription: 'Experience permanent hair reduction with our state-of-the-art laser technology. Our FDA-approved laser systems are safe for all skin types and provide virtually painless treatment. Say goodbye to razors, waxing, and ingrown hairs. The procedure targets hair follicles precisely, ensuring smooth, hair-free skin with minimal discomfort. Multiple sessions ensure long-lasting results.',
    icon: 'Zap',
  },
  {
    id: 'acne-treatment',
    title: 'Acne Treatment',
    description: 'Comprehensive acne care for clear, confident skin',
    fullDescription: 'Our specialized acne treatment program combines medical-grade products, advanced therapies, and lifestyle guidance to effectively treat and prevent acne. We address the root causes of acne including hormonal imbalances, bacterial infections, and clogged pores. Treatments include chemical peels, LED therapy, extraction procedures, and customized skincare regimens for lasting clear skin.',
    icon: 'Shield',
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging Treatment',
    description: 'Rejuvenate your skin with cutting-edge anti-aging therapies',
    fullDescription: 'Turn back the clock with our comprehensive anti-aging solutions. We offer Botox, dermal fillers, PRP therapy, microneedling, and advanced skin tightening treatments. Our approach combines multiple modalities to reduce fine lines, wrinkles, and age spots while improving skin elasticity and firmness. Achieve a youthful, refreshed appearance with minimal downtime.',
    icon: 'Clock',
  },
  {
    id: 'hair-treatment',
    title: 'Hair Treatment',
    description: 'Restore hair health and vitality with expert care',
    fullDescription: 'Combat hair loss, thinning, and damage with our advanced hair restoration treatments. We offer PRP therapy, mesotherapy, laser therapy, and specialized hair care treatments. Our dermatologists diagnose the underlying causes of hair problems and create personalized treatment plans. Services include scalp treatments, hair strengthening therapies, and preventive care for optimal hair health.',
    icon: 'Leaf',
  },
  {
    id: 'pigmentation-treatment',
    title: 'Pigmentation Treatment',
    description: 'Even skin tone and reduce pigmentation with proven methods',
    fullDescription: 'Address hyperpigmentation, melasma, dark spots, and uneven skin tone with our targeted treatments. We use advanced technologies including laser therapy, chemical peels, and medical-grade brightening agents. Our treatments are customized based on pigmentation type and severity, ensuring safe and effective results. Achieve a more even, radiant complexion with our expert care.',
    icon: 'Sun',
  },
];

// Service categories for filtering
export const serviceCategories = [
  'All Services',
  'Skin Care',
  'Hair Care',
  'Laser Treatments',
  'Anti-Aging',
  'Medical Dermatology',
] as const;

// Popular services (featured)
export const popularServices = [
  'laser-hair-removal',
  'anti-aging',
  'acne-treatment',
];

// Service benefits
export const serviceBenefits = [
  'FDA-approved treatments',
  'Experienced dermatologists',
  'Personalized care plans',
  'Advanced technology',
  'Minimal downtime',
  'Proven results',
  'Safe for all skin types',
  'Comfortable procedures',
];

// Made with Bob
