/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'miniSmall': '100px',
        'lg1142': '1142px',
        'md880': '860px',
        'iPhoneSE': '345px',
        'grid-default': 'repeat(4, minmax(330px, 1fr))'
      }
    },
    fontFamily: {
      nunito: ["Nunito"],
    },
  },
  plugins: [],
};