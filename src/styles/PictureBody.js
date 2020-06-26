import { createGlobalStyle } from 'styled-components'

const PictureBody = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bodyBackgroundColor};
    margin: 0;
    padding: 0;
  }
`

export default PictureBody
