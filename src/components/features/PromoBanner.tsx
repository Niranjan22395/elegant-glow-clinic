import React, { useState } from 'react';
import { X, Sparkles, MapPin, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PromoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-amber-50 via-white to-amber-50 border-y-4 border-primary shadow-lg overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 py-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left side - Opening announcement */}
            <div className="flex items-center gap-4 flex-1">
              <div className="hidden md:flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                  <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
                    OPENING OFFER
                  </span>
                  <Sparkles className="w-6 h-6 text-primary animate-pulse md:hidden" />
                </div>
                <p className="text-sm md:text-base text-neutral-700 font-medium">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  <span className="font-bold text-primary">10 July 2026</span> • 
                  <MapPin className="inline w-4 h-4 mx-1" />
                  New Road, Phusro (Bokaro)
                </p>
              </div>
            </div>

            {/* Center - Discount */}
            <div className="flex items-center gap-4">
              <div className="text-center bg-gradient-to-br from-primary to-amber-600 text-neutral-900 px-6 py-3 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
                <div className="text-4xl md:text-5xl font-bold leading-none mb-1">
                  20%
                </div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wider">
                  OFF
                </div>
              </div>
              <div className="text-left">
                <p className="text-lg md:text-xl font-bold text-neutral-900">
                  On All Services
                </p>
                <p className="text-xs md:text-sm text-neutral-600">
                  For First 10 Days
                </p>
              </div>
            </div>

            {/* Right side - CTA */}
            <div className="flex items-center gap-3">
              <a
                href="tel:7488172473"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <span className="text-lg">📞</span>
                <span className="hidden sm:inline">7488172473</span>
                <span className="sm:hidden">Call Now</span>
              </a>
              
              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Close banner"
              >
                <X className="w-5 h-5 text-neutral-600" />
              </button>
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="mt-3 pt-3 border-t border-neutral-200 text-center">
            <p className="text-sm md:text-base font-medium text-neutral-700 italic">
              ✨ Your Skin Deserves THE BEST CARE ✨
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Made with Bob
