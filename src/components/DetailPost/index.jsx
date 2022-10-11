import * as S from "./styles";
import Header from "../Main/Header";
import { MessageIcon, ProfileIcon, PlusIcon } from "../../assets";
import Nav from "../Nav";

function DetailPost() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Nav />
        <S.Box>
          
          <div className="H">
            <Header />
          </div>
          <S.Container>
            <div>
              <S.Title>Html 태그 총정리</S.Title>
              <S.UsernameT>UserName</S.UsernameT>
              <S.Datetext>2022.07.28</S.Datetext>
            </div>
            <S.Maintext>
              충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문내용대충본문대충본문내용대충본문내용대충본문내용대충본문대충본문내용대충본문내용대충본문내용대충본문대충본문내용대충본문내용대충본문내용대충본문대충본문내용대충본문내용대충본문내용대충본문
            </S.Maintext>
            <S.Commentbox>
              <S.Messageicon src={MessageIcon} />
              <S.Commenttext>댓글</S.Commenttext>
            </S.Commentbox>
            <div style={{ display: "flex" }}>
              <S.Profileicon src={ProfileIcon} />
              <S.Input placeholder="댓글추가" type="text"></S.Input>
              <S.PlusButton src={PlusIcon} />
            </div>
            <S.Profile>
              <S.Profileicon src={ProfileIcon} />
              <S.Text>
                <S.Username>username1</S.Username>
                <S.Content>어쩌고</S.Content>
              </S.Text>
            </S.Profile>
          </S.Container>
         
        </S.Box>
      </div>
    </>
  );
}

export default DetailPost;
