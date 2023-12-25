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
      },
      backgroundImage: {
        "coming-soon": "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/src/assets/imgs/travels-and-tours-bg.jpg')",
      }
    },
  },
  plugins: [],
}

