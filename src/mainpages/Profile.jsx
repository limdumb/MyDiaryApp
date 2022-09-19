import styled from 'styled-components';
import React from 'react';
import { StarRating } from '../Components/RatingStar.jsx'

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
    display: flex;
    font-size: 14px;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 13px;
`;

const InputTitle = styled.input.attrs({ placeholder: "오늘 나의 하루일기"})`
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom-width: 3px;
    border-bottom-color: black;
    width: 490px;
    font-size: 14px;
    font-weight: bold;
    justify-content: center;
`;

const Diarycontent = styled.textarea`
    display: flex;
    position: absolute;
    margin-top: 10px;
    font-size: 10px;
    width: 491px;
    line-height: 50px;
    border: 1px solid;
`;

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
<AppHeader>
  <a href='/' style={{ textDecoration: 'none' }}>
        <MyButton>뒤로가기</MyButton>
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
        <StarRating></StarRating>
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