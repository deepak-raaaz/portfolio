/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'clashdisplay': ["clashdisplay","sans-serif"], 
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
    },
  },
  plugins: [],
}

