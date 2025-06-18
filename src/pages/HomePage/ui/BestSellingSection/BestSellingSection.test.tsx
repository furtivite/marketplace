// src/pages/HomePage/ui/BestSellingSection/BestSellingSection.test.tsx

import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';

import { BestSellingSection } from './BestSellingSection';
import { IProduct } from '../../../../entities/Product/model/types';

// Мокаем ProductCardList, чтобы тестировать только логику секции
vi.mock('../ProductCardList', () => ({
  ProductCardList: ({
    products, ariaLabel, onAddToCart, onToggleLike,
  }: {
    products: IProduct[];
    ariaLabel: string;
    onAddToCart?: (p: IProduct) => void;
    onToggleLike?: (p: IProduct) => void;
  }) => (
    <ol aria-label={ariaLabel} data-testid="card-list">
      {products.map((p) => (
        <li key={p.id}>
          <button onClick={() => onAddToCart?.(p)} data-testid={`add-${p.id}`}>Add</button>
          <button onClick={() => onToggleLike?.(p)} data-testid={`like-${p.id}`}>Like</button>
        </li>
      ))}
    </ol>
  ),
}));

describe('BestSellingSection', () => {
  const makeProduct = (id: number): IProduct => ({
    id,
    title: `Prod ${id}`,
    price: id * 5,
    image: `img${id}.png`,
    isInStock: true,
    isLiked: false,
  });

  it('renders null when products is empty', () => {
    const { container } = render(<BestSellingSection products={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders section with heading and card list', () => {
    const products = [1, 2, 3, 4, 5].map(makeProduct);
    render(
      <BestSellingSection
        products={products}
        onAddToCart={vi.fn()}
        onToggleLike={vi.fn()}
      />,
    );

    // Секция с правильным заголовком
    const section = screen.getByRole('region', { name: /best selling/i });
    expect(section).toBeInTheDocument();

    // Вложенный список с aria-label
    const list = screen.getByTestId('card-list');
    expect(list).toHaveAttribute('aria-label', 'Список самых продаваемых товаров');

    // Рендерится столько элементов, сколько пришло в props
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(products.length);
  });

  it('calls onAddToCart and onToggleLike with correct product', () => {
    const product = makeProduct(7);
    const handleAdd = vi.fn();
    const handleLike = vi.fn();

    render(
      <BestSellingSection
        products={[product]}
        onAddToCart={handleAdd}
        onToggleLike={handleLike}
      />,
    );

    fireEvent.click(screen.getByTestId(`add-${product.id}`));
    expect(handleAdd).toHaveBeenCalledWith(product);

    fireEvent.click(screen.getByTestId(`like-${product.id}`));
    expect(handleLike).toHaveBeenCalledWith(product);
  });
});
