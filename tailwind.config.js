/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-blue': {
          50: '#EBF2FF',
          100: '#D6E4FF',
          200: '#B3CCFF',
          300: '#80B0FF',
          400: '#4D8FFF',
          500: '#256DFF',
          600: '#1A5CE6',
          700: '#1347B8',
          800: '#0F3A94',
          900: '#0A2D5A',
        },
        'text-gray-light': '#F2F2F2',
        'text-gray-lighter': '#E9E9E9',
      },
    },
  },
  plugins: [],
};
