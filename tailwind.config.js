const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.blue[500],
        secondary: colors.blue[900],
      },
      backgroundImage: theme => ({
        'plumber-hero': "url('/src/img/hero-plumber.png')",
       }),
      fontFamily: {
        'fredoka': ['Fredoka One','cursive'],
      }, 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
