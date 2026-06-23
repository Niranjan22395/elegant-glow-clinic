import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaClock, FaUser, FaCalendar, FaArrowLeft, FaShare } from 'react-icons/fa';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find blog post (in real app, fetch from API)
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-gold-primary hover:text-gold-accent">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-elegant-background">
      {/* Hero Image */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </section>

      {/* Article Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gold-primary hover:text-gold-accent mb-8 transition-colors"
            >
              <FaArrowLeft /> Back to Blog
            </Link>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1 bg-gold-light text-gold-primary rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-gray-600">
                <FaCalendar className="text-sm" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaClock className="text-sm" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-light rounded-full flex items-center justify-center">
                  <FaUser className="text-gold-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-600">Medical Expert</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gold-primary transition-colors">
                <FaShare /> Share
              </button>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Takeaways */}
            {post.keyTakeaways && (
              <div className="bg-gold-light/30 p-8 rounded-2xl my-12">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  Key Takeaways
                </h3>
                <ul className="space-y-3">
                  {post.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-gold-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-gold text-white p-8 rounded-2xl my-12 text-center">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="mb-6">
                Book a consultation with our experts to discuss your goals
              </p>
              <Link
                to="/appointment"
                className="inline-block bg-white hover:bg-gray-100 text-gold-primary px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Book Appointment
              </Link>
            </div>

            {/* Tags */}
            {post.tags && (
              <div className="flex flex-wrap gap-2 mb-12">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 px-4 bg-elegant-grey-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-elegant-lg hover:shadow-elegant-xl transition-all transform hover:-translate-y-2">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <FaClock />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Blog posts data (same as Blog.tsx - will be moved to separate file)
const blogPosts = [
  {
    id: 1,
    title: 'Glutathione Benefits: The Ultimate Guide to Skin Whitening',
    slug: 'glutathione-benefits-skin-whitening',
    excerpt: 'Discover how glutathione can transform your skin, reduce pigmentation, and give you a radiant glow.',
    content: `Glutathione is a powerful antioxidant that has gained immense popularity in the beauty and wellness industry. Known as the "master antioxidant," it plays a crucial role in maintaining overall health and achieving radiant skin.

What is Glutathione? Glutathione is a tripeptide composed of three amino acids: cysteine, glutamic acid, and glycine. It's naturally produced by the liver and found in every cell of the body. Its primary function is to neutralize free radicals and protect cells from oxidative stress.

Benefits for Skin: Glutathione offers numerous benefits for skin health. It helps reduce melanin production, leading to a lighter and more even skin tone. It also combats signs of aging by reducing fine lines and wrinkles. Additionally, it helps detoxify the body, which reflects in clearer, healthier-looking skin.

How It Works: Glutathione works by inhibiting the enzyme tyrosinase, which is responsible for melanin production. By reducing melanin synthesis, it helps lighten dark spots, hyperpigmentation, and overall skin tone. The antioxidant properties also help protect skin from UV damage and environmental pollutants.

Administration Methods: Glutathione can be administered through various methods including IV injections, oral supplements, and topical applications. IV glutathione is considered the most effective as it delivers the antioxidant directly into the bloodstream, ensuring maximum absorption.

Expected Results: Results vary depending on individual factors such as skin type, dosage, and consistency. Most people start noticing visible improvements after 4-6 weeks of regular treatment. For optimal results, a series of sessions combined with proper skincare is recommended.

Safety and Side Effects: When administered by qualified professionals, glutathione is generally safe. Some people may experience mild side effects such as nausea or stomach discomfort. It's important to consult with a dermatologist before starting any glutathione treatment.`,
    author: 'Dr. Priya Sharma',
    category: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800',
    date: 'June 15, 2026',
    readTime: '8 min read',
    keyTakeaways: [
      'Glutathione is a powerful antioxidant that helps lighten skin tone',
      'IV administration is the most effective method',
      'Results typically visible after 4-6 weeks',
      'Safe when administered by qualified professionals',
      'Combine with proper skincare for best results',
    ],
    tags: ['glutathione', 'skin whitening', 'antioxidants', 'skin care', 'beauty'],
  },
  {
    id: 2,
    title: 'PRP Hair Treatment: Does It Really Work?',
    slug: 'prp-hair-treatment-guide',
    excerpt: 'Everything you need to know about PRP therapy for hair loss.',
    content: `Platelet-Rich Plasma (PRP) therapy has emerged as a revolutionary treatment for hair loss. This comprehensive guide covers everything you need to know about PRP hair treatment.

Understanding PRP: PRP therapy uses your own blood's platelets to stimulate hair growth. The process involves drawing a small amount of blood, processing it to concentrate the platelets, and injecting the platelet-rich plasma into the scalp.

How It Works: Platelets contain growth factors that promote healing and tissue regeneration. When injected into the scalp, these growth factors stimulate dormant hair follicles, increase blood supply to the follicles, and promote new hair growth.

The Procedure: The treatment typically takes 60-90 minutes. Blood is drawn and processed in a centrifuge to separate the platelet-rich plasma. The PRP is then injected into areas of thinning hair using fine needles. Most patients require 3-4 sessions spaced 4-6 weeks apart.

Expected Results: Most patients start seeing results after 3-6 months. Hair becomes thicker, stronger, and healthier. The treatment is most effective for people in early stages of hair loss.

Who Is a Good Candidate: PRP works best for people with androgenetic alopecia (pattern baldness), those in early stages of hair loss, and people looking for a natural treatment option. It's not recommended for people with certain blood disorders or active scalp infections.`,
    author: 'Dr. Rajesh Kumar',
    category: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800',
    date: 'June 10, 2026',
    readTime: '6 min read',
    keyTakeaways: [
      'PRP uses your own blood platelets to stimulate hair growth',
      'Results visible after 3-6 months',
      'Most effective in early stages of hair loss',
      'Requires 3-4 sessions for optimal results',
      'Natural and safe treatment option',
    ],
    tags: ['PRP', 'hair loss', 'hair treatment', 'hair growth', 'platelet therapy'],
  },
  // Add more blog posts...
];

export default BlogPost;

// Made with Bob
