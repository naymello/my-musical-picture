import React, { useRef } from 'react'

import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver'

import Seo from '../components/Seo'
import MusicalPicture from '../components/MusicalPicture'

import Button from '../styles/Button'

const ImagePage = () => {
  let theme

  if (typeof window !== `undefined`) {
    theme = new URLSearchParams(window.location.search).get('theme')
  }

  const myPicture = useRef()

  const getTheme = (theme) => {
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

  return (
    <>
      <Seo title="Picture" />
      <MusicalPicture
        pictureRef={myPicture}
        theme={getTheme(theme)}
      />
      <Button 
        onClick={() => savePicture(myPicture.current)}
        theme={getTheme(theme)}
      >
        Download picture
      </Button>
    </>
  )
}

export default ImagePage
