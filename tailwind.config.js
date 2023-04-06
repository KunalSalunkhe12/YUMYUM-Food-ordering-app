/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#051726",
        secondary: "#81ffd9"
      },
      boxShadow: {
        '3xl': '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)'
      },
      fontFamily: {
        firaX: ['Fira Sans Extra Condensed', 'sans-serif'],
        chango: ['Chango', 'cursive']
      }
    },
  },
  plugins: [],
}