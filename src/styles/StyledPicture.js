import styled from 'styled-components'

const StyledPicture = styled.div`
  background-color: #F4F4F4;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 375px;
  height: 667px;
  padding: 5px 20px;

  h3 {
    font-size: 18px;
  }

  h4 {
    margin-bottom: 10px;
  }

  span {
    font-weight: 700;
  }
`

export const HighlightSection = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1.3fr;
  column-gap: 15px;
  grid-template-areas:
  "image name"
  "image addinfo1"
  "image addinfo2"
  "image ."
  "image .";

  img {
    grid-area: image;
    width: 100%;
  }
`

export const OthersSection = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 111.6px);
  overflow: hidden;

  img {
    width: 100%;
  }
`

export const LogoHighlight = styled.span`
  background-color: #EEFF00;
  padding: 0 20px 0 2.5px;
`

export default StyledPicture
