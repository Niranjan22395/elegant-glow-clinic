import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials: React.FC = () => {
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
              Patient Testimonials
            </h1>
            <p className="font-body text-xl max-w-3xl mx-auto">
              Real stories from real people who transformed their lives with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-elegant-lg hover:shadow-elegant-xl transition-all"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-gold-primary text-3xl mb-4 opacity-50" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-gold-primary" />
                  ))}
                </div>

                {/* Review */}
                <p className="font-body text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.review}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 bg-gold-light rounded-full flex items-center justify-center">
                    <span className="font-heading text-gold-primary font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.treatment}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 px-4 bg-elegant-grey-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Hear directly from our satisfied patients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-elegant-lg"
              >
                <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-6xl mb-2">▶</div>
                    <p className="text-sm">Video Testimonial {item}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Patient Success Story
                  </h3>
                  <p className="text-sm text-gray-600">
                    Watch how our treatment changed their life
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="font-body text-xl text-gray-600 mb-8">
              Join thousands of satisfied patients who transformed their lives
            </p>
            <a
              href="/appointment"
              className="inline-block bg-gold-primary hover:bg-gold-accent text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-gold-glow"
            >
              Book Your Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const stats = [
  { value: '5000+', label: 'Happy Patients' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '95%', label: 'Success Rate' },
  { value: '10+', label: 'Years Experience' },
];

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    treatment: 'Skin Whitening Treatment',
    date: 'June 2026',
    review: 'Amazing results! My skin has never looked better. The doctors are very professional and caring. I highly recommend Elegant Glow to anyone looking for quality aesthetic treatments.',
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    treatment: 'Hair Transplant',
    date: 'May 2026',
    review: 'Life-changing experience. The hair transplant was painless and the results are incredible. The team made me feel comfortable throughout the process.',
  },
  {
    id: 3,
    name: 'Anjali Singh',
    treatment: 'Laser Hair Removal',
    date: 'June 2026',
    review: 'Best clinic in Bokaro! The laser treatment was quick and effective. No more waxing for me. Thank you Elegant Glow!',
  },
  {
    id: 4,
    name: 'Vikram Patel',
    treatment: 'Acne Treatment',
    date: 'April 2026',
    review: 'After struggling with acne for years, I finally found the right treatment. My skin is clear and I feel so much more confident now.',
  },
  {
    id: 5,
    name: 'Neha Gupta',
    treatment: 'Botox & Fillers',
    date: 'May 2026',
    review: 'Natural-looking results! I was worried about looking fake, but Dr. Sharma did an amazing job. I look refreshed and younger.',
  },
  {
    id: 6,
    name: 'Amit Verma',
    treatment: 'PRP Hair Treatment',
    date: 'March 2026',
    review: 'Visible hair growth after just 3 sessions. The staff is knowledgeable and the clinic is very clean and modern.',
  },
  {
    id: 7,
    name: 'Pooja Reddy',
    treatment: 'Chemical Peel',
    date: 'June 2026',
    review: 'My pigmentation has reduced significantly. The treatment was comfortable and the results exceeded my expectations.',
  },
  {
    id: 8,
    name: 'Sanjay Mehta',
    treatment: 'Dental Whitening',
    date: 'May 2026',
    review: 'Brilliant white smile in just one session! The dental team is excellent and very gentle. Highly recommended.',
  },
  {
    id: 9,
    name: 'Kavita Joshi',
    treatment: 'Bridal Package',
    date: 'April 2026',
    review: 'Perfect bridal glow! The complete package was worth every penny. I looked stunning on my wedding day. Thank you!',
  },
];

export default Testimonials;

// Made with Bob
