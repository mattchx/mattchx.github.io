/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "retro", "corporate", "synthwave", "cyberpunk"],
  },
}

// content: ["./src/**/*.{html,js}"],
