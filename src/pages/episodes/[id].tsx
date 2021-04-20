import { ReactElement } from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { SEO } from '@components/SEO'

interface IEpisode {
  id: string
}

export default function Slug({
  episode
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <>
      <SEO title={`Podcastr | ${episode.title}`} />

      <img src={episode.thumbnail} alt={episode.title} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params

  const request = await fetch(`http://localhost:3333/episodes/${id}`)
  const data = await request.json()

  return {
    props: {
      episode: data
    },
    revalidate: 60 * 60 * 8
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const request = await fetch('http://localhost:3333/episodes')
  const data = await request.json()

  const paths = data.map((path: IEpisode) => {
    return {
      params: {
        id: path.id
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}
