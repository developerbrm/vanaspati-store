const fallBackFonts = [
  "sans-serif",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
]

module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      fontFamily: {
        dosis: ["Dosis", ...fallBackFonts],
        lato: ["Lato", ...fallBackFonts],
        sacramento: ["Sacramento", ...fallBackFonts],
      },
      colors: {
        "custom-light-blue": "#EEEEEE",
        "custom-dark-blue": "#00ADB5",
        "custom-medium-black": "#393E46",
        "custom-dark-black": "#222831",
      },
    },
  },
  plugins: [],
}
