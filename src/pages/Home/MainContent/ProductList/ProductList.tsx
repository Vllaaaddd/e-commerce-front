import { FC } from 'react';
import ProductItem from '../ProductItem';
import { IProduct } from '../../../../types/product';
import { Container, Title, Wrapper } from './ProductList.styles';
interface IProductListProps {
  categoryTitle: string;
  itemsList: IProduct[];
}

const ProductList: FC<IProductListProps> = ({ categoryTitle, itemsList }) => {
  return (
    <>
      <Container>
        <Title>{categoryTitle}</Title>
        <Wrapper>
          {itemsList.map((item) => (
            <ProductItem item={item} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default ProductList;
