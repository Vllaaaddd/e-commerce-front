import { useState } from 'react';
import ProductList from '../ProductList';
import { IProduct } from '../../../../types/product';
import { popularProducts, hotProducts } from '../../../../data';

interface IProductListFromCategory {
  categoryTitle: string;
  products: IProduct[];
}

const Products = () => {
  const [products, setProducts] = useState<IProductListFromCategory[]>([
    { categoryTitle: 'Популярные товары', products: popularProducts },
    { categoryTitle: 'Горячие новинки', products: hotProducts }
  ]);

  return (
    <div>
      {products.map((product) => (
        <ProductList categoryTitle={product.categoryTitle} itemsList={product.products} />
      ))}
    </div>
  );
};

export default Products;
