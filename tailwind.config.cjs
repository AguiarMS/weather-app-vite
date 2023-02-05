/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'miniSmall': '100px',
        'lg1142': '1142px',
        'iPhoneSE': '345px'
      }
    },
    fontFamily: {
      nunito: ["Nunito"],
    },
  },
  plugins: [],
};
