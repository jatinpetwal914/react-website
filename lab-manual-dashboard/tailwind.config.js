/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBg: '#06070d',
        glass: 'rgba(18, 22, 40, 0.55)',
        neonPurple: '#9a4dff',
        neonCyan: '#00d1ff',
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 209, 255, 0.35)',
        purple: '0 0 30px rgba(154, 77, 255, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

