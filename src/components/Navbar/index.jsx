import React from "react";
import RegistrationForm from "../RegistrationForm";
import { Center, Container, Left, Right, Wrapper } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <RegistrationForm />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
