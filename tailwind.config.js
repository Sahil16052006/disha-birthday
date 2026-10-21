/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          light: '#FFFDFB',
          DEFAULT: '#FFF9F3',
          dark: '#F7EDE1',
        },
        blush: {
          light: '#FAF1F2',
          DEFAULT: '#F2D6D7',
          dark: '#E7BDC0',
        },
        dustyRose: {
          light: '#E5BAC0',
          DEFAULT: '#D6A0A6',
          dark: '#BD8289',
        },
        burgundy: {
          light: '#8B3851',
          DEFAULT: '#702D42',
          dark: '#511E2E',
          deep: '#3B1321',
        },
        gold: {
          light: '#E2CA9B',
          DEFAULT: '#C8A46B',
          dark: '#A68249',
          shimmer: '#F0DEC0',
        },
        warmDark: {
          light: '#523B40',
          DEFAULT: '#38272B',
          dark: '#24181B',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['"Alex Brush"', 'cursive'],
        handwritten: ['"Caveat"', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        drift: {
          '0%': { transform: 'translateY(-10%) translateX(0) rotate(0deg)', opacity: '0' },
          '20%': { opacity: '0.8' },
          '80%': { opacity: '0.8' },
          '100%': { transform: 'translateY(110vh) translateX(40px) rotate(360deg)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 12s linear infinite',
        glow: 'pulseGlow 4s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
      boxShadow: {
        'soft-rose': '0 10px 30px -5px rgba(112, 45, 66, 0.08), 0 4px 12px -2px rgba(214, 160, 166, 0.12)',
        'gold-glow': '0 0 25px rgba(200, 164, 107, 0.25)',
        'envelope': '0 20px 40px -15px rgba(56, 39, 43, 0.25)',
      },
    },
  },
  plugins: [],
}
