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
          purple50: "#EFE8FC",  
          violet: "#CF87E9",
          violet50: "#F6EBF9",
          blue: "#2869E2", 
          blue50: "#EAF0FA", 
          yellow: "#FFD447",  
          yellow50: "#FCF8E8",  
          aqua: "#00C2A8",
          aqua: "#00C2A8",
          aqua50: "#E8FCFA",
          coral: "#FF6F61", 
          coral: "#FF6F61", 
          coral50: "#FCEAE8",
          gray: "#C9C9C9",
          white: "#FFFFFF",
          charcoal: "#2D2D2D", 
          neutralWhite: "#E5E5E5",
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
