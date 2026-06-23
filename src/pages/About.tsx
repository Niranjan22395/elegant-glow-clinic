import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaHeart, FaShieldAlt, FaUsers } from 'react-icons/fa';

const About: React.FC = () => {
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
              About Elegant Glow
            </h1>
            <p className="font-body text-xl max-w-3xl mx-auto">
              Your trusted partner in aesthetic excellence and natural beauty enhancement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="font-body text-lg text-gray-700 mb-4">
                Elegant Glow Aesthetic Clinic was founded with a vision to provide world-class aesthetic treatments 
                in Bokaro. We believe that everyone deserves to feel confident and beautiful in their own skin.
              </p>
              <p className="font-body text-lg text-gray-700 mb-4">
                With years of experience and a team of highly qualified professionals, we have become the most 
                trusted name in aesthetic medicine in the region. Our state-of-the-art facility is equipped with 
                the latest technology to ensure safe, effective, and comfortable treatments.
              </p>
              <p className="font-body text-lg text-gray-700">
                We are committed to delivering natural-looking results that enhance your unique beauty, not change it.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-elegant-xl"
            >
              <div className="absolute inset-0 bg-gradient-gold opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800" 
                alt="Elegant Glow Clinic"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-elegant-grey-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-elegant-lg"
            >
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mb-6">
                <FaHeart className="text-gold-primary text-3xl" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="font-body text-lg text-gray-700">
                To provide safe, effective, and personalized aesthetic treatments that enhance natural beauty 
                and boost confidence. We strive to make premium aesthetic care accessible to everyone while 
                maintaining the highest standards of quality and safety.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-elegant-lg"
            >
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mb-6">
                <FaAward className="text-gold-primary text-3xl" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="font-body text-lg text-gray-700">
                To be the leading aesthetic clinic in Eastern India, recognized for excellence in patient care, 
                innovative treatments, and natural-looking results. We envision a future where everyone has 
                access to safe and effective aesthetic solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-light rounded-full mb-4">
                  <value.icon className="text-gold-primary text-4xl" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Hygiene */}
      <section className="py-20 px-4 bg-elegant-grey-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Safety & Hygiene Standards
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Your safety is our top priority. We follow strict protocols to ensure a safe and hygienic environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-elegant-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-light rounded-full flex items-center justify-center">
                    <FaShieldAlt className="text-gold-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                      {standard.title}
                    </h3>
                    <p className="font-body text-gray-600 text-sm">
                      {standard.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const coreValues = [
  {
    icon: FaHeart,
    title: 'Patient-Centric',
    description: 'Your comfort, safety, and satisfaction are our top priorities',
  },
  {
    icon: FaAward,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do',
  },
  {
    icon: FaShieldAlt,
    title: 'Integrity',
    description: 'Honest, transparent, and ethical in all our practices',
  },
  {
    icon: FaUsers,
    title: 'Compassion',
    description: 'We treat every patient with care, respect, and empathy',
  },
];

const safetyStandards = [
  {
    title: 'Sterilization Protocols',
    description: 'All instruments are sterilized using advanced autoclaves and UV sterilizers',
  },
  {
    title: 'Disposable Equipment',
    description: 'Single-use needles, syringes, and other disposable items for each patient',
  },
  {
    title: 'Clean Environment',
    description: 'Regular sanitization of all treatment rooms and waiting areas',
  },
  {
    title: 'Qualified Staff',
    description: 'All staff members are trained in infection control and safety protocols',
  },
  {
    title: 'Quality Products',
    description: 'We use only FDA-approved and internationally certified products',
  },
  {
    title: 'Emergency Preparedness',
    description: 'Fully equipped to handle any medical emergencies with trained personnel',
  },
];

export default About;

// Made with Bob
