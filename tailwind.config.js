/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#4ade80',
        'cyber-cyan': '#22d3ee',
      }
    },
  },
  plugins: [],
}
