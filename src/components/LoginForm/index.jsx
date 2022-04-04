import React from "react";
import {
  Container,
  Form,
  Input,
  Label,
  Left,
  Right,
  Submit,
  Rlink,
  Fieldset,
  Remember,
  Divider,
} from "./LoginForm.styles";
import { LoginOutlined, EyeOutlined } from "@ant-design/icons/lib/icons";
import { useState } from "react";
import { Modal, Button } from "antd";
import RegistrationForm from "../RegistrationForm";
import ModalSocial from "../ModalSocial";

const LoginForm = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const showLogin = () => {
    setIsLoginVisible(true);
  };

  const handleOk = () => {
    setIsLoginVisible(false);
  };

  const handleCancel = () => {
    setIsLoginVisible(false);
  };

  return (
    <Container>
      <a type="primary" onClick={showLogin} style={{ color: "white" }}>
        Вход
      </a>
      <Modal
        title="Вход"
        onCancel={handleCancel}
        visible={isLoginVisible}
        footer={null}
      >
        <Form
          title="Вход"
          onCancel={handleCancel}
          visible={isLoginVisible}
          footer={null}
        >
          <Left>
            <Label>Эл. почта или телефон</Label>
            <Input></Input>

            <Label>Пароль</Label>
            <Fieldset>
              <Input></Input>

              <EyeOutlined style={{ margin: "0 0 3% 3%" }} />
            </Fieldset>

            <Remember>Запомнить меня</Remember>

            <Submit onClick={handleOk}>Войти</Submit>

            <Rlink>
              <a onClick={handleCancel} target="_blank">
                Зарегестрироваться
              </a>
            </Rlink>
            <Divider>или</Divider>
          </Left>
          <Right>
            <ModalSocial />
          </Right>
        </Form>
      </Modal>
    </Container>
  );
};

export default LoginForm;
