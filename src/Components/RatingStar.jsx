//Racting Star 구현하기

// 

//TODO : 
import styled from 'styled-components';
import React, { useState } from 'react';
import blackStar from './Star.png';
import yellowStar from './YellowStar.png';
import { useEffect } from 'react';
import { render } from '@testing-library/react';

export function StarRating() {
  const [score , setScore] = useState(0)


  let images = []

  console.log(score);

  for(let i =1 ; i<= score; i++ ) {
    images.push(<img src={yellowStar} width={30} height={29} onClick={() => setScore(i)}/>)
  }
  
  for(let i = 1 ; i <= 5 - score; i++) {
    images.push(<img src={blackStar} width={30} height={29} onClick={() => setScore(score + i)}/>)
  }

  return(
    <div>
      {images}
    </div>
  )
};