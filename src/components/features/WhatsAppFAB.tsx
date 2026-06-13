import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_DEFAULT_MESSAGE } from '../../lib/constants';
import { generateWhatsAppLink } from '../../lib/utils';

export const WhatsAppFAB: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappLink = generateWhatsAppLink(
      CONTACT_INFO.whatsapp,
      WHATSAPP_DEFAULT_MESSAGE
    );
    window.open(whatsappLink, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 z-40 animate-fade-in"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* FAB Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Expanded Message */}
        {isExpanded && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs animate-slide-up">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-neutral-900 mb-1">
                  Chat with us!
                </h4>
                <p className="text-sm text-neutral-600">
                  Hi there! 👋 How can we help you today?
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-neutral-400 hover:text-neutral-600 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Start Chat
            </button>
          </div>
        )}

        {/* Main FAB Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center animate-bounce-slow"
          aria-label="Open WhatsApp chat"
        >
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
          
          {/* Icon */}
          <MessageCircle className="w-6 h-6 relative z-10" />

          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            1
          </span>

          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-2 bg-neutral-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </button>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

// Made with Bob
