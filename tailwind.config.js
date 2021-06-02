const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      gray: {
        light: '#6A6E73',
        normal: colors.coolGray,
        dark: '#AAAAAA'
      },
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      logo: '#00B6AB',
      black: {
        DEFAULT: colors.black,
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