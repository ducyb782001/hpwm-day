// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        titan: ["Titan One", "sans-serif"],
        sriracha: ["Sriracha", "sans-serif"],
        dancing: ["DancingScript", "cursive"],
      },
      colors: {
        ...defaultTheme.colors,
        background: "#010613",
        white: "#F5F5F5",
        primary: "#00FFFF",
        primaryWhite: "#F2F2F2",
        primaryDark: "#B1B1B1",
        secondary: "#003452",
        gray: "#827D9D",
        grayDark: "#373737",
        grayLight: "#2F2F2F",
        subBlue: "#00A2FD",
        subBg: "#050E25",
        bgInput: "#2F2F2F",
        blue: "#53B9EA",
        dangerous: "#F13535",
        blueDark: "#0067A2",
        pink: "#feecea",
        black: "#333",
        textPink: "#ff7882",
        heart: "#F61F1F",
        bgLetter: " #fff8e4",
        border: "#DACCBF",
      },
      gridTemplateColumns: {
        2080: "20fr 80fr",
        2575: "25fr 75fr",
        7525: "75fr 25fr",
        46: "4fr 6fr",
        64: "6fr 4fr",
        37: "3fr 7fr",
        3961: "39fr 61fr",
        5545: "55fr 45fr",
        433: "4fr 3fr 3fr",
        157015: "15fr 70fr 15fr",
        6535: "65fr 35fr",
        3367: "33fr 66fr",
        8020: "80fr 20fr",
        454510: "45fr 45fr 10fr",
      },
      fontSize: {
        fontSize10px: "10px",
      },
      zIndex: {
        60: "60",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-question-mark")],
}
