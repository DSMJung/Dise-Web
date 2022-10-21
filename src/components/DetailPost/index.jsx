import * as S from "./styles";
import Header from "../Main/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessageIcon, ProfileIcon, PlusIcon } from "../../assets";
import Nav from "../Nav";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function DetailPost() {
  const { id } = useParams();
  const [list, setList] = useState([{}]);
  
  const [comment, setComment] = useState(""); //onchange 이용하여 commnet 값 담기
  const [feedComments, setFeedComments] = useState([]); //댓글  리스트
  const [userName, setUserName] = useState("");
  
  const feedId = async (e) => {
    let commentId = localStorage.getItem("comment_id");
    console.log(comment);
    await axios
    .post(`${BASE_URL}/comment/${commentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          comment,
        },
      })
      .then((Response) => {
        localStorage.setItem("comment_id", ++commentId);
        setUserName(Response.data.name);
      });
    setFeedComments((feedComments) => [...feedComments, comment]); //feedComment를 setFeedComment로 변경
    setComment(""); //입력하는 댓글창 빈 문자열로 초기화
    console.log(comment);
  };

  
  const Get = async () => {
    await axios.get(`${BASE_URL}/feed/${id}`).then((Response) => {
      setList(Response.data);
    });
  };

  console.log(list);

  useEffect(() => {
    Get();
  }, []);
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
              <S.UsernameT>{list.user_name}</S.UsernameT>
              <S.Datetext>{list.created_at}</S.Datetext>
            </div>
            <S.Maintext>{list.content}</S.Maintext>
            <S.Commentbox>
              <S.Messageicon src={MessageIcon} />
              <S.Commenttext>댓글</S.Commenttext>
            </S.Commentbox>
            <div style={{ display: "flex" }}>
              <S.Profileicon src={ProfileIcon} />
              <S.Input
                placeholder="댓글추가"
                type="text"
                onChange={(e) => {
                  setComment(e.target.value); //댓글 창의 상태가 변할 때마다 Commnt 값 바꿈
                }}
                value={comment}
              />
              <S.PlusButton
                src={PlusIcon}
                onClick={feedId} //클릭하면 post, feedId 함수 실행하기
                />
            </div>
            {feedComments.map((_, i, commentArr) => (
              <S.Profile>
                <S.Profileicon src={ProfileIcon} />
                <S.Text>
                <S.Username>{userName}</S.Username>
                  {/* <S.Comment>{commentArr[i]}</S.Comment> */}
                </S.Text>
              </S.Profile>
            ))}
          </S.Container>
        </S.Box>
      </div>
    </>
  );
}

export default DetailPost;
