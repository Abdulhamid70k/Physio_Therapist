/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This enables class-based dark mode
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a202c', // Example dark background
        lightShadow: 'rgba(255, 255, 255, 0.2)', // Light shadow for dark mode
        darkShadow: 'rgba(0, 0, 0, 0.2)', // Default shadow for light mode
      },
      boxShadow: {
        'light': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)', // Light mode shadow
        'dark': '0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.06)', // Dark mode shadow
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
