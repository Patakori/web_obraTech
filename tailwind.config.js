/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': "var(--inter-font)",
      },
      backgroundImage: {
        "login-desktop": "url('/bgHomeBig.jpg')",
      },
      colors:{
        'erro-50': '#FAA2A2',
        'erro-100': '#A63434',
        'erro-150': '#EF4B4B',
        'success-50': '#71997F',
        'success-100': '#D0F2DC',
        'success-150': '#A0D8B3',
        'quaternary-50': '#4D5159',
        'quaternary-100': '#BEC3CC',
        'quaternary-150': '#6C737E',
        'tertiary-50': '#4F6573',
        'tertiary-100': '#A3C4D9',
        'tertiary-150': '#7393A7',
        'secondary-50': '#809399',
        'secondary-100': '#DFEDF2',
        'secondary-150': '#B5CFD8',
        'primary-50': '#B3B3B3',
        'primary-100': '#FFFFFF',
        'primary-150': '#E8ECF1',


      },
           
      keyframes: {
        openMenuUser: {
          '0%': { opacity: 0 },
          '25%': { opacity: 0.25 },
          '50%': { opacity: 0.5 },
          '75%': { opacity: 0.75 },
          '100%': { opacity: 1 },
        },
        closeMenuUser: {
          '0%': { opacity: 0, backgroundColor: '#4F6573'},
          '50%': { opacity: 1,  backgroundColor: '#4F6573' },
          '100%': { opacity: 0,  backgroundColor: '#4F6573' },
        },
        shimmer: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0.8)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        openMenuUser: 'closeMenuUser 3s linear',
        closeMenuUser: 'closeMenuUser .3s linear',
        openModalHome: 'openMenuUser .3s linear',
        closeModalHome: 'closeMenuUser .3s linear',
        openQuestions: 'openMenuUser .3s linear',
        closeQuestions: 'closeMenuUser .3s linear',
        openTopButton: 'openMenuUser .3s linear',
        closeTopButton: 'closeMenuUser .5s linear',
      },

    },
  },
  plugins: [],
}
