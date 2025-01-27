/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path based on your project structure
    './public/index.html', // Include your HTML files if necessary
  ],
  theme: {
    extend: {
      screens: {
        'max-325px': { max: '325px' },
        'max-375px': { max: '375px' },
        'max-414px': { max: '414px' },
        'max-480px': { max: '480px' },
        'max-600px': { max: '600px' },
        'max-767px': { max: '767px' },
        sm: '640px',  // Small screens
        md: '768px',  // Medium screens (Tablets)
        lg: '1024px', // Large screens (Laptops)
        xl: '1280px', // Extra-large screens (Desktops)
        '2xl': '1536px', // Double extra-large screens
      }
    },
  },
  plugins: [],
};

