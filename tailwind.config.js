/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "600px",
      md: "767px",
      lg: "1024px",
      xl: "1220px",
    },
    colors: {
      white: "#FFF",
      "gray-600": "#5A607F",
      blue: "#1E5EFF",
      "slate-400": "#D7DBEC",
      "gray-400": "#A1A7C4",
      "slate-300": "#D9E1EC",
      black: "#131523",
      "indigo-500": "#1877F2",
      "indigo-600": "#1976D2",
      "jam-clr": "#1E2753",
      "green-clr": "#4CAF50",
      "pink-clr": "#FF3D00",
      "yellow-clr": "#FFC107",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
