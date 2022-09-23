import * as S from "./styles";
import { Logo } from "../../../assets";
import { Search } from "../../../assets";

function Header() {
  return (
    <S.header>
      <img src={Logo} />
      <S.searchBar>
        <S.searchInput placeholder="검색" type="search" />
        <img src={Search}></img>
      </S.searchBar>
    </S.header>
  );
}

export default Header;
