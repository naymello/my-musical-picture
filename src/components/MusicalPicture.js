import React, { useState, useEffect } from 'react'

import StyledPicture, { HighlightSection, OthersSection, LogoHighlight } from '../styles/StyledPicture'
import HighlightText from '../styles/HighlightText'
import Captions from '../styles/Captions'

const MusicalPicture = () => {
  const [userTopMusic, setUserTopMusic] = useState(null)
  const [userFirstName, setUserFirstName] = useState(null)

  let type, accessToken, timeRange, theme, captionsIsSelected

  if (typeof window !== `undefined`) {
    type = new URLSearchParams(window.location.search).get('type')
    accessToken = new URLSearchParams(window.location.search).get('access_token')
    timeRange = new URLSearchParams(window.location.search).get('time_range')
    theme = new URLSearchParams(window.location.search).get('theme')
    captionsIsSelected = new URLSearchParams(window.location.search).get('captions')
  }
  
  const backendUrl = 'https://my-musical-picture-server.herokuapp.com'

  useEffect(() => {
    const fetchSpotifyData = async () => {
      const firstNameRes = await fetch(`${backendUrl}/name?access_token=${accessToken}`)
      const firstNameJson = await firstNameRes.json()
      setUserFirstName(firstNameJson)
  
      const topMusicRes = await fetch(`${backendUrl}/topmusic?access_token=${accessToken}&type=${type}&time_range=${timeRange}`)
      const topMusicJson = await topMusicRes.json()
      setUserTopMusic(topMusicJson)
    }

    fetchSpotifyData()
  }, [])

  const getImageUrls = (type) => {
    if (!userTopMusic) return [[], []]
    
    const imageUrls = type === 'tracks'
      ? userTopMusic.map(track => track.album.images[1].url)
      : userTopMusic.map(current => current.images[1].url)
    
    const firstImageUrl = imageUrls.shift()
    
    return [firstImageUrl, imageUrls]
  }

  const getText = (type, timeRange) => {
    if (!userTopMusic || !userFirstName) return {}

    let title, addInfo1, addInfo2
    
    const singularType = type.slice(0, -1) //Example: 'artists' becomes 'artist'
    
    if (timeRange === 'short') {
      title = `${userFirstName}'s ${singularType} of the month` 
    }
    else if (timeRange === 'medium') {
      title = `${userFirstName}'s ${singularType} of the semester` 
    }
    else if (timeRange === 'long') {
      title = `${userFirstName}'s favorite ${singularType}`
    }
    
    const firstResult = userTopMusic[0]
    const firstResultName = firstResult.name.substring(0, 40).match(/^.*?(?= -)/)
      || firstResult.name.substring(0, 40)
    //RegEx to remove '- Remastered in X year' kind of complement

    if (type === 'tracks') {
      addInfo1 = firstResult.album.name
      addInfo2 = firstResult.artists[0].name
    }
    else if (type === 'albums') {
      addInfo1 = firstResult.artists[0].name
      addInfo2 = firstResult.release_date.substring(0, 4) //Get only the year
    }
    else if (type === 'artists') {
      addInfo1 = firstResult.genres[0]
      addInfo2 = firstResult.genres[1]
    }

    const textInformation = {
      title,
      firstResultName,
      addInfo1,
      addInfo2,
    }

    return textInformation
  }

  const getTheme = (theme) => {
  if (!userTopMusic) return {}

    const lightTheme = {
      backgroundColor: '#FCFCFC',
      color: '#000000',
      highlight: '#EEFF00 '
    }
    
    const darkTheme = {
      backgroundColor: '#000000',
      color: '#FFFFFF',
      highlight: '#DC1F1F'
    }

    const coloredTheme = {
      backgroundColor: '#2929B1',
      color: '#F9FF3E',
      highlight: '#FF10A0'
    }

    if (theme === 'light') return lightTheme
    if (theme === 'dark') return darkTheme
    if (theme === 'colored') return coloredTheme
  }

  const getCaptions = () => {
    if (!userTopMusic || captionsIsSelected === 'false') return []

    const captions = userTopMusic.map(current => current.name.match(/^.*?(?= -)/) || current.name)
    captions.shift()

    return captions
  }
  
  const [firstImageUrl, imageUrls] = getImageUrls(type)
  const { title, firstResultName, addInfo1, addInfo2 } = getText(type, timeRange)
  const captions = getCaptions()
  
  return (
    <StyledPicture theme={getTheme(theme)}>
      <h3><HighlightText theme={getTheme(theme)}>{title}</HighlightText></h3>

      <HighlightSection>
        <img src={firstImageUrl} />
        <span><HighlightText theme={getTheme(theme)}>{firstResultName}</HighlightText></span>
        <span>{addInfo1}</span>
        <span>{addInfo2}</span>
      </HighlightSection>

      <h4>Other {type}</h4>
      <OthersSection captions={captions}>
        {imageUrls.map((imgUrl, index) => (
          <div>
            {captionsIsSelected === 'true' &&
            <Captions theme={getTheme(theme)}>{captions[index]}</Captions>}
            <img src={imgUrl} />
          </div>
        ))}
      </OthersSection>

      {/* If the title gets two lines then there's no space on the picture for the logo to be shown */}
      {title && title.length <= 33 && <h5>My Musical <LogoHighlight theme={getTheme(theme)}>Picture</LogoHighlight></h5>}
    </StyledPicture>
  )
}

export default MusicalPicture
