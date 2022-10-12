import styled from "styled-components";
const Font = "font-family: 'Noto Sans KR', sans-serif";

export const Container = styled.div`
  margin-left: 13px;
`
export const Box = styled.div`
  width: 75vw;
  padding:  0 5vw;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`
export const Title = styled.span`
  font-weight: 700;
  font-size: 60px;
`
export const Select = styled.div`
  width: 99px;
  height: 33px;
  border: 1px solid #D0D0D0;
  cursor: pointer;
  >button{
    display: flex;
    align-items: center;
    width: 105px;
    height: inherit;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    justify-content: space-around;
  }
  z-index: 99;
`
export const OptionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 1px;
  border-radius: 6px;
  background: white;
`
export const OptionItem = styled.li`
  width: 92px;
  height: 23px;
  border-left: 1px solid #D0D0D0;
  border-right: 1px solid #D0D0D0;
  border-bottom: 1px solid #D0D0D0;
  padding-left: 6px;
  font-size: 13px;
  padding-top: 10px;
  :hover{
    background: #024B8D;
    color: white;
    border-bottom: 1px solid #024B8D;
    font-weight: 700;
  }
`
export const TitleInput = styled.input`
  width: calc(75vw - 30px);
  height: 40px;
  padding:  0 12px;
  font-family: ${Font};
  font-size: 20px;
  outline: none;
  border: 1px solid #024B8D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: white;
`
export const TextInput = styled.textarea`
  width: calc(75vw - 30px);
  height: 300px;
  padding:  12px 12px;
  font-family: ${Font};
  font-size: 20px;
  border: 1px solid #024B8D;
  background: white;
  outline: none;
  ::placeholder{
  font-family: ${Font};
  }
`
export const PostBtn = styled.button`
  width: 130px;
  height: 40px;
  font-family: ${Font};
  font-size: 16px;
  color: #024B8D;
  border: 2px solid #024B8D;
  border-radius: 10px;
  background: white;
  :hover{
    background: #024B8D;
    color: white;
  }
`