import { Down2 } from "../../assets";
import { useState } from "react";
import axios from "axios";
import * as S from "./styles";
import Nav from "../Nav";
import Header from "../Main/Header";

const BASE_URL = process.env.REACT_APP_BASE_URL;

let categoryData = "";

const SelectBox = () => {
  const [major, setMajor] = useState("전체");
  const [active, setActive] = useState(false);
  const Majors = [
    { value: "전체" },
    { value: "Frontend" },
    { value: "Backend" },
    { value: "App" },
    { value: "기타" },
    { value: "1학년" },
    { value: "2학년" },
    { value: "3학년" },
  ];
  return (
    <S.Head>
      <S.Title>{major}</S.Title>
      <S.Select>
        <button onClick={() => setActive(!active)}>
          {major}
          <img src={Down2} />
        </button>
        {active && (
          <S.OptionList>
            {Majors.map((list) => (
              <S.OptionItem
                key={list.value}
                onClick={() => {
                  setMajor(list.value);
                  categoryData = list.value;
                  console.log(categoryData);
                }}
              >
                {list.value}
              </S.OptionItem>
            ))}
          </S.OptionList>
        )}
      </S.Select>
    </S.Head>
  );
};

function WritePost() {
  const PostData = async () => {
    if (feedInfo.title === "") alert("제목을 입력해 주세요.");
    else if (feedInfo.content === "") alert("내용을 입력해 주세요.");
    else {
      await axios
        .post(
          `${BASE_URL}/feed`,
          {
            title: feedInfo.title,
            content: feedInfo.content,
            category: categoryData,
          },
          {
            header: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        )
        .then((Response) => {
          console.log(Response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const [feedInfo, setFeedInfo] = useState({
    title: "",
    content: "",
  });

  const onChangeInputData = (e) => {
    setFeedInfo({
      ...feedInfo,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <Nav />
      <S.Container>
        <Header />
        <S.Box>
          <SelectBox />
          <S.TitleInput
            onChange={onChangeInputData}
            id="title"
            placeholder="제목"
            maxLength="20"
          />
          <S.TextInput
            onChange={onChangeInputData}
            id="content"
            placeholder="본문 내용을 입력하세요"
            maxLength="1000"
          />
          글자 수 : {feedInfo.content.length}
          <S.PostBtn onClick={PostData}>&#43; 게시하기</S.PostBtn>
        </S.Box>
      </S.Container>
    </div>
  );
}

export default WritePost;
