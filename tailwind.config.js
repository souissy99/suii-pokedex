/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'normal': '#a8a878',
        'fire': '#f08030',
        'fighting': '#c03129',
        'water': '#6890f0',
        'flying': '#a890f0',
        'grass': '#78c850',
        'poison': '#a040a0',
        'electric': '#f8d130',
        'ground': '#e0c068',
        'rock': '#b8a038',
        'psychic': '#f85888',
        'ice': '#98d8d8',
        'bug': '#a8b820',
        'dragon': '#7038f8',
        'ghost': '#705898',
        'dark': '#705848',
        'steel': '#b8b8d0',
        'fairy': '#ee99ac',
      }
    },
  },
  plugins: [],
}