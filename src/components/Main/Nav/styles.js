import styled from "styled-components";
const Font = "'Noto Sans KR', sans-serif";

export const Container = styled.div`
  width: 220px;
  height: 852.5px;
  background:#024B8D;
  padding: 42px 30px;
  overflow: none;
`
export const AccountBtns = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  gap:30px;
  height: 200px;
  border-bottom: 2px solid white;
`
export const MyProfileBox = styled.div`
  height: 200px;
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  color: white;
  font-weight: 600;
  gap: 10px;
  >img{
    width: 100px;
  }
  >span{
    font-size: 15px;
    font-weight: 500;
  }
`
export const AccountBtn = styled.button`
  width: 215px;
  height: 37px;
  border: 2px solid white;
  border-radius: 5px;
  font-family: ${Font};
  background: #024B8D;
  font-size: 15px;
  color: white;
  font-weight: 500;
`
export const TopicBtns = styled.div`
  margin-top: 38px;
  height: 507px;
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const TopicBtn =styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 20px;
  >span{
    margin-right: 100px;
  }
`
export const SettingBtns = styled.div`
  >img{
    width: 24px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 30px;
`