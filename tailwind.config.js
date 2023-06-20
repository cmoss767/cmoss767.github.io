/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      spacing: {
        100: "27.5rem",
        128: "32rem", // 512 pixels
        88: "22rem",
      },
    },
  },
  plugins: [],
}
