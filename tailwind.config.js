/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    'node_modules/preline/dist/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'playfair': ['Playfair', 'serif'],
        'outfit':["Outfit", "sans-serif"],
      },
      colors: {
        pink: {
          '50': '#ffe4e6',
          '100': '#fecdd3',
          '200': '#fda4af',
          '300': '#fb7185',
          '400': '#f43f5e',
          '500': '#e11d48',
          '600': '#be123c',
          '700': '#9f1239',
          '800': '#881337',
          '900': '#701a3e',
        },
        primary: '#e11d48', // Choose a shade from the pink palette
        secondary: '#fb7185', // Choose a shade from the pink palette
        background: '#ffe4e6', // Choose a shade from the pink palette
      },
      keyframes: {
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fadeout: 'fade-out 1s ease-out 0.75s 1',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
