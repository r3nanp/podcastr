import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import { themes } from 'styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={themes.light}>{children}</ThemeProvider>)
}
