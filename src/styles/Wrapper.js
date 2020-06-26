import styled, { css } from 'styled-components'

import Navbar from './Navbar'
import StyledFooter from './StyledFooter'

/* This styled component is a wrapper used for centering the 
   elements on the page when the viewport has a large width */

const Wrapper = styled.div`
  width: calc(100% - 30px);
  max-width: ${props => props.maxWidth || '1440px'};
  margin: 100px auto 0;

  ${Navbar} & {
    display: flex;
    margin: 20px auto 0;
  }

  ${StyledFooter} & {
    display: flex;
    margin: 0 auto;
    padding: 0 20px;
  }

  ${props => props.picture && css`
    width: 375px;
    height: 747px;
  `}
`

export default Wrapper
