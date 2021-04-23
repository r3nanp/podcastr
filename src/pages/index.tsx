import { ReactElement, useMemo } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { usePlayer } from '@hooks/usePlayer'
import { SEO } from '@components/SEO'
import { api } from 'services/api'
import { convertDurationToTimeString } from 'utils/convertDurationToTimeString'

import * as S from 'styles/pages/home'

interface Episode {
  id: string
  title: string
  members: string
  thumbnail: string
  durationAsString: string
  duration: number
  publishedAt: string
  url: string
}

interface HomeProps {
  latestEpisodes: Episode[]
  allEpisodes: Episode[]
}

export default function Home({
  allEpisodes,
  latestEpisodes
}: HomeProps): ReactElement {
  const { playList } = usePlayer()

  const episodeList = [...latestEpisodes, ...allEpisodes]

  const spring = useMemo(
    () => ({
      type: 'spring',
      damping: 50,
      stiffness: 100
    }),
    []
  )

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.5
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <S.Wrapper>
      <SEO title="Podcastr | Home" />

      <S.LatestEpisodes>
        <h2>Últimos lançamentos</h2>

        <ul>
          {latestEpisodes.map((episode, index) => {
            return (
              <S.EpisodeList
                key={episode.id}
                initial="hidden"
                animate="visible"
                variants={container}
              >
                <Image
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                  className="thumb"
                />

                <S.EpisodeDetails>
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>

                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </S.EpisodeDetails>

                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  type="button"
                  onClick={() => playList(episodeList, index)}
                >
                  <img src="/play-green.svg" alt="Tocar episódio" />
                </motion.button>
              </S.EpisodeList>
            )
          })}
        </ul>
      </S.LatestEpisodes>

      <S.AllEpisodes>
        <h2>Todos episódios</h2>

        <table cellSpacing={0}>
          <thead>
            <th></th>
            <th>Podcast</th>
            <th>Integrantes</th>
            <th>Data</th>
            <th>Duração</th>
            <th></th>
          </thead>

          <motion.tbody initial="hidden" animate="visible" variants={container}>
            {allEpisodes.map((episode, index) => {
              return (
                <motion.tr transition={spring} variants={item} key={episode.id}>
                  <td style={{ width: 72 }}>
                    <Image
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                    />
                  </td>
                  <td>
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                    </Link>
                  </td>

                  <td>{episode.members}</td>
                  <td style={{ width: 100 }}>{episode.publishedAt}</td>
                  <td>{episode.durationAsString}</td>
                  <td>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      onClick={() =>
                        playList(episodeList, index + latestEpisodes.length)
                      }
                    >
                      <img src="/play-green.svg" alt="Tocar episódio" />
                    </motion.button>
                  </td>
                </motion.tr>
              )
            })}
          </motion.tbody>
        </table>
      </S.AllEpisodes>
    </S.Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {
        locale: ptBR
      }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(
        Number(episode.file.duration)
      ),
      url: episode.file.url
    }
  })

  const latestEpisodes = episodes.slice(0, 2)
  const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 8
  }
}
