/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'recipe-cream': '#faf8f5',
        'recipe-white': '#ffffff',
        'recipe-orange': '#ff6b35',
        'recipe-text': '#2d3436',
        'recipe-gray': '#636e72',
        'recipe-light-gray': '#b2bec3',
        'recipe-footer': '#2c3e50',
        'recipe-footer-dark': '#1a252f',
        'recipe-blue': '#4a69bd',
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'tropical-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'ocean-gradient': 'linear-gradient(180deg, #00b4d8 0%, #0077b6 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #ff9f1c 0%, #ff6b6b 100%)',
      },
    },
  },
  plugins: [],
}
