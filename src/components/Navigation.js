import React, { useState } from 'react'

import Navbar from '../styles/Navbar'
import Wrapper from '../styles/Wrapper'
import StyledLink from '../styles/StyledLink'

import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'

const Navigation = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleNav = () => {
    setIsActive(prevIsActive => !prevIsActive)
  }

  const disableNav = () => {
    setIsActive(false)
  }

  return (
    <Navbar isActive={isActive}>
      <Wrapper>
        <img src={logo} alt="Logo" />
        <ul>
          <li><StyledLink href="https://github.com/naymello/my-musical-picture-client" onClick={disableNav}>GitHub</StyledLink></li>
          <li><StyledLink href="mailto:naymellodev@gmail.com?subject=BugReport" onClick={disableNav}>Report a bug</StyledLink></li>
        </ul>
        <img
          src={hamburger}
          onClick={toggleNav}
          alt="Hamburger menu"
        />
      </Wrapper>
    </Navbar>
  )
}

export default Navigation
