import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  main {
    flex: 1;
  }
`
