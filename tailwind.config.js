const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./src/presentation/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Oswald', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}
