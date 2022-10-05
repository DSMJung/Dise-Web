import { useNavigate } from "react-router-dom/dist";
import * as S from "./styles";
import { Logo, CloseEye, OpenEye } from "../../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL

function Login() {
    const navigate = useNavigate();
    const [eye, setEye] = useState(false)
    const type = eye ? "none" : "password"
    const Text = [
        { title: "아이디", name: "id", placeholder: "아이디를 입력하세요" },
        { title: "비밀번호", name: "password", placeholder: "비밀번호를 입력하세요", type: type }
    ]
    const [inputs, setInputs] = useState({
        id: '',
        password: ''
    });
    const { id, password } = inputs
    const onChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const login = async () => {
        await axios.post(`${BASE_URL}/user/login`, {
            account_id: id,
            password: password,
        })
            .then((Response) => {
                localStorage.setItem('access_token', Response.data.access_token)
            })
    }
    const onLogin = async () => {
        try {
            await login()
            alert(`${id}님 감사합니다.\n로그인이 되었습니다.`)
            navigate("/main");
        } catch (error) {
            console.log(error.response.data);
            if (error.response.status === 404) {
                alert("로그인 실패 : 가입이 되지 않은 아이디입니다.");
            }
            else if (error.response.data.status == 401) {
                alert("로그인 실패 : 비밀번호가 불일치합니다.")
            }
        }
    }
    return (
        <S.Container>
            <div>
                <S.LogoImg src={Logo}></S.LogoImg>
                <S.LoginText>로그인</S.LoginText>
            </div>
            <S.Inputs>
                {Text.map((list) => (
                    <>
                        <>{list.title}</>
                        <S.Input
                            name={list.name}
                            onChange={onChange}
                            placeholder={list.placeholder}
                            type={list.type}
                        />
                    </>
                ))}
                {eye ? <img
                    onClick={() => setEye(!eye)}
                    src={OpenEye} />
                    :
                    <img
                        onClick={() => setEye(!eye)}
                        src={CloseEye} />}
            </S.Inputs>
            <S.Btn onClick={onLogin}>로그인</S.Btn>
            <S.AskText>계정이 없으신가요?
                <Link to="/signup">
                    <S.GoSignup>회원가입하기</S.GoSignup>
                </Link>
            </S.AskText>
        </S.Container>
    )
}

export default Login;
