import { Testimonial } from '../../types';

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Priya S.',
    rating: 5,
    text: 'Excellent service! The staff is professional and caring. My skin has never looked better after the treatment. The clinic is clean, modern, and the doctors are highly skilled. I highly recommend Elegant Glow for anyone looking for quality aesthetic treatments.',
    service: 'Skin Treatment',
    date: '2 weeks ago',
  },
  {
    id: 'testimonial-2',
    name: 'Rahul M.',
    rating: 5,
    text: 'I had laser hair removal done here and the results are amazing! The procedure was virtually painless and the staff made me feel comfortable throughout. After just a few sessions, I can see significant reduction in hair growth. Worth every penny!',
    service: 'Laser Hair Removal',
    date: '1 month ago',
  },
  {
    id: 'testimonial-3',
    name: 'Anjali K.',
    rating: 5,
    text: 'Struggled with acne for years until I found this clinic. The customized treatment plan worked wonders for my skin. The doctors took time to understand my concerns and provided effective solutions. My confidence has improved tremendously!',
    service: 'Acne Treatment',
    date: '3 weeks ago',
  },
  {
    id: 'testimonial-4',
    name: 'Vikram P.',
    rating: 5,
    text: 'The anti-aging treatment here is top-notch. I look and feel years younger! The Botox and filler treatments were done with precision and the results look natural. The staff is knowledgeable and the clinic maintains high hygiene standards.',
    service: 'Anti-Aging Treatment',
    date: '1 week ago',
  },
  {
    id: 'testimonial-5',
    name: 'Sneha R.',
    rating: 5,
    text: 'Best hair treatment I have ever received. My hair fall has reduced significantly and my hair feels healthier and stronger. The PRP therapy was effective and the doctors explained everything clearly. Highly satisfied with the results!',
    service: 'Hair Treatment',
    date: '2 months ago',
  },
  {
    id: 'testimonial-6',
    name: 'Amit D.',
    rating: 5,
    text: 'The pigmentation treatment worked like magic! My dark spots have faded considerably and my skin tone is much more even now. The treatment was gentle yet effective. The team at Elegant Glow is truly professional and caring.',
    service: 'Pigmentation Treatment',
    date: '3 weeks ago',
  },
  {
    id: 'testimonial-7',
    name: 'Kavita J.',
    rating: 5,
    text: 'I am extremely happy with the results of my skin treatment. The clinic uses advanced technology and the doctors are very experienced. They took time to explain each step of the treatment. The ambiance is relaxing and the staff is friendly.',
    service: 'Skin Treatment',
    date: '1 month ago',
  },
  {
    id: 'testimonial-8',
    name: 'Rajesh T.',
    rating: 5,
    text: 'Professional service from start to finish. The consultation was thorough and the treatment plan was well explained. I opted for laser hair removal and the results exceeded my expectations. The clinic is well-maintained and hygienic.',
    service: 'Laser Hair Removal',
    date: '2 weeks ago',
  },
];

// Average rating calculation
export const averageRating = 
  testimonialsData.reduce((acc, curr) => acc + curr.rating, 0) / testimonialsData.length;

// Total reviews count
export const totalReviews = testimonialsData.length;

// Rating distribution
export const ratingDistribution = {
  5: testimonialsData.filter(t => t.rating === 5).length,
  4: testimonialsData.filter(t => t.rating === 4).length,
  3: testimonialsData.filter(t => t.rating === 3).length,
  2: testimonialsData.filter(t => t.rating === 2).length,
  1: testimonialsData.filter(t => t.rating === 1).length,
};

// Featured testimonials (highest rated, most recent)
export const featuredTestimonials = testimonialsData
  .filter(t => t.rating === 5)
  .slice(0, 3);

// Made with Bob
