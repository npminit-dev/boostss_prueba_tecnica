/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        text: '#050315',
        bckgrnd: '#FBFBFE',
        primary: '#E6E6FA',
        secondary: '#F0E68C',
        emphasis: '#708090',
      },
      fontFamily: {
        merri: 'Merriweather',
        roboto: 'Roboto Slab',
        crayon: 'DY Crayon Crumble',
      }, 
      boxShadow: {
        'center': '1px 1px 3px rgba(0, 0, 0, 0.3), -1px -1px 3px rgba(0, 0, 0, 0.3), -1px 1px 3px rgba(0, 0, 0, 0.3), 1px -1px 3px rgba(0, 0, 0, 0.3)',
        ...defaultTheme.boxShadow
      }
    },
    screens: {
      'xs': '500px',
      ...defaultTheme.screens
    },
  },
  plugins: [],
}

