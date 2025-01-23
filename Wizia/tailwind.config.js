/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0FF1F6",
        secondary:"#0cc0c4",
        white:"#ffffff",
        whiteShades:"#cccccc"
      },
      fontFamily:{
        roboto:['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}