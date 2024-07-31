/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        text: '#050315',
        bckgrnd: '#FBFBFE',
        primary: '#D8BFD8',
        secondary: '#8B4513',
        emphasis: '#DEB887',
      },
      fontFamily: {
        merri: 'Merriweather',
        roboto: 'Roboto Slab',
      }
    },
  },
  plugins: [],
}

