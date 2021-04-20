import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--gray-50);
  }

  body, textarea, input, button {
    font: 500 1rem Inter, sans-serif;
    color: var(--gray-500);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: var(--gray-800);
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :root {
    ${props => {
      const theme = props.theme
      let append = ''
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`
      })
      return append
    }}
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  @media(max-width: 700px) {
    html {
      font-size: 75%;
    }
  }

  @media(max-width: 590px) {
    html {
      font-size: 62.25%;
    }
  }

`
