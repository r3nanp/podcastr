import { useContext } from 'react'
import { PlayerContextData, PlayerContext } from '@contexts/PlayerContext'

export function usePlayer(): PlayerContextData {
  const context = useContext(PlayerContext)

  return context
}
