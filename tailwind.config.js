/** @type {import('tailwindcss').Config} */
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
      }
    },
  },
  plugins: [],
}

/* default */
// const colors = {
//   text: '#050315',
//   bckgrnd: '#FBFBFE',
//   primary: '#D8BFD8',
//   secondary: '#8B4513',
//   emphasis: '#DEB887',
// }

