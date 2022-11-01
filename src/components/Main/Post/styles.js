import styled from "styled-components";
const Font = "'Noto Sans KR', sans-serif";

export const PostBtn = styled.button`
  width: 100%;
  height: 20vh;
  background-position: center center;
  border: 0;
  border-radius: 20px;
  padding: 2%;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 30%);
  display: flex;
  margin-bottom: 5vh;
  cursor: pointer;
  font-family: ${Font};
`;

export const Body = styled.div`
  width: 75%;
  height: 100%;
`;

export const Detail = styled.span`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  box-sizing: border-box;
  padding: 5px;
  align-items: end;
  color: black;
`;

export const Title = styled.span`
  width: 100%;
  height: 30%;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.span`
  width: 100%;
  height: 62%;
  padding-top: 10px;
  box-sizing: border-box;
  color: #c6c6c6;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  text-align: start;
  font-family: ${Font};
  @media screen and (max-height: 370px) {
    display: none;
  }
  overflow: hitden;
`;
