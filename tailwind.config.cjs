/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        'xs': '475px'
      },
      gridTemplateColumns: {
          'grid-template-autofill': 'repeat( auto-fill, minmax(350px, 1fr))' ,
          'gird-display-columns': "grid-template-columns: 1fr 5fr 1fr"
      },
    },
  },
  plugins: [],
}
