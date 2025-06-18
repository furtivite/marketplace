// src/entities/product/ui/ProductCard/ProductCardInfo.tsx
import * as React from 'react';
import { Typography, TYPOGRAPHY_TYPES } from '../../../../shared/ui/Typography';

type Props = {
  id: number;
  title: string;
  price: number;
  isInStock: boolean;
  showStockStatus: boolean;
};

export const ProductCardInfo: React.FC<Props> = ({
  id,
  title,
  price,
  isInStock,
  showStockStatus,
}) => (
  <div className="p-4">
    <Typography
      as="h2"
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
);
