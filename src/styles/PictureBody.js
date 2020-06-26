import { createGlobalStyle } from 'styled-components'

const PictureBody = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bodyBackgroundColor};
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default PictureBody
