import * as React from 'react';
import { useGetProductsQuery } from '../../api/productApi';
import { ProductCardList } from '../ProductCardList/ProductCardList';

export const ProductList = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load products</div>;
  if (!products || products.length === 0) return <div>No products found</div>;

  return (
    <ProductCardList products={products} ariaLabel="Product catalog" />
  );
};
