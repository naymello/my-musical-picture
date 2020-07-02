import styled from 'styled-components'

const StyledPicture = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
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
    height: 100%;
    object-fit: cover;

    /* Space to fit the captions if they're included */
    position: relative;
    bottom: ${props => props.captions.length > 0 ? '16.75px' : '0'};
  }
`

export const LogoHighlight = styled.span`
  background-color: ${props => props.theme.highlight};
  padding: 0 20px 0 2.5px;
`

export default StyledPicture
