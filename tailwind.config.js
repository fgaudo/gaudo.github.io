const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./src/presentation/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      background: '#0a0a0a',
      body: '#faded7',
      ...colors
    },
    fontFamily: {
      display: ['Oswald', ...defaultTheme.fontFamily.sans],
      body: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
    },
    extend: {
    },
  },
  plugins: [],
}
