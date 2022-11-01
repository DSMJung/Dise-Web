import * as S from "./styles";
import Header from "../Main/Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MessageIcon,
  ProfileIcon,
  PlusIcon,
  Delete,
  Edit,
  ModalBtn,
} from "../../assets";
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
  const [modal, setModal] = useState(false);

  const navi = useNavigate();

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
      .then((response) => {})
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

  const [edit, setEdit] = useState(true);

  const EditContent = () => {
    setTitle(list.title);
    setText(list.content);
    setEdit(!edit);
  };

  const DeleteContent = () => {};

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const EditPost = async () => {
    console.log(title);
    console.log(text);
    await axios
      .put(
        `${BASE_URL}/feed/${id}`,
        {
          title: title,
          content: text,
          category: "FRONTEND",
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then(() => {
        setEdit(!edit);
        setModal(!modal);
        console.log(list);
        alert("수정이 완료되었습니다.", "감사합니다.");
      })
      .catch((error) => {
        switch (error.response.status) {
          case 400:
            alert("수정할 수 없습니다.\n내용을 다시 한 번 확인해 주세요.");
        }
      });
  };

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
              <S.Title>
                {edit ? (
                  list.title
                ) : (
                  <input onChange={onChangeTitle} value={title} />
                )}
              </S.Title>
              <S.UsernameT>{list.user_name}</S.UsernameT>
              <S.Datetext>
                {list.created_at?.match(/\d{4}-\d{2}-\d{2}/)}
              </S.Datetext>
            </div>
            <S.Maintext>
              {edit ? (
                list.content
              ) : (
                <textarea onChange={onChangeText} value={text} />
              )}
              {1 && (
                <S.ModalBtn>
                  {edit ? (
                    <>
                      {modal && (
                        <S.Modal__div>
                          <S.Modal_btn__btn
                            className="edit"
                            onClick={EditContent}
                          >
                            <img src={Edit} />
                            <span>수정</span>
                          </S.Modal_btn__btn>
                          <S.Modal_btn__btn
                            className="delete"
                            onClick={DeleteContent}
                          >
                            <img src={Delete} />
                            <span>삭제</span>
                          </S.Modal_btn__btn>
                        </S.Modal__div>
                      )}
                      <button
                        onClick={() => {
                          setModal(!modal);
                        }}
                      >
                        <img src={ModalBtn} />
                      </button>
                    </>
                  ) : (
                    <S.SaveBtn onClick={EditPost}>저장</S.SaveBtn>
                  )}
                </S.ModalBtn>
              )}
            </S.Maintext>
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
                <S.Remove>
                  <S.EditButton src={Edit}></S.EditButton>
                  <S.DeleteButton src={Delete}></S.DeleteButton>
                </S.Remove>
              </S.Commentlist>
            ))}
          </S.Container>
        </S.Box>
      </div>
    </>
  );
}

export default DetailPost;
