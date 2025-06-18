// src/entities/product/ui/ProductCardList/ProductCardList.test.tsx

import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';

import { ProductCardList } from './ProductCardList';
import { IProduct } from '../../../../entities/Product/model/types';

// Mock ProductCard so we can control its rendering and interactions
vi.mock('../../../../entities/Product/ui/ProductCard/ProductCard', () => ({
  ProductCard: ({ product, onAddToCart, onToggleLike }: {
    product: IProduct;
    onAddToCart?: () => void;
    onToggleLike?: () => void;
  }) => (
    <div data-testid="product-card">
      <span data-testid="product-title">{product.title}</span>
      <button onClick={onAddToCart} data-testid="add-btn">Add</button>
      <button onClick={onToggleLike} data-testid="like-btn">Like</button>
    </div>
  ),
}));

describe('ProductCardList', () => {
  const makeProduct = (id: number): IProduct => ({
    id,
    title: `Product ${id}`,
    price: id * 10,
    image: `img${id}.png`,
    isInStock: true,
    isLiked: false,
  });

  it('renders nothing when products array is empty', () => {
    const { container } = render(
      <ProductCardList
        products={[]}
        ariaLabel="Test list"
      />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders up to 4 product cards when more are provided', () => {
    const products = [1, 2, 3, 4, 5, 6].map(makeProduct);
    render(
      <ProductCardList
        products={products}
        ariaLabel="Test list"
      />,
    );
    const cards = screen.getAllByTestId('product-card');
    expect(cards).toHaveLength(4);
  });

  it('renders exactly as many product cards as products when count <= 4', () => {
    const products = [1, 2, 3].map(makeProduct);
    render(
      <ProductCardList
        products={products}
        ariaLabel="Test list"
      />,
    );
    const cards = screen.getAllByTestId('product-card');
    expect(cards).toHaveLength(3);
  });

  it('sets the correct aria-label on the ol element', () => {
    render(
      <ProductCardList
        products={[makeProduct(1)]}
        ariaLabel="My ARIA List"
      />,
    );
    const list = screen.getByRole('list');
    expect(list).toHaveAttribute('aria-label', 'My ARIA List');
  });

  it('calls onAddToCart with the correct product when Add button is clicked', () => {
    const product = makeProduct(7);
    const handleAdd = vi.fn();
    render(
      <ProductCardList
        products={[product]}
        ariaLabel="Test list"
        onAddToCart={handleAdd}
      />,
    );
    fireEvent.click(screen.getByTestId('add-btn'));
    expect(handleAdd).toHaveBeenCalledWith(product);
  });

  it('calls onToggleLike with the correct product when Like button is clicked', () => {
    const product = makeProduct(8);
    const handleToggle = vi.fn();
    render(
      <ProductCardList
        products={[product]}
        ariaLabel="Test list"
        onToggleLike={handleToggle}
      />,
    );
    fireEvent.click(screen.getByTestId('like-btn'));
    expect(handleToggle).toHaveBeenCalledWith(product);
  });
});
