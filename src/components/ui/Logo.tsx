import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'light' 
}) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-neutral-900';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Stylized EG Logo */}
      <div className="relative">
        {/* Circular background with crescent moon effect */}
        <div className="relative w-12 h-12 md:w-14 md:h-14">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full border-2 border-primary bg-gradient-to-br from-primary/20 to-transparent" />
          
          {/* Crescent moon cutout effect */}
          <div className="absolute top-1 right-1 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 backdrop-blur-sm" />
          
          {/* EG Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading font-bold text-primary text-xl md:text-2xl tracking-tighter drop-shadow-lg">
              EG
            </span>
          </div>
          
          {/* Sparkle decoration */}
          <div className="absolute -top-1 -right-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="#D4AF37" />
            </svg>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className={`${sizeClasses[size]} font-heading font-bold ${textColor} drop-shadow-lg`}>
        <div className="leading-tight">
          <div>Elegant Glow</div>
          <div className="text-xs md:text-sm font-normal tracking-wider opacity-90">
            AESTHETIC CLINIC
          </div>
        </div>
      </div>
    </div>
  );
};

// Made with Bob
