import React, { useRef } from 'react'

import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver'

import Seo from '../components/Seo'
import MusicalPicture from '../components/MusicalPicture'

import Button from '../styles/Button'

const ImagePage = () => {
  const myPicture = useRef()

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
      <MusicalPicture pictureRef={myPicture}/>
      <Button onClick={() => savePicture(myPicture.current)}>
        Download picture
      </Button>
    </>
  )
}

export default ImagePage
