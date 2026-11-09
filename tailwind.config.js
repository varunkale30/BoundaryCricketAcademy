/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { navy: '#071426', green: '#176B45', cream: '#F5F5F0', gold: '#D6AD60', charcoal: '#111820' },
      fontFamily: { display: ['"Barlow Condensed"', 'sans-serif'], sans: ['Inter', 'sans-serif'] }
    }
  },
  plugins: []
}
