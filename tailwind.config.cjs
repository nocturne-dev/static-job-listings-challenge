const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
		"attribution": "hsl(228,45%,44%)",
        "desaturated-dark-cyan": "hsl(180,29%,50%)",
        "light-grayish-cyan-bg": "hsl(180,52%,96%)",
        "light-grayish-cyan-fg": "hsl(180,31%,95%)",
        "dark-grayish-cyan": "hsl(180,8%,52%)",
        "very-dark-grayish-cyan": "hsl(180,14%,20%)",
      },

      fontFamily: {
        League_Spartan: ["League Spartan", ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        standard: "15px",
      },

      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
