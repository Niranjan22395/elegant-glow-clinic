import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaAward, FaCertificate, FaHeart } from 'react-icons/fa';

const Doctors: React.FC = () => {
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
              Meet Our Doctors
            </h1>
            <p className="font-body text-xl max-w-3xl mx-auto">
              Experienced professionals dedicated to your beauty and wellness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-elegant-lg hover:shadow-elegant-xl transition-all"
              >
                {/* Doctor Image */}
                <div className="relative h-80 bg-gradient-gold">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaUserMd className="text-white text-8xl opacity-50" />
                  </div>
                  {/* Placeholder for actual doctor photo */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="font-heading text-2xl font-bold text-white mb-1">
                      {doctor.name}
                    </h3>
                    <p className="font-body text-white/90">
                      {doctor.qualification}
                    </p>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FaAward className="text-gold-primary" />
                    <span className="font-body text-gray-700">
                      {doctor.experience} Years Experience
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialization:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialization.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gold-light text-gold-primary text-sm rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="font-body text-gray-600 italic mb-4">
                    "{doctor.message}"
                  </p>

                  <div className="flex gap-2">
                    {doctor.certifications.map((cert, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-sm text-gray-600"
                        title={cert}
                      >
                        <FaCertificate className="text-gold-primary" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="py-20 px-4 bg-elegant-grey-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Doctors
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Our team brings together expertise, experience, and compassion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseOurDoctors.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-elegant-md text-center"
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book a Consultation
            </h2>
            <p className="font-body text-xl text-gray-600 mb-8">
              Schedule a personalized consultation with our expert doctors
            </p>
            <a
              href="/appointment"
              className="inline-block bg-gold-primary hover:bg-gold-accent text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-gold-glow"
            >
              Book Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const doctors = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    qualification: 'MBBS, MD (Dermatology)',
    experience: 15,
    specialization: ['Skin Care', 'Laser Treatment', 'Anti-Aging'],
    message: 'Dedicated to helping you achieve healthy, glowing skin through personalized care.',
    certifications: ['Board Certified', 'Laser Certified', 'Aesthetic Medicine'],
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    qualification: 'MBBS, DNB (Plastic Surgery)',
    experience: 12,
    specialization: ['Aesthetic Surgery', 'Hair Transplant', 'Fillers'],
    message: 'Committed to natural-looking results that enhance your unique beauty.',
    certifications: ['Board Certified', 'ISAPS Member', 'Hair Restoration'],
  },
  {
    id: 3,
    name: 'Dr. Anjali Verma',
    qualification: 'BDS, MDS (Cosmetic Dentistry)',
    experience: 10,
    specialization: ['Smile Makeover', 'Teeth Whitening', 'Veneers'],
    message: 'Creating beautiful smiles that boost confidence and transform lives.',
    certifications: ['Board Certified', 'Cosmetic Dentistry', 'Implantology'],
  },
  {
    id: 4,
    name: 'Dr. Amit Singh',
    qualification: 'MBBS, MD (Diabetology)',
    experience: 18,
    specialization: ['Diabetes Care', 'Wound Management', 'Preventive Care'],
    message: 'Providing comprehensive diabetes care with a focus on prevention and wellness.',
    certifications: ['Board Certified', 'Diabetes Specialist', 'Wound Care'],
  },
  {
    id: 5,
    name: 'Dr. Neha Gupta',
    qualification: 'MBBS, Diploma (Trichology)',
    experience: 8,
    specialization: ['Hair Loss', 'PRP Treatment', 'Scalp Care'],
    message: 'Helping you regain confidence with effective hair restoration solutions.',
    certifications: ['Trichology Certified', 'PRP Specialist', 'Hair Transplant'],
  },
  {
    id: 6,
    name: 'Dr. Vikram Patel',
    qualification: 'MBBS, Fellowship (Aesthetic Medicine)',
    experience: 14,
    specialization: ['Botox', 'Dermal Fillers', 'Thread Lift'],
    message: 'Specializing in non-surgical facial rejuvenation for natural results.',
    certifications: ['Board Certified', 'Aesthetic Medicine', 'Injectables Expert'],
  },
];

const whyChooseOurDoctors = [
  {
    icon: FaCertificate,
    title: 'Highly Qualified',
    description: 'All doctors are board-certified with advanced training',
  },
  {
    icon: FaAward,
    title: 'Experienced',
    description: 'Years of experience in aesthetic and cosmetic treatments',
  },
  {
    icon: FaHeart,
    title: 'Patient-Focused',
    description: 'Personalized care tailored to your unique needs',
  },
  {
    icon: FaUserMd,
    title: 'Continuous Learning',
    description: 'Regular training in latest techniques and technologies',
  },
];

export default Doctors;

// Made with Bob
