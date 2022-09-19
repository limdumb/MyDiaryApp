import SmileImage from './Happy.png'
import React, { useState } from 'react';
import SosoImage from './Soso.png'
import BadImage from './Bad.png'


export function MyEmotion() {
  const [emotion, setEmotion] = useState(false);
  const [sosoImage, setSosoImage] = useState(false);
  const [smileImage, setSmileImage] = useState(true);
  const [badImage, setBadImage] = useState(false);


  const onOffToggle = (() => {
    setEmotion(!emotion)
  })


  const renderEmotionImage = () => {
    if (emotion === true) {
      return (
        <div>
          <img src={SmileImage} width={40} height={40} onClick={() => { setSmileImage(true); setSosoImage(false); setBadImage(false); setEmotion(false); }}/>
          <img src={SosoImage} width={40} height={40} onClick={() => { setSmileImage(false); setSosoImage(true); setBadImage(false); setEmotion(false); }}/>
          <img src={BadImage} width={40} height={40} onClick={() => { setSmileImage(false); setSosoImage(false); setBadImage(true); setEmotion(false); }}/>
        </div>
      )
    } else {
      return null
    }
  }


  return (
    <div>
        { sosoImage && <img src={SosoImage} width={40} height={40} onClick={onOffToggle}/>}
        { smileImage && <img src={SmileImage} width={40} height={40} onClick={onOffToggle}/>}
        { badImage && <img src={BadImage} width={40} height={40} onClick={onOffToggle}/>}
        
        {renderEmotionImage()}        
    </div>
  )
}