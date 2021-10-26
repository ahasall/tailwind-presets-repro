const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.pink,
      gray: colors.gray,
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000'
    }
  },
  presets: [require('./base')]
};
