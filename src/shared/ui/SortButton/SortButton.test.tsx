// src/shared/ui/SortButton/SortButton.test.tsx
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';

import { SortButton } from './SortButton';

vi.mock('@/shared/assets/icons/chevron-down.svg?react', () => ({
  default: () => <svg data-testid="icon-chevron" />,
}));

describe('SortButton component', () => {
  const onChange = vi.fn();

  beforeEach(() => {
    onChange.mockReset();
  });

  it('renders with default label and ascending state', () => {
    render(<SortButton order="asc" onChange={onChange} />);
    const btn = screen.getByRole('button', { name: /sorted ascending/i });
    expect(btn).toBeInTheDocument();
    // Текст кнопки
    expect(screen.getByText('Ascending')).toBeInTheDocument();
    // Значок присутствует
    expect(screen.getByTestId('icon-chevron')).toBeInTheDocument();
    // Класс поворота для asc
    const iconWrapper = screen.getByTestId('icon-chevron').parentElement!;
    expect(iconWrapper).toHaveClass('rotate-0');
  });

  it('renders descending state correctly', () => {
    render(<SortButton order="desc" onChange={onChange} />);
    expect(screen.getByText('Descending')).toBeInTheDocument();
    // aria-label содержит "descending"
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', expect.stringMatching(/descending/i));
    const iconWrapper = screen.getByTestId('icon-chevron').parentElement!;
    expect(iconWrapper).toHaveClass('rotate-180');
  });

  it('toggles order on click', () => {
    render(<SortButton order="asc" onChange={onChange} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onChange).toHaveBeenCalledWith('desc');
  });

  it('respects disabled prop', () => {
    render(<SortButton order="asc" onChange={onChange} disabled />);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('forwards className', () => {
    render(<SortButton order="asc" onChange={onChange} className="my-sort" />);
    expect(screen.getByRole('button')).toHaveClass('my-sort');
  });
});
