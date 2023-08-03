/** @type {import('tailwindcss').Config}*/

const scrollbarHide = require('tailwind-scrollbar-hide');

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [
    scrollbarHide,
  ],
};

module.exports = config;
