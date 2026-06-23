import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaStar, FaAward, FaUserMd, FaShieldAlt } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="bg-elegant-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-dark">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920')] bg-cover bg-center z-0" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1
            className="font-heading text-5xl md:text-7xl font-bold mb-6 text-gray-900"
            style={{ textShadow: '2px 2px 8px rgba(255,255,255,0.9), -1px -1px 4px rgba(255,255,255,0.7)' }}
          >
            Enhance Your Natural Beauty
          </h1>
          <p
            className="font-body text-xl md:text-2xl mb-8 text-gray-800"
            style={{ textShadow: '1px 1px 6px rgba(255,255,255,0.9), -1px -1px 3px rgba(255,255,255,0.7)' }}
          >
            Premium Skin, Hair & Aesthetic Treatments in Bokaro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/appointment"
              className="bg-gold-primary hover:bg-gold-accent text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-gold-glow"
            >
              Book Appointment
            </Link>
            <a 
              href="tel:+917488172473"
              className="bg-white hover:bg-gray-100 text-gold-primary px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaPhone /> Call Now
            </a>
          </div>
        </motion.div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/917488172473?text=Hello%2C%20I%20want%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
        >
          <FaWhatsapp size={32} />
        </a>
      </section>

      {/* Services Highlight */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of aesthetic treatments designed to enhance your natural beauty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/services/${service.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-elegant-lg hover:shadow-elegant-xl transition-all transform hover:-translate-y-2 cursor-pointer">
                    <div className="h-48 bg-gradient-gold flex items-center justify-center">
                      <service.icon className="text-white text-6xl" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="font-body text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <span className="text-gold-primary font-semibold hover:text-gold-accent transition-colors">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="inline-block bg-gold-primary hover:bg-gold-accent text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-elegant-grey-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Elegant Glow
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our world-class facilities and expert care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-elegant-md text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-light rounded-full mb-4">
                  <item.icon className="text-gold-primary text-3xl" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who transformed their lives with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-elegant-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-gold-primary" />
                  ))}
                </div>
                <p className="font-body text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-light rounded-full flex items-center justify-center">
                    <span className="font-heading text-gold-primary font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/testimonials"
              className="inline-block bg-gold-primary hover:bg-gold-accent text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-gold text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="font-body text-xl mb-8 text-white/90">
              Book your consultation today and take the first step towards a more confident you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/appointment"
                className="bg-white hover:bg-gray-100 text-gold-primary px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Book Appointment
              </Link>
              <Link 
                to="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gold-primary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Temporary data - will be moved to separate files
const services = [
  {
    id: 1,
    title: 'Skin Treatment',
    slug: 'skin-treatment',
    description: 'Advanced skin care solutions for acne, pigmentation, and rejuvenation',
    icon: FaStar,
  },
  {
    id: 2,
    title: 'Hair Treatment',
    slug: 'hair-treatment',
    description: 'PRP therapy, hair transplant, and restoration treatments',
    icon: FaAward,
  },
  {
    id: 3,
    title: 'Aesthetic Treatment',
    slug: 'aesthetic-treatment',
    description: 'Botox, fillers, and non-surgical facial enhancements',
    icon: FaUserMd,
  },
  {
    id: 4,
    title: 'Laser Treatment',
    slug: 'laser-treatment',
    description: 'Hair removal, skin resurfacing, and tattoo removal',
    icon: FaShieldAlt,
  },
  {
    id: 5,
    title: 'Dental Care',
    slug: 'dental',
    description: 'Cosmetic dentistry, whitening, and smile makeovers',
    icon: FaStar,
  },
  {
    id: 6,
    title: 'Diabetes Care',
    slug: 'diabetes-care',
    description: 'Specialized diabetic foot care and wound management',
    icon: FaAward,
  },
];

const whyChooseUs = [
  {
    icon: FaUserMd,
    title: 'Certified Professionals',
    description: 'Experienced doctors with international certifications',
  },
  {
    icon: FaAward,
    title: 'Advanced Technology',
    description: 'Latest equipment and cutting-edge treatment methods',
  },
  {
    icon: FaShieldAlt,
    title: 'Safe & Hygienic',
    description: 'Strict safety protocols and sterilization standards',
  },
  {
    icon: FaStar,
    title: 'Personalized Care',
    description: 'Customized treatment plans for individual needs',
  },
  {
    icon: FaAward,
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising quality',
  },
  {
    icon: FaStar,
    title: 'Natural Results',
    description: 'Subtle enhancements that look completely natural',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    treatment: 'Skin Treatment',
    text: 'Amazing results! My skin has never looked better. The doctors are very professional and caring.',
  },
  {
    name: 'Rahul Kumar',
    treatment: 'Hair Transplant',
    text: 'Life-changing experience. The hair transplant was painless and the results are incredible.',
  },
  {
    name: 'Anjali Singh',
    treatment: 'Laser Treatment',
    text: 'Best clinic in Bokaro! The laser treatment was quick and effective. Highly recommended!',
  },
];

export default Home;

// Made with Bob
