module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    screens: {
      xs: '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '2560px'
    },
    extend: {
      colors: {
        obsidian: '#090b10',
        graphite: '#121722',
        champagne: '#e7d8ae',
        ivory: '#f6f1e7',
        copper: '#9f6b45',
        emerald: '#224b49'
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        glow: '0 30px 80px rgba(10, 12, 18, 0.35)',
        glass: '0 16px 48px rgba(5, 10, 20, 0.25)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(231,216,174,.24), transparent 30%), linear-gradient(135deg, rgba(9,11,16,.8), rgba(18,23,34,.55))',
        'panel-gradient': 'linear-gradient(180deg, rgba(255,255,255,.14), rgba(255,255,255,.04))'
      },
      animation: {
        shimmer: 'shimmer 2.2s linear infinite',
        float: 'float 8s ease-in-out infinite',
        marquee: 'marquee 18s linear infinite'
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' }
        },
        float: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: []
};
