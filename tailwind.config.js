/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
        accent: "#e74c3c",
        background: "#ecf0f1",
        text: "#2c3e50",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

