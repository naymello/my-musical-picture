import styled from 'styled-components'

const ImageSection = styled.section`
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  grid-template-rows: 1fr 1fr 10fr 1fr 1fr;
  display: grid;
  height: 100%;
  
  img {
    width: 100%;
  }

  /* Colored theme */
  img:nth-child(1) {
    grid-column: 1/3;
    grid-row: 3/6;
  }

  /* Light theme */
  img:nth-child(2) {
    grid-column: 2/5;
    grid-row: 2/5;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, .1);
  }
  
  /* Dark theme */
  img:nth-child(3) {
    grid-column: 4/6;
    grid-row: 1/4;
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    column-gap: 20px;

    /* Colored theme */
    img:nth-child(1) {
      grid-column: 1/2;
      grid-row: 1;
    }
    
    /* Light theme */
    img:nth-child(2) {
      grid-column: 2/3;
      grid-row: 1;
    }
    
    /* Dark theme */
    img:nth-child(3) {
      grid-column: 3/4;
      grid-row: 1;
    }
  }
`

export default ImageSection
