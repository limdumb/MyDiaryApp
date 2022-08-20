import styled from 'styled-components';
import React from 'react';

const MyButton = styled.button`
  background-color: gray
  height 50px;
  font-size: 11px;
  font-weight: bold;
  padding: 11px;
  min-height: 50px;
  cursor: pointer;
  `;

const AppHeader = styled.header`
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: white;
    border-bottom: 1px solid rgba(205, 205, 205, 0.3);
`;

const SelectTitle = styled.label `
    font-size: 14px;
    font-weight: bold;
`;

const InputTitle = styled.input.attrs({ placeholder: "오늘 나의 하루일기"})`
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom-width: 3px;
    border-bottom-color: black;
    width: 459px;
    font-size: 14px;
    font-weight: bold;
    justify-content: center;
`;

const Diarycontent = styled.textarea`
    margin-left: 30px;
    position: absolute;
    padding: 30px 10px;
    font-size: 10px;
    width: 400px;
    line-height: 20px;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.5);
`
const EmotionSelect = styled.select`
    font-size : 14px;
    font-weight: bold;
`


export default function Profile() {
const now = new Date().toLocaleString()
return <div>
<AppHeader>
  <a type='button' href='/'>
        <MyButton> 뒤로가기 </MyButton>
  </a>
  <span>{now}</span>
  <MyButton onClick={console.log}> 저장하기 </MyButton>
      </AppHeader>
      <div>
        <p style={{
          display: 'flex',
          'justify-content': 'center',
        }}>
        <SelectTitle> 제목: </SelectTitle> <InputTitle></InputTitle>
          <EmotionSelect>
            <option key="Good" value="Good">좋음</option>
            <option key="Soso" value="Soso">보통</option>
            <option key="Bad" value="Bad">나쁨</option>
          </EmotionSelect>
        </p>
          <div style={{
                display: 'flex',
                'justify-content': 'center',
          }}>
            <Diarycontent></Diarycontent>
          </div>
      </div>
    </div>;
}