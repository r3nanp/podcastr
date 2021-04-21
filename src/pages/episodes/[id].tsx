import { ReactElement } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { parseISO, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { SEO } from '@components/SEO'
import { api } from 'services/api'
import { convertDurationToTimeString } from 'utils/convertDurationToTimeString'

import * as S from 'styles/pages/episode'

interface Episode {
  id: string
  title: string
  members: string
  thumbnail: string
  durationAsString: string
  duration: number
  publishedAt: string
  description: string
  url: string
}

type SlugProps = {
  episode: Episode
}

export default function Slug({ episode }: SlugProps): ReactElement {
  const { isFallback, push } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  const handleGoBack = () => push('/')

  return (
    <S.Container>
      <SEO title={`Podcastr | ${episode.title}`} />

      <S.ThumbnailContainer>
        <button type="button" onClick={handleGoBack}>
          <img src="/arrow-left.svg" alt="Voltar" />
        </button>

        <Image
          width={760}
          height={160}
          src={episode.thumbnail}
          alt={episode.title}
          objectFit="cover"
        />
        <button type="button">
          <img src="/play.svg" alt="Tocar" />
        </button>
      </S.ThumbnailContainer>

      <S.Header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </S.Header>

      <S.Description
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params

  const { data } = await api.get(`/episodes/${id}`)

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', {
      locale: ptBR
    }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url
  }

  return {
    props: {
      episode
    },
    revalidate: 60 * 60 * 24
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/episodes')

  const paths = data.map((path: Episode) => {
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
