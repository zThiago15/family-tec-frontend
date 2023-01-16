/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#25367F',
        'secondary-color': '#3B56CC',
        'background-color': '#A2BDD9'
      }
    },
    fontFamily: {
      'body': ['Inria Sans']
    }
  },
  plugins: [],
}