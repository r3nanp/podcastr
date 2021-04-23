import { useContext } from 'react'
import { ThemeContext, ThemeContextData } from '@contexts/ThemeContext'

export function useTheme(): ThemeContextData {
  const theme = useContext(ThemeContext)
  return theme
}
