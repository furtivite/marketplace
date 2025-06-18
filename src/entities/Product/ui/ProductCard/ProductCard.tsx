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
  product,
  onAddToCart,
  onToggleLike,
}) => {
  const {
    id,
    title,
    price,
    image,
    isInStock = true,
    isLiked = false,
  } = product;

  return (
    <article
      role="group"
      aria-labelledby={`product-title-${id}`}
      className="
        max-w-[264px] h-[475px] group relative rounded-lg bg-white-0 overflow-hidden
        transition-shadow
        group-hover:shadow-lg
      "
    >
      <div className="rounded-lg overflow-hidden">
        {/* Image + semi-transparent overlay */}
        <div className="relative h-[260px] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div
            className="
              absolute inset-0 bg-white-0/50 opacity-0 pointer-events-none
              transition-opacity
              group-hover:opacity-100 group-focus-within:opacity-100
            "
          />
        </div>

        {/* Add to cart button (reserved space, appears on hover or focus-within) */}
        <div className="h-12">
          <Button
            onClick={onAddToCart}
            disabled={!isInStock}
            squareCorners
            renderStartIcon={<ShoppingCartIcon className="h-5 w-5" aria-hidden="true" />}
            className="
              w-full opacity-0 transition-opacity
              group-hover:opacity-100 group-focus-within:opacity-100
            "
            aria-label={`Add ${title} to cart`}
          >
            Add to cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Typography
          as="h2"
          id={`product-title-${id}`}
          type={TYPOGRAPHY_TYPES.H5}
          className="mb-2 text-black"
        >
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

      {/* Like button (appears on hover or focus-within) */}
      <button
        type="button"
        onClick={onToggleLike}
        aria-pressed={isLiked}
        aria-label={isLiked ? `Remove ${title} from favorites` : `Add ${title} to favorites`}
        className="
          absolute top-2 right-2 opacity-0 transition-opacity
          group-hover:opacity-100 group-focus-within:opacity-100
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
};
