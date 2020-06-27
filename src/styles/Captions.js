import styled from 'styled-components'

const Captions = styled.div`
  background-color: ${props => props.theme.highlight};
  color: ${props => props.theme.color};
  padding: 0 5px;
  position: relative;
  top: 85%;
  height: 15%;
  width: 100%;
  z-index: 1;
  font-size: 10px;
  font-weight: 600;
  overflow: hidden;
`

export default Captions
