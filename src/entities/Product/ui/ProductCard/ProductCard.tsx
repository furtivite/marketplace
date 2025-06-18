// src/entities/product/ui/ProductCard/ProductCard.tsx

import * as React from 'react';
import { Typography, TYPOGRAPHY_TYPES } from '../../../../shared/ui/Typography';
import { Button } from '../../../../shared/ui/Button';
import { IProduct } from '../../model/types';

import HeartIcon from '../../../../shared/assets/icons/heart_unfilled_gray.svg?react';
import HeartFilledIcon from '../../../../shared/assets/icons/heart_filled_gray.svg?react';
import ShoppingCartIcon from '../../../../shared/assets/icons/add-to-cart_white.svg?react';

type ProductCardProps = {
  product: IProduct;
  onAddToCart?: () => void;
  onToggleLike?: () => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product: {
    title,
    price,
    image,
    isInStock = true,
    isLiked = false,
  },
  onAddToCart,
  onToggleLike,
}) => (
  <article
    className="
      max-w-[264px] h-[475px] group relative rounded-lg bg-white-0 overflow-hidden
      transition-shadow
      group-hover:shadow-lg group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-primary
      group-focus-visible:shadow-lg group-focus-visible:ring-2 group-focus-visible:ring-offset-2 group-focus-visible:ring-primary group-focus-visible:outline-transparent
    "
  >
    <div className="rounded-lg overflow-hidden">
      <div className="relative h-[260px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div
          className="absolute inset-0 bg-white-0/50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        />
      </div>
      <div className="h-12">
        <Button
          onClick={onAddToCart}
          disabled={!isInStock}
          squareCorners
          renderStartIcon={<ShoppingCartIcon className="h-5 w-5" />}
          className="w-full opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          Add to cart
        </Button>
      </div>
    </div>

    <div className="p-4">
      <Typography as="h1" type={TYPOGRAPHY_TYPES.H5} className="mb-2 text-black">
        {title}
      </Typography>
      <div className="flex items-center justify-between">
        <Typography
          type={TYPOGRAPHY_TYPES.LABEL_UPPERCASE}
          className="px-2 py-0.5 border border-secondary rounded-lg"
        >
          {isInStock ? 'In Stock' : 'Out of Stock'}
        </Typography>
        <Typography type={TYPOGRAPHY_TYPES.BODY_REGULAR} className="text-primary">
          $
          {price.toFixed(2)}
        </Typography>
      </div>
    </div>

    <button
      type="button"
      onClick={onToggleLike}
      className="
        absolute top-2 right-2 opacity-0 transition-opacity
        group-hover:opacity-100 group-focus-visible:opacity-100
        text-gray-300 group-hover:text-secondary
      "
    >
      {isLiked ? (
        <HeartFilledIcon className="h-6 w-6" aria-hidden="true" />
      ) : (
        <HeartIcon className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  </article>
);
