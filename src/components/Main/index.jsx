import * as S from "./styles";
import Post from "./Post/index";
import Header from "./Header/index";
import { Writing } from "../../assets";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Nav";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Main() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const Get = async () => {
    await axios.get(`${BASE_URL}/feed/list`).then((Response) => {
      setList(Response.data.feed_list);
    });
  };

  useEffect(() => {
    Get();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <S.GlobalStyle />
      <Nav />
      <div>
        <Header />
        <S.Body>
          <S.Main>
            <S.MainHeader>
              <S.Title>{"전체"}</S.Title>
              <S.WritingBtn onClick={() => navigate(`/writepost`)}>
                <img src={Writing} />
                글쓰기
              </S.WritingBtn>
            </S.MainHeader>
            <S.PostList>
              <Post color="Blue" list={list}/>
            </S.PostList>
          </S.Main>
        </S.Body>
      </div>
    </div>
  );
}

export default Main;
