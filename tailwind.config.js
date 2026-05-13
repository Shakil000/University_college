export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        gold: '#c9a84c',
        'gold-lt': '#e8c97a',
        cream: '#f8f4ed',
      },
    },
  },
  plugins: [],
};
