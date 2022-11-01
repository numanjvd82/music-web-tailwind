/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navColor: '#270082',
        btnColor: '#DC0000',
        footerColor: '#1B0058',
        navDark: '#070114',
        btnDark: '#DC0000',
        footerDark: '#070212',
      },
      backgroundImage: {
        'hero-img': "url('./assets/images/bg-1.png')",
        'promotion-img': "url('./assets/images/bg-2.png')",
      },
    },
  },
  plugins: [],
};
