/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./www/**/*.html'],
  theme: {
    extend: {
      colors: {},
      spacing: {
        38: '9.5rem',
        120: '30rem',
        160: '40rem',
      },
      scale: {
        120: '1.2',
      },
    },
  },
  plugins: [],
}
