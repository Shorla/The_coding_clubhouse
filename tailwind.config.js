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
          blue: "#184EB4",   
          yellow: "#FFD447",  
          aqua: "#00C2A8", 
          coral: "#FF6F61",
          gray: "#C9C9C9",
          white: "#FFFFFF",
          charcoal: "#2D2D2D",    
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        sans: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(180deg, rgba(239, 242, 255, 0.48) 0%, #FFFFFF 52.4%, #F4E8FF 100%)',
      },
    },
  },
  plugins: [],
}
