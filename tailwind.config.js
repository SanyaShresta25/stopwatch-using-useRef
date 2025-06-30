// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'dots-pattern': `radial-gradient(circle at 25% 25%, #ff6b9d 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, #4ecdc4 2px, transparent 2px)`
      },
      backgroundSize: {
        dots: '50px 50px'
      },
      fontFamily: {
        mono: ['monospace', 'ui-monospace', 'SFMono-Regular']
      },
      letterSpacing: {
        widest: '0.1em'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
        }
      })
    }
  ]
};
