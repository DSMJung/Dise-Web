import { Down2 } from "../../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./styles";
import Nav from "../Nav";
import Header from "../Main/Header";

const BASE_URL = process.env.REACT_APP_BASE_URL;

let categoryData = "FRONTEND";
console.log(categoryData);

const SelectBox = () => {
  const [major, setMajor] = useState("Frontend");
  const [active, setActive] = useState(false);
  const Majors = [
    { value: "Frontend" },
    { value: "Backend" },
    { value: "App" },
    { value: "기타" },
    { value: "1학년" },
    { value: "2학년" },
    { value: "3학년" },
  ];

  const categoryList = [
    {
      key: "Frontend",
      value: "FRONTEND",
    },
    {
      key: "Backend",
      value: "BACKEND",
    },
    {
      key: "App",
      value: "APP",
    },
    {
      key: "기타",
      value: "ETC",
    },
    {
      key: "1학년",
      value: "GRADE1",
    },
    {
      key: "2학년",
      value: "GRADE2",
    },
    {
      key: "3학년",
      value: "GRADE3",
    },
  ];

  const CategoryChange = () => {
    console.log(categoryData);
    const categoryIndex = categoryList.find((e) => e.key === categoryData);
    categoryData = categoryIndex.value;
    console.log(categoryData);
  };

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
                  CategoryChange();
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
  const navigate = useNavigate();

  const [feedInfo, setFeedInfo] = useState({
    title: "",
    content: "",
  });

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
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        )
        .then((Response) => {
          alert("게시되었습니다");
          console.log(Response);
          navigate(`${BASE_URL}/main`);
        })
        .catch((error) => {
          if (error.response.status === 400) alert("400 BAD REQUEST");
          else if (error.response.status === 401) alert("401 UNAUTHORIZED");
          else if (error.response.status === 403) alert("403 FORBIDDEN");
          else if (error.response.status === 404) alert("404 NOT FOUND");
        });
    }
  };
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
