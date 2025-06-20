import * as React from 'react';
import { useGetProductsQuery } from '../../api/productApi';

export const ProductList = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load products</div>;

  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>
          {product.title}
          {' '}
          —
          {product.price}
          {' '}
          ₽
        </li>
      ))}
    </ul>
  );
};
