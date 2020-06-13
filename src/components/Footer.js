import React from 'react'

import Logo from './PersonalLogo'

import { H3 } from '../styles/Headers'
import StyledFooter from '../styles/StyledFooter'
import Wrapper from '../styles/Wrapper'

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Logo fill="#000"/>
        <H3 style={{color: '#000', margin: '0 20px'}}>Developed by Nay Mello</H3>
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer
