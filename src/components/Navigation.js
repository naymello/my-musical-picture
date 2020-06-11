import React, { Component } from 'react'

import Navbar from '../styles/Navbar'
import Wrapper from '../styles/Wrapper'
import StyledLink from '../styles/StyledLink'

import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'

class Navigation extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isActive: false
    }
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  disableNav = () => {
    this.setState({
      isActive: false
    })
  }

  render() {
    return (
      <Navbar isActive={this.state.isActive}>
        <Wrapper>
          <img src={logo} alt="Logo"/>
          <ul>
            <li><StyledLink href="#" onClick={this.disableNav}>GitHub</StyledLink></li>
            <li><StyledLink href="#" onClick={this.disableNav}>Sobre</StyledLink></li>
          </ul>
          <img src={hamburger} onClick={this.toggleNav}/>
        </Wrapper>
      </Navbar>
    )
  }
}

export default Navigation