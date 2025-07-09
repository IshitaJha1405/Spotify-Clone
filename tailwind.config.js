/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'spotify-green': '#1DB954',
        'spotify-green-hover': '#1ed760',
        'spotify-black': '#000000',
      },
    },
  },
  plugins: [],
};