/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'miniSmall': '100px',
        'md1142': '1142px'
      }
    },
    fontFamily: {
      nunito: ["Nunito"],
    },
  },
  plugins: [],
};
