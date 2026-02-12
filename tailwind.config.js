/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#000000',
        },
        surface: {
          light: '#f5f5f7',
          dark: '#1d1d1f',
        },
      },
      borderRadius: {
        'apple': '1.25rem', // 20px, similar to rounded-2xl
      }
    },
  },
  plugins: [],
}
