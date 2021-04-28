import { ReactElement } from 'react'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import { useTheme } from '@hooks/useTheme'

import { Container, LightIcon, DarkIcon } from './styles'

export function Header(): ReactElement {
  const { theme, switchTheme } = useTheme()

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })

  return (
    <Container>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre.</p>

      <span>{currentDate}</span>

      <button aria-hidden="false" type="button" onClick={switchTheme}>
        {theme === 'light' ? <LightIcon /> : <DarkIcon />}
      </button>
    </Container>
  )
}
