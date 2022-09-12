import Link from "../UI/Link/Link";
import styled, { keyframes } from "styled-components";
import logo from "../../assets/hackclub-pypro-logo.png";
import { colors } from "../../constants/colors";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router";
const Navbar = () => {
  const [navbarStyle, setNavbarStyle] = useState(0);
  const [menu, setMenu] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();

  navRef.current = navbarStyle;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70;
      if (show) {
        setNavbarStyle(1);
      } else {
        setNavbarStyle(0);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigateHome = () => {
    setMenu(false);
    navigate("/");
  };
  const navigateBlog = () => {
    setMenu(false);
    navigate("/blog");
  };
  const navigateEvents = () => {
    setMenu(false);
    navigate("/events");
  };
  const navigateProjects = () => {
    setMenu(false);
    navigate("/projects");
  };
  const menuHandler = () => {
    setMenu(!menu);
  };
  if (menu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
  const Component = styled.div`
    height: 64px;
    position: fixed;
    display: flex;
    width: 100%;
    background-color: rgba(10, 10, 10, ${navRef.current});
    z-index: 100;
    @media (max-width: 400px) {
      height: 56px;
    }
  `;
  return (
    <>
      <Component>
        <Container>
          <Logo src={logo} alt="hackclub" onClick={navigateHome} />
          <Menu>
            {menu ? (
              <AiOutlineClose
                style={{ color: "white" }}
                onClick={menuHandler}
              />
            ) : (
              <AiOutlineMenu style={{ color: "white" }} onClick={menuHandler} />
            )}
          </Menu>
          <Tabs>
            <Tab>
              <Link to="/blog" color="white">
                Blog
              </Link>
            </Tab>
            <Tab>
              <Link to="/events" color="white">
                Events
              </Link>
            </Tab>
            <Tab>
              <Link to="/projects" color="white">
                Projects
              </Link>
            </Tab>
            <Tab>
              {/* <Link to="/" color="white">
              Join Us
            </Link> */}
              <Button color="white" bgColor="#ff454e" size={14}>
                Join US
              </Button>
            </Tab>
          </Tabs>
        </Container>
      </Component>
      {menu && (
        <MenuComponent>
          <MenuContainer>
            <MenuItem onClick={navigateBlog}>Blog</MenuItem>
            <MenuItem onClick={navigateEvents}>Events</MenuItem>
            <MenuItem onClick={navigateProjects}>Projects</MenuItem>
            <MenuItem onClick={navigateHome}>Join US</MenuItem>
          </MenuContainer>
        </MenuComponent>
      )}
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0px 100px;
  align-items: center;

  @media (max-width: 400px) {
    margin: 0px 8px;
    width: 90%;
  }
`;
const Logo = styled.img`
  width: 120px;
  cursor: pointer;
  @media (max-width: 400px) {
    width: 100px;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 30px;
  margin-left: auto;
  align-items: center;
  @media (max-width: 400px) {
    display: none;
  }
`;
const Tab = styled.div``;

const Menu = styled.div`
  display: none;
  @media (max-width: 400px) {
    display: block;
    margin-left: auto;
    * {
      font-size: 30px;
    }
  }
`;
const MenuComponent = styled.div`
  height: 100vh;
  background-color: #000;
  position: fixed;
  width: 100%;
  z-index: 50;
`;
const MenuKeyframes = keyframes`
  0% {top: -500px};
  100% {top: 0};
`;
const MenuContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  animation-name: ${MenuKeyframes};
  animation-duration: 0.2s;
`;
const MenuItem = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 600;
`;
