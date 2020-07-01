import styled from 'styled-components'

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  background-color: #FFF;
  height: ${props => props.isActive ? '150px' : '60px'};
  transition: .2s;
  transition-timing-function: ease-in-out;

  /* Active navbar */
  @media (min-width: 768px) {
    height: 60px;
  }

  /* Logo */
  img:first-child {
    margin-top: -7.5px;
    margin-right: auto;
  }

  /* Hamburger menu */
  img:last-child {
    margin-top: -7.5px;
    margin-left: auto;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style-type: none;
    height: 60px;
    opacity: ${props => props.isActive ? '1' : '0'};
    pointer-events: ${props => props.isActive ? 'all' : 'none'};
    animation: ${props => props.isActive ? 'fadeIn 1s' : 'none'};
    position: absolute;
    top: 70px;
    left: 20px;
    padding: 0;

    @media (min-width: 768px) {
      height: 2rem;
      flex-direction: row;
      margin-left: auto;
      width: 200px;
      background-color: #EEFF00;
      box-sizing: content-box;
      padding: 10px 30px;
      position: static;
      pointer-events: all;
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export default Navbar
