import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  main {
    flex: 1;
  }
`
