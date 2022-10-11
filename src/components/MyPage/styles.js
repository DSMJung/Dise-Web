import styled from "styled-components";

export const MyPage = styled.div`
  display: flex;
  > span {
    width: 100%;
    hight: 100%;
    padding: 0 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
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
  color: #fff;
  width: 60vw;
  hight: 70vh;
  background-color: #024b8d;
  border: 0;
  border-radius: 10px;
  padding: 30px 50px;
  margin-bottom: 30px;
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
  color: #cdcdcd;
  padding: 0.6vh 0.8vw;
  margin-bottom: 1vh;
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
  ]
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
export const NewPassword = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  > div {
    width: 30vw;
    display: flex;
    justify-content: space-between;
    > .box {
      height: 16vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
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
  margin: 30px 0;
`;

export const PostTitle = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: end;
  }
`;

export const Out = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: flex-end;
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
