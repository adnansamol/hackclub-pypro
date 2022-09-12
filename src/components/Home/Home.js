import React from "react";
import styled from "styled-components";
import banner from "../../assets/home-banner.jpg";
import Card from "../UI/Card/Card";
import InnovationLogo from "../../assets/innovation-logo.png";
import InclusionLogo from "../../assets/inclusion-logo.png";
import InteractionLogo from "../../assets/interaction-logo.png";
import ProfilePic from "../../assets/blank-profile-picture.jpg";
import Button from "../UI/Button/Button";
import { ReactComponent as WhatsappSVG } from "../../assets/whatsapp-logo.svg";
import { ReactComponent as DiscordSVG } from "../../assets/discord-logo.svg";
const Home = () => {
  const navigateDiscord = () => {
    window.open("https://discord.gg/4zAxm7jgUB", "_blank");
  };
  const navigateWhatsapp = () => {
    window.open("https://chat.whatsapp.com/LLPH9hQj0leKuCV17hKZbr", "_blank");
  };
  //
  https: return (
    <Component>
      <Banner>
        <BannerMask>
          <TextContainer>
            <TagLine>
              Welcome to <br />
              <span style={{ color: "#f54254" }}>Hack Club</span>{" "}
              <span style={{ color: "#42eff5" }}>PyPro</span>!<br />
            </TagLine>
            <TagLine>
              Together we <span style={{ color: "#fddb27ff" }}>learn</span>,
              Together we <span style={{ color: "#39ff14" }}>grow</span>!
            </TagLine>
          </TextContainer>
          <ButtonContainer>
            <Button
              color="white"
              bgColor="linear-gradient(30deg, rgb(39, 97, 116) 0%, rgb(51, 197, 141) 50%, rgb(99, 253, 135) 100%)"
              size="16px"
              onClick={navigateWhatsapp}
            >
              <WhatsappSVG style={{ width: 50, height: 50, marginRight: 10 }} />
              Join Whatsapp Community
            </Button>
            <Button
              color="white"
              size="16px"
              bgColor="linear-gradient(30deg, rgb(92, 39, 116) 0%, rgb(51, 92, 197) 50%, rgb(99, 127, 253) 100%)"
              onClick={navigateDiscord}
            >
              <DiscordSVG style={{ width: 45, height: 45, marginRight: 10 }} />
              Join Discord Community
            </Button>
          </ButtonContainer>
        </BannerMask>
      </Banner>
      <BottomContainer>
        <CommunitySection>
          <Title>About Community</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            dolorum! Aliquam, vitae libero itaque eaque harum facere!
            Consectetur, aliquam at natus ad hic animi aut corrupti. Aspernatur
            labore aliquid quaerat facere aliquam est exercitationem sit
            necessitatibus adipisci. Pariatur, quisquam ad facere non
            consequatur nostrum perferendis enim voluptatum earum ipsa magni
            beatae odio consectetur, reiciendis, libero a! Sunt rerum quis
            dignissimos consectetur et dolore perspiciatis sequi, iusto nesciunt
            assumenda provident molestias velit adipisci aperiam officiis
            aspernatur. Pariatur dolorem, et quam libero suscipit quae odio
            autem reprehenderit nesciunt repellendus nostrum aliquid
            accusantium? Impedit repudiandae, ipsum culpa temporibus quo
            perspiciatis quibusdam. Dolorum, recusandae.
          </Text>
        </CommunitySection>
        <ValuesSection>
          <Card CustomStyle={ValueCard}>
            <Image src={InnovationLogo} alt="innovation" />
            <ValueText>Innovation</ValueText>
          </Card>
          <Card CustomStyle={ValueCard}>
            <Image src={InclusionLogo} alt="inclusion" />
            <ValueText>Inclusion</ValueText>
          </Card>
          <Card CustomStyle={ValueCard}>
            <Image src={InteractionLogo} alt="interaction" />
            <ValueText>Interaction</ValueText>
          </Card>
        </ValuesSection>

        <TeamSection>
          <Title>Our Team</Title>
          <Grid>
            <Card CustomStyle={TeamCard}>
              <ProfileImage src={ProfilePic} alt="pfp" />
              <NameText>Shivlal Sharma</NameText>
              <RoleText>Community Lead</RoleText>
            </Card>
            <Card CustomStyle={TeamCard}>
              <ProfileImage src={ProfilePic} alt="pfp" />
              <NameText>Nidhir Bhatt</NameText>
              <RoleText>Community Manager</RoleText>
            </Card>
            <Card CustomStyle={TeamCard}>
              <ProfileImage src={ProfilePic} alt="pfp" />
              <NameText>Adnan Samol</NameText>
              <RoleText>Community Manager</RoleText>
            </Card>
            <Card CustomStyle={TeamCard}>
              <ProfileImage src={ProfilePic} alt="pfp" />
              <NameText>Tejas Tank</NameText>
              <RoleText>Community Manager</RoleText>
            </Card>
            <Card CustomStyle={TeamCard}>
              <ProfileImage src={ProfilePic} alt="pfp" />
              <NameText>Aaditya Champaneri</NameText>
              <RoleText>Community Manager</RoleText>
            </Card>
            <Card CustomStyle={TeamCard}>
              <ProfileImage src={ProfilePic} alt="pfp" />
              <NameText>Dvip Patel</NameText>
              <RoleText>Community Manager</RoleText>
            </Card>
          </Grid>
        </TeamSection>
      </BottomContainer>
    </Component>
  );
};

