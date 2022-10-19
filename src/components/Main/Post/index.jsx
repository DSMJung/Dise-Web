import * as S from "./styles";
import { PostImage, PostImageW } from "../../../assets";
import {
  FrontendIcon,
  BackendIcon,
  AppIcon,
  EtcIcon,
  FirstGradeIcon,
  SecondGradeIcon,
  ThirdGradeIcon,
} from "../../../assets";

import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const onClickBtn = () => {
  window.location(`/`);
};

function Post(props) {
  return <>{props.color === "Blue" ? <PostBlue /> : <PostWhite />}</>;
}

function PostBlue() {
  return (
    <>
      <S.PostBtn
        onClick={onClickBtn}
        style={{ backgroundImage: `url(${PostImage})` }}
      >
        <S.Body>
          <S.Title>
            <h1 style={{ margin: 0 }}>{Object.title}</h1>
          </S.Title>
          <S.Text>
            <p style={{ margin: 0, fontSize: 20 }}>{Object.content}</p>
          </S.Text>
        </S.Body>
        <S.Detail>
          <img src={FrontendIcon} alt="전공분야" />
          <p style={{ margin: 0, fontSize: 20, color: "white" }}>작성자 {}</p>
        </S.Detail>
      </S.PostBtn>
    </>
  );
}

function PostWhite() {
  return (
    <>
      <S.PostBtn
        onClick={onClickBtn}
        style={{ backgroundImage: `url(${PostImageW})` }}
      >
        <S.Body>
          <S.Title>
            <h1 style={{ margin: 0, color: "#024b8d" }}>{}</h1>
          </S.Title>
          <S.Text>
            <p style={{ margin: 0, fontSize: 20, color: "#5F7DAF" }}>{}</p>
          </S.Text>
        </S.Body>
        <S.Detail>
          <p style={{ margin: 0, fontSize: 20, color: "#024b8d" }}>작성자 {}</p>
        </S.Detail>
      </S.PostBtn>
    </>
  );
}

export default Post;
