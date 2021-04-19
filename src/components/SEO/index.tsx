import { ReactElement } from 'react'
import Head from 'next/head'

interface SEOProps {
  title: string
}

export function SEO({ title }: SEOProps): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  )
}
