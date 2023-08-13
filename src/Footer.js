import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterFixed = styled.footer`
  background: transparent;
  padding: 1rem 1.3rem;
  font-size: 1.3rem;
  font-weight: bold;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  display: flex;
`;

const Button = styled(Link)`
  border: none;
  margin: 0;
  padding: 12px;
  width: 80%;
  overflow: visible;
  color: white;
  font: inherit;
  border-radius: 20px;
  max-width: 500px;
  background-color: #1677ff;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  transition: all 0.3 ease-in;
  opacity: ${({ isvisible }) => isvisible};
  transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out,
    filter 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #4096ff;
  }
  &:active {
    background-color: #4096ff;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration-line: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Fab = styled(Button)`
  font-size: 2.3rem;
  width: 58px;
  height: 58px;
  padding: 0;
  border-radius: 50%;
  position: fixed;
  bottom: 6rem;
  right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  &:hover {
    background-color: white;
    filter: brightness(90%);
  }
  &:active {
    background-color: white;
    filter: brightness(90%);
  }
`;

function Footer() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Fab isvisible={isButtonVisible ? 1 : 0} onClick={scrollToTop}>
        <span
          style={{ fontSize: "inherit" }}
          className="material-symbols-outlined"
        >
          expand_less
        </span>
      </Fab>

      <Fab
        to="https://www.instagram.com/ku_maniddo/"
        isvisible={isButtonVisible ? 1 : 0}
        style={{
          color: "white",
          bottom: "11rem",
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
        }}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </Fab>

      <FooterFixed>
        <Button
          to="https://forms.gle/PWEJraHexknxPV79A"
          isvisible={isButtonVisible ? 1 : 0}
        >
          구글 폼에서 구매하기
        </Button>
      </FooterFixed>
    </>
  );
}

export default Footer;
