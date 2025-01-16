/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "450px",
      md: "720px",
      lg: "1024px",
    },
    fontFamily: {
      lexend: ["Lexend"],
      gochi_hand: ["Gochi Hand"],
    },

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        paste: "#03689f",
        midnight: "#0f172a",
        button_hover: "#075985",
        text_secondary: "#303c45",
        text_primary: "#11192f",
      },
    },
  },
  plugins: [],
};
