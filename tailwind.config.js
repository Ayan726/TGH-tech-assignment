/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleBg: "#38248e",
        orangeBg: "#d05252",
        greenBg: "#009c51",
      },
    },
  },
  plugins: [],
};
