import { createGlobalStyle } from 'styled-components'

const PictureBody = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bodyBackground};
    margin: 0;
    padding: 0;
  }
`

export default PictureBody
