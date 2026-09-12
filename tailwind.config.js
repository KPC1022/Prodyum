/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          void: '#06080D',
          surface: '#0C101A',
          elevated: '#121826',
        },
        cyan: {
          accent: '#00F0FF',
          glow: 'rgba(0, 240, 255, 0.4)',
        },
        violet: {
          accent: '#7928CA',
          glow: 'rgba(121, 40, 202, 0.4)',
        },
        amber: {
          accent: '#FFB800',
          glow: 'rgba(255, 184, 0, 0.4)',
        },
        orange: {
          accent: '#FF5E3A',
          glow: 'rgba(255, 94, 58, 0.4)',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glass': '0 20px 50px rgba(0, 0, 0, 0.6)',
        'glow-cyan': '0 0 30px rgba(0, 240, 255, 0.35)',
        'glow-amber': '0 0 30px rgba(255, 184, 0, 0.35)',
        'glow-violet': '0 0 30px rgba(121, 40, 202, 0.35)',
        'glow-orange': '0 0 30px rgba(255, 94, 58, 0.35)',
        'inner-glass': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.18)',
      },
    },
  },
  plugins: [],
}
