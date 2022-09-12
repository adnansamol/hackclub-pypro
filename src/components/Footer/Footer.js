import React from "react";
import styled from "styled-components";
import HackClubLogo from "../../assets/hackclub-pypro-logo.png";
import { ReactComponent as LinkedinLogo } from "../../assets/linkedin-logo.svg";
import { ReactComponent as GithubLogo } from "../../assets/github-logo.svg";
import Link from "../UI/Link/Link";
const Footer = () => {
  const navigateLinkedin = () => {
    window.open("https://www.linkedin.com/company/hackclub-sal/");
  };
  const navigateGithub = () => {
    window.open("https://github.com/hackclubsal");
  };
  return (
    <Component>
      <Container>
        <LeftContainer>
          <Logo src={HackClubLogo} alt="logo" />
        </LeftContainer>
        <RightContainer>
          <Title>Get In Touch</Title>
          <Handles>
            <LinkedinLogo onClick={navigateLinkedin} />
            <GithubLogo onClick={navigateGithub} />
          </Handles>
        </RightContainer>
      </Container>
    </Component>
  );
};

export default Footer;

const Component = styled.div`
  height: 200px;
  background-color: rgba(0, 0, 0, 0.95);

  @media (max-width: 400px) {
    height: 150px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80%;

  @media (max-width: 400px) {
    width: 90%;
  }
`;
const Logo = styled.img`
  width: 200px;

  @media (max-width: 400px) {
    width: 100px;
  }
`;
const LeftContainer = styled.div`
  margin-left: 100px;

  @media (max-width: 400px) {
    margin-left: 20px;
  }
`;
const RightContainer = styled.div`
  margin-left: auto;
  color: white;
`;
const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;
const Handles = styled.div`
  display: flex;

  @media (max-width: 400px) {
    width: 100px;
  }
`;
