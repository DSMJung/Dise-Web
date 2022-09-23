import styled from "styled-components";
const Font = "font-family: 'Noto Sans KR', sans-serif"

export const Container = styled.div`
    width: 280px;
    height: 460px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border: 1px solid #A6A6A6;
    padding: 75px 90px;
    display: flex;
    flex-direction: column;
    gap: 40px;
        
`
export const LogoImg = styled.img`
    width: 50px;
    height: 73.04px;
    left: 545px;
    top: 217px;
`
export const LoginText = styled.div`
    font-size: 30px;
    font-family :${Font};
    font-weight: 700;
    color: #024B8D;
`
export const Inputs = styled.div`
    display: flex;
    gap: 10px;
    font-weight: 700;
    font-size: 20px;
    flex-direction:column;
`

export const Input = styled.input`
    width: 260px;
    height:20px;
    border: none;
    padding-left:10px;
    padding-rignt:10px;
    border-bottom: solid 1px #023B8d;
    font-weight: 500;
    color: #024B8D;
    ::placeholder{
        font-family: ${Font};
        color: #5F7DAF;
    }
    font-weight: 700;
    outline : none;
`

export const Btn = styled.button`
    width: 275px;
    height: 45px;
    border: 2px solid #5F7DAF;
    border-radius: 10px;
    background: #FAFAFA;
    font-weight: 700;
    font-size: 15px;
    color: #5F7DAF;
    :hover{
        background: #E2EDFF;
        color: #024B8D;
        border: 2px solid #024B8D;
    }
`

export const AskText=styled.span`
    color: #5F7DAF;
    font-weight: bold;
    font-size:12px;
    display: flex;
    justify-content : center;
    gap : 10px;
    font-size:bold;
`

export const GoSignup = styled.span`
    color: #024B8D;
    
`

