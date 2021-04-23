import { createContext, ReactElement, ReactNode, useState } from 'react'

interface Episode {
  title: string
  members: string
  thumbnail: string
  duration: number
  durationAsString: string
  url: string
}

export interface PlayerContextData {
  isPlaying: boolean
  isLooping: boolean
  isShuffling: boolean
  hasNext: boolean
  hasPrevious: boolean
  episodeList: Episode[]
  currentEpisodeIndex: number
  play: (episode: Episode) => void
  setPlayingState: (state: boolean) => void
  playList: (episodes: Episode[], index: number) => void
  clearPlayerState: () => void
  togglePlay: () => void
  toggleLoop: () => void
  toggleShuffle: () => void
  playNext: () => void
  playPrev: () => void
}

interface PlayerProviderProps {
  children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerProvider({
  children
}: PlayerProviderProps): ReactElement {
  const [episodeList, setEpisodeList] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

  function play(episode: Episode): void {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  function playList(episodes: Episode[], index: number): void {
    setEpisodeList(episodes)
    setCurrentEpisodeIndex(index)
    setIsPlaying(true)
  }

  function togglePlay(): void {
    setIsPlaying(!isPlaying)
  }

  function toggleLoop(): void {
    setIsLooping(!isLooping)
  }

  function toggleShuffle(): void {
    setIsShuffling(!isShuffling)
  }

  function setPlayingState(state: boolean): void {
    setIsPlaying(state)
  }

  function clearPlayerState(): void {
    setEpisodeList([])
    setCurrentEpisodeIndex(0)
  }

  const hasPrevious = currentEpisodeIndex > 0
  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length

  function playNext() {
    if (isShuffling) {
      const nextRandomEpisodeIndex = Math.floor(
        Math.random() * episodeList.length
      )

      setCurrentEpisodeIndex(nextRandomEpisodeIndex)
    } else if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }

  function playPrev() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1)
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        play,
        clearPlayerState,
        playNext,
        playPrev,
        isShuffling,
        toggleShuffle,
        toggleLoop,
        playList,
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        togglePlay,
        isLooping,
        hasNext,
        hasPrevious,
        setPlayingState
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
