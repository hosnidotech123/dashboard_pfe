/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mypink:" #fa8bff",
        myskyblue:"#2bd2ff ",
        mygreen:'#2bff88',
        myblue:"#1904e5",
        mypurple:"#fab2ff"
      }
    },
  },
  plugins: [require("daisyui")],
}

