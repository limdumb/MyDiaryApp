//Racting Star 구현하기

// 

//TODO : 
import styled from 'styled-components';
import React, { useState } from 'react';
import blackStar from './Star.png';
import yellowStar from './YellowStar.png';
import { useEffect } from 'react';
import { render } from '@testing-library/react';

// 1. 점수를 표현할 수 있는걸 만들어보기
// 1-1 . 점수를 담을수 있는 score의 점수 , 클릭할때 해당 숫자로 상태값이 변경 될 수 있게 설정
// 1-2 . score는 5이기 때문에 5개의 별 render
// 2 . 해당 score(지금은 검정별)만큼 노란별 render하기
// 2-1 . 노란별을 render할 score 값을 배열에 담을수있게 starItems 라는 빈 배열 선언
// 2-2 . 검정별을 클릭 했을때 설정된 값만큼 노란별을 render할 수 있게 값을 반복해서 그 결과값을 starItems에 넣기(push)
// 2-3 . 비교값이 score보다 작거나 같을때까지 비교값을 증감하는 반복문 선언
// 2-4 . 클릭했을때 바로 render 될 수 있도록 onclick 선언

// 3 . 검정별을 클릭했을때 클릭한 숫자만큼 노란별로 변경
// 3-1 . 검정별을 클릭 했을때 5에서 노란별의값을 뺀 만큼 랜더링 되게 설정
// 3-2 . 반복문으로 동일하게 starItems에 값을 넣어주면 될것같음


export function StarRating() {
  const [score , setScore] = useState(4)

  const starItems = []

  for(let i=1; i <= score; i++) {
    starItems.push(<img src={yellowStar} width={30} height={29} onClick={() => {setScore(i)}}/>)
  }

  for(let i=1; i <= 5-score; i++) {
    starItems.push(<img src={blackStar} width={30} height={29} onClick={() => {setScore(score+1)}}/>)
  }

  return (
    <div>
      {starItems}
    </div>
  )
};