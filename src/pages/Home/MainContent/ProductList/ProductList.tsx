import React from 'react';
import ProductItem from '../ProductItem';
import { Container, Title, Wrapper } from './ProductList.styles';
import { popularProducts, hotProducts } from '../../../../data';

const ProductList = () => {
  return (
    <>
      <Container>
        <Title>Популярные товары</Title>
        <Wrapper>
          {popularProducts.map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </Wrapper>
        <Title>Горячие новинки</Title>
        <Wrapper>
          {hotProducts.map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default ProductList;
