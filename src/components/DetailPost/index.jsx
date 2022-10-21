import * as S from "./styles";
import Header from "../Main/Header";
import { MessageIcon, ProfileIcon, PlusIcon } from "../../assets";
import Nav from "../Nav";

import { useState } from "react";
import axios from "axios";
import { postList } from "../Main/Post";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function DetailPost() {
  const list = postList;
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
              <S.Title>{list.title}</S.Title>
              <S.UsernameT>{list.name}</S.UsernameT>
              <S.Datetext>
                {list.created_at.match(/\d{4}-\d{2}-\d{2}/)}
              </S.Datetext>
            </div>
            <S.Maintext>{list.content}</S.Maintext>
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
