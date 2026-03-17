import { dot } from 'node:test/reporters';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
         fontFamily: {   
          cornerstone: ['Cornerstone', 'sans-serif'],
          PlayfairDisplay: ['Playfair Display', 'serif'],
      },
      },
    },
  plugins: [],
}