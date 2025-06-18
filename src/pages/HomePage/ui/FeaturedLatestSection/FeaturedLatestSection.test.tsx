// src/pages/HomePage/ui/FeaturedLatestSection/FeaturedLatestSection.test.tsx

/**
 * @vitest-environment jsdom
 */

import React from 'react';
import {
  describe, it, expect, beforeEach,
} from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FeaturedLatestSection } from './FeaturedLatestSection';
import type { IProduct } from '../../../../entities/Product/model/types';

/* ------------------------------------------------------------------ */
/*  MOCK PRODUCTCARDLIST (чтобы не тянуть SVG-иконки и <img />)       */
/* ------------------------------------------------------------------ */
vi.mock('../ProductCardList', () => ({
  __esModule: true,
  // eslint-disable-next-line react/display-name
  ProductCardList: ({ products }: { products: IProduct[] }) => (
    <div data-testid="product-card-list" data-count={products.length} />
  ),
}));

/* ------------------------------------------------------------------ */
/*  helpers                                                           */
/* ------------------------------------------------------------------ */
const makeProduct = (id: number, title: string): IProduct => ({
  id,
  title,
  price: 10,
  image: `img${id}.png`,
});

const featured: IProduct[] = Array.from({ length: 4 }).map((_, i) => makeProduct(i + 1, `Featured ${i + 1}`));

const latest: IProduct[] = Array.from({ length: 4 }).map((_, i) => makeProduct(i + 5, `Latest ${i + 1}`));

const setup = () => render(
  <FeaturedLatestSection
    featured={featured}
    latest={latest}
    onAddToCart={vi.fn()}
    onToggleLike={vi.fn()}
  />,
);

/**
 * Возвращает тот список карточек, чей родитель-tabpanel
 * **не** скрыт атрибутом `hidden`.
 */
const getVisibleList = () => screen
  .getAllByTestId('product-card-list')
  .find(
    (el) => !el.closest<HTMLDivElement>('[role="tabpanel"]')?.hasAttribute('hidden'),
  ) as HTMLElement;

/* ------------------------------------------------------------------ */
/*  tests                                                             */
/* ------------------------------------------------------------------ */
describe('<FeaturedLatestSection />', () => {
  beforeEach(() => {
    setup();
  });

  it('показывает вкладку "Featured" по умолчанию', () => {
    const featuredTab = screen.getByRole('tab', { name: /featured/i });
    expect(featuredTab).toHaveAttribute('aria-selected', 'true');

    const latestTab = screen.getByRole('tab', { name: /latest/i });
    expect(latestTab).toHaveAttribute('aria-selected', 'false');

    // видимый список — именно featured-товары
    const list = getVisibleList();
    expect(list).toHaveAttribute('data-count', '4');
    expect(
      list.closest<HTMLDivElement>('[role="tabpanel"]'),
    ).toHaveAccessibleName(/featured/i);
  });

  it('переключается на "Latest" по клику', async () => {
    const latestTab = screen.getByRole('tab', { name: /latest/i });
    await userEvent.click(latestTab);

    expect(latestTab).toHaveAttribute('aria-selected', 'true');

    const list = getVisibleList();
    expect(list).toHaveAttribute('data-count', '4');
    expect(
      list.closest<HTMLDivElement>('[role="tabpanel"]'),
    ).toHaveAccessibleName(/latest/i);
  });

  it('стрелки ←/→ переключают вкладки', async () => {
    const featuredTab = screen.getByRole('tab', { name: /featured/i });
    featuredTab.focus();

    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: /latest/i })).toHaveAttribute(
      'aria-selected',
      'true',
    );

    await userEvent.keyboard('{ArrowLeft}');
    expect(featuredTab).toHaveAttribute('aria-selected', 'true');
  });

  it('Home / End прыгают к первой / последней вкладке', async () => {
    const latestTab = screen.getByRole('tab', { name: /latest/i });
    latestTab.focus();

    await userEvent.keyboard('{Home}');
    expect(screen.getByRole('tab', { name: /featured/i })).toHaveAttribute(
      'aria-selected',
      'true',
    );

    await userEvent.keyboard('{End}');
    expect(latestTab).toHaveAttribute('aria-selected', 'true');
  });
});
