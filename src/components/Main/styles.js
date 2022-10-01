import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const Font = "'Noto Sans KR', sans-serif";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${Font};
  },
  input::-ms-clear,
  input::-ms-reveal{
	  display:none;width:0;height:0;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration{
	display:none;
},
`;

export const Nav = styled.div`
  width: 15vw;
  height: 100vh;
  background-color: #024b8d;
`;

export const Body = styled.div`
  width: 85vw;
  box-sizing: border-box;
  padding: 0 5vw;
`;

export const Main = styled.div`
  margin: 2vh 0;
  min-height: 83vh;
`;

export const MainHeader = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 60px;
  font-weight: 700;
`;

export const WritingBtn = styled.button`
  width: 170px;
  height: 58px;
  font-weight: 600;
  border: 2px solid #4170ff;
  border-radius: 15px;
  background-color: #fff;
  font-size: 25px;
  color: #4170ff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 30%);
  font-family: ${Font};
  > img {
    width: 25px;
    margin-right: 10px;
  }
`;

export const PostList = styled.div`
  margin-top: 5vh;
`;
