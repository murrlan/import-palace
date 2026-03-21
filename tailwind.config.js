/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1A3A2A',
          dark: '#132A1F',
        },
        navy: '#1A2940',
        cream: '#F7F5F0',
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D5A3',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
