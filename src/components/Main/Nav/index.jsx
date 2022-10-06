import * as S from "./styles"
import { Cube, Pen, Down, Bell, SettingIcon, Question, DefaultProfile } from "../../../assets";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <S.Container>
      {localStorage.getItem('access_token') ? (
        <S.MyProfileBox>
          <img src={DefaultProfile}></img>
          <>UserName</>
          <span>UserID</span>
        </S.MyProfileBox>
      ) : (
        <S.AccountBtns>
          <S.AccountBtn onClick={() => navigate("/signup")}>회원가입</S.AccountBtn>
          <S.AccountBtn onClick={() => navigate("/login")}>로그인</S.AccountBtn>
        </S.AccountBtns>
      )}
      <S.TopicBtns>
        <S.TopicBtn>
          <img src={Cube} />
          <span>전공</span>
          <img src={Down} />
        </S.TopicBtn>
        <S.TopicBtn>
          <img src={Pen} />
          <span>시험</span>
          <img src={Down} />
        </S.TopicBtn>
      </S.TopicBtns>
      <S.SettingBtns>
        <img src={Bell} />
        <img src={Question} />
        <img src={SettingIcon} />
      </S.SettingBtns>
    </S.Container>
  )
}

export default Nav;
