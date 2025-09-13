/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // all root HTML files
    "./components/**/*.html", // partials (if you use them)
    "./src/**/*.js"      // any JS files with Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#8C52FF",   
          violet: "#C46BE4", 
          blue: "#18EB4",   
          yellow: "#FFD447",  
          aqua: "#00C2A8", 
          coral: "#FF6F61",
          gray: "#FSF7FB",
          white: "#FFFFFF",
          charcoal: "#2D2D2D",    
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
