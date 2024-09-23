/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#5f75ff',   
          DEFAULT: '#0fa9e6', 
          darktheme: '#12528a',   
        },
      }
    },
  },
  plugins: [],
}