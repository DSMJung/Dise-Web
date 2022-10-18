import * as S from "./styles"
import { Cube, Pen, Down, Up, DefaultProfile, FrontendIcon, BackendIcon, AppIcon, EtcIcon, FirstGradeIcon, SecondGradeIcon, ThirdGradeIcon } from "../../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAccessToken } from "../../utils/token";
import axios from "axios";
import { useEffect } from "react";

let BASE_URL = process.env.REACT_APP_BASE_URL

const Major = () => {
  return (
    <S.MajorBtns>
      <S.MajorBtn>
        <img src={FrontendIcon} />
        <span>FRONTEND</span>
      </S.MajorBtn>
      <S.MajorBtn>
        <img src={BackendIcon} />
        <span>BACKEND</span>
      </S.MajorBtn>
      <S.MajorBtn>
        <img src={AppIcon} /> {/* (이미지에 문제 있음 추후 디자인한테 말해서 이미지 수정 필수) */}
        <span>APP</span>
      </S.MajorBtn>
      <S.List>
        <li>ANDROID</li>
        <li>IOS</li>
      </S.List>
      <S.MajorBtn>
        <img src={EtcIcon} />
        <span>기타</span>
      </S.MajorBtn>
      <S.List>
        <li>임베디드</li>
        <li>게임</li>
        <li>정보보안</li>
        <li>디자인</li>
        <li>AI</li>
      </S.List>
    </S.MajorBtns>
  )
}

const SchoolTest = () => {
  return (
    <S.MajorBtns>
      <S.MajorBtn>
        <img src={FirstGradeIcon} />
        <span>1학년</span>
      </S.MajorBtn>
      <S.MajorBtn>
        <img src={SecondGradeIcon} />
        <span>2학년</span>
      </S.MajorBtn>
      <S.MajorBtn>
        <img src={ThirdGradeIcon} />
        <span>3학년</span>
      </S.MajorBtn>
    </S.MajorBtns>
  );
};

const Btns = () => {
  const [major, setMajor] = useState(false);
  const [test, setTest] = useState(false);

  return (
    <S.TopicBtns>
      <S.TopicBtn onClick={() => setMajor(!major)}>
        <div>
          <img src={Cube} />
          <span>전공</span>
        </div>
        <img src={major ? Up : Down} />
      </S.TopicBtn>
      {major && <Major />}
      <S.TopicBtn onClick={() => setTest(!test)}>
        <div>
          <img src={Pen} />
          <span>시험</span>
        </div>
        <img src={test ? Up : Down} />
      </S.TopicBtn>
      {test && <SchoolTest />}
    </S.TopicBtns>
  );
};

const Head = () => {
  const accessToken = getAccessToken();
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  
  const getUserInfo = async () => {
    await axios.get(`${BASE_URL}/user`,
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    ).then((Response) => {
      console.log(Response.data);
      setUserId(Response.data.account_id);
      setUserName(Response.data.name);
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {accessToken ? (
        <S.MyProfileBox>
          <img src={DefaultProfile}></img>
          <>{userName}</>
          <span>{userId}</span>
        </S.MyProfileBox>
      ) : (
        <S.AccountBtns>
          <Link to="/signup">
            <S.AccountBtn>회원가입</S.AccountBtn>
          </Link>
          <Link to="/login">
            <S.AccountBtn>로그인</S.AccountBtn>
          </Link>
        </S.AccountBtns>
      )}
    </>
  )
}

function Nav() {
  return (
    <S.Container>
      <Head />
      <Btns />
    </S.Container>
  )
}

export default Nav;
