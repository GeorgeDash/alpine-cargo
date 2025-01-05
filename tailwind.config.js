/** @type {import('tailwindcss').Config} */
import fluid, {extract, screens, fontSize} from 'fluid-tailwind'

module.exports = {
  content: {
    files: ["./*.html", "./*.js"],
    extract
  },
  theme: {
    screens,
    fontSize,
    extend: {
      screens: {
        "sm": "20rem",
        "sm-m": "23.4375rem",
        "sm-l": "26.5625rem",
        "sm-xl": "36rem",
        "md": "48rem",
        "lg": "62rem",
        "xl": "64rem",
        "2xl": "75rem",
        "3xl": "90rem"
      },
      fontFamily: {
        "sans": ["'Albert Sans'", "Helvetica", "Arial", "sans-serif"]
      },
      colors: {
        "black": "#111827",
        "gray": "#f2f4fa",
        "blue": "#79c9fe"
      },
      transitionDuration: {
        "375": "375ms"
      },
      backgroundImage: {
        "delivery": "url('/build/img/delivery-bg.jpg')"
      }
    },
  },
  plugins: [
    fluid({
      checkSC144: false
    }),
    function ({addVariant}) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}