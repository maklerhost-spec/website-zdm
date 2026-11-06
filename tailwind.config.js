/** @type {import('tailwindcss').Config} */
// Placeholder colours: change brand/accent once the ZDM logo and colours are known.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0f2a44", 700: "#16395c", 900: "#0a1c2e" },
        accent: { 50: "#eef8f6", 100: "#d5efea", 400: "#2bb3a0", 500: "#14998a", 600: "#0f7f73", 700: "#0d665d" },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: { soft: "0 1px 2px rgba(15,23,42,.05), 0 6px 16px -8px rgba(15,23,42,.15)" },
    },
  },
  plugins: [],
};
