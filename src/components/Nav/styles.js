import styled from "styled-components";
const Font = "'Noto Sans KR', sans-serif";

export const Container = styled.div`
  width: 150px;
  min-height: calc(100vh - 50px);
  background:#024B8D;
  padding: 25px 30px;
  overflow: none;
  @media screen and (max-width: 1000px) {
   display: none;
  }
`
export const AccountBtns = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  gap:30px;
  height: 170px;
  border-bottom: 2px solid white;
`
export const MyProfileBox = styled.div`
  margin-top: 20px;
  height: 170px;
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  color: white;
  font-weight: 600;
  >img{
    width: 100px;
  }
  >span{
    font-size: 15px;
    font-weight: 500;
  }
`
export const AccountBtn = styled.button`
  width: 150px;
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
  width: inherit;
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const TopicBtn = styled.button`
  width: inherit;
  color: white;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  background: none;
  border: none;
  font-size: 15px;
  >div{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  >div >img{
    width: 20px;
  }
`
export const MajorBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 10px;
`
export const MajorBtn = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: flex-start;
  color: white;
  gap: 20px;
  font-size: 13px;
  >img{
    width: 15px;
  }
  align-items: center;
`
export const List = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 7px;
  margin-left: 20px;
  font-weight: 300;
  font-size: 13px;
`
