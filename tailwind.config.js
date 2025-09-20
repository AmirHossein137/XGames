/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/preline/**/*.js", // 👈 این خط لازمه برای Preline
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'), // 👈 افزونه Preline
  ],
};
