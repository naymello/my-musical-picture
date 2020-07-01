import styled from 'styled-components'

import StyledPicture from '../styles/StyledPicture'

const Button = styled.button`
  background-color: ${props => props.theme.highlight || '#EEFF00'};
  color: ${props => props.theme.color || '#000000'};
  width: 100%;
  height: 60px;
  margin-top: auto;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;

  ${StyledPicture} + & {
    font-size: 1.6rem;
    margin-top: 20px;
  }
`

export default Button
