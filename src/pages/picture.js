import React, { useEffect, useState, useRef } from 'react'

import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver'

import Seo from '../components/Seo'
import MusicalPicture from '../components/MusicalPicture'

import Button from '../styles/Button'
import Wrapper from '../styles/Wrapper'
import PictureBody from '../styles/PictureBody'

const ImagePage = () => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setTheme(new URLSearchParams(window.location.search).get('theme'))
    }
  }, [])

  const myPicture = useRef()

  const getTheme = (theme) => {
    if (!theme) return {}

    const lightTheme = {
      backgroundColor: '#FCFCFC',
      color: '#000000',
      highlight: '#EEFF00',
      bodyBackgroundColor: '#F0F0F0'
    }

    const darkTheme = {
      backgroundColor: '#000000',
      color: '#FFFFFF',
      highlight: '#DC1F1F',
      bodyBackgroundColor: '#0F0F0F'
    }

    const coloredTheme = {
      backgroundColor: '#2929B1',
      color: '#F9FF3E',
      highlight: '#FF10A0',
      bodyBackgroundColor: '#1E1E7B'
    }

    if (theme === 'light') return lightTheme
    if (theme === 'dark') return darkTheme
    if (theme === 'colored') return coloredTheme
  }

  const savePicture = async (node) => {
    try {
      const blob = await domtoimage.toBlob(node, {
        height: node.offsetHeight * 2,
        width: node.offsetWidth * 2,
        style: {
          transform: `scale(2) translate(${node.offsetWidth / 4}px, ${node.offsetHeight / 4}px)`
        }
      })
      FileSaver.saveAs(blob, 'mymusicalpicture.png')
    }
    catch (error) {
      console.log(error)
    }
  }

  const selectedTheme = getTheme(theme)

  return (
    <>
      <Seo title="Picture" />
      <PictureBody theme={selectedTheme} />
      <Wrapper picture>
        <MusicalPicture
          pictureRef={myPicture}
          theme={selectedTheme}
        />
        <Button
          onClick={() => savePicture(myPicture.current)}
          theme={selectedTheme}
        >
          Download picture
        </Button>
      </Wrapper>
    </>
  )
}

export default ImagePage
