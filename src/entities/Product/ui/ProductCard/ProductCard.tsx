// src/entities/product/ui/ProductCard/ProductCard.tsx
import * as React from 'react';
import clsx from 'clsx';
import { IProduct } from '../../model/types';
import { ProductCardImage } from './ProductCardImage';
import { ProductCardInfo } from './ProductCardInfo';
import { ProductCardActions } from './ProductCardActions';

type Props = {
  product: IProduct;
  onAddToCart?: () => void;
  onToggleLike?: () => void;
  showStockStatus?: boolean;
};

export const ProductCard: React.FC<Props> = ({
  product,
  onAddToCart,
  onToggleLike,
  showStockStatus = true,
}) => (
  <article
    role="group"
    aria-labelledby={`product-title-${product.id}`}
    className={clsx(
      'max-w-[264px] h-[434px] group relative rounded-lg bg-white-0 overflow-hidden',
      'flex flex-col justify-between transition-shadow',
      'group-hover:shadow-lg outline-transparent',
    )}
  >
    <ProductCardImage
      image={product.image}
      title={product.title}
      isInStock={product.isInStock ?? true}
      onAddToCart={onAddToCart}
    />

    <ProductCardInfo
      id={product.id}
      title={product.title}
      price={product.price}
      isInStock={product.isInStock ?? true}
      showStockStatus={showStockStatus}
    />

    <ProductCardActions
      title={product.title}
      isLiked={product.isLiked ?? false}
      onToggleLike={onToggleLike}
    />
  </article>
);
