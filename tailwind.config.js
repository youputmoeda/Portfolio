/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        abeezee: ['ABeeZee', 'sans-serif'],
        inknut: ['Inknut Antiqua', 'serif']
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "backgroundB": "url('./assets/Background/Background.png')", 
        "Big-mountain": "url('./assets/Background/BigMoutain.png')",
        "Left-mountain": "url('./assets/Background/LeftMoutain.png')",
        "Right-mountain": "url('./assets/Background/RightMountain.png')",
        "Small-mountain": "url('./assets/Background/SmallMountain.png')",
      },
    },
  },
  plugins: [],
};
