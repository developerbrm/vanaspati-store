
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      fontFamily: {
        laila: ["Laila", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        "custom-white-extra-light": "#F9F9F9",
        "custom-white-light": "#E5E5E5",
        "custom-yellow": "#FCA311",
        "custom-dark-blue": "#14213D",
        "custom-dark-black": "#111111",
      },
    },
  },
  plugins: [],
};
