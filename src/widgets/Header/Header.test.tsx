import React from 'react';
import { render, screen, within } from '@testing-library/react';
import {
  describe, it, expect, vi, beforeAll, afterAll,
} from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

beforeAll(() => {
  const { warn } = console;
  vi.spyOn(console, 'warn').mockImplementation((...args) => {
    const msg = args[0] as string;
    if (msg.includes('React Router Future Flag Warning')) return;
    warn(...args);
  });
});

afterAll(() => vi.restoreAllMocks());

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
  const renderHeader = (pathname = '/') => {
    render(
      <MemoryRouter initialEntries={[pathname]}>
        <Header className="custom-class" />
      </MemoryRouter>,
    );
  };

  it('renders with the passed className', () => {
    renderHeader();
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('relative', 'custom-class');
  });

  it('renders the logo as plain element on homepage', () => {
    renderHeader('/');
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Home' })).not.toBeInTheDocument();
  });

  it('wraps the logo in a link on other pages', () => {
    renderHeader('/catalog');
    const logoLink = screen.getByRole('link', { name: 'Home' });
    expect(logoLink).toHaveAttribute('href', '/');
    expect(within(logoLink).getByTestId('logo')).toBeInTheDocument();
  });

  it('renders the HeaderMenu mock', () => {
    renderHeader();
    const menu = screen.getByRole('navigation', { name: 'Main menu' });
    expect(menu).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'One' })).toHaveAttribute('href', '/one');
  });

  it('renders the search input with placeholder and icon', () => {
    renderHeader();
    const input = screen.getByPlaceholderText('Search products');
    expect(input).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });

  it('renders cart link with correct href and icon', () => {
    renderHeader();
    const cartLink = screen.getByRole('link', { name: 'Cart' });
    expect(cartLink).toHaveAttribute('href', '/cart');
    expect(within(cartLink).getByTestId('cart-icon')).toBeInTheDocument();
  });

  it('renders profile link with correct href and icon', () => {
    renderHeader();
    const profileLink = screen.getByRole('link', { name: 'User Profile' });
    expect(profileLink).toHaveAttribute('href', '/profile');
    expect(within(profileLink).getByTestId('user-icon')).toBeInTheDocument();
  });
});
