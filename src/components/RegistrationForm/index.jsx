import React from "react";
import {
  Acception,
  Container,
  Form,
  Input,
  Label,
  Left,
  Right,
  Submit,
  Rlink,
  Fieldset,
} from "./RegistrationForm.styles";
import { LoginOutlined, EyeOutlined } from "@ant-design/icons/lib/icons";
import { useState } from "react";
import { Modal, Button } from "antd";

const RegistrationForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <LoginOutlined
        onClick={showModal}
        style={{ color: "black" }}
      ></LoginOutlined>
      <Form
        title="Регистрация"
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={null}
      >
        <Left>
          <Label>Имя</Label>
          <Input></Input>

          <Label>Фамилия</Label>
          <Input></Input>

          <Label>Номер телефона</Label>
          <Input></Input>

          <Label>Эл. почта</Label>
          <Input></Input>

          <Label>Придумайте пароль</Label>
          <Fieldset>
            <Input></Input>
            <EyeOutlined style={{ margin: "0 0 3% 3%" }} />
          </Fieldset>

          <Acception>
            Регистрируясь, вы соглашаетесь с условиями
            <a target="_blank" href="https://rozetka.com.ua/pages/privacy/">
              {" "}
              положения о сборе и защите персональных данных и пользовательским
              соглашением
            </a>
          </Acception>

          <Submit onClick={handleOk}>Зарегистрироваться</Submit>

          <Rlink>
            <a onClick={handleCancel} target="_blank">
              Я уже зарегестрирован
            </a>
          </Rlink>
        </Left>
        <Right></Right>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
