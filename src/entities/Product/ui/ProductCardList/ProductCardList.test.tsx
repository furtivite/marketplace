import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';

import { ProductCardList } from './ProductCardList';
import { IProduct } from '../../model/types';

vi.mock('../ProductCard/ProductCard', () => ({
  ProductCard: ({ product, onAddToCart, onToggleLike }: any) => (
    <div data-testid={`product-${product.id}`}>
      <span>{product.title}</span>
      <button onClick={onAddToCart}>add</button>
      <button onClick={onToggleLike}>like</button>
    </div>
  ),
}));

describe('ProductCardList', () => {
  const makeProduct = (id: number): IProduct => ({
    id,
    title: `Product ${id}`,
    price: id * 100,
    image: `img-${id}.jpg`,
    isInStock: true,
    isLiked: false,
  });

  it('renders nothing if products is empty', () => {
    const { container } = render(<ProductCardList products={[]} ariaLabel="Empty" />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders correct number of product cards', () => {
    const products = [1, 2, 3].map(makeProduct);
    render(<ProductCardList products={products} ariaLabel="Some" />);
    expect(screen.getAllByTestId(/product-/)).toHaveLength(3);
  });

  it('sets correct aria-label on list', () => {
    const products = [makeProduct(1)];
    render(<ProductCardList products={products} ariaLabel="Custom Label" />);
    expect(screen.getByRole('list')).toHaveAttribute('aria-label', 'Custom Label');
  });

  it('calls onAddToCart with correct product', () => {
    const products = [makeProduct(5)];
    const onAdd = vi.fn();
    render(<ProductCardList products={products} ariaLabel="add" onAddToCart={onAdd} />);
    fireEvent.click(screen.getByText('add'));
    expect(onAdd).toHaveBeenCalledWith(products[0]);
  });

  it('calls onToggleLike with correct product', () => {
    const products = [makeProduct(6)];
    const onLike = vi.fn();
    render(<ProductCardList products={products} ariaLabel="like" onToggleLike={onLike} />);
    fireEvent.click(screen.getByText('like'));
    expect(onLike).toHaveBeenCalledWith(products[0]);
  });
});
