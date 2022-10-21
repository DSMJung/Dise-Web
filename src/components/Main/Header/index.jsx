import * as S from "./styles";
import { Logo } from "../../../assets";
import { Search } from "../../../assets";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <S.header>
      <img
        onClick={() => {
          navigate(`/main`);
        }}
        src={Logo}
      />
      <S.searchBar>
        <S.searchInput placeholder="검색" type="search" />
        <img src={Search}></img>
      </S.searchBar>
    </S.header>
  );
}

export default Header;
