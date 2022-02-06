import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons/lib/icons";
import { Button } from "antd";
import React from "react";
import { Container, Label, SocialBtn } from "./ModalSocial.styles";

const ModalSocial = () => {
  return (
    <Container>
      <Label>Войти как пользователь</Label>
      <SocialBtn>
        <FacebookOutlined style={{ color: "#4267B2", margin: "0px 4px" }} />
        Facebook
      </SocialBtn>
      <SocialBtn>
        <GoogleOutlined style={{ color: "#DB4437", margin: "0px 4px" }} />
        Google
      </SocialBtn>
    </Container>
  );
};

export default ModalSocial;
