import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GoogleReviewsProps {
  placeId?: string;
  maxReviews?: number;
}

export default function GoogleReviews({
  maxReviews = 6,
}: GoogleReviewsProps) {
  // placeId can be configured when integrating with Google Places API
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  const fetchGoogleReviews = async () => {
    try {
      // In production, this should call your backend API which calls Google Places API
      // For now, we'll use mock data
      
      // Example API call (implement in backend):
      // const response = await fetch(`/api/google-reviews?placeId=${placeId}`);
      // const data = await response.json();
      
      // Mock data for demonstration
      const mockReviews: GoogleReview[] = [
        {
          author_name: 'Priya Sharma',
          author_url: 'https://www.google.com/maps/contrib/123',
          profile_photo_url: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=C9A96E&color=fff',
          rating: 5,
          relative_time_description: '2 weeks ago',
          text: 'Excellent service! The staff is very professional and the results are amazing. Highly recommend Elegant Glow for anyone looking for aesthetic treatments.',
          time: Date.now() - 1209600000,
        },
        {
          author_name: 'Rahul Kumar',
          author_url: 'https://www.google.com/maps/contrib/456',
          profile_photo_url: 'https://ui-avatars.com/api/?name=Rahul+Kumar&background=C9A96E&color=fff',
          rating: 5,
          relative_time_description: '1 month ago',
          text: 'Best aesthetic clinic in Bokaro! Dr. Priya is very knowledgeable and takes time to explain everything. The clinic is clean and modern.',
          time: Date.now() - 2592000000,
        },
        {
          author_name: 'Anjali Singh',
          author_url: 'https://www.google.com/maps/contrib/789',
          profile_photo_url: 'https://ui-avatars.com/api/?name=Anjali+Singh&background=C9A96E&color=fff',
          rating: 5,
          relative_time_description: '3 months ago',
          text: 'Amazing experience! The laser treatment was painless and the results exceeded my expectations. The team is very caring and professional.',
          time: Date.now() - 7776000000,
        },
        {
          author_name: 'Vikram Mehta',
          author_url: 'https://www.google.com/maps/contrib/101',
          profile_photo_url: 'https://ui-avatars.com/api/?name=Vikram+Mehta&background=C9A96E&color=fff',
          rating: 4,
          relative_time_description: '4 months ago',
          text: 'Great clinic with modern equipment. The staff is friendly and the doctor is experienced. Would definitely recommend to others.',
          time: Date.now() - 10368000000,
        },
        {
          author_name: 'Sneha Patel',
          author_url: 'https://www.google.com/maps/contrib/112',
          profile_photo_url: 'https://ui-avatars.com/api/?name=Sneha+Patel&background=C9A96E&color=fff',
          rating: 5,
          relative_time_description: '5 months ago',
          text: 'Wonderful experience from start to finish. The consultation was thorough and the treatment was exactly what I needed. Highly satisfied!',
          time: Date.now() - 12960000000,
        },
        {
          author_name: 'Amit Verma',
          author_url: 'https://www.google.com/maps/contrib/131',
          profile_photo_url: 'https://ui-avatars.com/api/?name=Amit+Verma&background=C9A96E&color=fff',
          rating: 5,
          relative_time_description: '6 months ago',
          text: 'Professional service and excellent results. The clinic maintains high standards of hygiene and the staff is very courteous.',
          time: Date.now() - 15552000000,
        },
      ];

      setReviews(mockReviews.slice(0, maxReviews));
      setLoading(false);
    } catch (err) {
      setError('Failed to load Google reviews');
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
            size={16}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">Loading Google reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Google Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our customers are saying about us on Google
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-gray-600 font-medium">
                5.0 out of 5 stars
              </span>
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Reviewer Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <a
                    href={review.author_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 hover:text-gold-600"
                  >
                    {review.author_name}
                  </a>
                  <p className="text-sm text-gray-500">
                    {review.relative_time_description}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-3">{renderStars(review.rating)}</div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                {review.text}
              </p>

              {/* Google Logo */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400">Posted on Google</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/YOUR_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-gold-600 text-gold-600 rounded-full font-semibold hover:bg-gold-600 hover:text-white transition-all"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
