module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      // 'Poppins': ['Poppins', 'sans-serif'],
      'Poppins': 'Poppins,  sans-serif',
    },
    extend: {
      colors: {
        'peach-fuzz': 'rgb(255,190,152)',
        'classic-blue': 'rgb(15, 76, 129)',
        'classic-blue-light': '#E7EDF2',
        'classic-blue-middle': '#3F709A',
        'Middle-Yellow-Red': '#F0B37E',
        'Jungle-Green': '#1BA098',
      },
    },
  },
  plugins: [],
}
