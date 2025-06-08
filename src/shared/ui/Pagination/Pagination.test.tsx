// src/shared/ui/Pagination/Pagination.test.tsx
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { Pagination } from './Pagination';

vi.mock('@/shared/assets/icons/chevron-left.svg?react', () => ({
  default: () => <svg data-testid="icon-prev" />,
}));
vi.mock('@/shared/assets/icons/chevron-right.svg?react', () => ({
  default: () => <svg data-testid="icon-next" />,
}));

describe('Pagination component', () => {
  const onChange = vi.fn();

  beforeEach(() => {
    onChange.mockReset();
  });

  it('renders consecutive pages when total <= visiblePages+2', () => {
    render(<Pagination page={1} total={5} onChange={onChange} visiblePages={3} />);
    // Should render pages 1..5 without ellipsis
    [1, 2, 3, 4, 5].forEach((p) => {
      expect(screen.getByRole('button', { name: `Go to page ${p}` })).toBeInTheDocument();
    });
    expect(screen.queryByText('...')).toBeNull();
  });

  it('renders ellipsis when total > visiblePages+2', () => {
    render(<Pagination page={5} total={10} onChange={onChange} visiblePages={4} />);
    // Always shows first and last
    expect(screen.getByRole('button', { name: 'Go to page 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to page 10' })).toBeInTheDocument();
    // Should have at least one ellipsis
    expect(screen.getAllByText('...').length).toBeGreaterThanOrEqual(1);
  });

  it('disables Prev on first page and Next on last page', () => {
    const { rerender } = render(<Pagination page={1} total={3} onChange={onChange} />);
    const prev = screen.getByLabelText('Previous page') as HTMLButtonElement;
    const next = screen.getByLabelText('Next page') as HTMLButtonElement;
    expect(prev).toBeDisabled();
    expect(next).not.toBeDisabled();

    rerender(<Pagination page={3} total={3} onChange={onChange} />);
    expect(screen.getByLabelText('Previous page')).not.toBeDisabled();
    expect(screen.getByLabelText('Next page')).toBeDisabled();
  });

  it('calls onChange when Prev/Next clicked', () => {
    render(<Pagination page={2} total={4} onChange={onChange} />);
    fireEvent.click(screen.getByLabelText('Previous page'));
    expect(onChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByLabelText('Next page'));
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it('calls onChange when page button clicked', () => {
    render(<Pagination page={2} total={4} onChange={onChange} />);
    fireEvent.click(screen.getByRole('button', { name: 'Go to page 4' }));
    expect(onChange).toHaveBeenCalledWith(4);

    // clicking current page does nothing
    fireEvent.click(screen.getByRole('button', { name: 'Go to page 2' }));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard events on page buttons', () => {
    render(<Pagination page={2} total={3} onChange={onChange} />);
    const btn = screen.getByRole('button', { name: 'Go to page 3' });
    fireEvent.keyDown(btn, { key: 'Enter' });
    expect(onChange).toHaveBeenCalledWith(3);
    fireEvent.keyDown(btn, { key: ' ' });
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it('applies disabled styling and prevents onChange when disabled=true', () => {
    render(<Pagination page={2} total={5} onChange={onChange} disabled />);
    const prev = screen.getByLabelText('Previous page');
    const next = screen.getByLabelText('Next page');
    const btn3 = screen.getByRole('button', { name: 'Go to page 3' });

    expect(prev).toBeDisabled();
    expect(next).toBeDisabled();
    fireEvent.click(btn3);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('applies custom className to nav', () => {
    render(<Pagination page={1} total={2} onChange={onChange} className="my-nav" />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('my-nav');
  });
});
