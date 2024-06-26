import { SlMagnifier } from "react-icons/sl";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <HeaderAll>
        <HeaderNav>
          <Link to={"/"}>
            <HeaderLogo>
              <img
                src="https://github.com/JNU-econovation/LIB_FE/assets/144216731/e6cef398-e6f0-4dd5-af1f-6a31e9f48655"
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
            </HeaderLogo>
          </Link>
          <Search style={{margin: '0 2.3rem'}}>
            <Input type="text" placeholder="검색어를 입력하세요" />
            <SlMagnifier
              style={{
                fontSize: "1.2rem",
                marginLeft: "-2.2rem",
              }}
            />
          </Search>
          <HeaderUrls style={{ margin: "0 1.5rem 0 2.3rem" }}>
            <Link to={"/my-record"}>
              <HeaderUrl>나의 기록</HeaderUrl>
            </Link>
            <Link to={"/record"}>
              <HeaderUrl>기록하기</HeaderUrl>
            </Link>
          </HeaderUrls>
          <HeaderUrls style={{ margin: "0 0.5rem" }}>
            {/* <Link to={"/log-in"}>
              <HeaderUrlLogin as={'p'}>로그인</HeaderUrlLogin>
            </Link> */}
            <Link to={'/my-page'}>
              <FaRegUser style={{fontSize: '30px', color: '#000000', margin: ' 0 10px 0 15px'}}/>  
            </Link>
            <HeaderUrlLogin as={'p'} style={{}}>로그아웃</HeaderUrlLogin>
          </HeaderUrls>
        </HeaderNav>
      </HeaderAll>
      <Outlet />
    </div>
  );
}

const HeaderAll = styled.header`
  width: 100%;
  height: 6.3rem;
  border-bottom: 0.06rem solid;
  background-color: #ffffff;
`;
const HeaderNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
const HeaderLogo = styled.div`
  width: 13rem;
  height: 4rem;
  margin: 0 3rem 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000000;
  cursor: pointer;
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 27rem;
  height: 2.5rem;
  border: 1.4px solid #4eac27;
  border-radius: 7px;
  margin: 0;
  padding: 0 1rem;
  &::placeholder {
    font-size: 1rem;
  }
`;
const HeaderUrls = styled.div`
  display: flex;
  justify-content: center;
`;
const HeaderUrl = styled.div`
  margin: 0 1rem;
  font-size: 1.1rem;
  color: #000000;
  cursor: pointer;
  &:hover {
    color: #393939;
  }
`;
const HeaderUrlLogin = styled(HeaderUrl)`
  padding: 10px 20px;
  font-size: 0.9rem;
  color: #ffffff;
  background: #434343;
  border-radius: 10px;
  &:hover {
    color: #ffffff;
  }
`
