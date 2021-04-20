import { ReactElement } from 'react'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { Container } from './styles'

export function Header(): ReactElement {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })

  return (
    <Container>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre.</p>

      <span>{currentDate}</span>
    </Container>
  )
}
