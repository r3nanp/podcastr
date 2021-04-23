import { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import { usePlayer } from '@hooks/usePlayer'
import Image from 'next/image'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import * as S from './styles'
import { convertDurationToTimeString } from 'utils/convertDurationToTimeString'

export function Player(): ReactElement {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0)

  const setupProgressListener = useCallback(() => {
    audioRef.current.currentTime = 0

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime))
    })
  }, [])

  const handleSeek = useCallback((amount: number) => {
    audioRef.current.currentTime = amount
    setProgress(amount)
  }, [])

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    isShuffling,
    toggleShuffle,
    togglePlay,
    playNext,
    playPrev,
    hasPrevious,
    isLooping,
    toggleLoop,
    hasNext,
    setPlayingState,
    clearPlayerState
  } = usePlayer()

  const handleEpisodeEnded = useCallback(() => {
    if (hasNext) {
      playNext()
    } else {
      clearPlayerState()
    }
  }, [clearPlayerState, hasNext, playNext])

  useEffect(() => {
    if (!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  const episode = episodeList[currentEpisodeIndex]

  return (
    <S.Container>
      <S.Header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </S.Header>

      {episode ? (
        <S.CurrentEpisode>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            alt={episode.title}
            objectFit="cover"
          />

          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </S.CurrentEpisode>
      ) : (
        <S.EmptyPlayer>
          <strong>Selecione um podcast para ouvir.</strong>
        </S.EmptyPlayer>
      )}

      <S.Footer className={!episode ? 'empty' : 'playing'}>
        <S.Progress className="progress">
          <span>{convertDurationToTimeString(progress)}</span>

          <div className="slider">
            {episode ? (
              <Slider
                max={episode?.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <div className="emptySlider" />
            )}
          </div>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </S.Progress>

        {episode && (
          <audio
            ref={audioRef}
            src={episode.url}
            autoPlay
            onEnded={handleEpisodeEnded}
            loop={isLooping}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={setupProgressListener}
          />
        )}

        <S.Buttons>
          <button
            type="button"
            disabled={!episode || episodeList.length === 1}
            className={isShuffling ? 'isActive' : ''}
            onClick={toggleShuffle}
          >
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>

          <button
            type="button"
            onClick={playPrev}
            disabled={!episode || !hasPrevious}
          >
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>

          <button
            type="button"
            className="playButton"
            onClick={togglePlay}
            disabled={!episode}
          >
            {isPlaying ? (
              <img src="/pause.svg" alt="Pausar" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </button>

          <button
            type="button"
            onClick={playNext}
            disabled={!episode || !hasNext}
          >
            <img src="/play-next.svg" alt="Tocar próxima" />
          </button>

          <button
            type="button"
            className={isLooping ? 'isActive' : ''}
            onClick={toggleLoop}
            disabled={!episode}
          >
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </S.Buttons>
      </S.Footer>
    </S.Container>
  )
}
