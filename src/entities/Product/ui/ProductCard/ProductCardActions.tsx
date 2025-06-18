// src/entities/product/ui/ProductCard/ProductCardActions.tsx
import * as React from 'react';
import HeartIcon from '../../../../shared/assets/icons/heart_unfilled_gray.svg?react';
import HeartFilledIcon from '../../../../shared/assets/icons/heart_filled_gray.svg?react';

type Props = {
  title: string;
  isLiked: boolean;
  onToggleLike?: () => void;
};

export const ProductCardActions: React.FC<Props> = ({
  title,
  isLiked,
  onToggleLike,
}) => (
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
);
