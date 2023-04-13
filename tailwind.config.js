/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        '1921':'1921px'
      },
      aspectRatio: {
        'banner19/7': '19 / 7',
        'collection11/14':'11/14'
      },

    },
  },
  plugins: [  plugin(function ({ addUtilities }) {
    addUtilities({
      ".scrollbar-hide": {
        /* IE and Edge */
        "-ms-overflow-style": "none",

        /* Firefox */
        "scrollbar-width": "none",

        /* Safari and Chrome */
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
    });
  }),],
}
