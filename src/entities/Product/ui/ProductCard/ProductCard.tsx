// src/entities/product/ui/ProductCard/ProductCard.tsx

import * as React from 'react';
import clsx from 'clsx';
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
  showStockStatus?: boolean;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleLike,
  showStockStatus = true,
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
        max-w-[264px] h-[434px] group relative rounded-lg bg-white-0 overflow-hidden
        flex flex-col justify-between
        transition-shadow
        group-hover:shadow-lg
        outline-transparent
      "
    >
      <div className="relative rounded-lg bg-white-100 h-[312px] overflow-hidden">
        {/* Image + semi-transparent overlay */}
        <div
          className={clsx(
            isInStock ? 'h-[260px]' : 'h-full',
            'relative bg-white-100 overflow-hidden',
          )}
        >
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

        {/* Add to cart button (always in DOM but visually hidden when out of stock) */}
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

      {/* Content */}
      <div className="p-4">
        <Typography
          as="h1"
          id={`product-title-${id}`}
          type={TYPOGRAPHY_TYPES.BODY_MEDIUM}
          className="mb-2 text-neutral-900"
        >
          {title}
        </Typography>
        <div className="flex items-center justify-start gap-4">
          {showStockStatus && (
            <Typography
              type={TYPOGRAPHY_TYPES.LABEL_UPPERCASE}
              className="px-4 py-0.5 border border-secondary rounded-full"
            >
              {isInStock ? 'In Stock' : 'Out of Stock'}
            </Typography>
          )}
          <Typography type={TYPOGRAPHY_TYPES.BODY_REGULAR} className="text-neutral-600">
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
        aria-label={
          isLiked
            ? `Remove ${title} from favorites`
            : `Add ${title} to favorites`
        }
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
