/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      columnCount: [2],
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-multi-column')(),
  ],
};
