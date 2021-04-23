import { ReactElement } from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from '@contexts/ThemeContext'
import { PlayerProvider } from '@contexts/PlayerContext'
import { Wrapper } from '@styles/app'
import { Header } from '@components/Header'
import { Player } from '@components/Player'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider>
      <PlayerProvider>
        <Wrapper>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>

          <Player />
        </Wrapper>
      </PlayerProvider>
    </ThemeProvider>
  )
}

export default MyApp
