// src/pages/HomePage/ui/BestSellingSection/BestSellingSection.tsx

import * as React from 'react';
import { Container } from '../../../../shared/ui/Container';
import { Typography, TYPOGRAPHY_TYPES } from '../../../../shared/ui/Typography';
import { IProduct } from '../../../../entities/Product/model/types';
import { ProductCardList } from '../../../../entities/Product/ui/ProductCardList/ProductCardList';

interface BestSellingSectionProps {
  products: IProduct[];
  onAddToCart?: (product: IProduct) => void;
  onToggleLike?: (product: IProduct) => void;
}

export const BestSellingSection: React.FC<BestSellingSectionProps> = ({
  products,
  onAddToCart,
  onToggleLike,
}) => {
  if (!products.length) {
    return null;
  }

  return (
    <section aria-labelledby="best-selling-title">
      <Container className="mt-[88px] mb-[128px]">
        <header className="flex justify-center mb-8">
          <div>
            <Typography
              as="span"
              type={TYPOGRAPHY_TYPES.LABEL_UPPERCASE}
              className="block text-neutral-500 mb-2 tracking-wider"
            >
              Shop Now
            </Typography>
            <Typography
              as="h2"
              id="best-selling-title"
              type={TYPOGRAPHY_TYPES.H3}
              className="text-neutral-900 leading-tight"
            >
              Best Selling
            </Typography>
          </div>
        </header>

        <ProductCardList
          products={products.slice(0, 4)}
          ariaLabel="Список самых продаваемых товаров"
          onAddToCart={onAddToCart}
          onToggleLike={onToggleLike}
        />
      </Container>
    </section>
  );
};
