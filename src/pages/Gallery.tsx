import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredGallery = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

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
              Before & After Gallery
            </h1>
            <p className="font-body text-xl max-w-3xl mx-auto">
              Real results from real patients - See the transformations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gold-primary text-white shadow-gold-glow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-elegant-lg"
              >
                {/* Before/After Slider */}
                <div className="relative h-96">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        src={item.beforeImage}
                        alt="Before"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={item.afterImage}
                        alt="After"
                      />
                    }
                    position={50}
                    className="h-full"
                  />
                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-gold-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <span className="px-3 py-1 bg-gold-light text-gold-primary text-sm rounded-full">
                      {item.categoryName}
                    </span>
                  </div>
                  <p className="font-body text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{item.treatment}</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">
                No results found for this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-elegant-grey-light">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            <strong>Disclaimer:</strong> Results may vary from person to person. 
            The images shown are actual patients who have consented to share their results. 
            Individual results depend on various factors including skin type, age, lifestyle, and adherence to post-treatment care.
          </p>
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
              Ready for Your Transformation?
            </h2>
            <p className="font-body text-xl text-gray-600 mb-8">
              Book a consultation to discuss your goals and create a personalized treatment plan
            </p>
            <a
              href="/appointment"
              className="inline-block bg-gold-primary hover:bg-gold-accent text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-gold-glow"
            >
              Book Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const categories = [
  { id: 'all', name: 'All Results' },
  { id: 'skin', name: 'Skin Treatment' },
  { id: 'hair', name: 'Hair Treatment' },
  { id: 'anti-aging', name: 'Anti-Aging' },
  { id: 'fillers', name: 'Fillers & Botox' },
];

const galleryItems = [
  {
    id: 1,
    category: 'skin',
    categoryName: 'Skin Treatment',
    title: 'Acne Scar Reduction',
    description: 'Significant improvement in acne scars after 6 sessions of laser treatment',
    treatment: 'Laser Resurfacing',
    duration: '6 sessions',
    beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800',
    afterImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800',
  },
  {
    id: 2,
    category: 'skin',
    categoryName: 'Skin Treatment',
    title: 'Pigmentation Removal',
    description: 'Dark spots and pigmentation cleared with chemical peels',
    treatment: 'Chemical Peel',
    duration: '4 sessions',
    beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800',
    afterImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800',
  },
  {
    id: 3,
    category: 'hair',
    categoryName: 'Hair Treatment',
    title: 'Hair Restoration',
    description: 'Remarkable hair growth after PRP therapy sessions',
    treatment: 'PRP Treatment',
    duration: '8 sessions',
    beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800',
    afterImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800',
  },
  {
    id: 4,
    category: 'hair',
    categoryName: 'Hair Treatment',
    title: 'Hair Transplant Results',
    description: 'Natural-looking hair density after FUE hair transplant',
    treatment: 'Hair Transplant',
    duration: '1 session',
    beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800',
    afterImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800',
  },
  {
    id: 5,
    category: 'anti-aging',
    categoryName: 'Anti-Aging',
    title: 'Wrinkle Reduction',
    description: 'Smoother, younger-looking skin with reduced fine lines',
    treatment: 'Botox + Fillers',
    duration: '1 session',
    beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800',
    afterImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800',
  },
  {
    id: 6,
    category: 'anti-aging',
    categoryName: 'Anti-Aging',
    title: 'Skin Tightening',
    description: 'Firmer, lifted skin with thread lift procedure',
    treatment: 'Thread Lift',
    duration: '1 session',
    beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800',
    afterImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800',
  },
  {
    id: 7,
    category: 'fillers',
    categoryName: 'Fillers & Botox',
    title: 'Lip Enhancement',
    description: 'Natural-looking fuller lips with dermal fillers',
    treatment: 'Lip Fillers',
    duration: '1 session',
    beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800',
    afterImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800',
  },
  {
    id: 8,
    category: 'fillers',
    categoryName: 'Fillers & Botox',
    title: 'Jawline Contouring',
    description: 'Defined jawline achieved with strategic filler placement',
    treatment: 'Dermal Fillers',
    duration: '1 session',
    beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800',
    afterImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800',
  },
];

export default Gallery;

// Made with Bob
