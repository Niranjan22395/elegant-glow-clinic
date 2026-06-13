import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../../lib/constants';
import { scrollToElement } from '../../lib/utils';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToElement(sectionId);
  };

  return (
    <footer className="bg-elegant-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-heading font-bold">
                <span className="gold-gradient-text">EG</span>
                <span className="ml-2">Elegant Glow</span>
              </h3>
            </div>
            <p className="text-elegant-grey-light mb-4">
              Your trusted partner for premium aesthetic treatments. We combine advanced technology with expert care to help you achieve your beauty goals.
            </p>
            <div className="flex space-x-4">
              <a
                href={CONTACT_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-gold-primary transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-gold-primary transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-gold-primary transition-colors"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-gold-primary transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4 text-gold-primary">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-elegant-grey-light hover:text-gold-primary transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4 text-gold-primary">Our Services</h4>
            <ul className="space-y-2 text-elegant-grey-light">
              <li>Skin Treatment</li>
              <li>Laser Hair Removal</li>
              <li>Acne Treatment</li>
              <li>Anti-Aging Treatment</li>
              <li>Hair Treatment</li>
              <li>Pigmentation Treatment</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4 text-gold-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-primary flex-shrink-0 mt-1" />
                <span className="text-elegant-grey-light text-sm">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-primary flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-elegant-grey-light hover:text-gold-primary transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              {CONTACT_INFO.email && (
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-primary flex-shrink-0" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-elegant-grey-light hover:text-gold-primary transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-elegant-grey-light text-sm text-center md:text-left">
            © {currentYear} {CONTACT_INFO.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#privacy"
              className="text-elegant-grey-light hover:text-gold-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-elegant-grey-light hover:text-gold-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Credit */}
        <div className="mt-8 text-center">
          <p className="text-elegant-grey-light text-xs">
            Designed with ❤️ for beautiful skin
          </p>
        </div>
      </div>
    </footer>
  );
};

// Made with Bob
