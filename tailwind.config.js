/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      colors: {
        slate: {
          850: '#1e293b',
          950: '#0f172a',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      scale: {
        '102': '1.02',
        '110': '1.10',
      },
      rotate: {
        '6': '6deg',
        '12': '12deg',
      },
    },
  },
  plugins: [],
}