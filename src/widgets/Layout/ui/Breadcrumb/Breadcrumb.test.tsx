// src/widgets/Layout/ui/Breadcrumb/Breadcrumb.test.tsx
import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { Breadcrumb } from './Breadcrumb';

vi.mock('@/shared/assets/icons/chevron-right.svg?react', () => ({
  __esModule: true,
  default: (props: any) => <svg data-testid="chevron" {...props} />,
}));

const items = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    subItems: [
      {
        label: 'Electronics',
        href: '/products/electronics',
        subItems: [
          { label: 'Smartphones', href: '/products/electronics/smartphones' },
        ],
      },
    ],
  },
];

describe('Breadcrumb component', () => {
  beforeEach(() => {
    render(<Breadcrumb items={items} />);
  });

  it('renders heading with the active (last) item label', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Smartphones');
  });

  it('renders a nav element with correct aria-label', () => {
    const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
    expect(nav).toBeInTheDocument();
  });

  it('flattens nested items and renders them in order', () => {
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);

    const [home, products, electronics, smartphones] = listItems;

    expect(within(home).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/',
    );
    expect(
      within(products).getByRole('link', { name: 'Products' }),
    ).toHaveAttribute('href', '/products');
    expect(
      within(electronics).getByRole('link', { name: 'Electronics' }),
    ).toHaveAttribute('href', '/products/electronics');

    // last item should NOT be a link
    expect(within(smartphones).queryByRole('link')).toBeNull();
    expect(smartphones).toHaveTextContent('Smartphones');
  });

  it('renders separators (chevron icons) between all but the last item', () => {
    const chevrons = screen.getAllByTestId('chevron');
    expect(chevrons).toHaveLength(3);
  });
});
