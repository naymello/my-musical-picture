import { css } from 'styled-components'

import PoppinsLight from '../fonts/Poppins/Poppins-Light.ttf'
import PoppinsRegular from '../fonts/Poppins/Poppins-Regular.ttf'
import PoppinsBold from '../fonts/Poppins/Poppins-Bold.ttf'

const FontFaces = css`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`

export default FontFaces