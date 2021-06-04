const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      gray: {
        default: colors.gray,
        primary: '#373737',
        secondary: '#AAAAAA',
        other: '#bbbbb'
      },
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      black: {
        default: colors.black,
        light: '#171515'
      },
      green: {
        primary: '#00B6AB',
      },
      white: colors.white
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}