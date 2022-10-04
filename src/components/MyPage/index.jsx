import * as S from "./styles";
import Nav from "../Nav";
import { Re } from "../../assets";
import { More } from "../../assets";
import Post from "../Main/Post";

function MyPageComponents() {
  return (
    <S.MyPage>
      <Nav />
      <span>
        <S.Header>
          <span>마이페이지</span>
        </S.Header>
        <S.Container>
          <S.Profile>
            <div className="Inpro">
              <S.Img></S.Img>
              <S.Name>
                <S.MainFont>UserName</S.MainFont>
                <S.SecondFont>UserID</S.SecondFont>
              </S.Name>
            </div>
            <S.Remove>
              <img src={Re} />
            </S.Remove>
          </S.Profile>
          <hr />
          <S.Password>
            <div>
              <S.MainFont>비밀번호</S.MainFont>
              <S.SecondFont>
                주기적인 비밀번호 변경을 통해 정보를 안전하게 보호하세요.
              </S.SecondFont>
            </div>
            <S.PSBtn>비밀번호 재설정</S.PSBtn>
          </S.Password>
          <hr />
          <S.MyPost>
            <S.PostTitle>
              <S.MainFont>내 게시물</S.MainFont>
              <S.SecondFont className="text">
                더보기<img src={More}></img>
              </S.SecondFont>
            </S.PostTitle>
            <Post></Post>
          </S.MyPost>
          <hr />
          <S.Out>
            <S.OutBtn>회원탈퇴</S.OutBtn>
          </S.Out>
        </S.Container>
      </span>
    </S.MyPage>
  );
}

export default MyPageComponents;
