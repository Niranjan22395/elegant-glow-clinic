import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { appointmentFormSchema, type AppointmentFormInput } from '../../lib/validation';
import { CONTACT_INFO } from '../../lib/constants';
import { generateWhatsAppLink } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import { servicesData } from '../../assets/data/services';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormInput>({
    resolver: zodResolver(appointmentFormSchema),
  });

  const onSubmit = async (data: AppointmentFormInput) => {
    // Check honeypot
    if (data.honeypot) {
      console.log('Spam detected');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log form data for backend integration
    console.log('Appointment Request:', {
      ...data,
      timestamp: new Date().toISOString(),
      email: CONTACT_INFO.email, // Will be sent to sagar007cena@gmail.com
    });

    // Prepare WhatsApp message (for reference, not redirecting)
    const message = `
🏥 *New Appointment Request*

👤 Name: ${data.name}
📞 Phone: ${data.phone}
💆 Service: ${data.service}
📅 Preferred Date: ${data.date}
${data.message ? `📝 Message: ${data.message}` : ''}

Please confirm the appointment.
    `.trim();

    // Store WhatsApp link for future use (not opening automatically)
    const whatsappLink = generateWhatsAppLink(
      CONTACT_INFO.whatsapp,
      message
    );
    console.log('WhatsApp Link:', whatsappLink);

    // TODO: Send data to backend/email service
    // Example: await fetch('/api/appointments', { method: 'POST', body: JSON.stringify(data) });
    // Or integrate with EmailJS, Google Forms, etc. (see GOOGLE_FORMS_SETUP.md)

    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-4">
            Book Your <span className="text-primary">Appointment</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Take the first step towards your aesthetic goals. Schedule a consultation with our experts today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Visit Us</h3>
                  <p className="text-neutral-600">{CONTACT_INFO.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Call Us</h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-neutral-600 hover:text-primary transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              {CONTACT_INFO.email && (
                <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email Us</h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-neutral-600 hover:text-primary transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              )}

              {/* Hours */}
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Opening Hours</h3>
                  <p className="text-neutral-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-neutral-600">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2873034344!2d77.3382!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMjAnMTcuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elegant Glow Aesthetic Clinic Location"
              />
            </div>
          </motion.div>

          {/* Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
              Request an Appointment
            </h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  ✓ Request sent successfully! We'll contact you shortly via WhatsApp.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field (hidden) */}
              <input
                type="text"
                {...register('honeypot')}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div>
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  error={errors.name?.message}
                  {...register('name')}
                />
              </div>

              {/* Phone */}
              <div>
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number"
                  error={errors.phone?.message}
                  {...register('phone')}
                />
              </div>

              {/* Service */}
              <div>
                <Select
                  label="Select Service"
                  error={errors.service?.message}
                  {...register('service')}
                >
                  <option value="">Choose a service</option>
                  {servicesData.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </Select>
              </div>

              {/* Date */}
              <div>
                <Input
                  label="Preferred Date"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  error={errors.date?.message}
                  {...register('date')}
                />
              </div>

              {/* Message */}
              <div>
                <Textarea
                  label="Additional Message (Optional)"
                  placeholder="Tell us about your concerns or questions..."
                  rows={4}
                  error={errors.message?.message}
                  {...register('message')}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Book Appointment
                  </>
                )}
              </Button>

              <p className="text-sm text-neutral-500 text-center">
                By submitting, you agree to our terms and privacy policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Made with Bob
