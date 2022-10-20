import * as S from "./styles";
import { PostImage, PostImageW } from "../../../assets";
import { useNavigate } from "react-router-dom";

function Post(props) {
  return (
    <>
      {props.color === "Blue" ? <PostBlue list={props.list} /> : <PostWhite />}
    </>
  );
}

function PostBlue(props) {
  const navigate = useNavigate();
  const list = props.list;
  return (
    <>
      {list.map((list) => (
        <>
          <S.PostBtn
            onClick={() => {
              navigate(`/detailpost/${list.feed_id}`);
            }}
            style={{ backgroundImage: `url(${PostImage})` }}
          >
            <S.Body>
              <S.Title>
                <h1 style={{ margin: 0 }}>{list.title}</h1>
              </S.Title>
              <S.Text>
                <p style={{ margin: 0, fontSize: 20 }}>{list.content}</p>
              </S.Text>
            </S.Body>
            <S.Detail>
              <p>{list.created_at.match(/\d{4}-\d{2}-\d{2}/)}</p>
              <p style={{ margin: 0, fontSize: 20, color: "white" }}>
                작성자 {list.name}
              </p>
            </S.Detail>
          </S.PostBtn>
        </>
      ))}
    </>
  );
}

function PostWhite() {
  return (
    <>
      <S.PostBtn
        onClick={() => {}}
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
