import * as React from 'react';
import clsx from 'clsx';
import { ProductCard } from '../ProductCard/ProductCard';
import { IProduct } from '../../model/types';

interface ProductCardListProps {
  products: IProduct[];
  ariaLabel: string;
  className?: string;
  onAddToCart?: (product: IProduct) => void;
  onToggleLike?: (product: IProduct) => void;
}

export const ProductCardList: React.FC<ProductCardListProps> = React.memo(({
  products,
  ariaLabel,
  className,
  onAddToCart,
  onToggleLike,
}) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <ol
      aria-label={ariaLabel}
      className={clsx(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6',
        className,
      )}
    >
      {products.map((product) => (
        <li
          key={product.id}
          role="group"
          aria-labelledby={`product-title-${product.id}`}
        >
          <ProductCard
            product={product}
            onAddToCart={() => onAddToCart?.(product)}
            onToggleLike={() => onToggleLike?.(product)}
          />
        </li>
      ))}
    </ol>
  );
});
