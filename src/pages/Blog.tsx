import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaClock, FaUser, FaArrowRight } from 'react-icons/fa';

const Blog: React.FC = () => {
  return (
    <div className="bg-elegant-background">
      {/* Page Hero */}
      <section className="relative py-20 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Beauty & Wellness Blog
            </h1>
            <p className="font-body text-xl max-w-3xl mx-auto">
              Expert tips, treatment guides, and the latest in aesthetic medicine
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to={`/blog/${blogPosts[0].slug}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-elegant-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-96 lg:h-auto">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block px-4 py-1 bg-gold-light text-gold-primary rounded-full text-sm font-semibold mb-4 w-fit">
                      Featured
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {blogPosts[0].title}
                    </h2>
                    <p className="font-body text-gray-600 mb-6 text-lg">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <FaUser />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                    <span className="text-gold-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      Read More <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 bg-elegant-grey-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with our expert insights and treatment guides
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-elegant-lg hover:shadow-elegant-xl transition-all transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-gold-light text-gold-primary text-xs rounded-full font-semibold">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                        {post.title}
                      </h3>
                      <p className="font-body text-gray-600 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FaClock className="text-xs" />
                          <span>{post.readTime}</span>
                        </div>
                        <span className="text-gold-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                          Read <FaArrowRight className="text-xs" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-gold text-white p-12 rounded-2xl text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="font-body text-lg mb-8 text-white/90">
              Get the latest beauty tips and treatment updates delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-gold-primary px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const blogPosts = [
  {
    id: 1,
    title: 'Glutathione Benefits: The Ultimate Guide to Skin Whitening',
    slug: 'glutathione-benefits-skin-whitening',
    excerpt: 'Discover how glutathione can transform your skin, reduce pigmentation, and give you a radiant glow. Learn about dosage, benefits, and what to expect.',
    content: '',
    author: 'Dr. Priya Sharma',
    category: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800',
    date: 'June 15, 2026',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'PRP Hair Treatment: Does It Really Work?',
    slug: 'prp-hair-treatment-guide',
    excerpt: 'Everything you need to know about PRP therapy for hair loss - from the procedure to results and cost.',
    content: '',
    author: 'Dr. Rajesh Kumar',
    category: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800',
    date: 'June 10, 2026',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Daily Skin Care Routine for Glowing Skin',
    slug: 'daily-skincare-routine',
    excerpt: 'A dermatologist-approved morning and night skincare routine for all skin types.',
    content: '',
    author: 'Dr. Priya Sharma',
    category: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
    date: 'June 5, 2026',
    readTime: '5 min read',
  },
  {
    id: 4,
    title: 'Bridal Glow: 3-Month Wedding Preparation Plan',
    slug: 'bridal-glow-preparation',
    excerpt: 'Complete timeline and treatments to achieve perfect bridal skin before your big day.',
    content: '',
    author: 'Dr. Anjali Verma',
    category: 'Bridal Care',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    date: 'May 28, 2026',
    readTime: '10 min read',
  },
  {
    id: 5,
    title: 'Acne Treatment: Types, Causes & Solutions',
    slug: 'acne-treatment-guide',
    excerpt: 'Comprehensive guide to understanding and treating different types of acne effectively.',
    content: '',
    author: 'Dr. Priya Sharma',
    category: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    date: 'May 20, 2026',
    readTime: '7 min read',
  },
  {
    id: 6,
    title: 'Botox vs Fillers: Which One Do You Need?',
    slug: 'botox-vs-fillers',
    excerpt: 'Understanding the difference between Botox and dermal fillers to make the right choice.',
    content: '',
    author: 'Dr. Vikram Patel',
    category: 'Anti-Aging',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800',
    date: 'May 15, 2026',
    readTime: '6 min read',
  },
  {
    id: 7,
    title: 'Laser Hair Removal: Complete Guide',
    slug: 'laser-hair-removal-guide',
    excerpt: 'Everything about laser hair removal - procedure, cost, results, and aftercare.',
    content: '',
    author: 'Dr. Neha Gupta',
    category: 'Laser Treatment',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
    date: 'May 10, 2026',
    readTime: '8 min read',
  },
];

export default Blog;

// Made with Bob
