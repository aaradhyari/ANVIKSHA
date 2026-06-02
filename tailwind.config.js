/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-evergreen': '#1F3B2E',
        'frosted-mint': '#DDFBE7',
        'solar-clay': '#E89A73',
        'arctic-ivory': '#FCFCFA',
        'graphite-slate': '#383E42',
        'neon-emerald': '#42E89B',
        'cosmic-navy': '#111827',
        'silver-mist': '#D9E1E8',
      },
      fontFamily: {
        sans: ['Exo', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
      },
    },
  },
  plugins: [],
}
