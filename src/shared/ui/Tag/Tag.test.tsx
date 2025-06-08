// src/shared/ui/Tag/Tag.test.tsx
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';

import { Tag } from './Tag';

vi.mock('@/shared/assets/icons/close.svg?react', () => ({
  default: () => <svg data-testid="icon-close" />,
}));

describe('Tag component', () => {
  const onRemove = vi.fn();

  beforeEach(() => {
    onRemove.mockReset();
  });

  it('renders children inside Typography and calls onRemove when button clicked', () => {
    render(<Tag onRemove={onRemove}>Hello</Tag>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    const btn = screen.getByRole('button', { name: /remove tag Hello/i });
    fireEvent.click(btn);
    expect(onRemove).toHaveBeenCalledOnce();
  });

  it('applies small and filled classes when props set', () => {
    render(<Tag onRemove={onRemove} isSmall isFilled data-testid="tag">Test</Tag>);
    const tag = screen.getByTestId('tag');
    expect(tag).toHaveClass('h-9', 'bg-neutral-200');
  });

  it('applies max-height when inInputWrapper=true', () => {
    render(<Tag onRemove={onRemove} inInputWrapper data-testid="tag">Test</Tag>);
    const tag = screen.getByTestId('tag');
    expect(tag).toHaveClass('max-h-[103px]');
  });

  it('uses role="listitem" when inList=true', () => {
    render(
      <Tag onRemove={onRemove} inList data-testid="tag">
        Item
      </Tag>,
    );
    const tag = screen.getByTestId('tag');
    expect(tag).toHaveAttribute('role', 'listitem');
  });

  it('forwards custom className and other props', () => {
    render(
      <Tag
        onRemove={onRemove}
        className="custom-tag"
        data-testid="tag"
        title="MyTag"
      >
        X
      </Tag>,
    );
    const tag = screen.getByTestId('tag');
    expect(tag).toHaveClass('custom-tag');
    expect(tag).toHaveAttribute('title', 'MyTag');
  });
});
