import styled from 'styled-components'

const StyledLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #040404;
  text-decoration: none;
  cursor: pointer;
  
  :hover {
    transition: .3s;
    color: #111;
  }
`

export default StyledLink
