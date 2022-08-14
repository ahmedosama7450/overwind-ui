const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,

      primary: {
        DEFAULT: "#1da1f2",
        ...colors.sky,
      },
      secondary: {
        DEFAULT: "#F7F9F9",
        dark: "#EFF3F4",
      },

      // TODO Maybe just include both gray and slate making gray the default gray
      gray: {
        DEFAULT: colors.gray[200], // Divider color mostly
        ...colors.gray,
      },
      red: {
        DEFAULT: colors.red[500], // Error color mostly
        ...colors.red,
      },
      green: {
        DEFAULT: colors.emerald[500],
        ...colors.emerald,
      },
      yellow: {
        DEFAULT: colors.yellow[500],
        ...colors.yellow,
      },

      link: colors.sky[600],
      linkHover: colors.sky[500],
    },

    screens: {
      xs: "512px",
      ...defaultTheme.screens,
    },

    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        "2xs": ["0.8125rem", "1rem"],
        md: [".9375rem", "1.375rem"],
      },

      borderColor: {
        DEFAULT: colors.gray[200], // Same as divider color
      },

      spacing: {
        13: "3.25rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
