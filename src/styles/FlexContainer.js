import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 1024px) {
    margin-top: 50px;
    flex-direction: row;
  }
`

export default FlexContainer
