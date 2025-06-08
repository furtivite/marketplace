// src/shared/ui/TagsInput/TagsInput.test.tsx
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { TagsInput } from './TagsInput';

vi.mock('../Tag', () => ({
  Tag: ({ children, onRemove, 'aria-label': ariaLabel }: any) => (
    <div data-testid="tag">
      <span>{children}</span>
      <button data-testid="remove" aria-label={ariaLabel} onClick={onRemove} />
    </div>
  ),
}));

describe('TagsInput component', () => {
  const onRemove = vi.fn();

  beforeEach(() => {
    onRemove.mockReset();
  });

  it('renders label when provided and links htmlFor to list id', () => {
    render(<TagsInput label="My Tags" tags={[]} onRemove={onRemove} />);
    const label = screen.getByText('My Tags');
    expect(label.tagName).toBe('LABEL');
    const list = screen.getByRole('list');
    expect(list).toHaveAttribute('id', label.getAttribute('for'));
  });

  it('renders all tags and calls onRemove with correct tag', () => {
    const tags = ['one', 'two', 'three'];
    render(<TagsInput tags={tags} onRemove={onRemove} />);
    const items = screen.getAllByTestId('tag');
    expect(items).toHaveLength(3);
    // Удаляем второй
    const removeButtons = screen.getAllByTestId('remove');
    fireEvent.click(removeButtons[1]);
    expect(onRemove).toHaveBeenCalledWith('two');
  });

  it('applies error styling and shows error message when error=true', () => {
    render(<TagsInput tags={['a']} onRemove={onRemove} error className="extra" />);
    const container = screen.getByRole('list').parentElement!;
    // aria-invalid на корневом div
    expect(container).toHaveAttribute('aria-invalid', 'true');
    // ring-red-500 на ul
    const list = screen.getByRole('list');
    expect(list).toHaveClass('ring-red-500');
    // текст ошибки
    expect(screen.getByText(/Ошибка: неверный ввод/)).toBeInTheDocument();
    // className forward
    expect(container).toHaveClass('extra');
  });

  it('does not show error message when error=false', () => {
    render(<TagsInput tags={['x']} onRemove={onRemove} />);
    expect(screen.queryByText(/Ошибка:/)).toBeNull();
  });
});
