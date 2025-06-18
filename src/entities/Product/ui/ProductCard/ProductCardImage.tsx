// src/entities/product/ui/ProductCard/ProductCardImage.tsx
import * as React from 'react';
import clsx from 'clsx';
import { Button } from '../../../../shared/ui/Button';
import ShoppingCartIcon from '../../../../shared/assets/icons/add-to-cart_white.svg?react';

type Props = {
  image: string;
  title: string;
  isInStock: boolean;
  onAddToCart?: () => void;
};

export const ProductCardImage: React.FC<Props> = ({
  image,
  title,
  isInStock,
  onAddToCart,
}) => (
  <div className="relative rounded-lg bg-white-100 h-[312px] overflow-hidden">
    <div
      className={clsx(
        isInStock ? 'h-[260px]' : 'h-full',
        'relative overflow-hidden',
      )}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 bg-white-0/50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
      />
    </div>
    <div className="h-12 w-full absolute left-0 bottom-0">
      <Button
        onClick={onAddToCart}
        disabled={!isInStock}
        aria-disabled={!isInStock}
        squareCorners
        renderStartIcon={<ShoppingCartIcon className="h-5 w-5" aria-hidden="true" />}
        className={clsx(
          'w-full transition-opacity',
          isInStock
            ? 'opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
            : 'sr-only',
        )}
        aria-label={
          isInStock
            ? `Add ${title} to cart`
            : `${title} is out of stock`
        }
      >
        {isInStock ? 'Add to cart' : 'Out of stock'}
      </Button>
    </div>
  </div>
);
