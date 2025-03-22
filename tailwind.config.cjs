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
        'terciary-color': '#5489E6',
        'background-color': '#A2BDD9'
      },
      backgroundColor: {
        'primary-color': '#061637'
      }
    },
    fontFamily: {
      'body': ['Inria Sans']
    }
  },
  plugins: [],
}