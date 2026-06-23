import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaPhone } from 'react-icons/fa';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-elegant-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="font-heading text-9xl md:text-[12rem] font-bold text-gold-primary opacity-20">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h2>
        <p className="font-body text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-gold-primary hover:bg-gold-accent text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-gold-glow"
          >
            <FaHome /> Go to Homepage
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gold-primary hover:bg-gold-primary hover:text-white text-gold-primary px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
          >
            <FaPhone /> Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services" className="text-gold-primary hover:text-gold-accent transition-colors">
              Services
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/doctors" className="text-gold-primary hover:text-gold-accent transition-colors">
              Doctors
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/gallery" className="text-gold-primary hover:text-gold-accent transition-colors">
              Gallery
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/blog" className="text-gold-primary hover:text-gold-accent transition-colors">
              Blog
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/appointment" className="text-gold-primary hover:text-gold-accent transition-colors">
              Book Appointment
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;

// Made with Bob
