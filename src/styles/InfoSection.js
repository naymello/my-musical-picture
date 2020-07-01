import styled from 'styled-components'

const TextSection = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  h2, p {
    display: none;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    margin-left: 50px;

    h2, p {
      display: block;
    }
  }
`

export default TextSection