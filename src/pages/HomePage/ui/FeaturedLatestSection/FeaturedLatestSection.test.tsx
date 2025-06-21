// src/pages/HomePage/ui/FeaturedLatestSection/FeaturedLatestSection.test.tsx
import * as React from 'react';
import {
  render,
  screen,
  fireEvent,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  describe, it, expect, vi,
} from 'vitest';
import { FeaturedLatestSection } from './FeaturedLatestSection';

// Stub ProductCardList
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

describe('FeaturedLatestSection', () => {
  const products = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    price: (i + 1) * 10,
    image: `img${i + 1}.png`,
  }));

  it('shows Featured tab and first 4 featured products by default', () => {
    render(<FeaturedLatestSection featured={products} latest={products} />);

    const featuredTab = screen.getByRole('tab', { name: 'Featured' });
    const latestTab = screen.getByRole('tab', { name: 'Latest' });

    expect(featuredTab).toHaveAttribute('aria-selected', 'true');
    expect(featuredTab).toHaveAttribute('tabindex', '0');
    expect(latestTab).toHaveAttribute('aria-selected', 'false');
    expect(latestTab).toHaveAttribute('tabindex', '-1');

    const visiblePanel = screen.getByRole('tabpanel');
    const list = within(visiblePanel).getByTestId('product-card-list');
    expect(list).toHaveAttribute('data-count', '4');
    expect(list).toHaveAttribute('data-aria-label', 'Список избранных товаров');
  });

  it('switches to Latest tab on click and shows latest products', async () => {
    render(<FeaturedLatestSection featured={products} latest={products} />);

    const latestTab = screen.getByRole('tab', { name: 'Latest' });
    await userEvent.click(latestTab);

    expect(latestTab).toHaveAttribute('aria-selected', 'true');
    expect(latestTab).toHaveAttribute('tabindex', '0');

    const visiblePanel = screen.getByRole('tabpanel');
    const list = within(visiblePanel).getByTestId('product-card-list');
    expect(list).toHaveAttribute('data-aria-label', 'Список последних товаров');
    expect(list).toHaveAttribute('data-count', '4');
  });

  it('navigates tabs with ArrowRight and ArrowLeft keys', () => {
    render(<FeaturedLatestSection featured={products} latest={products} />);

    const featuredTab = screen.getByRole('tab', { name: 'Featured' });
    const latestTab = screen.getByRole('tab', { name: 'Latest' });

    featuredTab.focus();
    fireEvent.keyDown(featuredTab, { key: 'ArrowRight' });
    expect(latestTab).toHaveFocus();
    expect(latestTab).toHaveAttribute('aria-selected', 'true');

    let visiblePanel = screen.getByRole('tabpanel');
    let list = within(visiblePanel).getByTestId('product-card-list');
    expect(list).toHaveAttribute('data-aria-label', 'Список последних товаров');

    fireEvent.keyDown(latestTab, { key: 'ArrowLeft' });
    expect(featuredTab).toHaveFocus();
    expect(featuredTab).toHaveAttribute('aria-selected', 'true');

    visiblePanel = screen.getByRole('tabpanel');
    list = within(visiblePanel).getByTestId('product-card-list');
    expect(list).toHaveAttribute('data-aria-label', 'Список избранных товаров');
  });

  it('jumps to first/last tab with Home and End keys', () => {
    render(<FeaturedLatestSection featured={products} latest={products} />);

    const featuredTab = screen.getByRole('tab', { name: 'Featured' });
    const latestTab = screen.getByRole('tab', { name: 'Latest' });

    latestTab.focus();
    fireEvent.keyDown(latestTab, { key: 'Home' });
    expect(featuredTab).toHaveFocus();
    expect(featuredTab).toHaveAttribute('aria-selected', 'true');
    let visiblePanel = screen.getByRole('tabpanel');
    let list = within(visiblePanel).getByTestId('product-card-list');
    expect(list).toHaveAttribute('data-aria-label', 'Список избранных товаров');

    fireEvent.keyDown(featuredTab, { key: 'End' });
    expect(latestTab).toHaveFocus();
    expect(latestTab).toHaveAttribute('aria-selected', 'true');
    visiblePanel = screen.getByRole('tabpanel');
    list = within(visiblePanel).getByTestId('product-card-list');
    expect(list).toHaveAttribute('data-aria-label', 'Список последних товаров');
  });
});
