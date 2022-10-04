import styled from "styled-components";
const Font = "font-family: 'Noto Sans KR', sans-serif";

export const Container = styled.div`
  width: 650px;
  height: 450px;
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

export const Nav = styled.div`
  width: 15vw;
  height: 100vh;
  background-color: #024b8d;
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

export const Maintext = styled.span`
  height: 130px;
  display: flex;
  color: #024b8d;
  font-style: normal;
  font-weight: bolder;
  font-size: 10px;
  padding-right: 30px;
  line-height: 25px;
  border-bottom: 2px solid #024b8d;
`;

export const Commentbox = styled.span`
  display: flex;
`;
export const Messageicorn = styled.img`
  display: flex;
  width: 23px;
  height: 23px;
`;

export const Commenttext = styled.div`
  display: flex;
  color: #024b8d;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 23px;
`;

export const Profileicorn = styled.img`
  display: flex;
  width: 25px;
`;

export const Profile = styled.div`
  display: flex;
`;
export const Username1 = styled.div`
  font-size: 2px;
  color: #5f7daf;
  font-style: normal;
  font-weight: 400;
  margin-left: 10px;
  height: 10px;
`;

export const Comment = styled.div`
  color: #024b8d;
  font-style: normal;
  font-weight: 700;
  font-size: 1px;
  margin-left: 9px;
  display: flex;
  height: 14px;
`;
export const Text = styled.div`
  flex-direction: column;
`;
