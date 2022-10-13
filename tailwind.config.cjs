/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],

  theme: {

    extend: {
      fontFamily:{
        sans:'Inter, sans-serif'/** Onde aplicamos a carregação da font no tailwind */
      },
      colors:{
        gray:{
          900: '#121214',
          800: '#202024',
          400: '#7c7c8a',
          200: '#c4c4cc', 
          100: '#e1e1e6',
        },
        'black': '#000',
        transparent: 'transparent',

        'correct-mark': '#4be332',
        'incorrect-mark': '#dc2626',
        cyan:{
          900: '#05B9FA',
          500: '#81d8f7',
          300: '#9BE1FB',
        }
      },
      fontSize:{
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      }
    },
  },
  plugins: [],
}
