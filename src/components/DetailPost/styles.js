import styled from "styled-components";
const Font = "font-family: 'Noto Sans KR', sans-serif";

export const Container = styled.div`
  width: 700px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: #ffffff;
  border: 1px solid #a6a6a6;
  border-radius: 5px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #024b8d;
  display: flex;
  margin-bottom: 10px;
`;

export const Username = styled.div`
  color: #5f7daf;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  margin-top: 5px;
`;

export const Datetext = styled.div`
  color: #5f7daf;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  display: flex;
`;

export const Maintext=styled.span`
height: 330px;
display: flex;
color: #024B8D;
font-style: normal;
font-weight: bolder;
font-size: 10px;
padding-right: 30px;
line-height: 25px;
border-bottom: 2px solid #024B8D;


`
