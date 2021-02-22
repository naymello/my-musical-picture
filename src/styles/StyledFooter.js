import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  padding: 20px 0;
  background-color: #F5F5F5;
  margin-top: 40px;

  @media (min-width: 1024px) and (min-height: 800px) {
    position: absolute;
    bottom: 0;
  }
`

export default StyledFooter
