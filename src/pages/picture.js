import React, { useRef } from 'react'

import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver'

import Seo from '../components/Seo'
import MusicalPicture from '../components/MusicalPicture'

import Button from '../styles/Button'
import Wrapper from '../styles/Wrapper'
import PictureBody from '../styles/PictureBody'

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
      highlight: '#EEFF00',
      bodyBackgroundColor: '#F0F0F0'
    }
    
    const darkTheme = {
      backgroundColor: '#000000',
      color: '#FFFFFF',
      highlight: '#DC1F1F',
      bodyBackgroundColor: '#0A0A0A'
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

  return (
    <>
      <Seo title="Picture" />
      <PictureBody theme={getTheme(theme)}/>
      <Wrapper picture>
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
      </Wrapper>
    </>
  )
}

export default ImagePage
