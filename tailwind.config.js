/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textGreen: '#00473C',
        aestheticGreen:"#E8ECE3",
        myGreen:"#B1D0B0",
        footerColor:"#93ba7b"
      },
      padding: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
      },
      fontFamily: {
        // Add your custom font here
        custom: ['Mukta Vaani Thin', 'sans-serif'], 
        custom2: ['Mukta Vaani', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
