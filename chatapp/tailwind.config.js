/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heading': '#11175D',
        'primary': '#5F35F5'
      },
      fontFamily: {
        'nunta': ['Nunito', 'sans-serif'],
        'sans': ['Open Sans', 'sans-serif']
      
      }
    },
  },
  plugins: [],
}

