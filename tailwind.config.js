/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8e7f5',
          100: '#d1cfea',
          200: '#a39fd5',
          300: '#756fc0',
          400: '#473fab',
          500: '#1f1b79', // Deep Blue - Color principal
          600: '#1a1666',
          700: '#151253',
          800: '#100e40',
          900: '#0b0a2d',
        },
        secondary: {
          50: '#f0eef8',
          100: '#e1ddf1',
          200: '#c3bbe3',
          300: '#a599d5',
          400: '#8777c7',
          500: '#4a3d8a', // Purple Blue - Color secundario
          600: '#3e3373',
          700: '#32295c',
          800: '#261f45',
          900: '#1a152e',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#d63d9e', // Magenta - Color acento
          600: '#b83285',
          700: '#9a276c',
          800: '#7c1c53',
          900: '#5e113a',
        },
        coral: {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa8a8',
          400: '#ff8787',
          500: '#ff6e61', // Coral - Color destacado
          600: '#ff5252',
          700: '#ff3838',
          800: '#ff1e1e',
          900: '#ff0404',
        },
        lavender: {
          50: '#f8f4fb',
          100: '#f1e9f7',
          200: '#e3d3ef',
          300: '#d5bde7',
          400: '#c7a7df',
          500: '#995fb4', // Lavender - Color complementario
          600: '#7d4f93',
          700: '#613f72',
          800: '#452f51',
          900: '#291f30',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a', // negro elegante
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
} 