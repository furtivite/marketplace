// src/entities/product/ui/ProductCard/ProductCard.test.tsx

import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';

import { ProductCard } from './ProductCard';
import { mockProducts } from '../../model/mockProducts';

// Mock SVG icon imports to React components
vi.mock('../../../../shared/assets/icons/add-to-cart_white.svg?react', () => ({
  default: (props: any) => <svg data-testid="shopping-icon" {...props} />,
}));
vi.mock('../../../../shared/assets/icons/heart_unfilled_gray.svg?react', () => ({
  default: (props: any) => <svg data-testid="heart-unfilled-icon" {...props} />,
}));
vi.mock('../../../../shared/assets/icons/heart_filled_gray.svg?react', () => ({
  default: (props: any) => <svg data-testid="heart-filled-icon" {...props} />,
}));

describe('ProductCard', () => {
  const baseProduct = {
    ...mockProducts[0],
    id: 1,
    title: 'Test Product',
    price: 99.99,
    image: 'test.png',
    isInStock: true,
    isLiked: false,
  };

  it('renders the image with correct src and alt', () => {
    render(<ProductCard product={baseProduct} />);
    const img = screen.getByAltText(baseProduct.title);
    expect(img).toHaveAttribute('src', 'test.png');
  });

  it('renders the title and price', () => {
    render(<ProductCard product={baseProduct} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(`$${baseProduct.price.toFixed(2)}`)).toBeInTheDocument();
  });

  it('shows stock status when showStockStatus=true', () => {
    render(<ProductCard product={baseProduct} showStockStatus />);
    expect(screen.getByText('In Stock')).toBeInTheDocument();
  });

  it('hides stock status when showStockStatus=false', () => {
    render(<ProductCard product={baseProduct} showStockStatus={false} />);
    expect(screen.queryByText(/In Stock|Out of Stock/)).toBeNull();
  });

  it('calls onAddToCart when the Add to cart button is clicked', () => {
    const onAdd = vi.fn();
    render(<ProductCard product={baseProduct} onAddToCart={onAdd} />);
    // reveal the button
    fireEvent.mouseOver(screen.getByRole('group'));
    const btn = screen.getByRole('button', { name: `Add ${baseProduct.title} to cart` });
    fireEvent.click(btn);
    expect(onAdd).toHaveBeenCalledOnce();
  });

  it('renders a disabled sr-only Add to cart button when out of stock', () => {
    const oos = { ...baseProduct, isInStock: false };
    render(<ProductCard product={oos} />);
    const btn = screen.getByRole('button', { name: `${oos.title} is out of stock` });
    expect(btn).toBeDisabled();
    expect(btn).toHaveClass('sr-only');
  });

  it('calls onToggleLike when the like button is clicked', () => {
    const onToggle = vi.fn();
    render(<ProductCard product={baseProduct} onToggleLike={onToggle} />);
    fireEvent.mouseOver(screen.getByRole('group'));
    const likeBtn = screen.getByRole('button', { name: `Add ${baseProduct.title} to favorites` });
    fireEvent.click(likeBtn);
    expect(onToggle).toHaveBeenCalledOnce();
  });

  it('shows filled heart icon when isLiked=true', () => {
    const liked = { ...baseProduct, isLiked: true };
    render(<ProductCard product={liked} />);
    fireEvent.mouseOver(screen.getByRole('group'));
    expect(screen.getByTestId('heart-filled-icon')).toBeInTheDocument();
  });

  it('shows unfilled heart icon when isLiked=false', () => {
    render(<ProductCard product={baseProduct} />);
    fireEvent.mouseOver(screen.getByRole('group'));
    expect(screen.getByTestId('heart-unfilled-icon')).toBeInTheDocument();
  });
});
