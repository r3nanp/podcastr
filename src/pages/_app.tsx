import { ReactElement } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { theme } from '@styles/theme'
import { GlobalStyles } from '@styles/global'
import { Wrapper } from '@styles/app'
import { Header } from '@components/Header'
import { Player } from '@components/Player'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>

        <Player />
      </Wrapper>
    </ThemeProvider>
  )
}

export default MyApp
