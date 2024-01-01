/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        sen: ["Sen", "sans-serif"],
        "dm-serif": ["DM Serif Display", "serif"],
      },
      backgroundImage: {
        "coming-soon": "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/src/assets/imgs/header-bg.jpg')",
      }
    },
  },
  plugins: [],
}

