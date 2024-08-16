/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"]
      },
      "text-border": {
        "default": {
          color: "red"
        }
      },
      colors: {
        "rosybrown": {
          100: "#2e2021",
          200: "#5c4043",
          300: "#8a6065",
          400: "#b98088",
          500: "#c2949a",
          600: "#cba8ac",
          700: "#d4bcc0",
          800: "#ded0d4",
          900: "#e7e4e7"
        },
        "fireenginered": {
          100: "#0b0207",
          200: "#16040e",
          300: "#210715",
          400: "#2c091c",
          500: "#370b23",
          600: "#420d2a",
          700: "#4d0f31",
          800: "#581238",
          900: "#63143f"
        }
      },
      textShadow: {
        sm: '0 0.125rem 0.25rem var(--tw-shadow-color)',
        DEFAULT: '0 0.25rem 0.5rem var(--tw-shadow-color)',
        lg: '0 1rem 2rem var(--tw-shadow-color)'
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities({
        'text-shadow': value => ({ textShadow: value })
      }, {
        values: theme('textShadow')
      })
    })
  ],
}
