import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Clock, Leaf, Sun, ArrowRight } from 'lucide-react';
import { servicesData } from '../../assets/data/services';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Modal, ModalBody, ModalFooter } from '../ui';
import { Service } from '../../types';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Zap,
  Shield,
  Clock,
  Leaf,
  Sun,
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section id="services" className="py-20 bg-elegant-background">
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
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-elegant-black mb-4">
            Premium <span className="gold-gradient-text">Aesthetic Treatments</span>
          </h2>
          <p className="text-lg text-elegant-grey-dark max-w-3xl mx-auto">
            Discover our comprehensive range of advanced treatments designed to enhance your natural beauty
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full flex flex-col">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle as="h3" className="text-2xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-elegant-grey-dark line-clamp-3">
                      {service.fullDescription}
                    </p>
                  </CardContent>

                  <CardFooter>
                    <Button
                      onClick={() => handleReadMore(service)}
                      variant="ghost"
                      className="w-full group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-gold rounded-2xl p-8 md:p-12 shadow-elegant-xl">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Not Sure Which Treatment is Right for You?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Book a free consultation with our experts to discuss your concerns and get personalized treatment recommendations.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedService.title}
          size="lg"
        >
          <ModalBody>
            <div className="space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-gold rounded-lg flex items-center justify-center">
                {React.createElement(iconMap[selectedService.icon] || Sparkles, {
                  className: 'w-10 h-10 text-white',
                })}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xl font-heading font-bold text-elegant-black mb-3">
                  About This Treatment
                </h4>
                <p className="text-elegant-grey-dark leading-relaxed">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xl font-heading font-bold text-elegant-black mb-3">
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gold-primary mr-2">✓</span>
                    <span className="text-elegant-grey-dark">Safe and FDA-approved procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-primary mr-2">✓</span>
                    <span className="text-elegant-grey-dark">Minimal to no downtime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-primary mr-2">✓</span>
                    <span className="text-elegant-grey-dark">Long-lasting, natural-looking results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-primary mr-2">✓</span>
                    <span className="text-elegant-grey-dark">Personalized treatment plans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-primary mr-2">✓</span>
                    <span className="text-elegant-grey-dark">Performed by certified experts</span>
                  </li>
                </ul>
              </div>

              {/* What to Expect */}
              <div className="bg-elegant-background rounded-lg p-6">
                <h4 className="text-lg font-heading font-bold text-elegant-black mb-3">
                  What to Expect
                </h4>
                <p className="text-elegant-grey-dark text-sm">
                  During your consultation, our experts will assess your needs, explain the procedure in detail, and create a customized treatment plan. Most treatments are comfortable and require minimal recovery time.
                </p>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" onClick={handleCloseModal}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleCloseModal();
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
            >
              Book Appointment
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </section>
  );
};

// Made with Bob
