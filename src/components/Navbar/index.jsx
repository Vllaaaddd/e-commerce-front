import React from "react";
import { Center, Container, Left, Right, Wrapper } from "./Navbar.styles";
import { LoginOutlined } from "@ant-design/icons/lib/icons";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center></Center>
        <Right>
          <LoginOutlined />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
