/** @type {import('tailwindcss').Config} */
const colors = {
  white: "#FFFFFF",
  orange: "#ff6e00",
  orangeDark: "#cc5800",
  black: "#000000",
  monYellow: "#F7DBA7",
  monYellow40: "#FCEED5",
  monYellow60: "#F1D092",
  monYellow80: "#EEC77E",
  error: "#f44336",
  neutral100: "#00171F",
  neutral80: "#242B33",
  neutral60: "#667479",
  neutral40: "#99A2A5",
  neutral20: "#CCD1D2",
  neutral10: "#EBEEEF",
  neutral: "#FDFDFD",
};

export default {
  // content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "442px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    colors,
  },
  plugins: [],
};
