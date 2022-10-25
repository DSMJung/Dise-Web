import styled from "styled-components";
const Font = "font-family: 'Noto Sans KR', sans-serif";

export const MyPage = styled.div`
  display: flex;
  > span {
    width: 100%;
    padding: 0 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  overflow-y: hidden;
`;

export const Header = styled.div`
  hight: 20vh;
  width: 100%;
  padding: 30px 0;
  > span {
    font-size: 30px;
    font-weight: 700;
  }
`;

export const Container = styled.div`
  margin-top: 15px;
  color: #fff;
  width: 60vw;
  background-color: #024b8d;
  border: 0;
  border-radius: 10px;
  padding: 0px 50px;
  padding-top: 30px;
  min-height: 90vh;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  > .Inpro {
    display: flex;
    align-items: center;
  }
`;

export const Img = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: 0;
  border-radius: 50%;
`;

export const Name = styled.div`
  margin-left: 30px;
`;

export const MainFont = styled.div`
  font-size: 24px;
`;

export const ChangeName = styled.input`
  outline: none;
  width: 200px;
  height: 2vh;
  border: 1px solid #fff;
  border-radius: 0.5vh;
  background-color: #5f7daf;
  padding: 0.6vh 0.8vw;
  margin-bottom: 1vh;
  color: white;
  ::placeholder {
    color: #cdcdcd;
  }
`;

export const ChangePassword = styled.input`
  outline: none;
  width: 200px;
  height: 2vh;
  border: 1px solid #fff;
  border-radius: 0.5vh;
  background-color: #5f7daf;
  color: #cdcdcd;
  padding: 0.6vh 0.8vw;
  margin-top: 1vh;
`;

export const SecondFont = styled.div`
  color: #cdcdcd;
  > img {
    margin-left: 10px;
  }
`;

export const MoreViewBtn = styled.button`
  background-color: transparent;
  border: 0;
  color: #cdcdcd;
  > img {
    margin: 0px 10px;
  }
`;

export const Remove = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: 0;
  margin-top: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RemoveChange = styled.button`
  height: 10vh;
  background-color: transparent;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const ChangeBtn = styled.button`
  width: 8vw;
  height: 3vh;
  border: 0;
  border-radius: 0.5vh;
  margin-top: 0.8vh;
  color: #024bbd;
  font-weight: 800;
`;

export const Password = styled.div`
  margin: 30px 0;
`;

export const PWInputBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #cdcdcd;
`;

export const PSBtn = styled.button`
  width: 140px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  font-size: 16px;
  color: #024b8d;
  margin-top: 30px;
`;

export const MyPost = styled.div`
  height: 300px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const Out = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const OutBtn = styled.button`
  width: 100px;
  height: 35px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #024b8d;
  &:hover {
    color: red;
    border: 1px solid red;
  }
`;
export const NewPassword = styled.div`
  display: flex;
  height: 170px;
`;
export const PasswordBox = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const AfterPassword = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 20px;
  color: #cdcdcd;
  gap: 12px;
`;
export const PasswordInput = styled.input`
  background: #5f7daf;
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 340px;
  height: 30px;
`;
export const BeforePassword = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 20px;
  color: #cdcdcd;
  > span {
    color: white;
    font-weight: 700;
    font-size: 25px;
  }
  gap: 39px;
`;

export const Main = styled.div`
  margin-top: 30px;
`;

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

export const Title = styled.span`
  width: 100%;
  height: 30%;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  >h1{
    margin: 0;
    color: #024b8d;
  }
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
  >p{
    margin: 0;
    font-size: 20px;
    color: #5f7def;
  }
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
  color: #c6c6c6;
  >p{
    margin: 0;
    font-size: 20px;
    color: #024b8d;
  }
`;
