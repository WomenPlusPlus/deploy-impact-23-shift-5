/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-20": '#EADDFF',
        "purple-50" :'#6750A4',
        "purple-70": '#381E72',
        "purple-90": '#21005D',
        "gray-20":'#E6E0E9',
        "gray-50":'#E6E0E9',
        "gray-70":'#CAC5CD',
        "gray-90":'#938F96',
        "magenta-40": '#FF6584'
      },
      backgroundImage: (theme) => ({
        "homepage-header": "url('./assets/HomepageHeader.png')",
        "headerGraphics": "url('./assets/HomepageGraphics.png')",
        "whoWeAreGraphics": "url('./assets/WhoWeAreGraphics.png')",
        "JoinTechRevolution": "url('./assets/JoinTechRevolution.png')",
      }),
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      content: {   
        whoWeAreGraphics: "url('./assets/WhoWeAreGraphics.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}