import React from 'react'

import Logo from './PersonalLogo'

import StyledFooter from '../styles/StyledFooter'
import Wrapper from '../styles/Wrapper'

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Logo fill="#000"/>
        <h3 style={{color: '#000', margin: '0 20px'}}>Developed by Nay Mello</h3>
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer
