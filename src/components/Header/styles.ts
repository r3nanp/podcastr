import styled, { css } from 'styled-components'
import { BiMoon, BiSun } from 'react-icons/bi'

const iconsCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  fill: var(--purple-500);
  margin: 0 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
`

export const LightIcon = styled(BiMoon)`
  ${iconsCss}
`

export const DarkIcon = styled(BiSun)`
  ${iconsCss}
`

export const Container = styled.header`
  background: var(--white);
  height: 6.5rem;

  display: flex;
  align-items: center;
  padding: 2rem 4rem;

  border-bottom: 1px solid var(--gray-100);

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid var(--gray-100);
  }

  span {
    margin-left: auto;
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    img {
      width: 10rem;
      height: 10rem;
    }

    p {
      padding: 1rem;
    }
  }
`
