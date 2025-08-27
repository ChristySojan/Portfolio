/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7c3aed",
          fg: "#f5f3ff",
          soft: "#a78bfa",
        }
      }
    },
  },
  plugins: [],
}
