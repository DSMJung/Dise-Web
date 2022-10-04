import * as S from "./styles";
import Header from "../Main/Header";
import { MessageIcorn } from "../../assets";
import { ProfileIcorn } from "../../assets";
import { Nav } from "../Main/Nav";


function DetailPost() {
  return (
    <>
      <Header/>
      <Nav/>
      <S.Container>
        <div>
          <S.Title>Html 태그 총정리</S.Title>
          <S.Username>UserName</S.Username>
          <S.Datetext>2022.07.28</S.Datetext>
        </div>
        <S.Maintext>
          충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문대충본문내용대충본문내용대충본문내용대충본문대충본문내용대충본문내용대충본문내용대충본문대충본문내용대충본문내용대충본문내용대충본문대충본문내용대충본문내용대충본문내용대충본문
        </S.Maintext>
        <S.Commentbox>
          <S.Messageicorn src={MessageIcorn}></S.Messageicorn>
          <S.Commenttext>댓글</S.Commenttext>
        </S.Commentbox>
        <S.Profile>
          <S.Profileicorn src={ProfileIcorn}></S.Profileicorn>
          <S.Text>
            <S.Username1>User1</S.Username1>
            <S.Comment>어쩌고저쩌고</S.Comment>
          </S.Text>
        </S.Profile>
      </S.Container>
    </>
  );
}

export default DetailPost;