export default Home;

const Component = styled.div`
  display: flex;
  flex-direction: column;
`;

const Banner = styled.div`
  height: 600px;
  width: 100%;
  background-color: black;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 400px) {
    height: 700px;
    background-position: center;
  }
`;
const BannerMask = styled.div`
  height: inherit;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 400px) {
    justify-content: space-around;
    align-items: center;
  }
`;
const TextContainer = styled.p`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2em;
  margin-top: 50px;
  @media (max-width: 400px) {
    width: 90%;
  }
`;
const TagLine = styled.p`
  margin: 0;
  font-size: 72px;
  color: white;
  text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  font-family: "Righteous";
  &:last-child {
    font-size: 56px;
  }
  @media (max-width: 400px) {
    font-size: 56px;
    &:last-child {
      font-size: 36px;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    align-items: center;
    margin-top: 0;
    margin-bottom: 24px;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5em;
  margin: 48px 0;

  @media (max-width: 400px) {
    gap: 3em;
  }
`;
const Title = styled.p`
  font-size: 2em;

  text-transform: uppercase;
  margin: 0;
  margin-bottom: 48px;
  font-family: "Righteous";
  @media (max-width: 400px) {
    font-size: 24px;
  }
`;
const Text = styled.p`
  margin: 0;
  font-size: 18px;

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;
const CommunitySection = styled.div`
  width: 60%;
  margin-left: 100px;

  @media (max-width: 400px) {
    margin-left: 18px;
    width: 90%;
  }
`;

const ValuesSection = styled.div`
  display: flex;
  height: fit-content;
  background-color: #ffe8d5;
  padding: 40px;
  justify-content: center;
  gap: 8em;

  @media (max-width: 400px) {
    gap: 2em;
    flex-direction: column;
    align-items: center;
  }
`;
const ValueCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  background: linear-gradient(
    45deg,
    rgba(255, 75, 167, 1) 0%,
    rgba(255, 218, 71, 1) 100%
  );
  transition: transform 0.2s;
  padding: 24px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
  }
`;
const ValueText = styled.p`
  margin: 0;
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 400) {
    font-size: 14px;
  }
`;
const Image = styled.img`
  width: 200px;
  height: 200px;

  @media (max-width: 400) {
    width: 100px;
    height: 100px;
  }
`;

const TeamSection = styled.div`
  width: fit-content;
  margin-left: 100px;
  margin: auto;
  @media (max-width: 400px) {
    margin-left: 18px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 4em;
  row-gap: 2em;

  @media (max-width: 400px) {
    grid-template-columns: auto auto;
    column-gap: 1em;
    row-gap: 1em;
  }
`;
const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #34ebd9;
  width: 180px;
  height: 200px;
  padding: 24px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 400px) {
    width: 140px;
    height: 160px;
    padding: 14px;
  }
`;
const NameText = styled.p`
  margin: 0;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;
const RoleText = styled.p`
  margin: 0;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const ProfileImage = styled.img`
  width: 120px;
  border-radius: 50%;

  @media (max-width: 400px) {
    width: 90px;
  }
`;
