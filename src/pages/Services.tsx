import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSpa, FaCut, FaTooth, FaSyringe, FaHeartbeat, FaLightbulb } from 'react-icons/fa';

const Services: React.FC = () => {
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
              Our Services
            </h1>
            <p className="font-body text-xl max-w-3xl mx-auto">
              Comprehensive aesthetic treatments tailored to your unique needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
                  <div className="bg-white rounded-2xl overflow-hidden shadow-elegant-lg hover:shadow-elegant-xl transition-all transform hover:-translate-y-2 cursor-pointer h-full">
                    {/* Service Icon/Image */}
                    <div className="h-64 bg-gradient-gold flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10" />
                      <service.icon className="text-white text-8xl relative z-10" />
                    </div>

                    {/* Service Info */}
                    <div className="p-6">
                      <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="font-body text-gray-600 mb-4">
                        {service.description}
                      </p>

                      {/* Treatments List */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          Popular Treatments:
                        </h4>
                        <ul className="space-y-1">
                          {service.treatments.slice(0, 4).map((treatment, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
                              {treatment}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gold-primary font-semibold hover:text-gold-accent transition-colors">
                          Learn More →
                        </span>
                        <span className="text-sm text-gray-500">
                          {service.treatments.length} treatments
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

      {/* Why Choose Our Services */}
      <section className="py-20 px-4 bg-elegant-grey-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our comprehensive approach to aesthetic care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-elegant-md text-center"
              >
                <div className="w-12 h-12 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Not Sure Which Treatment is Right for You?
            </h2>
            <p className="font-body text-xl text-gray-600 mb-8">
              Book a free consultation with our experts to discuss your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="inline-block bg-gold-primary hover:bg-gold-accent text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-gold-glow"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-white border-2 border-gold-primary hover:bg-gold-primary hover:text-white text-gold-primary px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
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

const services = [
  {
    id: 1,
    title: 'Skin Treatment',
    slug: 'skin-treatment',
    description: 'Advanced dermatological solutions for all skin concerns',
    icon: FaSpa,
    treatments: [
      'Chemical Peels',
      'Laser Skin Rejuvenation',
      'Acne Treatment',
      'Pigmentation Removal',
      'Anti-Aging Treatments',
      'Skin Brightening',
      'Scar Reduction',
      'Hydrafacial',
    ],
  },
  {
    id: 2,
    title: 'Hair Treatment',
    slug: 'hair-treatment',
    description: 'Comprehensive hair restoration and care solutions',
    icon: FaCut,
    treatments: [
      'PRP Hair Treatment',
      'Hair Transplant (FUE)',
      'Mesotherapy',
      'Hair Loss Treatment',
      'Scalp Treatment',
      'Hair Growth Therapy',
      'Dandruff Treatment',
    ],
  },
  {
    id: 3,
    title: 'Dental Care',
    slug: 'dental',
    description: 'Complete cosmetic and restorative dentistry',
    icon: FaTooth,
    treatments: [
      'Teeth Whitening',
      'Dental Implants',
      'Veneers',
      'Smile Makeover',
      'Orthodontics',
      'Root Canal',
      'Dental Crowns',
    ],
  },
  {
    id: 4,
    title: 'Aesthetic Treatment',
    slug: 'aesthetic-treatment',
    description: 'Non-surgical facial rejuvenation and enhancement',
    icon: FaSyringe,
    treatments: [
      'Botox Injections',
      'Dermal Fillers',
      'Thread Lift',
      'Lip Enhancement',
      'Nose Reshaping',
      'Jawline Contouring',
      'Under Eye Treatment',
    ],
  },
  {
    id: 5,
    title: 'Diabetes Care',
    slug: 'diabetes-care',
    description: 'Specialized diabetic care and management',
    icon: FaHeartbeat,
    treatments: [
      'Diabetic Foot Care',
      'Wound Management',
      'Preventive Care',
      'Diet Counseling',
      'Blood Sugar Monitoring',
      'Complication Prevention',
    ],
  },
  {
    id: 6,
    title: 'Laser Treatment',
    slug: 'laser-treatment',
    description: 'Advanced laser technology for various concerns',
    icon: FaLightbulb,
    treatments: [
      'Laser Hair Removal',
      'Laser Tattoo Removal',
      'Laser Skin Resurfacing',
      'Laser Toning',
      'Pigmentation Removal',
      'Scar Treatment',
      'Vascular Lesion Removal',
    ],
  },
];

const benefits = [
  {
    icon: '✨',
    title: 'Latest Technology',
    description: 'State-of-the-art equipment for best results',
  },
  {
    icon: '👨‍⚕️',
    title: 'Expert Doctors',
    description: 'Highly qualified and experienced professionals',
  },
  {
    icon: '🎯',
    title: 'Personalized Plans',
    description: 'Customized treatment for your unique needs',
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    description: 'Competitive rates with flexible payment options',
  },
  {
    icon: '🛡️',
    title: 'Safe & Hygienic',
    description: 'Strict safety protocols and sterilization',
  },
  {
    icon: '⭐',
    title: 'Natural Results',
    description: 'Subtle enhancements that look completely natural',
  },
  {
    icon: '📞',
    title: 'Follow-up Care',
    description: 'Comprehensive post-treatment support',
  },
  {
    icon: '🏆',
    title: 'Proven Results',
    description: 'Thousands of satisfied patients',
  },
];

export default Services;

// Made with Bob
