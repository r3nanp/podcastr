export const themes = {
  light: {
    white: '#fff',
    'gray-50': '#F7F8FA',
    'gray-100': '#E6E8EB',
    'gray-200': '#AFB2B1',
    'gray-500': '#808080',
    'gray-800': '#494D4B',

    'green-500': '#04D361',

    'purple-300': '#9F75FF',
    'purple-400': '#9164FA',
    'purple-500': '#8257E5',
    'purple-800': '#6F48C9'
  },
  dark: {
    'gray-50': '#121214',

    'gray-100': '#f1f1f1',
    'gray-200': '#f2f3f5',
    'gray-500': '#e1e1e6',
    'gray-800': '#d1d2d3',

    'green-500': '#04D361',

    'purple-300': '#9F75FF',
    'purple-400': '#9164FA',
    'purple-500': '#8257E5',
    'purple-800': '#6F48C9'
  }
}

export type ThemeName = keyof typeof themes
export type ThemeType = typeof themes.light | typeof themes.dark
