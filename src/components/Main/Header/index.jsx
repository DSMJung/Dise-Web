import * as S from "./styles";
import { Logo } from "../../../assets";
import { Search } from "../../../assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Header() {
  const [keyword, setkeyword] = useState("");
  const [keywordList, setKeywordList]=useState([]);

  const getKeyword = async () => {
    await axios.get(`${BASE_URL}/feed/search/${keyword}`).then((Response)=>{
      console.log(Response);
      setKeywordList(Response.data.feed_list);
      console.log(keywordList);
    });
  };

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
        <S.searchInput
          onChange={(e) => {
            setkeyword(e.target.value);
          }}
          placeholder="검색"
          type="search"
        />
        <S.button onClick={getKeyword}>
          <img src={Search}></img>
        </S.button>
      </S.searchBar>
    </S.header>
  );
}

export default Header;
