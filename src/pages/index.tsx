import { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { SEO } from '@components/SEO'

interface EpisodeProps {
  id: string
  title: string
}

interface HomeProps {
  episodes: EpisodeProps[]
}

export default function Home({ episodes }: HomeProps): ReactElement {
  return (
    <>
      <SEO title="Podcastr | Home" />
      <section>
        {episodes.map(episode => (
          <div key={episode.id} style={{ margin: '1rem' }}>
            <Link href={`/episodes/${episode.id}`}>
              <a>{episode.title}</a>
            </Link>
          </div>
        ))}
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const request = await fetch('http://localhost:3333/episodes')
  const data = await request.json()

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8
  }
}
