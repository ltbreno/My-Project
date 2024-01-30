/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class' ,
  theme: {
    extend: {
      colors: {
        brand: {
          white : '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}

