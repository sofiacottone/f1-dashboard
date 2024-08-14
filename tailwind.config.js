/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'T1': '#3671C6', // Red Bull Racing
        'T2': '#27F4D2', // Mercedes
        'T3': '#E8002D', // Ferrari
        'T4': '#FF8000', // McLaren
        'T5': '#229971', // Aston Martin
        'T6': '#0093CC', // Alpine
        'T7': '#6692FF', // RB
        'T8': '#52E252', // Kick Sauber
        'T9': '#B6BABD', // Haas F1 Team
        'T10': '#64C4FF', // Williams
      },
      fontFamily: {
        f1: ['F1', 'sans-serif']
      }
    },
  },
  plugins: [],
}