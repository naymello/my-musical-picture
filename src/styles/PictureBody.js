import { createGlobalStyle } from 'styled-components'

const PictureBody = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bodyBackgroundColor};
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;

    @media (min-height: 668px) {
      align-items: center;
      height: 100vh;
    }
  }
`

export default PictureBody
