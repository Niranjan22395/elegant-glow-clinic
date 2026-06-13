import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { Button } from '../ui';
import { scrollToElement } from '../../lib/utils';
import { CONTACT_INFO } from '../../lib/constants';

export const Hero: React.FC = () => {
  const handleBookAppointment = () => {
    scrollToElement('contact');
  };

  const handleCallNow = () => {
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 bg-gold-primary/20 backdrop-blur-sm border border-gold-primary/30 rounded-full text-gold-primary text-sm font-medium">
              ✨ Premium Aesthetic Treatments
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Enhance Your Natural Beauty
            <br />
            <span className="gold-gradient-text">with Expert Care</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-elegant-grey-light mb-10 max-w-2xl mx-auto"
          >
            Advanced skin and hair treatments tailored for you. Experience the perfect blend of science and beauty at Bokaro's premier aesthetic clinic.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleBookAppointment}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Book Appointment
            </Button>
            <Button
              onClick={handleCallNow}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-elegant-black group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Call Now
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gold-primary mb-2">
                10+
              </div>
              <div className="text-sm text-elegant-grey-light">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gold-primary mb-2">
                5000+
              </div>
              <div className="text-sm text-elegant-grey-light">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gold-primary mb-2">
                15+
              </div>
              <div className="text-sm text-elegant-grey-light">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gold-primary mb-2">
                98%
              </div>
              <div className="text-sm text-elegant-grey-light">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-gold-primary rounded-full" />
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gold-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

// Made with Bob
