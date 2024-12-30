/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#D2B48C', // You can use any brown color code you prefer
        beige: '#FAF9F6', // You can use any brown color code you prefer
        beige2: '#d2b48c',
        green5:"#37594a"
      },
      padding: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        // Add more custom values as needed
      },
    },
  },
  plugins: [],
}
