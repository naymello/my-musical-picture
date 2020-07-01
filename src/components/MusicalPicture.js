import React, { useState, useEffect } from 'react'

import StyledPicture, { HighlightSection, OthersSection, LogoHighlight } from '../styles/StyledPicture'
import HighlightText from '../styles/HighlightText'
import Captions from '../styles/Captions'

const MusicalPicture = (props) => {
  const [userTopMusic, setUserTopMusic] = useState(null)
  const [userFirstName, setUserFirstName] = useState(null)

  const [type, setType] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  const [timeRange, setTimeRange] = useState(null)
  const [captionsIsSelected, setCaptionsIsSelected] = useState(null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setType(new URLSearchParams(window.location.search).get('type'))
      setAccessToken(new URLSearchParams(window.location.search).get('access_token'))
      setTimeRange(new URLSearchParams(window.location.search).get('time_range'))
      setCaptionsIsSelected(new URLSearchParams(window.location.search).get('captions'))
    }

    const backendUrl = 'https://my-musical-picture-server.herokuapp.com'

    const fetchSpotifyData = async () => {
      const firstNameRes = await fetch(`${backendUrl}/name?access_token=${accessToken}`)
      const firstNameJson = await firstNameRes.json()
      setUserFirstName(firstNameJson)

      const topMusicRes = await fetch(`${backendUrl}/topmusic?access_token=${accessToken}&type=${type}&time_range=${timeRange}`)
      const topMusicJson = await topMusicRes.json()
      setUserTopMusic(topMusicJson)
    }

    fetchSpotifyData()
  }, [accessToken, timeRange, type])

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
    <StyledPicture ref={props.pictureRef} theme={props.theme}>
      <h3><HighlightText theme={props.theme}>{title}</HighlightText></h3>

      <HighlightSection>
        <img src={firstImageUrl} alt="First result" />
        <span><HighlightText theme={props.theme}>{firstResultName}</HighlightText></span>
        <span>{addInfo1}</span>
        <span>{addInfo2}</span>
      </HighlightSection>

      <h4>Other {type}</h4>
      <OthersSection captions={captions}>
        {imageUrls.map((imgUrl, index) => (
          <div key={`container${index}`}>
            {captionsIsSelected === 'true' &&
              <Captions
                theme={props.theme}
                key={`caption${index}`}
              >
                {captions[index]}
              </Captions>
            }
            <img
              src={imgUrl}
              key={`img${index}`}
              alt=""
            />
          </div>
        ))}
      </OthersSection>

      {/* If the title gets two lines then there's no space on the picture for the logo to be shown */}
      {title && title.length <= 33 && <h5>My Musical <LogoHighlight theme={props.theme}>Picture</LogoHighlight></h5>}
    </StyledPicture>
  )
}

export default MusicalPicture
