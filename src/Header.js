import styled from "styled-components";

const HeaderFixed = styled.header`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 1.2rem;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.89;
`;

function Header() {
  return (
    <HeaderFixed>
      <h3>
        기숙사<span style={{ color: "#1677ff" }}> 입소</span> 웰컴키트 🎁
      </h3>
    </HeaderFixed>
  );
}

export default Header;
