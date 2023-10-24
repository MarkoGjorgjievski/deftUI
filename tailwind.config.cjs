/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/**/*.{html,svelte,js,ts}",
    "node_modules/preline/dist/*.js",
    "./src/stories/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.indigo[500],
        "primary-soft": colors.indigo[100],
        "primary-content": colors.white,
        "primary-focus": colors.indigo[600],
        info: colors.blue[500],
        "info-soft": colors.blue[100],
        "info-content": colors.white,
        "info-focus": colors.blue[600],
        success: colors.green[500],
        "success-soft": colors.green[100],
        "success-content": colors.white,
        "success-focus": colors.green[600],
        warning: colors.yellow[500],
        "warning-soft": colors.yellow[100],
        "warning-content": colors.white,
        "warning-focus": colors.yellow[600],
        danger: colors.red[500],
        "danger-soft": colors.red[100],
        "danger-content": colors.white,
        "danger-focus": colors.red[600],
        base: "rgb(var(--base) / <alpha-value>)",
        "base-100": "rgb(var(--base-100) / <alpha-value>)",
        "base-200": "rgb(var(--base-200) / <alpha-value>)",
        "base-300": "rgb(var(--base-300) / <alpha-value>)",
        "base-content": "rgb(var(--base-content) / <alpha-value>)",
      },
      borderColor: {
        border: "rgb(var(--base-200) / <alpha-value>)",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("preline/plugin")],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(primary|current|white|purple|midnight|metal|tahiti|silver|bermuda)/,
    },
  ],
};
