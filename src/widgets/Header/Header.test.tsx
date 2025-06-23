// src/widgets/Header/Header.test.tsx

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {
  describe, it, expect, vi,
} from 'vitest';
import { Header } from './Header';

vi.mock('../../shared/ui/Logo', () => ({
  Logo: () => <div data-testid="logo">Logo</div>,
}));

vi.mock('./ui/HeaderMenu', () => ({
  HeaderMenu: () => <nav data-testid="menu">Menu</nav>,
}));

vi.mock('../../shared/ui/Input', () => ({
  Input: (props: any) => <input data-testid="search" placeholder={props.placeholder} />,
}));

vi.mock('../../shared/assets/icons/cart.svg?react', () => ({
  default: () => <svg data-testid="cart-icon" />,
}));

vi.mock('../../shared/assets/icons/user.svg?react', () => ({
  default: () => <svg data-testid="user-icon" />,
}));

vi.mock('../../shared/assets/icons/search.svg?react', () => ({
  default: () => <svg data-testid="search-icon" />,
}));

describe('Header', () => {
  const renderHeader = (initialPath = '/') => render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Header />
    </MemoryRouter>,
  );

  it('renders logo as static element on homepage', () => {
    renderHeader('/');
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /home/i })).not.toBeInTheDocument();
  });

  it('renders logo as link on other pages', () => {
    renderHeader('/catalog');
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('renders HeaderMenu', () => {
    renderHeader();
    expect(screen.getByTestId('menu')).toBeInTheDocument();
  });

  it('renders search input', () => {
    renderHeader();
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search products')).toBeInTheDocument();
  });

  it('renders cart and user icons with links', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: /cart/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /user profile/i })).toBeInTheDocument();
    expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
  });
});
