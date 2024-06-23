/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'fjalla': "Fjalla One",
    },
    extend: {
      colors: {
        'topHeader': '#1b1b1b',
        'navHeader': '#262626',
      },
    },
    fontWeight: {
      // 'normal': 400, // This is default
      'bold': 700,   // This is default
    },
  },
  plugins: [],
}
