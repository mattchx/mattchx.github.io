/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "retro", "corporate", "synthwave", "cyberpunk"],
  },
}

// content: ["./src/**/*.{html,js}"],
