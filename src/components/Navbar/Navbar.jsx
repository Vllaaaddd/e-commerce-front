import { useState } from 'react';
import { AppstoreOutlined, MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons/lib/icons';
import ModalWindow from '../ModalWindow';
import { LoginOutlined } from '@ant-design/icons';
import {
  Center,
  Container,
  Left,
  Name,
  Right,
  Catalog,
  Input,
  Search,
  Language
} from './Navbar.styles';
import Logo from './Logo';
import { useTranslation } from 'react-i18next';

const styles = {
  menuOutlined: {
    color: 'white',
    cursor: 'pointer',
    transform: 'scale(1.3)',
    marginRight: '10px'
  },
  appstoreOutlined: {
    margin: '3px'
  },
  shoppingCartOutlined: {
    color: 'white',
    cursor: 'pointer',
    transform: 'scale(1.5)'
  },
  loginOutlined: { color: 'white', cursor: 'pointer', transform: 'scale(1.32)' }
};

const Navbar = () => {
  const [isModalWindowActive, setIsModalWindowActive] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Container>
      <Left>
        <MenuOutlined style={styles.menuOutlined} />
        <Logo />
        <Name>OUTLET</Name>
        <Catalog>
          <AppstoreOutlined style={styles.appstoreOutlined} />
          Каталог
        </Catalog>
      </Left>
      <Center>
        <Input placeholder='Я ищу...' />
        <Search>Найти</Search>
      </Center>
      <Right>
        <ul>
          <li>
            <Language>
              <a onClick={() => changeLanguage('en')}>EN</a>
              <a onClick={() => changeLanguage('ua')}>UA</a>
            </Language>
          </li>
          <li>
            <LoginOutlined
              onClick={() => setIsModalWindowActive(true)}
              style={styles.loginOutlined}
            />
            <ModalWindow
              isModalWindowActive={isModalWindowActive}
              setIsModalWindowActive={setIsModalWindowActive}
            />
          </li>
          <li>
            <ShoppingCartOutlined style={styles.shoppingCartOutlined} />
          </li>
        </ul>
      </Right>
    </Container>
  );
};

export default Navbar;
