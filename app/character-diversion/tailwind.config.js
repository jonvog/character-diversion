const defaultColors = require('tailwindcss/colors')
const colors = {
  primary: defaultColors.orange,
  secondary: defaultColors.slate,
  neutral: defaultColors.stone,
  slate: defaultColors.slate,
  info: defaultColors.blue,
  success: defaultColors.emerald,
  warning: defaultColors.amber,
  alert: defaultColors.red,
  black: defaultColors.black,
  white: defaultColors.white,
  yellow: defaultColors.amber,
  emerald: defaultColors.emerald,
  mint: {
    50: '#fcfffc',
    100: '#fcfffc',
    200: '#e9f5e8',
    300: '#c8dbc7',
    400: '#9cb19c',
    500: '#6d7f6e',
    600: '#485549',
    700: '#313b33',
    800: '#28302b',
    900: '#233027',
  },
  beige: {
    50: 'hsl(55,25%,96%)',
    100: 'hsl(48,22%,93%)',
    200: 'hsl(43,18%,90%)',
    300: 'hsl(39,17%,83%)',
    400: 'hsl(37,13%,60%)',
    500: 'hsl(35,10%,35%)',
    600: 'hsl(30,8%,32%)',
    700: 'hsl(30,12%,25%)',
    800: 'hsl(25,17%,15%)',
    900: 'hsl(25,19%,10%)',
  },
}
const grid = [
  '4',
  '8',
  '12',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
  '128',
  '160',
]

module.exports = {
  content: [],
  safelist: [
    ...Object.keys(colors).map((color) => `text-${color}-500/20`),
    ...grid.map((e) => `h-${e}`),
    ...grid.map(
      (e) => `grid-cols-autofill-${e}`
    ),
    ...['2xl', '4xl', '8xl', '10xl', '12xl', '13xl', '14xl', '15xl', '16xl'].map((e) => `text-${e}`),
    ...['none', '2', '3', '4', '5', '6'].map((e) => `line-clamp-${e}`),
  ],
  tailwindcss: {
    viewer: true,
  },
  theme: {
    fontFamily: {
      sans: ['Inter', 'Gramatika', 'Neue Machina', 'sans-serif'],
      hebrew: ['Assistant'],
    },
    colors,
    extend: {
      fontSize: {
        '10xl': '160px',
        '11xl': '176px',
        '12xl': '192px',
        '13xl': '208px',
        '14xl': '224px',
        '15xl': '240px',
        '16xl': '256px',
      },
      gridTemplateColumns: grid.reduce((acc, curr) => {
        return { ...acc, [`autofill-${curr}`]: `repeat(auto-fill, minmax(${curr / 4}rem, 1fr))` }
      }, {}),
      height: {
        '128': '32rem',
        '160': '40rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-css-variables')({
      screens: false,
      lineHeight: false,
      letterSpacing: false,
      backgroundSize: false,
      boxShadow: false,
      zIndex: false,
      transitionDuration: 'transition-duration',
      transitionProperty: 'transition-property',
      transitionDelay: 'transition-delay',
      transitionDuration: 'transition-duration',
      transitionTimingFunction: 'transition-timing-function',
      outlineStyle: 'outline-style',
      outlineWidth: 'outline-width',
      outlineOffset: 'outline-offset',
      outlineColor: 'outline-color',
    }),
  ],
  darkMode: 'class',
}
