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
`

export default GlobalStyle