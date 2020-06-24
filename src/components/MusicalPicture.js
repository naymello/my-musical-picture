import React, { useState, useEffect } from 'react'

import StyledPicture, { HighlightSection, OthersSection, LogoHighlight } from '../styles/StyledPicture'
import HighlightText from '../styles/HighlightText'

const MusicalPicture = () => {
  const [userTopMusic, setUserTopMusic] = useState(null)
  const [userFirstName, setUserFirstName] = useState(null)
  
  const type = new URLSearchParams(window.location.search).get('type')
  const accessToken = new URLSearchParams(window.location.search).get('access_token')
  const timeRange = new URLSearchParams(window.location.search).get('time_range')
  const theme = new URLSearchParams(window.location.search).get('theme')
  const captions = new URLSearchParams(window.location.search).get('captions')
  
  const backendUrl = 'http://localhost:8888'

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

  const [firstImageUrl, imageUrls] = getImageUrls(type)
  const { title, firstResultName, addInfo1, addInfo2 } = getText(type, timeRange)
  
  return (
    <StyledPicture theme={theme}>
      <h3><HighlightText>{title}</HighlightText></h3>

      <HighlightSection>
        <img src={firstImageUrl} />
        <span><HighlightText>{firstResultName}</HighlightText></span>
        <span>{addInfo1}</span>
        <span>{addInfo2}</span>
      </HighlightSection>

      <h4>Other {type}</h4>
      <OthersSection>
        {imageUrls.map(imgUrl => (
          <img src={imgUrl} />
        ))}
      </OthersSection>

      <h5>My Musical <LogoHighlight>Picture</LogoHighlight></h5>
    </StyledPicture>
  )
}

export default MusicalPicture
