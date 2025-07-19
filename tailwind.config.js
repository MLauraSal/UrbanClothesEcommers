/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        fadeUpDelay1: 'fadeUp 0.8s ease-out forwards 0.3s',
        fadeUpDelay2: 'fadeUp 0.8s ease-out forwards 0.6s',
        fadeUpDelay3: 'fadeUp 0.8s ease-out forwards 0.9s',
      },
      scrollSnapType: {
        x: 'x mandatory',
      },
      scrollSnapAlign: {
        start: 'start',
      },
     fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poiret: ["Poiret One", "cursive"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        spanishGray: "hsl(0, 0%, 60%)",
        sonicSilver: "hsl(0, 0%, 47%)",
        eerieBlack: "hsl(0, 0%, 13%)",
        dodgerBlue: "hsl(210, 100%, 55.9%)",
        sandyBrown: "hsl(29, 90%, 65%)",
        deepSkyBlue: "hsl(195.06, 100%, 50%)",
        oceanGreen: "hsl(152, 51%, 52%)",
        davysGray: "hsl(0, 0%, 33%)",
        cultured: "hsl(0, 0%, 93%)",
        white: "hsl(0, 100%, 100%)",
        onyx: "hsl(0, 0%, 27%)",
      },
      
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        } 
    },
    
  },
  plugins: [],
}

