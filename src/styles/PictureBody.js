import { createGlobalStyle } from 'styled-components'

const PictureBody = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bodyBackgroundColor};
    margin: 0;
    padding: 0;

    @media (min-width: 375px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  }
`

export default PictureBody
