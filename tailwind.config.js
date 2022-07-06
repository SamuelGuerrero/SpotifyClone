/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      'botton-color': '#18D860'
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
