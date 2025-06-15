// src/entities/product/ui/ProductCard/ProductCard.tsx

import * as React from 'react';
import { Typography, TYPOGRAPHY_TYPES } from '../../../../shared/ui/Typography';
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
  product,
  onAddToCart,
  onToggleLike,
}) => {
  const {
    title,
    price,
    image,
    isInStock = true,
    isLiked = false,
  } = product;

  return (
    <article
      className="
        max-w-[264px] max-h-[434px]
        group relative rounded-lg bg-white-0
        hover:shadow-lg transition-shadow
        focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary
      "
    >
      <div className="overflow-hidden rounded-t-lg">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
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
        onClick={onAddToCart}
        disabled={!isInStock}
        className="
          w-full flex items-center justify-center py-2
          border border-transparent rounded-b-lg text-sm font-medium
          bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed
          hover:bg-primary-dark
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
          transition-colors
        "
      >
        Add to cart
        <ShoppingCartIcon className="ml-2 h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={onToggleLike}
        className="
          absolute top-2 right-2
          text-gray-300 group-hover:text-secondary transition-colors
        "
      >
        {isLiked
          ? <HeartFilledIcon />
          : <HeartIcon />}
      </button>
    </article>
  );
};
