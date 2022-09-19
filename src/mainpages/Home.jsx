import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AppHeader = styled.header`
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: calc(10px + 2vmin);
    color: white;
    border-bottom: 1px solid rgba(205, 205, 205, 0.3);
`;

const StartButten = styled.button `
  background-color: gray
  height 50px;
  font-size: 11px;
  font-weight: bold;
  padding: 11px;
  justify-content: flex-end;
  min-height: 50px;
  cursor: pointer;
`
const HomeContainer = styled.div `
  display: flex;
  justify-content: center;
`

export default function Home(){
  const [ diaries, setDiaries ] = useState([])
// 비동기처리 ( 홈이라는 컨포넌트가 마운트(꼽혔을때) 되었을때, 언마운트(뽑혔을때) 될때 실행 )
  useEffect(() => {
// setDiaries가 diaries에 값을 할당하기 위해서
    async function getDiaries() {
      const res = await axios.get('http://localhost:3004/diaries')
      setDiaries(res.data)
    }

    getDiaries();
  }, [false])

  return(
  <div>
    <AppHeader>
    <a type="Butten" href="/profile">
      <StartButten>작성하기</StartButten>
    </a>
    </AppHeader>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
    {
      diaries.map(item => {
        return (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            
          }}>
            {/* react의 핵심개념중 버츄얼 돔 html페이지 받으면 브라우저에 띄우기위해 돔틀구성
             */}
          <h3 key={item.createdAt}> {item.title} </h3>
          <p key={item.title}> {item.createdAt} </p>
          </div>
        )
      })
    }
    </div>
  </div>
  )
}