// src/pages/HomePage/ui/BestSellingSection/BestSellingSection.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { BestSellingSection } from './BestSellingSection';

// Mock ProductCardList to capture props
vi.mock(
  '@/entities/Product/ui/ProductCardList/ProductCardList',
  () => ({
    __esModule: true,
    ProductCardList: ({
      products,
      ariaLabel,
      onAddToCart,
      onToggleLike,
    }: any) => (
      <div
        data-testid="product-card-list"
        data-count={products.length}
        data-aria-label={ariaLabel}
        data-has-add={typeof onAddToCart === 'function' ? 'true' : 'false'}
        data-has-like={typeof onToggleLike === 'function' ? 'true' : 'false'}
      />
    ),
  }),
);

describe('BestSellingSection', () => {
  const products = Array.from({ length: 5 }, (_, i) => ({ id: i + 1 }));

  it('renders nothing when products array is empty', () => {
    const { container } = render(
      <BestSellingSection products={[]} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders section with header and ProductCardList sliced to first 4 products', () => {
    const onAddToCart = vi.fn();
    const onToggleLike = vi.fn();

    render(
      <BestSellingSection
        products={products}
        onAddToCart={onAddToCart}
        onToggleLike={onToggleLike}
      />,
    );

    // Check that the header texts are rendered
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
    expect(screen.getByText('Best Selling')).toBeInTheDocument();

    // Check ProductCardList stub
    const list = screen.getByTestId('product-card-list');
    expect(list).toHaveAttribute('data-count', '4');
    expect(list).toHaveAttribute(
      'data-aria-label',
      'Список самых продаваемых товаров',
    );
    expect(list).toHaveAttribute('data-has-add', 'true');
    expect(list).toHaveAttribute('data-has-like', 'true');
  });
});
