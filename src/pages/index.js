import React from 'react'

import Seo from '../components/Seo'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import GlobalStyle from '../styles/GlobalStyle'
import Wrapper from '../styles/Wrapper'
import HighlightText from '../styles/HighlightText'
import FlexContainer from '../styles/FlexContainer'
import ImageSection from '../styles/ImageSection'
import InfoSection from '../styles/InfoSection'
import Button from '../styles/Button'

import coloredImg from '../assets/colored.webp'
import lightImg from '../assets/light.webp'
import darkImg from '../assets/dark.webp'

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <GlobalStyle />
    <Navigation />
    <Wrapper>
      <h1>The best way to show off your <HighlightText>great</HighlightText> musical taste.</h1>
      <FlexContainer>
        <ImageSection>
          <img src={coloredImg} alt="Colored theme" />
          <img src={lightImg} alt="Light theme" />
          <img src={darkImg} alt="Dark theme" />
        </ImageSection>
        <InfoSection>
          <div>
            <h2>Made for you to share.</h2>
            <p>My Musical Picture generates an image with your style and favourite music, perfectly sized for sharing in social network.</p>

            <h2>Albums and colors!</h2>
            <p>Exclusive on My Musical Picture, as in other web apps based on Spotify you only have artists and songs data avaliable.</p>

            <h2><HighlightText>Enjoy it!</HighlightText></h2>
          </div>
          <Button onClick={() => window.open('http://my-musical-picture-server.herokuapp.com/login')}>Log in with Spotify</Button>
        </InfoSection>
      </FlexContainer>
    </Wrapper>
    <Footer />
  </>
)

export default IndexPage
