import React from "react";
import { Nav, StyledHeader, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="../logo.svg" />
          <Button>try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities, you have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion
            </p>
            <Button back="#ff0099" color="#fff">
              Get Started For free
            </Button>
          </div>

          <Image src="../illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
