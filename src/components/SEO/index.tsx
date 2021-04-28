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
        <meta name="application-name" content="Podcastr" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Podcastr" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="keywords" content="podcast, audio" />
        <meta name="description" content="The best podcast application." />

        <meta property="og:url" content="https://podcastr.r3nanp.vercel.app" />
        <meta property="og:site_name" content="Podcastr" />
        <meta property="og:title" content="Podcastr" />
        <meta
          property="og:description"
          content="The best podcast application."
        />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:image" content="/logo.svg" />
        <meta name="twiiter:image:alt" content="Thumbnail" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Podcastr" />
        <meta
          name="twitter:description"
          content="The best podcast application."
        />
        <meta name="twiiter:create" content="r3nanp" />
      </Head>
    </>
  )
}
