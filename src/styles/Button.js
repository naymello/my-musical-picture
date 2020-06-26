import styled from 'styled-components'

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
`

export default Button