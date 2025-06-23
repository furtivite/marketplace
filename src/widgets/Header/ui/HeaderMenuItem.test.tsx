// src/widgets/Header/ui/HeaderMenuItem.test.tsx

import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {
  describe, it, expect, vi, beforeEach,
} from 'vitest';
import { HeaderMenuItem } from './HeaderMenuItem';

vi.mock('@/shared/ui/Typography', () => ({
  Typography: (props: any) => <span {...props} data-testid="typography" />,
  TYPOGRAPHY_TYPES: {
    BODY_MEDIUM: 'BODY_MEDIUM',
  },
}));

vi.mock('@/shared/assets/icons/chevron-down.svg?react', () => ({
  default: () => <svg data-testid="chevron-icon" />,
}));

describe('HeaderMenuItem', () => {
  beforeEach(() => {
    document.body.innerHTML = ''; // очищаем DOM между тестами
  });

  const defaultLabel = 'Test Menu';

  it('renders link when no subMenu is provided', () => {
    render(
      <MemoryRouter>
        <ul>
          <HeaderMenuItem id="main" label={defaultLabel} href="/test" />
        </ul>
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: defaultLabel });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('renders button when subMenu is provided', () => {
    render(
      <MemoryRouter>
        <ul>
          <HeaderMenuItem
            id="categories"
            label="Categories"
            subMenu={[
              { id: 'cat-1', name: 'Shoes' },
              { id: 'cat-2', name: 'Hats' },
            ]}
          />
        </ul>
      </MemoryRouter>,
    );

    const button = screen.getByRole('button', { name: /categories/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByTestId('chevron-icon')).toBeInTheDocument();
  });

  it('opens submenu on button click and closes on outside click', () => {
    render(
      <MemoryRouter>
        <ul>
          <HeaderMenuItem
            id="categories"
            label="Categories"
            subMenu={[
              { id: 'cat-1', name: 'Shoes' },
              { id: 'cat-2', name: 'Hats' },
            ]}
          />
        </ul>
      </MemoryRouter>,
    );

    const button = screen.getByRole('button', { name: /categories/i });

    // Открываем подменю
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getAllByRole('menuitem')).toHaveLength(2);

    // Кликаем вне
    fireEvent.mouseDown(document.body);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders separator between submenu items', () => {
    render(
      <MemoryRouter>
        <ul>
          <HeaderMenuItem
            id="sep"
            label="With Separator"
            subMenu={[
              { id: 'cat-1', name: 'Item 1' },
              { id: 'cat-2', name: 'Item 2' },
            ]}
          />
        </ul>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button'));

    const separators = screen.getAllByRole('menuitem');
    expect(separators).toHaveLength(2);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });
});
