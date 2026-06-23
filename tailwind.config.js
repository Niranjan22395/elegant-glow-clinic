/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: '#D4AF37',
          accent: '#B8960F',
          light: '#E5D68A',
          dark: '#8B7500',
        },
        elegant: {
          white: '#FFFFFF',
          black: '#000000',
          grey: {
            light: '#F5F5F5',
            DEFAULT: '#CCCCCC',
            dark: '#333333',
          },
          background: '#FAFAFA',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '5rem',
        '5xl': '6rem',
      },
      boxShadow: {
        'elegant-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'elegant-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'elegant-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'elegant-xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B8960F 100%)',
        'gradient-dark': 'linear-gradient(135deg, rgba(212,175,55,0.8) 0%, rgba(0,0,0,0.6) 100%)',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
      },
    },
  },
  plugins: [],
}

// Made with Bob
