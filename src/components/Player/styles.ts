import styled from 'styled-components'

export const Container = styled.div`
  width: 26.5rem;

  padding: 3rem;
  background: var(--purple-500);
  color: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100vw;
    height: 12rem;
    flex-direction: row;
    padding: 1.5rem;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const CurrentEpisode = styled.div`
  text-align: center;

  img {
    border-radius: 1.5rem;
  }

  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25rem Lexend, sans-serif;
    line-height: 1.75rem;
  }

  span {
    display: block;
    margin: 1rem 0;
    opacity: 0.6;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-right: 2rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    strong {
      line-height: 1rem;
      font: 600 1rem Lexend, sans-serif;
    }

    span {
      display: none;
    }
  }
`

export const EmptyPlayer = styled.div`
  width: 100%;
  height: 20rem;
  border: 1.5px dashed var(--purple-300);

  border-radius: 1.5rem;
  background: linear-gradient(
    143.8deg,
    rgba(145, 100, 250, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  padding: 4rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 4rem;
    width: 14rem;
  }
`

export const Footer = styled.footer`
  align-self: stretch;

  &.empty .progress {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }

  .slider {
    flex: 1;
    .emptySlider {
      width: 100%;
      height: 4px;
      background: var(--purple-300);
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button {
    background: transparent;
    border: 0;
    font-size: 0;
    cursor: pointer;
    transition: filter 0.3s;

    &:hover:not(:disabled) {
      filter: brightness(0.7);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &.isActive {
      filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
    }

    &.isActive:hover {
      filter: brightness(0.6) invert(0.35) sepia(1) saturate(3)
        hue-rotate(100deg);
    }

    &.playButton {
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      background: var(--purple-400);

      &:hover:not(:disabled) {
        filter: brightness(0.95);
      }
    }
  }
`
