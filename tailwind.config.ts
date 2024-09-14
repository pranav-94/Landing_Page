// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // If using the app directory
    './pages/**/*.{js,ts,jsx,tsx}',  // For Next.js pages
    './components/**/*.{js,ts,jsx,tsx}',  // For components
  ],
  theme: {
    extend: {},  // You can extend the default theme here
  },
  plugins: [],
};
