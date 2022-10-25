import * as S from "./styles";
import Nav from "../Nav";
import { PostImageW, More, Left, Re } from "../../assets";
import Post from "../Main/Post";
import { useState } from "react";
import { getAccessToken, deleteAccessToken } from "../../utils/token";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function PreviewPost({ list }) {
  const array = list.slice(0, 1);
  const navigate = useNavigate();
  return (
    <>
      {array.map((post) => (
        <S.PostBtn
          onClick={() => {navigate(`/detailpost/${post.feed_id}`); }}
          style={{ backgroundImage: `url(${PostImageW})` }}
        >
          <S.Body>
            <S.Title>
              <h1>{post.title}</h1>
            </S.Title>
            <S.Text>
              <p>{post.content}</p>
            </S.Text>
          </S.Body>
          <S.Detail>
            <p>{post.created_at?.match(/\d{4}-\d{2}-\d{2}/)}</p>
          </S.Detail>
        </S.PostBtn>
      ))}
    </>
  );
};

function MyPageComponents() {
  const accessToken = getAccessToken();

  const [modalP, setModalP] = useState(true);
  const [modalPs, setModalPs] = useState(true);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  const [myPostList, setMyPostList] = useState([]);

  const navigate = useNavigate();

  const getUserInfo = async () => {
    await axios
      .get(`${BASE_URL}/user`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((Response) => {
        setUserId(Response.data.account_id);
        setUserName(Response.data.name);
      });
  };

  useEffect(() => {
    getUserInfo();
    getMyPost();
  }, [modalP]);

  const onDeleteAccount = async () => {
    await axios
      .delete(`${BASE_URL}/user`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(() => {
        alert("회원님의 계정이 성공적으로 탈퇴되었습니다.");
        deleteAccessToken();
        navigate("/login");
      });
  };

  const onLogout = () => {
    deleteAccessToken();
    alert("로그아웃 되었습니다.");
    navigate(`/main`);
  };

  const [more, setMore] = useState(true);

  const getMyPost = async () => {
    await axios.get(`${BASE_URL}/feed`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((Response) => {
      setMyPostList(Response.data.feed_list)
    })
  }

  return (
    <S.MyPage>
      <Nav change={userId} />
      <span>
        {more === true ? (
          <S.Container>
            {modalP === true ? <ProfileDefault /> : <ProfileChange />}
            <hr />
            {modalPs === true ? <PasswordDefault /> : <PasswordChange />}
            <hr />
            <S.MyPost>
              <S.PostTitle>
                <S.MainFont>내 게시물</S.MainFont>
                <S.MoreViewBtn
                  onClick={() => {
                    setMore(!more);
                  }}
                  className="text"
                >
                  더보기<img src={More}></img>
                </S.MoreViewBtn>
              </S.PostTitle>
              <PreviewPost list={myPostList} />
            </S.MyPost>
            <hr />
            <S.Out>
              <Link to="/main">
                <S.OutBtn>메인으로</S.OutBtn>
              </Link>
              <S.OutBtn onClick={onLogout}>로그아웃</S.OutBtn>
              <S.OutBtn onClick={onDeleteAccount}>회원탈퇴</S.OutBtn>
            </S.Out>
          </S.Container>
        ) : (
          <S.Container>
            <header>
              <S.MoreViewBtn
                onClick={() => {
                  setMore(!more);
                }}
              >
                <img src={Left} />
                돌아가기
              </S.MoreViewBtn>
            </header>
            <S.Main>
              <Post list={myPostList} />
            </S.Main>
          </S.Container>
        )}
      </span>
    </S.MyPage>
  );

  function ProfileDefault() {
    return (
      <S.Profile>
        <div className="Inpro">
          <S.Img />
          <S.Name>
            <S.MainFont>{userName}</S.MainFont>
            <S.SecondFont>{userId}</S.SecondFont>
          </S.Name>
        </div>
        <S.Remove
          onClick={() => {
            setModalP(!modalP);
          }}
        >
          <img src={Re} />
        </S.Remove>
      </S.Profile>
    );
  }

  function ProfileChange() {
    const [reviseName, setReviseName] = useState("");
    return (
      <S.Profile>
        <div className="Inpro">
          <S.Img />
          <S.Name>
            <S.ChangeName onChange={(e) => setReviseName(e.target.value)} />
            <S.SecondFont>{userId}</S.SecondFont>
          </S.Name>
        </div>
        <RemoveChange name={"prof"} reviseName={reviseName} />
      </S.Profile>
    );
  }

  function PasswordDefault() {
    return (
      <S.Password>
        <div>
          <S.MainFont>비밀번호</S.MainFont>
          <S.SecondFont>
            주기적인 비밀번호 변경을 통해 정보를 안전하게 보호하세요.
          </S.SecondFont>
        </div>
        <S.PSBtn
          onClick={() => {
            setModalPs(!modalPs);
          }}
        >
          비밀번호 재설정
        </S.PSBtn>
      </S.Password>
    );
  }

  function PasswordChange() {
    return (
      <S.NewPassword>
        <S.PasswordBox>
          <S.BeforePassword>
            <span>비밀번호</span>
            <div>
              이전 비밀번호
              <S.PasswordInput />
            </div>
          </S.BeforePassword>
          <S.AfterPassword>
            <div>
              새 비밀번호
              <S.PasswordInput />
            </div>
            <div>
              새 비밀번호 확인
              <S.PasswordInput />
            </div>
          </S.AfterPassword>
        </S.PasswordBox>
        <RemoveChange name={"pw"} />
      </S.NewPassword>
    );
  }

  function RemoveChange(props) {
    const reviseUserInfo = async () => {
      try {
        await axios
          .put(
            `${BASE_URL}/user`,
            {
              name: props.reviseName,
            },
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          )
          .then(() => {
            setModalP(!modalP);
          });
      } catch (error) {
        if (error.response.status == 400) {
          alert("이름은 4자 이하이어야 합니다.");
        }
      }
    };

    if (props.name === "prof")
      return (
        <S.RemoveChange>
          <S.ChangeBtn
            onClick={() => {
              setModalP(!modalP);
            }}
          >
            취소
          </S.ChangeBtn>
          <S.ChangeBtn // 기능구현때 여기 바꿔야함
            onClick={reviseUserInfo}
          >
            변경
          </S.ChangeBtn>
        </S.RemoveChange>
      );
    else
      return (
        <S.RemoveChange>
          <S.ChangeBtn
            onClick={() => {
              setModalPs(!modalPs);
            }}
          >
            취소
          </S.ChangeBtn>
          <S.ChangeBtn // 기능구현때 여기 바꿔야함
            onClick={() => {
              setModalPs(!modalPs);
            }}
          >
            변경
          </S.ChangeBtn>
        </S.RemoveChange>
      );
  }
}

export default MyPageComponents;
