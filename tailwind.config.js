// tailwind.config.js
// ✅ Make sure this is .js NOT .ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "apple-blue": "#0071e3",
        "apple-blue-hover": "#0077ed",
        "apple-dark": "#1d1d1f",
        "apple-gray": "#6e6e73",
        "apple-light": "#f5f5f7",
      },
    },
  },
  plugins: [],
};