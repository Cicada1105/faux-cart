/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      ...colors,
      'green': '#003d29',
      'lime': '#61aa2b',
      'beige': {
        '400': '#ffe6cc'
      }
    },
    extend: {},
  },
  plugins: [],
}

