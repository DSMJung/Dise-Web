import * as S from "./styles";
import { PostImage } from "../../../assets";
import { Front } from "../../../assets";
import { useNavigate } from "react-router-dom";

function Post() {
  const userName = "UserName";
  const field = Front;
  const title = "대충 제목";
  const previewtext = "내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용대충내용";
  const navigate = useNavigate();
  const onClickBtn = () => {
  navigate(`/post/${userName}`);
  };

  const preview = previewtext.substring(0, 50) + "...";

  return (
    <S.PostBtn
      onClick={onClickBtn}
      style={{ backgroundImage: `url(${PostImage})` }}
    >
      <S.Body>
        <S.Title>
          <h1 style={{ margin: 0 }}>{title}</h1>
        </S.Title>
        <S.Text>
          <p style={{ margin: 0, fontSize: 20 }}>{preview}</p>
        </S.Text>
      </S.Body>
      <S.Detail>
        <img src={field} alt="전공분야" />
        <p style={{ margin: 0, fontSize: 20, color: "white" }}>
          작성자 {userName}
        </p>
      </S.Detail>
    </S.PostBtn>
  );
}

export default Post;
