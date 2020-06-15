import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 0;
  }

  h1 {
    font-size: 2.7rem;

    @media (min-width: 768px) {
      font-size: 3.5rem;
    }

    @media (min-width: 1440px) {
      font-size: 4.5rem;
    }
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.6rem;
  }
`

export default GlobalStyle