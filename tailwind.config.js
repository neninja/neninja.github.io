module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      sans: ['mosk', 'Poppins', 'sans-serif'],
      mosk: ['mosk', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'cartoon-yellow': '#f9ea47'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 500ms ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
