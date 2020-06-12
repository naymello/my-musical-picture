import styled from 'styled-components'

import Navbar from './Navbar'

const Wrapper = styled.div`
  width: calc(100% - 20px);
  max-width: ${props => props.maxWidth || '1440px'};
  margin: 80px auto 0;

  ${Navbar} & {
    display: flex;
    margin: 20px auto 0;
  }
`

export default Wrapper
