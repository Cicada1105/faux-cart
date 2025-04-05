/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      ...colors,
      'green': '#003d29',
      'green-alt': {
        '600': '#003d29'
      },
      'blue': {
        '400': '#a3d2e5'
      },
      'lime': '#61aa2b',
      'beige': {
        '400': '#ffe6cc'
      }
    },
    extend: {},
  },
  plugins: [],
}

