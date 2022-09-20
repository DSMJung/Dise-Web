import * as S from "./styles";
import { Logo } from "../../assets"
import { Link } from "react-router-dom";

const Text = [
    { title: "아이디", placeholder: "아이디를 입력하세요" },
    { title: "비밀번호", placeholder: "비밀번호를 입력하세요", type: "password" }
]

function Login () {
    return(
        <S.Container>
            <div>
                <S.LogoImg src={Logo}></S.LogoImg>
                <S.LoginText>로그인</S.LoginText>
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
            <S.Btn>로그인</S.Btn>
            <S.AskText>계정이 없으신가요? 
                <Link to="/signup">
                    <S.GoSignup>회원가입하기</S.GoSignup>
                </Link>
            </S.AskText>
        </S.Container>
    )
}

export default Login;
