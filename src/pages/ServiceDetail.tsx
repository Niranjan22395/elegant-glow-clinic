import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaCheck, FaClock, FaShieldAlt, FaStar } from 'react-icons/fa';

const ServiceDetail: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'procedure' | 'faq'>('overview');
  
  // Find service data based on slug
  const service = servicesData.find(s => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-gold-primary hover:text-gold-accent">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-elegant-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/services" className="inline-flex items-center gap-2 mb-6 hover:text-gold-light transition-colors">
              ← Back to Services
            </Link>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="font-body text-xl max-w-3xl">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto">
            {['overview', 'procedure', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-4 px-2 font-semibold capitalize transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-gold-primary text-gold-primary'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                    Overview
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-4">{service.overview}</p>
                  </div>

                  {/* Benefits */}
                  <div className="mt-12">
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                      Benefits
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gold-light rounded-full flex items-center justify-center mt-1">
                            <FaCheck className="text-gold-primary text-sm" />
                          </div>
                          <p className="text-gray-700">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Treatments */}
                  <div className="mt-12">
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                      Available Treatments
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.treatments.map((treatment, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl shadow-elegant-md">
                          <h4 className="font-semibold text-gray-900 mb-2">{treatment.name}</h4>
                          <p className="text-sm text-gray-600">{treatment.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  {/* Quick Info */}
                  <div className="bg-white p-6 rounded-2xl shadow-elegant-lg mb-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                      Quick Info
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <FaClock className="text-gold-primary" />
                        <div>
                          <p className="text-sm text-gray-600">Duration</p>
                          <p className="font-semibold">{service.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaShieldAlt className="text-gold-primary" />
                        <div>
                          <p className="text-sm text-gray-600">Recovery</p>
                          <p className="font-semibold">{service.recovery}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaStar className="text-gold-primary" />
                        <div>
                          <p className="text-sm text-gray-600">Results</p>
                          <p className="font-semibold">{service.results}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-gold text-white p-6 rounded-2xl">
                    <h3 className="font-heading text-xl font-bold mb-4">
                      Ready to Get Started?
                    </h3>
                    <p className="mb-6">
                      Book a free consultation with our experts
                    </p>
                    <Link
                      to="/appointment"
                      className="block w-full bg-white hover:bg-gray-100 text-gold-primary text-center px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Procedure Tab */}
      {activeTab === 'procedure' && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">
                Treatment Procedure
              </h2>
              <div className="space-y-6">
                {service.procedure.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Tab */}
      {activeTab === 'faq' && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <details key={index} className="bg-white p-6 rounded-xl shadow-elegant-md">
                    <summary className="font-semibold text-gray-900 cursor-pointer">
                      {faq.question}
                    </summary>
                    <p className="mt-4 text-gray-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

// Service data (will be moved to separate file)
const servicesData = [
  {
    slug: 'skin-treatment',
    title: 'Skin Treatment',
    tagline: 'Advanced dermatological solutions for radiant, healthy skin',
    overview: 'Our comprehensive skin treatment services address a wide range of concerns including acne, pigmentation, aging signs, and skin texture. Using state-of-the-art technology and proven techniques, we help you achieve the clear, glowing skin you deserve.',
    duration: '30-90 minutes',
    recovery: 'Minimal to none',
    results: 'Visible in 2-4 weeks',
    benefits: [
      'Improved skin texture and tone',
      'Reduced acne and blemishes',
      'Minimized fine lines and wrinkles',
      'Even skin complexion',
      'Boosted collagen production',
      'Long-lasting results',
    ],
    treatments: [
      { name: 'Chemical Peels', description: 'Exfoliation for brighter skin' },
      { name: 'Laser Rejuvenation', description: 'Advanced laser technology' },
      { name: 'Acne Treatment', description: 'Targeted acne solutions' },
      { name: 'Anti-Aging', description: 'Combat signs of aging' },
    ],
    procedure: [
      { title: 'Consultation', description: 'Detailed skin analysis and treatment planning' },
      { title: 'Preparation', description: 'Skin cleansing and preparation' },
      { title: 'Treatment', description: 'Application of chosen treatment method' },
      { title: 'Post-Care', description: 'Aftercare instructions and follow-up' },
    ],
    faqs: [
      { question: 'Is skin treatment painful?', answer: 'Most treatments are comfortable with minimal discomfort. We use numbing creams when needed.' },
      { question: 'How many sessions are required?', answer: 'Typically 4-6 sessions depending on the concern and treatment type.' },
      { question: 'Are there any side effects?', answer: 'Mild redness or sensitivity may occur, which subsides within 24-48 hours.' },
    ],
  },
  {
    slug: 'hair-treatment',
    title: 'Hair Treatment',
    tagline: 'Restore your crowning glory with advanced hair solutions',
    overview: 'From hair loss to thinning, our comprehensive hair treatment services use cutting-edge technology like PRP therapy and hair transplants to help you regain thick, healthy hair.',
    duration: '60-180 minutes',
    recovery: '1-3 days',
    results: 'Visible in 3-6 months',
    benefits: [
      'Reduced hair fall',
      'Improved hair density',
      'Stronger, healthier hair',
      'Natural-looking results',
      'Permanent solution available',
      'Boosted confidence',
    ],
    treatments: [
      { name: 'PRP Therapy', description: 'Platelet-rich plasma for hair growth' },
      { name: 'Hair Transplant', description: 'FUE technique for permanent results' },
      { name: 'Mesotherapy', description: 'Nutrient injection for scalp' },
      { name: 'Laser Therapy', description: 'Low-level laser for stimulation' },
    ],
    procedure: [
      { title: 'Assessment', description: 'Comprehensive hair and scalp analysis' },
      { title: 'Treatment Plan', description: 'Customized approach based on your needs' },
      { title: 'Procedure', description: 'Professional treatment application' },
      { title: 'Follow-up', description: 'Regular monitoring and maintenance' },
    ],
    faqs: [
      { question: 'Is PRP treatment safe?', answer: 'Yes, PRP uses your own blood, making it very safe with minimal risk.' },
      { question: 'How long do results last?', answer: 'With proper maintenance, results can last several years.' },
      { question: 'Is hair transplant permanent?', answer: 'Yes, transplanted hair is permanent and grows naturally.' },
    ],
  },
  // Add more services similarly...
  {
    slug: 'dental',
    title: 'Dental Care',
    tagline: 'Transform your smile with cosmetic dentistry',
    overview: 'Our dental services combine aesthetics with functionality to give you a beautiful, healthy smile.',
    duration: '30-120 minutes',
    recovery: 'Minimal',
    results: 'Immediate to 2 weeks',
    benefits: ['Brighter smile', 'Improved confidence', 'Better oral health', 'Long-lasting results'],
    treatments: [
      { name: 'Teeth Whitening', description: 'Professional whitening treatment' },
      { name: 'Veneers', description: 'Porcelain veneers for perfect smile' },
    ],
    procedure: [
      { title: 'Consultation', description: 'Dental examination and planning' },
      { title: 'Treatment', description: 'Professional dental procedure' },
      { title: 'Follow-up', description: 'Post-treatment care' },
    ],
    faqs: [
      { question: 'Is teeth whitening safe?', answer: 'Yes, our professional whitening is safe and effective.' },
    ],
  },
  {
    slug: 'aesthetic-treatment',
    title: 'Aesthetic Treatment',
    tagline: 'Non-surgical facial rejuvenation',
    overview: 'Enhance your natural beauty with our range of non-surgical aesthetic treatments.',
    duration: '30-60 minutes',
    recovery: 'None to minimal',
    results: 'Immediate',
    benefits: ['Youthful appearance', 'Natural results', 'No surgery', 'Quick procedure'],
    treatments: [
      { name: 'Botox', description: 'Wrinkle reduction' },
      { name: 'Fillers', description: 'Volume restoration' },
    ],
    procedure: [
      { title: 'Consultation', description: 'Facial analysis' },
      { title: 'Treatment', description: 'Precise injections' },
      { title: 'Results', description: 'Immediate improvement' },
    ],
    faqs: [
      { question: 'How long does Botox last?', answer: '3-6 months typically.' },
    ],
  },
  {
    slug: 'diabetes-care',
    title: 'Diabetes Care',
    tagline: 'Comprehensive diabetic care and management',
    overview: 'Specialized care for diabetic patients including foot care and wound management.',
    duration: '30-60 minutes',
    recovery: 'Ongoing',
    results: 'Continuous improvement',
    benefits: ['Better management', 'Prevent complications', 'Expert care', 'Personalized approach'],
    treatments: [
      { name: 'Foot Care', description: 'Diabetic foot treatment' },
      { name: 'Wound Care', description: 'Advanced wound healing' },
    ],
    procedure: [
      { title: 'Assessment', description: 'Complete health evaluation' },
      { title: 'Treatment', description: 'Customized care plan' },
      { title: 'Monitoring', description: 'Regular follow-ups' },
    ],
    faqs: [
      { question: 'Why is foot care important?', answer: 'Prevents serious complications in diabetic patients.' },
    ],
  },
  {
    slug: 'laser-treatment',
    title: 'Laser Treatment',
    tagline: 'Advanced laser technology for various concerns',
    overview: 'State-of-the-art laser treatments for hair removal, skin resurfacing, and more.',
    duration: '15-90 minutes',
    recovery: 'Minimal',
    results: 'Progressive',
    benefits: ['Precise treatment', 'Minimal discomfort', 'Effective results', 'Safe technology'],
    treatments: [
      { name: 'Hair Removal', description: 'Permanent hair reduction' },
      { name: 'Skin Resurfacing', description: 'Improved skin texture' },
    ],
    procedure: [
      { title: 'Consultation', description: 'Skin assessment' },
      { title: 'Treatment', description: 'Laser application' },
      { title: 'Aftercare', description: 'Post-treatment care' },
    ],
    faqs: [
      { question: 'Is laser hair removal permanent?', answer: 'Yes, it provides long-lasting hair reduction.' },
    ],
  },
];

export default ServiceDetail;

// Made with Bob
