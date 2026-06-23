import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTag, FaClock, FaGift } from 'react-icons/fa';

const Offers: React.FC = () => {
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
              Special Offers
            </h1>
            <p className="font-body text-xl max-w-3xl mx-auto">
              Exclusive deals and packages to help you look and feel your best
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Offer */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-gold text-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4 w-fit">
                  🎉 Grand Opening Offer
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                  20% OFF on All Services
                </h2>
                <p className="text-xl mb-6 text-white/90">
                  Celebrate our grand opening with exclusive discounts on all treatments!
                </p>
                <div className="flex items-center gap-2 mb-8">
                  <FaClock />
                  <span>Valid until: July 10, 2026</span>
                </div>
                <Link
                  to="/appointment"
                  className="inline-block bg-white hover:bg-gray-100 text-gold-primary px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 w-fit"
                >
                  Book Now
                </Link>
              </div>
              <div className="h-96 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800"
                  alt="Grand Opening"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Offers */}
      <section className="py-20 px-4 bg-elegant-grey-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Current Offers & Packages
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Take advantage of our limited-time offers and special packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-elegant-lg hover:shadow-elegant-xl transition-all"
              >
                {/* Offer Badge */}
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm z-10">
                    {offer.discount}
                  </div>
                  <div className="h-48 bg-gradient-gold flex items-center justify-center">
                    <FaGift className="text-white text-6xl" />
                  </div>
                </div>

                {/* Offer Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaTag className="text-gold-primary" />
                    <span className="text-sm font-semibold text-gold-primary">
                      {offer.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {offer.description}
                  </p>

                  {/* Includes */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Includes:</h4>
                    <ul className="space-y-1">
                      {offer.includes.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Validity */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 pb-4 border-b">
                    <FaClock />
                    <span>Valid until: {offer.validUntil}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-gray-500 line-through text-sm">₹{offer.originalPrice}</span>
                      <span className="text-2xl font-bold text-gold-primary ml-2">₹{offer.offerPrice}</span>
                    </div>
                  </div>

                  <Link
                    to="/appointment"
                    className="block w-full bg-gold-primary hover:bg-gold-accent text-white text-center px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• All offers are subject to availability and may be modified or discontinued without prior notice</li>
            <li>• Offers cannot be combined with other promotions or discounts</li>
            <li>• Valid for new customers only unless otherwise specified</li>
            <li>• Advance booking required for all package deals</li>
            <li>• Prices are inclusive of all taxes</li>
            <li>• Cancellation policy applies as per clinic terms</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

const offers = [
  {
    id: 1,
    title: 'Bridal Glow Package',
    category: 'Wedding Special',
    discount: '30% OFF',
    description: 'Complete bridal preparation package for your special day',
    includes: [
      '6 Hydrafacial sessions',
      '4 Chemical peel sessions',
      'Hair spa treatment',
      'Bridal makeup trial',
    ],
    originalPrice: '50,000',
    offerPrice: '35,000',
    validUntil: 'Dec 31, 2026',
  },
  {
    id: 2,
    title: 'Hair Restoration Combo',
    category: 'Hair Care',
    discount: '25% OFF',
    description: 'Complete solution for hair loss and thinning',
    includes: [
      '6 PRP sessions',
      'Mesotherapy treatment',
      'Hair growth serum',
      'Free consultation',
    ],
    originalPrice: '40,000',
    offerPrice: '30,000',
    validUntil: 'Aug 31, 2026',
  },
  {
    id: 3,
    title: 'Skin Rejuvenation Package',
    category: 'Skin Care',
    discount: '20% OFF',
    description: 'Anti-aging and skin brightening combo',
    includes: [
      '4 Laser sessions',
      '3 Chemical peels',
      'Glutathione IV therapy',
      'Skincare products',
    ],
    originalPrice: '35,000',
    offerPrice: '28,000',
    validUntil: 'Sep 30, 2026',
  },
  {
    id: 4,
    title: 'Laser Hair Removal - Full Body',
    category: 'Laser Treatment',
    discount: '40% OFF',
    description: 'Permanent hair reduction for smooth skin',
    includes: [
      '8 sessions full body',
      'Free touch-up session',
      'Post-care products',
      'Lifetime support',
    ],
    originalPrice: '60,000',
    offerPrice: '36,000',
    validUntil: 'Oct 31, 2026',
  },
  {
    id: 5,
    title: 'Acne Treatment Program',
    category: 'Skin Care',
    discount: '25% OFF',
    description: 'Complete acne clearance and scar reduction',
    includes: [
      '6 Treatment sessions',
      'Customized skincare',
      'Diet consultation',
      'Follow-up care',
    ],
    originalPrice: '25,000',
    offerPrice: '18,750',
    validUntil: 'Jul 31, 2026',
  },
  {
    id: 6,
    title: 'Anti-Aging Combo',
    category: 'Aesthetic',
    discount: '30% OFF',
    description: 'Look years younger with our premium package',
    includes: [
      'Botox treatment',
      'Dermal fillers',
      'Thread lift',
      'Skin tightening',
    ],
    originalPrice: '45,000',
    offerPrice: '31,500',
    validUntil: 'Nov 30, 2026',
  },
];

export default Offers;

// Made with Bob
