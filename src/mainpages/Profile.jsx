import styled from 'styled-components';
import React from 'react';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import { MyEmotion } from '../Components/MyEmotion';


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
    width: 491px;
    line-height: 50px;
    justify-content: center;
    border: 1px solid;
`

const EmotionSelect = styled.select`
    font-size : 14px;
    font-weight: bold;
    color: #000000;
    border: 1px solid #ffffff;
    `
    

export default function Profile() {
const [time, setTime] = React.useState();

React.useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date().toLocaleString());
  }, 1000);

  return () => {
    clearInterval(timer);
  };

}, []);

return <div>
  <link rel="icon" href="%PUBLIC_URL%/public/smily.jpg" />
<AppHeader>
  <a type='button' href='/'>
        <MyButton> 뒤로가기 </MyButton>
  </a>
  <span style={{color: 'black' ,fontWeight:'bold'}}>{time}</span>
  <MyButton onClick={console.log}> 저장하기 </MyButton>
      </AppHeader>
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <SelectTitle> 제목: </SelectTitle> <InputTitle></InputTitle>
          {/* <EmotionSelect>
           <option key="VaryGood" value="VaryGood">매우좋음</option>
           <option key="Good" value="Good">좋음</option>
            <option key="Soso" value="Soso">보통</option>
            <option key="LittleBad" value="LittleBad">조금나쁨</option>
            <option key="Bad" value="Bad">나쁨</option>
          </EmotionSelect> */}
        <MyEmotion></MyEmotion>
        </div>
          <div style={{
                display: 'flex',
                justifyContent: 'center',
          }}>
            <Diarycontent></Diarycontent>
          </div>
      </div>
    </div>;
}