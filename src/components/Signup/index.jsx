import * as S from "./styles"
import { Logo } from "../../assets"
import { Link } from "react-router-dom";

const Text = [
    { title: "아이디", placeholder: "8~20자의 영문 대소문자만 사용 가능합니다." },
    { title: "비밀번호", placeholder: "8~60자 영문, 숫자, 특수문자를 사용하세요.", type: "password" },
    { title: "비밀번호 확인", placeholder:"8~60자 영문, 숫자, 특수문자를 사용하세요.", type: "password"},
    { title: "이름", placeholder: "최소 2자, 최대 4자"},
]

function Signup() {
    return(
        <S.Container>
            <div>
                <S.LogoImg src={Logo}></S.LogoImg>
                <S.SignupText>회원가입</S.SignupText>
            </div>
            {Text.map((list)=>(
                <S.Inputs>
                    <>{list.title}</>
                <S.Input 
                    placeholder={list.placeholder}
                    type={list.type}
                />
            </S.Inputs>
            ))}
            <S.Btn>회원가입</S.Btn>
            <S.AskText>
                이미 계정이 있으신가요?
                <Link to="/login">
                    <S.GoLogin>로그인하기</S.GoLogin>
                </Link>
                </S.AskText>
        </S.Container>
    )
}

export default Signup