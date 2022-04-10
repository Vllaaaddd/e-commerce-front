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
import { EyeOutlined } from "@ant-design/icons/lib/icons";
import ModalSocial from "../ModalSocial";
import { Checkbox } from "antd";

const LoginForm = ({ visibility }) => {
  return (
    <Container>
      <Form>
        <Left>
          <Label>Эл. почта или телефон</Label>
          <Input></Input>

          <Label>Пароль</Label>
          <Fieldset>
            <Input></Input>

            <EyeOutlined style={{ margin: "0 0 3% 3%" }} />
          </Fieldset>

          <Remember>Запомнить меня</Remember>

          <Submit>Войти</Submit>

          <Rlink>
            <a onClick={() => visibility()} target="_blank">
              Зарегестрироваться
            </a>
          </Rlink>
          <Divider>или</Divider>
        </Left>
        <Right>
          <ModalSocial />
        </Right>
      </Form>
    </Container>
  );
};

export default LoginForm;
