import { ReactElement } from 'react'

import * as S from './styles'

export function Player(): ReactElement {
  return (
    <S.Container>
      <S.Header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </S.Header>

      <S.EmptyPlayer>
        <strong>Selecione um podcast para ouvir.</strong>
      </S.EmptyPlayer>

      <S.Footer className="empty">
        <S.Progress>
          <span>00:00</span>

          <div className="slider">
            <div className="emptySlider" />
          </div>
          <span>00:00</span>
        </S.Progress>

        <S.Buttons>
          <button type="button">
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>

          <button type="button">
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>

          <button type="button" className="playButton">
            <img src="/play.svg" alt="Tocar" />
          </button>

          <button type="button">
            <img src="/play-next.svg" alt="Tocar próxima" />
          </button>

          <button type="button">
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </S.Buttons>
      </S.Footer>
    </S.Container>
  )
}
