import { ReactElement } from 'react'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
