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
  episodeList: Episode[]
  currentEpisodeIndex: number
  play: (episode: Episode) => void
  setPlayingState: (state: boolean) => void
  togglePlay: () => void
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
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

  function play(episode: Episode): void {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  function togglePlay(): void {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean): void {
    setIsPlaying(state)
  }

  return (
    <PlayerContext.Provider
      value={{
        play,
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        togglePlay,
        setPlayingState
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
