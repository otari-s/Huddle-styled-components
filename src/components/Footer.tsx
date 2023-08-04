import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="../logo_white.svg" alt="" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              quo consectetur delectus,
            </li>
            <li>+1-456-456-7863</li>
            <li>example@.gmail.com</li>
          </ul>
          <ul>
            <li>About us</li>
            <li>What we do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>
        <p>&copy; 2023 Huddle. All right reserved</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
