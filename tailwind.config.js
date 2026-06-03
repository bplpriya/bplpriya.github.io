/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'black': {
          200: '#1a1a18',
          300: '#222220',
          500: '#2c2c2a',
          600: '#111110',
        },
        'white': {
          500: 'rgba(255,255,255,0.5)',
          600: 'rgba(255,255,255,0.6)',
          800: 'rgba(255,255,255,0.8)',
        }
      }
    },
  },
  plugins: [],
}
