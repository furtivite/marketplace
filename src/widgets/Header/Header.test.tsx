// src/widgets/Header/Header.test.tsx
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';

import { Header } from './Header';

vi.mock('@/shared/assets/icons/cart.svg?react', () => ({
  __esModule: true,
  default: (props: any) => <svg data-testid="cart-icon" {...props} />,
}));
vi.mock('@/shared/assets/icons/user.svg?react', () => ({
  __esModule: true,
  default: (props: any) => <svg data-testid="user-icon" {...props} />,
}));
vi.mock('@/shared/assets/icons/search.svg?react', () => ({
  __esModule: true,
  default: (props: any) => <svg data-testid="search-icon" {...props} />,
}));

vi.mock('@/shared/ui/Logo', () => ({
  __esModule: true,
  Logo: () => <div data-testid="logo">Ecommerce</div>,
}));

vi.mock('./ui/HeaderMenu', () => ({
  __esModule: true,
  HeaderMenu: () => (
    <nav aria-label="Main menu">
      <ul>
        <li><a href="/one">One</a></li>
      </ul>
    </nav>
  ),
}));

describe('Header component', () => {
  beforeEach(() => {
    render(<Header className="custom-class" />);
  });

  it('renders with the passed className', () => {
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('relative', 'custom-class');
  });

  it('renders the mocked logo', () => {
    expect(screen.getByTestId('logo')).toHaveTextContent('Ecommerce');
  });

  it('renders the HeaderMenu mock', () => {
    const menu = screen.getByRole('navigation', { name: 'Main menu' });
    expect(menu).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'One' })).toHaveAttribute('href', '/one');
  });

  it('renders the search input with placeholder and icon', () => {
    const input = screen.getByPlaceholderText('Search products');
    expect(input).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });

  it('renders cart link with correct href and icon', () => {
    const cartLink = screen.getByRole('link', { name: 'Cart' });
    expect(cartLink).toHaveAttribute('href', '/cart');
    expect(within(cartLink).getByTestId('cart-icon')).toBeInTheDocument();
  });

  it('renders profile link with correct href and icon', () => {
    const profileLink = screen.getByRole('link', { name: 'User Profile' });
    expect(profileLink).toHaveAttribute('href', '/profile');
    expect(within(profileLink).getByTestId('user-icon')).toBeInTheDocument();
  });
});
