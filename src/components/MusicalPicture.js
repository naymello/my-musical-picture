import React, { useState, useEffect } from 'react'

import StyledPicture from '../styles/StyledPicture'

const type = new URLSearchParams(window.location.search).get('type')
const accessToken = new URLSearchParams(window.location.search).get('access_token')
const timeRange = new URLSearchParams(window.location.search).get('time_range')
const theme = new URLSearchParams(window.location.search).get('theme')
const captions = new URLSearchParams(window.location.search).get('captions')

const MusicalPicture = () => {
  const [userTopMusic, setUserTopMusic] = useState(null)
  const [userFirstName, setUserFirstName] = useState(null)

  useEffect(() => {
    const fetchSpotifyData = async () => {
      const firstNameRes = await fetch(`http://localhost:8888/name?access_token=${accessToken}`)
      const firstNameJson = await firstNameRes.json()
      setUserFirstName(firstNameJson)
  
      const topMusicRes = await fetch(`http://localhost:8888/topmusic?access_token=${accessToken}&type=${type}&time_range=${timeRange}`)
      const topMusicJson = await topMusicRes.json()
      setUserTopMusic(topMusicJson)
    }

    fetchSpotifyData()
  }, [])

  console.log(userTopMusic)

  const getImageUrls = (type) => {
    if (!userTopMusic) return [[], []]
    
    const imageUrls = type === 'tracks'
      ? userTopMusic.map(track => track.album.images[1].url)
      : userTopMusic.map(current => current.images[1].url)
    
    const firstImageUrl = imageUrls.shift()
    
    return [firstImageUrl, imageUrls]
  }

  const [firstImageUrl, imageUrls] = getImageUrls(type)
  
  return (
    <StyledPicture>
      <p>{userFirstName}</p>
      {imageUrls.map(imgUrl => <img src={imgUrl} />)}
    </StyledPicture>
  )
}

export default MusicalPicture
