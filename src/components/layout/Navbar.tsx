import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../../lib/constants';
import { Button } from '../ui';
import { Logo } from '../ui/Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Helper function to check if a link is active
  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-elegant-md py-4'
          : 'bg-neutral-900/98 backdrop-blur-sm py-6'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group"
            aria-label="Elegant Glow Aesthetic Clinic - Home"
          >
            <Logo
              size="sm"
              variant={isScrolled ? 'dark' : 'light'}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled
                    ? isActive(link.href)
                      ? 'text-primary'
                      : 'text-neutral-800 hover:text-primary'
                    : isActive(link.href)
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all group-hover:w-full ${
                    isActive(link.href) ? 'w-full' : ''
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href={`tel:${CONTACT_INFO.phone}`} className={`flex items-center space-x-2 transition-colors ${
              isScrolled ? 'text-primary hover:text-amber-600' : 'text-white hover:text-primary'
            }`}>
              <Phone className="w-5 h-5" />
              <span className="font-medium">{CONTACT_INFO.phone}</span>
            </a>
            <Link to="/appointment">
              <Button
                variant="primary"
                size="md"
              >
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors mobile-menu-button ${
              isScrolled ? 'text-neutral-800 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-[72px] bg-white transform transition-transform duration-300 mobile-menu ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-gold-primary text-white'
                      : 'text-elegant-black hover:bg-elegant-grey-light'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="border-t border-elegant-grey-light p-4 space-y-3">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-elegant-grey-light text-elegant-black font-medium hover:bg-elegant-grey transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <Link to="/appointment" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="primary"
                size="lg"
                className="w-full"
              >
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

// Made with Bob
