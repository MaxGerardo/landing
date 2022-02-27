module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        canna: {
          primary: "#365314",

          secondary: "#854d0e",

          accent: "#047857",

          neutral: "#1c1917",

          "base-100": "#272726",

          info: "#84cc16",

          success: "#15803d",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
      "garden",
      "halloween",
    ],
  },
};
