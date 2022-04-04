import {
  AppstoreOutlined,
  AudioFilled,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons/lib/icons';
import React from 'react';
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm';
import {
  Center,
  Container,
  Left,
  Name,
  Right,
  Wrapper,
  Catalog,
  SearchContainer,
  Input,
  Search,
  Language,
} from './Navbar.styles';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuOutlined style={{ color: 'white', cursor: 'pointer' }} />
          <Name>OUTLET</Name>
          <Catalog>
            <AppstoreOutlined style={{ margin: '3px' }} />
            Каталог
          </Catalog>
        </Left>
        <Center>
          <Input placeholder='Я ищу...'></Input>
          <AudioFilled />
          <Search>Найти</Search>
        </Center>
        <Right>
          <ul>
            <li>
              <Language>
                <a>RU</a>
                <a>UA</a>
              </Language>
            </li>
            <li>
              <RegistrationForm />
            </li>
            <li>
              <ShoppingCartOutlined
                style={{ color: 'white', cursor: 'pointer' }}
              />
            </li>
          </ul>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
