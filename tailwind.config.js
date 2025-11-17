
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0B1F4A',
        'brand-green': '#00F0B5',
      },
    },
  },
  plugins: [],
}
