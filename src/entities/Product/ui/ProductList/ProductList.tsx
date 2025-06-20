import * as React from 'react';
import { useGetProductsQuery } from '../../api/productApi';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductList = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load products</div>;
  if (!products || products.length === 0) return <div>No products found</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
