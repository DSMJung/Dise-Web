import styled from "styled-components";
const Font = "font-family: 'Noto Sans KR', sans-serif";

export const Box = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  > .H {
    width: 100%;
  }
`;

export const Div = styled.div`
  display: flex;
  padding-top: 30px;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 60vw;
  min-height: 73vh;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 19px;
  background: #ffffff;
  border: 1px solid #a6a6a6;
  border-radius: 5px;
  margin-left: 61px;
  overflow-y: scroll;

  /* .Container::-webkit-scrollbar {
    width: 10px;
  }
  .container::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
  .container::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  } */
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #024b8d;
  display: flex;
  margin-bottom: 10px;
  > input {
    height: 40px;
    width: 100%;
    font-size: 27px;
    font-weight: 600;
  }
`;

export const UsernameT = styled.div`
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
  min-height: 130px;
  display: flex;
  color: #024b8d;
  font-style: normal;
  font-weight: bolder;
  font-size: 15px;
  padding-right: 30px;
  line-height: 25px;
  border-bottom: 2px solid #024b8d;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  > textarea {
    width: 100%;
    height: 100%;
    font-weight: 600;
  }
`;

export const ModalBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
  gap: 15px;
  > button {
    background-color: transparent;
    border: 0;
  }
  }
`;

export const SaveBtn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 5px;
  &:hover {
    border: 1px solid #024b8d;
  }
`;

export const Modal__div = styled.div`
  background-color: #f5f5f5;
  border: 2px solid #7f7f7f;
  border-radius: 5px;
  color: #000;
  display: flex;
`;

export const Modal_btn__btn = styled.button`
  padding: 5px 10px;
  border: 0;
  background-color: transparent;
  > img {
    width: 15px;
  }
`;

export const Commentbox = styled.span`
  display: flex;
`;
export const Messageicon = styled.img`
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
  margin-left: 10px;
`;

export const Profileicon = styled.img`

  display: flex;
  width: 30px;
`;

export const Commentlist = styled.div`
align-items: flex-start;
  display: flex;
`;

export const Username = styled.div`
  font-size: 14px;
  color: #5f7daf;
  font-style: normal;
  font-weight: 400;
  margin-left: 10px;
  height: 10px;
  line-height: 8px;
`;

export const Comment = styled.div`
  color: #024b8d;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin-left: 9px;
  display: flex;
  height: auto;
  line-height: 25px;
  white-space: normal;
  width: 800px;
`;
export const Text = styled.div`
width: 868px;
  
`;

export const Input = styled.input`
  width: 830px;
  height: 20px;
  border: none;
  padding: 0 10;
  border-bottom: solid 1px #023b8d;
  font-weight: 500;
  color: #023b8d;
  ::placeholder {
    font-family: ${Font};
    color: #5f7daf;
  }
  font-weight: 700;
  outline: none;
  margin-left: 10px;
`;

export const PlusButton = styled.img`
  width: 25px;
  margin-left: 13px;
`;


export const  Remove=styled.div`
display: flex;

margin-top: 13px;
`
        
export const EditButton=styled.img`
width: 18px;
`
export const DeleteButton=styled.img`
width: 18px;
margin-left: 12px;
`
