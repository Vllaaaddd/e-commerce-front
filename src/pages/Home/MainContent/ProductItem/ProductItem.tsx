import { HeartOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { string } from 'yup';
import { Container, Icon, Image, Info, Price } from './ProductItem.styles';

interface IProductItemProps {
  item: { img: string; description: string; price: string };
}

const ProductItem: FC<IProductItemProps> = ({ item }) => {
  return (
    <>
      <Container>
        <Icon>
          <HeartOutlined />
        </Icon>
        <Image src={item.img} />
        <Info>
          <a>{item.description}</a>
        </Info>
        <Price>{item.price}</Price>
      </Container>
    </>
  );
};

export default ProductItem;
