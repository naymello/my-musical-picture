import styled from 'styled-components'

const HighlightText = styled.span`
  background-color: ${props => props.theme.highlight || '#EEFF00'};
  padding: 0 7.5px;
`

export default HighlightText
