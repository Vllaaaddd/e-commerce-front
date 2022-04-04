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
  Divider,
} from "./RegistrationForm.styles";
import { LoginOutlined, EyeOutlined } from "@ant-design/icons/lib/icons";
import { useState } from "react";
import { Modal, Button } from "antd";
import LoginForm from "../LoginForm";
import ModalSocial from "../ModalSocial";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
  firstName: yup.string().required("Введите свое имя на кириллице"),
  lastName: yup.string().required("Введите свою фамилию на кириллице"),
  phone: yup.string().required("Введите свой номер телефона"),
  email: yup.string().email().required("Введите свою эл. почту"),
  password: yup.string().required("Введите пароль"),
});

const RegistrationForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    reset();
    setIsModalVisible(false);
  };

  const showLogin = () => {
    setIsModalVisible(false);
    setLoginVisible(true);
  };

  async function onSubmit(data) {
    const responce = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    console.log(responce.data);
  }

  return (
    <Container>
      <a type="primary" onClick={showModal} style={{ color: "white" }}>
        Зарегестрироваться
      </a>
      <Modal
        title="Регистрация"
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={null}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Left>
            <Label>Имя</Label>
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <>
                  <Input {...field}></Input>
                  {errors.firstName?.message && (
                    <p>{errors.firstName?.message}</p>
                  )}
                </>
              )}
            />
            <Label>Фамилия</Label>
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <>
                  <Input {...field}></Input>
                  {errors.lastName?.message && (
                    <p>{errors.lastName?.message}</p>
                  )}
                </>
              )}
            />
            <Label>Номер телефона</Label>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <>
                  <Input {...field}></Input>
                  {errors.phone?.message && <p>{errors.phone?.message}</p>}
                </>
              )}
            />
            <Label>Эл. почта</Label>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <>
                  <Input {...field}></Input>
                  {errors.email?.message && <p>{errors.email?.message}</p>}
                </>
              )}
            />
            <Label>Придумайте пароль</Label>
            <Fieldset>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <>
                    <Input {...field}></Input>
                  </>
                )}
              />
              <EyeOutlined style={{ margin: "0 0 3% 3%" }} />
            </Fieldset>
            {errors.password?.message && <p>{errors.password?.message}</p>}
            <Acception>
              Регистрируясь, вы соглашаетесь с условиями
              <a target="_blank" href="https://rozetka.com.ua/pages/privacy/">
                {" "}
                положения о сборе и защите персональных данных и
                пользовательским соглашением
              </a>
            </Acception>
            <Submit type="submit">Зарегистрироваться</Submit>
            <Rlink>
              <a onClick={handleCancel} target="_blank">
                Я уже зарегестрирован
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

export default RegistrationForm;
