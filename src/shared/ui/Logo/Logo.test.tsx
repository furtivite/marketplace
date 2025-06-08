// src/shared/ui/Logo/Logo.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';

import { Logo } from './Logo';

vi.mock('@/shared/assets/logo/logo-dark.svg?react', () => ({ default: () => <svg data-testid="logo-dark" /> }));
vi.mock('@/shared/assets/logo/logo-light.svg?react', () => ({ default: () => <svg data-testid="logo-light" /> }));
vi.mock('@/shared/assets/logo/logo-admin.svg?react', () => ({ default: () => <svg data-testid="logo-admin" /> }));

describe('Logo component', () => {
  it('renders dark variant by default', () => {
    render(<Logo />);
    expect(screen.getByTestId('logo-dark')).toBeInTheDocument();
    expect(screen.getByText('Ecommerce')).toBeInTheDocument();
  });

  it('renders light variant', () => {
    render(<Logo variant="light" />);
    expect(screen.getByTestId('logo-light')).toBeInTheDocument();
    expect(screen.getByText('Ecommerce')).toBeInTheDocument();
  });

  it('renders admin variant', () => {
    render(<Logo variant="admin" />);
    expect(screen.getByTestId('logo-admin')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  it('forwards className and textClassName', () => {
    render(<Logo className="wrapper" textClassName="text" />);
    const wrapper = screen.getByTestId('logo-dark').parentElement!;
    expect(wrapper).toHaveClass('wrapper');
    expect(screen.getByText('Ecommerce')).toHaveClass('text');
  });
});
