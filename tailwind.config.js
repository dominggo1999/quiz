module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#FF5483',
          50: '#FFDEE3',
          100: '#FFCED7',
          200: '#FFB0C0',
          300: '#FF91AA',
          400: '#FF7396',
          500: '#FF5483',
          600: '#FF1C60',
          700: '#E30049',
          800: '#AB003B',
          900: '#73002A',
        },
        blue: {
          DEFAULT: '#232148',
          50: '#9996CF',
          100: '#8A87C8',
          200: '#6B67B9',
          300: '#514CA6',
          400: '#232148',
          500: '#322F67',
          600: '#232148',
          700: '#100F22',
          800: '#000000',
          900: '#000000',
        },
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        display: ['Red Hat Display', 'sans-serif'],
      },
      maxWidth: {
        container: '64rem',
      },
    },
  },
  plugins: [],
};
