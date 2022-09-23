import styled from "styled-components";

export const header = styled.div`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5vw;
  > img {
    width: 55px;
  }
`;

export const searchBar = styled.div`
  width: 25vw;
  height: 6vh;
  border: 1px solid #cacaca;
  border-radius: 100px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 3px 0 rgb(0 0 0 / 30%);
  > img {
    width: 30px;
  }
`;

export const searchInput = styled.input`
  width: 75%;
  height: 80%;
  font-size: 18px;
  border: 0;
  outline: none;
  background: transparent;
`;
