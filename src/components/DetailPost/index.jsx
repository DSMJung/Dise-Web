import * as S from "./styles";
import Header from "../Main/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessageIcon, ProfileIcon, PlusIcon } from "../../assets";
import Nav from "../Nav";
import axios from "axios";
import { getAccessToken } from "../../utils/token";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function DetailPost() {
  const { id } = useParams();
  const [list, setList] = useState([{}]);
  const [comment, setComment] = useState("");
  const accessToken = getAccessToken();
  const [commentlist, setcommentlist] = useState([{}]);

  const postComment = async (e) => {
    window.location.reload();
    
    await axios
      .post(
        `${BASE_URL}/comment/${id}`,
        {
          content: comment,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response) => {
    
      })
      .catch((error) => {
        

        if (!accessToken) alert("로그인을 해주세요!");
        else if (accessToken && !S.Input.value) alert("내용을 입력해 주세요");
      });
  };

  const Get = async () => {
    await axios.get(`${BASE_URL}/feed/${id}`).then((Response) => {
      setList(Response.data);
    });
  };

  const commentArr = async () => {
    await axios.get(`${BASE_URL}/comment/${id}`).then((Response) => {
      console.log(Response);
      setcommentlist(Response.data.comment_list);
    });
  };

  useEffect(() => {
    Get();
    commentArr();
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
              <S.Datetext>
                {list.created_at?.match(/\d{4}-\d{2}-\d{2}/)}
              </S.Datetext>
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
                onChange={(e) => setComment(e.target.value)}
              />
              <S.PlusButton src={PlusIcon} onClick={postComment} />
            </div>
            {commentlist?.map((list) => (
              <S.Commentlist>
                <S.Profileicon src={ProfileIcon} />
                <S.Text>
                  <S.Username>{list.name}</S.Username>
                  <S.Comment>{list.content}</S.Comment>
                </S.Text>
              </S.Commentlist>
            ))}
          </S.Container>
        </S.Box>
      </div>
    </>
  );
}

export default DetailPost;
