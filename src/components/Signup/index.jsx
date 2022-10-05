import { useNavigate } from "react-router-dom/dist";
import * as S from "./styles"
import { Logo, CloseEye, OpenEye } from "../../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL

function Signup() {
    const navigate = useNavigate();
    const [eye, setEye] = useState(false)
    const [checkEye, setCheckEye] = useState(false)
    const passwordType = eye ? "none" : "password"
    const checkPasswordType = checkEye ? "none" : "password"
    const Text = [
        { title: "아이디", name: "id", placeholder: "8~20자의 영문 대소문자만 사용 가능합니다." },
        { title: "비밀번호", name: "password", placeholder: "8~60자 영문, 숫자, 특수문자를 사용하세요.", type: passwordType },
        { title: "비밀번호 확인", name: "checkPassword", placeholder: "8~60자 영문, 숫자, 특수문자를 사용하세요.", type: checkPasswordType },
        { title: "이름", name: "name", placeholder: "최소 2자, 최대 4자" },
    ]
    const [inputs, setInputs] = useState({
        id: '',
        password: '',
        checkPassword: '',
        name: ''
    });
    const { id, password, checkPassword, name } = inputs
    const onChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const signup = async () => {
        await axios.post(`${BASE_URL}/user/signup`,
            {
                account_id: id,
                password: password,
                name: name
            }
        );
    }
    const onSignup = async () => {
        if (password === checkPassword) {
            try {
                await signup()
                alert(`${id}님 감사합니다.\n회원가입이 되었습니다.`)
                navigate("/login");
            } catch (error) {
                console.log(error.response.data);
                if (error.response.data.password) alert(error.response.data.password)
                else if (error.response.data.accountId) alert("회원가입 실패 : 아이디는 8자 이상 20자 이하여야 합니다.")
                else if(error.response.data.status === 409) alert("회원가입 실패 : 이미 존재하는 아이디입니다.")
            }
        }
        else {
            alert("회원가입 실패 : 비밀번호가 일치하지 않습니다.")
        }
    }
    return (
        <S.Container>
            <div>
                <S.LogoImg src={Logo}></S.LogoImg>
                <S.SignupText>회원가입</S.SignupText>
            </div>
            {Text.map((list) => (
                <S.Inputs>
                    <>{list.title}</>
                    <S.Input
                        onChange={onChange}
                        name={list.name}
                        placeholder={list.placeholder}
                        type={list.type}
                    />
                </S.Inputs>
            ))}
            <S.Eyes>
                {eye ? <img
                    onClick={() => setEye(!eye)}
                    src={OpenEye} />
                    :
                    <img
                        onClick={() => setEye(!eye)}
                        src={CloseEye} />}
                {checkEye ? <img
                    onClick={() => setCheckEye(!checkEye)}
                    src={OpenEye} />
                    :
                    <img
                        onClick={() => setCheckEye(!checkEye)}
                        src={CloseEye} />}
            </S.Eyes>
            <S.Btn onClick={onSignup}>회원가입</S.Btn>
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