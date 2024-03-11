/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}", "./src/**/*.{html,js}"
  ],
  theme: {
      /** to build on top of the defaults of the config file */
    extend: {
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

