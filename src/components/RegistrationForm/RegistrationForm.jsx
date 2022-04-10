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
import { EyeOutlined } from "@ant-design/icons/lib/icons";
import ModalSocial from "../ModalSocial";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { schema, defaultValues } from "../../validators/registration";
import { registration } from "./constants";

const RegistrationForm = ({ visibility }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  async function onSubmit(data) {
    const responce = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    console.log(responce.data);
  }
  return (
    <Container>
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
                {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
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
              положения о сборе и защите персональных данных и пользовательским
              соглашением
            </a>
          </Acception>
          <Submit type="submit">Зарегистрироваться</Submit>
          <Rlink>
            <a onClick={() => visibility()} target="_blank">
              Я уже зарегестрирован
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

export default RegistrationForm;
