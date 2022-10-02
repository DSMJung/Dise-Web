import { Down2 } from "../../assets"
import { useState } from "react"
import *as S from "./styles"
import Nav from "../Nav"
import Header from "../Main/Header"

const SelectBox = () => {
  const [major, setMajor] = useState("전체")
  const [active, setActive] = useState(false)
  return (
    <S.Head>
      <S.Title>{major}</S.Title>
      <S.Select>
        <button
          onClick={() => setActive(!active)}
        >
          {major}
          <img src={Down2} />
        </button>
        {active &&
          <S.OptionList>
            <S.OptionItem onClick={() => setMajor("전체")} >전체</S.OptionItem>
            <S.OptionItem onClick={() => setMajor("Frontend")}>Frontend</S.OptionItem>
            <S.OptionItem onClick={() => setMajor("Backend")}>Backend</S.OptionItem>
            <S.OptionItem onClick={() => setMajor("App")}> App</S.OptionItem>
            <S.OptionItem onClick={() => setMajor("기타")}>기타</S.OptionItem>
            <S.OptionItem onClick={() => setMajor("1학년")}>1학년</S.OptionItem>
            <S.OptionItem onClick={() => setMajor("2학년")}>2학년</S.OptionItem>
            <S.OptionItem onClick={() => setMajor("3학년")}>3학년</S.OptionItem>
          </S.OptionList>
        }
      </S.Select>
    </S.Head>
  )
}

function WritePost() {
  return (
    <div style={{ display: "flex" }}>
      <Nav />
      <S.Container>
        <Header />
        <S.Box>
          <SelectBox />
          <S.TitleInput
            placeholder="제목"
          />
          <S.TextInput
            placeholder="본문 내용을 입력하세요"
          />
          <S.PostBtn>&#43; 게시하기</S.PostBtn>
        </S.Box>
      </S.Container>
    </div>
  )
}

export default WritePost