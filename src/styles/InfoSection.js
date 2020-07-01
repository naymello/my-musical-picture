import styled from 'styled-components'

import Button from './Button'

const InfoSection = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 50px;

  /* Text information */
  div {
    margin-top: 30px;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    flex-direction: column;
    margin-left: 50px;

    div {
      margin-top: 0;
    }

    ${Button} {
      margin-top: auto;
    }
  }
`

export default InfoSection
