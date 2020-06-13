import styled from 'styled-components'

import Navbar from './Navbar'
import StyledFooter from './StyledFooter'

const Wrapper = styled.div`
  width: calc(100% - 20px);
  max-width: ${props => props.maxWidth || '1440px'};
  margin: 80px auto 0;

  ${Navbar} & {
    display: flex;
    margin: 20px auto 0;
  }

  ${StyledFooter} & {
    display: flex;
    margin: 0 auto;
    padding: 0 20px;
  }
`

export default Wrapper
