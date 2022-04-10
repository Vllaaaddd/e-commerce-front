import {
  AppstoreOutlined,
  AudioFilled,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons/lib/icons';
import React from 'react';
import ModalWindow from '../ModalWindow';
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
  Language
} from './Navbar.styles';

const Navbar = () => {
  return (
    <Container>
      <Left>
        <MenuOutlined
          style={{
            color: 'white',
            cursor: 'pointer',
            transform: 'scale(1.3)',
            marginRight: '10px'
          }}
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='60'
          height='60'
          style={{
            transform: 'scale(0.8)'
          }}
        >
          <g>
            <title>Layer 1</title>
            <path
              id='svg_5'
              d='m412.34991,122.50974c-86.98567,0 -157.5,70.5134 -157.5,157.49997c0,86.98474 70.51432,157.50002 157.5,157.50002c86.98668,0 157.5,-70.51528 157.5,-157.50002c0,-86.98657 -70.51332,-157.49997 -157.5,-157.49997zm13.60039,242.89108l0,22.18428l-21.21811,0l0,-21.93433c-34.81846,-4.76833 -50.07644,-33.37677 -50.07644,-33.37677l21.69542,-18.12898c0,0 13.82777,24.09002 38.86048,24.09002c13.82666,0 24.31726,-7.40144 24.31726,-20.0387c0,-29.57146 -79.63869,-25.98556 -79.63869,-80.82944c0,-23.84209 18.83386,-41.01819 44.83069,-45.06952l0,-22.18206l21.21899,0l0,22.16979c18.11879,2.38519 39.57549,11.92196 39.57549,32.43432l0,15.73533l-28.13295,0l0,-7.62876c0,-7.86686 -10.02361,-13.11281 -21.22832,-13.11281c-14.30416,0 -24.79481,7.15177 -24.79481,17.16585c0,30.2766 79.63867,22.88717 79.63867,80.35416c0.01138,23.61241 -17.63083,44.11641 -45.04767,48.16765l0,-0.00001l-0.00001,-0.00002z'
              stroke='#000'
              fill='#00a046'
            />
            <path
              id='svg_1'
              d='m30.32696,5.22774c-13.16781,0 -23.84219,10.67425 -23.84219,23.84219c0,13.16766 10.67439,23.8422 23.84219,23.8422c13.16796,0 23.84219,-10.67453 23.84219,-23.8422c0,-13.16794 -10.67424,-23.84219 -23.84219,-23.84219zm2.05881,36.76861l0,3.35823l-3.21198,0l0,-3.3204c-5.27078,-0.72183 -7.58052,-5.05254 -7.58052,-5.05254l3.28423,-2.74435c0,0 2.09323,3.64672 5.88266,3.64672c2.09307,0 3.68112,-1.12042 3.68112,-3.03344c0,-4.4765 -12.05563,-3.93367 -12.05563,-12.23588c0,-3.60919 2.85105,-6.20929 6.78642,-6.82258l0,-3.3579l3.21211,0l0,3.35604c2.7428,0.36107 5.9909,1.80473 5.9909,4.90987l0,2.382l-4.25874,0l0,-1.15483c0,-1.19088 -1.51736,-1.985 -3.21352,-1.985c-2.16535,0 -3.75341,1.08263 -3.75341,2.59855c0,4.58324 12.05562,3.46464 12.05562,12.16393c0.00172,3.57442 -2.66894,6.6783 -6.81927,7.29157l0,0z'
              stroke='#000'
              fill='#00a046'
            />
          </g>
        </svg>
        <Name>OUTLET</Name>
        <Catalog>
          <AppstoreOutlined style={{ margin: '3px' }} />
          Каталог
        </Catalog>
      </Left>
      <Center>
        <Input placeholder='Я ищу...'></Input>
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
            <ModalWindow />
          </li>
          <li>
            <ShoppingCartOutlined
              style={{
                color: 'white',
                cursor: 'pointer',
                transform: 'scale(1.5)'
              }}
            />
          </li>
        </ul>
      </Right>
    </Container>
  );
};

export default Navbar;
