import * as S from "./styles";
import Post from "./Post/index";
import Header from "./Header/index";
import { Writing } from "../../assets";
import { useNavigate } from "react-router-dom";

function Main() {
  return (
    <div style={{ display: "flex" }}>
      <S.GlobalStyle />
      <S.Nav></S.Nav>
      <div>
        <Header />
        <S.Body>
          <S.Main>
            <S.MainHeader>
              <S.Title>{"전체"}</S.Title>
              <S.WritingBtn>
                <img src={Writing} />
                글쓰기
              </S.WritingBtn>
            </S.MainHeader>
            <S.PostList>
              <Post></Post>
            </S.PostList>
          </S.Main>
        </S.Body>
      </div>
    </div>
  );
}

export default Main;