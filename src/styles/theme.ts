export const theme = {
  light: {
    bg: '#f2f3f5',
    white: '#fff'
  },
  dark: {
    bg: '#121214',
    white: '#29292e'
  }
}

export type ThemeName = keyof typeof theme
export type ThemeType = typeof theme.light | typeof theme.dark
