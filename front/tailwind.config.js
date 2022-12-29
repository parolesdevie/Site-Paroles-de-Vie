/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'light-black': '#191920'
      },
      spacing: {
        38: '9.5rem',
        120: '30rem',
        160: '40rem'
      },
      scale: {
        120: '1.2'
      },
      fontFamily: {
        manuscrit: [
          'Comic Sans MS',
          'Chalkboard SE',
          'Comic Neue',
          'sans-serif'
        ]
      },
      minHeight: {
        '1/2-screen': '50vh'
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
}