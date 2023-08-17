/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rye: ["Rye", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#ff9900",
        lightGrey: "#f8f8f8",
        dark: "#292929",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
