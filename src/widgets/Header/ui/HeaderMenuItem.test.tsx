// src/widgets/Header/HeaderMenuItem.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';

import { HeaderMenuItem } from './HeaderMenuItem';

vi.mock('@/shared/assets/icons/chevron-down.svg?react', () => ({
  __esModule: true,
  default: (props: any) => <svg {...props} />,
}));

describe('HeaderMenuItem', () => {
  it('renders a link when no subMenu is provided', () => {
    render(<HeaderMenuItem id="home" label="Home" href="/" />);
    const link = screen.getByText('Home').closest('a')!;
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders a button with correct ARIA attributes when subMenu is provided', () => {
    render(
      <HeaderMenuItem
        id="menu"
        label="Menu"
        subMenu={[{ id: 'cat1', name: 'Category' }]}
      />,
    );
    const button = screen.getByText('Menu').closest('button')!;
    expect(button).toHaveAttribute('aria-haspopup');
    expect(button).toHaveAttribute('aria-controls', 'menu-submenu');
    expect(button).toHaveAttribute('aria-expanded');
  });

  it('opens submenu on click and renders menu items', () => {
    render(
      <HeaderMenuItem
        id="menu"
        label="Menu"
        subMenu={[
          { id: 'cat1', name: 'Category 1' },
          { id: 'cat2', name: 'Category 2' },
        ]}
      />,
    );
    const button = screen.getByText('Menu').closest('button')!;
    fireEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toBe('true');
    const menu = screen.getByRole('menu');
    expect(menu).toHaveAttribute('id', 'menu-submenu');
    const items = screen.getAllByRole('menuitem');
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent('Category 1');
    expect(items[1]).toHaveTextContent('Category 2');
  });

  it('closes submenu when clicking the button again', () => {
    render(
      <HeaderMenuItem
        id="menu"
        label="Menu"
        subMenu={[{ id: 'cat1', name: 'Category' }]}
      />,
    );
    const button = screen.getByText('Menu').closest('button')!;
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByRole('menu')).toBeNull();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('closes submenu when clicking outside', () => {
    render(
      <HeaderMenuItem
        id="menu"
        label="Menu"
        subMenu={[{ id: 'cat1', name: 'Category' }]}
      />,
    );
    const button = screen.getByText('Menu').closest('button')!;
    fireEvent.click(button);
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole('menu')).toBeNull();
  });
});
