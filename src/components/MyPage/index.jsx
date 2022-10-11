import * as S from "./styles";
import Nav from "../Nav";
import { Re } from "../../assets";
import { More } from "../../assets";
import Post from "../Main/Post";
import { useState } from "react";

function MyPageComponents() {
  const [modalP, setModalP] = useState(true);

  const [modalPs, setModalPs] = useState(true);

  return (
    <S.MyPage>
      <Nav />
      <span>
        <S.Header>
          <span>마이페이지</span>
        </S.Header>
        <S.Container>
          {modalP === true ? <ProfileDefault /> : <ProfileChange />}
          <hr />
          {modalPs === true ? <PasswordDefault /> : <PasswordChange />}
          <hr />
          <S.MyPost>
            <S.PostTitle>
              <S.MainFont>내 게시물</S.MainFont>
              <S.SecondFont className="text">
                더보기<img src={More}></img>
              </S.SecondFont>
            </S.PostTitle>
            <Post color="White" />
          </S.MyPost>
          <hr />
          <S.Out>
            <S.OutBtn>회원탈퇴</S.OutBtn>
          </S.Out>
        </S.Container>
      </span>
    </S.MyPage>
  );

  function ProfileDefault() {
    return (
      <S.Profile>
        <div className="Inpro">
          <S.Img />
          <S.Name>
            <S.MainFont>UserName</S.MainFont>
            <S.SecondFont>UserID</S.SecondFont>
          </S.Name>
        </div>
        <S.Remove
          onClick={() => {
            setModalP(!modalP);
          }}
        >
          <img src={Re} />
        </S.Remove>
      </S.Profile>
    );
  }

  function ProfileChange() {
    return (
      <S.Profile>
        <div className="Inpro">
          <S.Img />
          <S.Name>
            <S.ChangeName />
            <S.SecondFont>UserID</S.SecondFont>
          </S.Name>
        </div>
        <RemoveChange name={"prof"} />
      </S.Profile>
    );
  }

  function PasswordDefault() {
    return (
      <S.Password>
        <div>
          <S.MainFont>비밀번호</S.MainFont>
          <S.SecondFont>
            주기적인 비밀번호 변경을 통해 정보를 안전하게 보호하세요.
          </S.SecondFont>
        </div>
        <S.PSBtn
          onClick={() => {
            setModalPs(!modalPs);
          }}
        >
          비밀번호 재설정
        </S.PSBtn>
      </S.Password>
    );
  }

  function PasswordChange() {
    return (
      <S.NewPassword>
        <div>
          <div className="box">
            <S.MainFont>비밀번호</S.MainFont>
            <PWInput Name={"이전 비밀번호"} />
          </div>
          <div className="box">
            <PWInput Name={"새 비밀번호"} />
            <PWInput Name={"새 비밀번호 확인"} />
          </div>
        </div>
        <RemoveChange name={"pw"} />
      </S.NewPassword>
    );
  }

  function PWInput(props) {
    return (
      <S.PWInputBox>
        {props.Name}
        <S.ChangePassword />
      </S.PWInputBox>
    );
  }

  function RemoveChange(props) {
    if (props.name === "prof")
      return (
        <S.RemoveChange>
          <S.ChangeBtn
            onClick={() => {
              setModalP(!modalP);
            }}
          >
            취소
          </S.ChangeBtn>
          <S.ChangeBtn // 기능구현때 여기 바꿔야함
            onClick={() => {
              setModalP(!modalP);
            }}
          >
            변경
          </S.ChangeBtn>
        </S.RemoveChange>
      );
    else
      return (
        <S.RemoveChange>
          <S.ChangeBtn
            onClick={() => {
              setModalPs(!modalPs);
            }}
          >
            취소
          </S.ChangeBtn>
          <S.ChangeBtn // 기능구현때 여기 바꿔야함
            onClick={() => {
              setModalPs(!modalPs);
            }}
          >
            변경
          </S.ChangeBtn>
        </S.RemoveChange>
      );
  }
}

export default MyPageComponents;
