import { Down2 } from "../../assets"
import { useState } from "react"
import *as S from "./styles"
import Nav from "../Nav"
import Header from "../Main/Header"

const SelectBox = () => {
  const [major, setMajor] = useState("전체")
  const [active, setActive] = useState(false)
  const Majors = [
    { value: "전체" },
    { value: "Frontend" },
    { value: "Backend" },
    { value: "App" },
    { value: "기타" },
    { value: "1학년" },
    { value: "2학년" },
    { value: "3학년" }
  ]
  return (
    <S.Head>
      <S.Title>{major}</S.Title>
      <S.Select>
        <button onClick={() => setActive(!active)}>
          {major}
          <img src={Down2} />
        </button>
        {active &&
          <S.OptionList>
            {Majors.map((list) => (
              <S.OptionItem onClick={() => setMajor(list.value)} >{list.value}</S.OptionItem>
            ))}
          </S.OptionList>}
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