module.exports = {
  purge: [
    '_site/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': ['12px', '14px'],
      'base': ['14px', '16px'],
      'lg': ['18px', '20px'],
      'xl': ['22px', '26px'],
      '2xl': ['30px', '34px'],
      '3xl': ['36px', {
        letterSpacing: '-0.02em',
        lineHeight: '38px',
      }],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
