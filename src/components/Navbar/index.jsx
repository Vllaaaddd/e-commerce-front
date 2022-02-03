import React from "react";
import Register from "../Register";
import { Center, Container, Left, Right, Wrapper } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <Register />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
