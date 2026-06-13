import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Shield, Sparkles, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'Board-certified dermatologists with years of experience',
    },
    {
      icon: Sparkles,
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment and latest treatment methods',
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Customized treatment plans tailored to your unique needs',
    },
    {
      icon: Shield,
      title: 'Proven Results',
      description: '98% success rate with thousands of satisfied clients',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals committed to your beauty goals',
    },
    {
      icon: Clock,
      title: 'Hygienic Environment',
      description: 'Clean, modern facilities with strict safety protocols',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-primary font-medium text-sm uppercase tracking-wider mb-2 block">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-elegant-black mb-4">
            Welcome to <span className="gold-gradient-text">Elegant Glow</span>
          </h2>
          <p className="text-lg text-elegant-grey-dark max-w-3xl mx-auto">
            Your trusted partner for premium aesthetic treatments in Bokaro
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant-xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Elegant Glow Aesthetic Clinic"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white rounded-lg p-6 shadow-elegant-xl">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-gold-primary">10+</div>
                    <div className="text-sm text-elegant-grey-dark">Years</div>
                  </div>
                  <div className="h-12 w-px bg-elegant-grey-light" />
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-gold-primary">5K+</div>
                    <div className="text-sm text-elegant-grey-dark">Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold-primary/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-heading font-bold text-elegant-black mb-6">
              Enhancing Natural Beauty Since 2014
            </h3>
            
            <p className="text-elegant-grey-dark mb-6 leading-relaxed">
              At Elegant Glow Aesthetic Clinic, we believe that everyone deserves to feel confident and beautiful in their own skin. Located in the heart of Bokaro, we are dedicated to providing world-class aesthetic treatments that combine cutting-edge technology with personalized care.
            </p>

            <p className="text-elegant-grey-dark mb-6 leading-relaxed">
              Our team of board-certified dermatologists and aesthetic specialists brings years of expertise and a passion for helping you achieve your beauty goals. We use only FDA-approved treatments and the latest technology to ensure safe, effective, and long-lasting results.
            </p>

            <div className="bg-elegant-background rounded-lg p-6 mb-6">
              <h4 className="font-heading font-bold text-elegant-black mb-3">Our Mission</h4>
              <p className="text-elegant-grey-dark">
                To empower individuals to look and feel their best through safe, effective, and personalized aesthetic treatments, delivered with compassion and expertise.
              </p>
            </div>

            <div className="bg-elegant-background rounded-lg p-6">
              <h4 className="font-heading font-bold text-elegant-black mb-3">Our Vision</h4>
              <p className="text-elegant-grey-dark">
                To be the most trusted and preferred aesthetic clinic in Bokaro, known for excellence in patient care, innovative treatments, and outstanding results.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-elegant-black mb-4">
            Why Choose <span className="gold-gradient-text">Elegant Glow</span>?
          </h3>
          <p className="text-elegant-grey-dark max-w-2xl mx-auto">
            We combine expertise, technology, and personalized care to deliver exceptional results
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-elegant-md hover:shadow-elegant-xl transition-all duration-300 hover:-translate-y-1 border border-elegant-grey-light"
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center mb-4">
                <highlight.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-heading font-bold text-elegant-black mb-2">
                {highlight.title}
              </h4>
              <p className="text-elegant-grey-dark">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Made with Bob
