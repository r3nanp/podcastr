import { ReactElement } from 'react'
import { SEO } from '@components/SEO'

export default function Home(): ReactElement {
  return (
    <>
      <SEO title="Podcastr | Home" />

      <main>
        <h2>Hello world!</h2>
      </main>
    </>
  )
}
