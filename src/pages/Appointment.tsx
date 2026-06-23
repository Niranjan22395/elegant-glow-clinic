import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaCalendar, FaClock, FaUser, FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const appointmentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const Appointment: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = (data: AppointmentFormData) => {
    console.log('Appointment booked:', data);
    setIsSubmitted(true);
    reset();
    
    // Scroll to success message
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

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
              Book an Appointment
            </h1>
            <p className="font-body text-xl max-w-3xl mx-auto">
              Take the first step towards your transformation - Schedule your consultation today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Message */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 mt-8"
        >
          <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
            <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Appointment Request Received!
            </h2>
            <p className="text-gray-700 mb-6">
              Thank you for booking with Elegant Glow Clinic. Our team will contact you shortly to confirm your appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917488172473?text=Hello%2C%20I%20just%20booked%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                Chat on WhatsApp
              </a>
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-block bg-gold-primary hover:bg-gold-accent text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Appointment Form */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-elegant-lg"
              >
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Fill in Your Details
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            {...register('name')}
                            type="text"
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary"
                            placeholder="John Doe"
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                              {...register('email')}
                              type="email"
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary"
                              placeholder="john@example.com"
                            />
                          </div>
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                              {...register('phone')}
                              type="tel"
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary"
                              placeholder="+91 9876543210"
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Appointment Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Service Required *
                        </label>
                        <select
                          {...register('service')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary"
                        >
                          <option value="">Select a service</option>
                          <option value="skin-treatment">Skin Treatment</option>
                          <option value="hair-treatment">Hair Treatment</option>
                          <option value="dental">Dental Care</option>
                          <option value="aesthetic-treatment">Aesthetic Treatment</option>
                          <option value="diabetes-care">Diabetes Care</option>
                          <option value="laser-treatment">Laser Treatment</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                        {errors.service && (
                          <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Preferred Date *
                          </label>
                          <div className="relative">
                            <FaCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                              {...register('date')}
                              type="date"
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary"
                            />
                          </div>
                          {errors.date && (
                            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Preferred Time *
                          </label>
                          <div className="relative">
                            <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <select
                              {...register('time')}
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary"
                            >
                              <option value="">Select time</option>
                              <option value="10:00">10:00 AM</option>
                              <option value="11:00">11:00 AM</option>
                              <option value="12:00">12:00 PM</option>
                              <option value="14:00">2:00 PM</option>
                              <option value="15:00">3:00 PM</option>
                              <option value="16:00">4:00 PM</option>
                              <option value="17:00">5:00 PM</option>
                              <option value="18:00">6:00 PM</option>
                              <option value="19:00">7:00 PM</option>
                            </select>
                          </div>
                          {errors.time && (
                            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Additional Message (Optional)
                        </label>
                        <textarea
                          {...register('message')}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary resize-none"
                          placeholder="Any specific concerns or questions..."
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-primary hover:bg-gold-accent text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-gold-glow"
                  >
                    Book Appointment
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    By booking, you agree to our terms and conditions
                  </p>
                </form>
              </motion.div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* What to Expect */}
                <div className="bg-white p-6 rounded-2xl shadow-elegant-lg">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-primary mt-1">✓</span>
                      <span>Confirmation call within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-primary mt-1">✓</span>
                      <span>Free initial consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-primary mt-1">✓</span>
                      <span>Personalized treatment plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-primary mt-1">✓</span>
                      <span>Expert doctor consultation</span>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="bg-gradient-gold text-white p-6 rounded-2xl">
                  <h3 className="font-heading text-xl font-bold mb-4">
                    Need Help?
                  </h3>
                  <p className="mb-4 text-white/90">
                    Have questions? Contact us directly
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+917488172473"
                      className="flex items-center gap-3 text-white hover:text-gold-light transition-colors"
                    >
                      <FaPhone />
                      <span>+91 7488172473</span>
                    </a>
                    <a
                      href="https://wa.me/917488172473"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white hover:text-gold-light transition-colors"
                    >
                      <FaPhone />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white p-6 rounded-2xl shadow-elegant-lg">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                    Working Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Saturday</span>
                      <span className="font-semibold">10 AM - 8 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;

// Made with Bob
