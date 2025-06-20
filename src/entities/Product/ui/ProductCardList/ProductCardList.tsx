// src/entities/product/ui/ProductCardList/ProductCardList.tsx

import * as React from 'react';
import clsx from 'clsx';
import { ProductCard } from '../ProductCard/ProductCard';
import { IProduct } from '../../model/types';

interface ProductCardListProps {
  /** Массив продуктов для отображения */
  products: IProduct[];
  /** Описание списка для скринридеров */
  ariaLabel: string;
  /** Дополнительные классы Tailwind для кастомизации сетки */
  className?: string;
  /** Обработчик клика «Add to cart» */
  onAddToCart?: (product: IProduct) => void;
  /** Обработчик клика «Like» */
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

  // Показываем не более 4 карточек
  const displayedProducts = products.slice(0, 4);

  return (
    <ol
      aria-label={ariaLabel}
      className={clsx(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6',
        className,
      )}
    >
      {displayedProducts.map((product) => (
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
