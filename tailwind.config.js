/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

