import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiHeart, FiMessageCircle } from 'react-icons/fi';

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

interface InstagramFeedProps {
  maxPosts?: number;
}

export default function InstagramFeed({ maxPosts = 6 }: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  const fetchInstagramPosts = async () => {
    try {
      // In production, this should call your backend API which calls Instagram Graph API
      // Backend endpoint: GET /api/instagram-feed
      
      // Example API call (implement in backend):
      // const response = await fetch('/api/instagram-feed');
      // const data = await response.json();
      
      // Mock data for demonstration
      const mockPosts: InstagramPost[] = [
        {
          id: '1',
          caption: 'Transform your skin with our advanced laser treatment! ✨ Book your consultation today. #ElegantGlow #SkinCare #LaserTreatment',
          media_url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=500&fit=crop',
          media_type: 'IMAGE',
          permalink: 'https://www.instagram.com/p/example1',
          timestamp: new Date().toISOString(),
          like_count: 245,
          comments_count: 18,
        },
        {
          id: '2',
          caption: 'Before & After: Amazing results from our anti-aging treatment! 🌟 #BeforeAndAfter #AntiAging #GlowingSkin',
          media_url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=500&fit=crop',
          media_type: 'IMAGE',
          permalink: 'https://www.instagram.com/p/example2',
          timestamp: new Date(Date.now() - 86400000).toISOString(),
          like_count: 312,
          comments_count: 24,
        },
        {
          id: '3',
          caption: 'Meet Dr. Priya Sharma - Our expert dermatologist with 15+ years of experience! 👩‍⚕️ #MeetTheTeam #Dermatologist',
          media_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop',
          media_type: 'IMAGE',
          permalink: 'https://www.instagram.com/p/example3',
          timestamp: new Date(Date.now() - 172800000).toISOString(),
          like_count: 189,
          comments_count: 12,
        },
        {
          id: '4',
          caption: 'Our state-of-the-art clinic in Bokaro! Come visit us for a consultation. 🏥 #ClinicTour #ModernFacility',
          media_url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=500&fit=crop',
          media_type: 'IMAGE',
          permalink: 'https://www.instagram.com/p/example4',
          timestamp: new Date(Date.now() - 259200000).toISOString(),
          like_count: 156,
          comments_count: 8,
        },
        {
          id: '5',
          caption: 'Special offer this month! Get 20% off on all skin rejuvenation treatments. 💫 #SpecialOffer #SkinRejuvenation',
          media_url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&h=500&fit=crop',
          media_type: 'IMAGE',
          permalink: 'https://www.instagram.com/p/example5',
          timestamp: new Date(Date.now() - 345600000).toISOString(),
          like_count: 278,
          comments_count: 31,
        },
        {
          id: '6',
          caption: 'Happy client testimonial! Thank you for trusting us with your skin care journey. ❤️ #HappyClients #Testimonial',
          media_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop',
          media_type: 'IMAGE',
          permalink: 'https://www.instagram.com/p/example6',
          timestamp: new Date(Date.now() - 432000000).toISOString(),
          like_count: 201,
          comments_count: 15,
        },
      ];

      setPosts(mockPosts.slice(0, maxPosts));
      setLoading(false);
    } catch (err) {
      setError('Failed to load Instagram feed');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">Loading Instagram feed...</p>
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
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FiInstagram className="text-gold-600" size={32} />
              <h2 className="font-playfair text-4xl font-bold text-gray-900">
                Follow Us on Instagram
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest treatments, offers, and transformations
            </p>
            <a
              href="https://www.instagram.com/elegantglowclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gold-600 hover:text-gold-700 font-semibold"
            >
              @elegantglowclinic
            </a>
          </motion.div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={post.media_url}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    {post.like_count && (
                      <div className="flex items-center gap-1">
                        <FiHeart size={20} />
                        <span className="font-semibold">{post.like_count}</span>
                      </div>
                    )}
                    {post.comments_count && (
                      <div className="flex items-center gap-1">
                        <FiMessageCircle size={20} />
                        <span className="font-semibold">{post.comments_count}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs line-clamp-2">{post.caption}</p>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <FiInstagram className="text-gold-600" size={16} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/elegantglowclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            <FiInstagram size={20} />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
