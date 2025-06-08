// src/shared/ui/Alert/Alert.test.tsx
import * as React from 'react';
import {
  render, screen, fireEvent, act,
} from '@testing-library/react';
import {
  describe, it, expect, vi, beforeEach, afterEach,
} from 'vitest';

import { Alert } from './Alert';

// Мокаем SVG-импорты, чтобы возвращать простые <svg data-testid="icon-..."/>
vi.mock('@/shared/assets/icons/check.svg?react', () => ({
  default: () => <svg data-testid="icon-success" />,
}));
vi.mock('@/shared/assets/icons/info.svg?react', () => ({
  default: () => <svg data-testid="icon-info" />,
}));
vi.mock('@/shared/assets/icons/warning.svg?react', () => ({
  default: () => <svg data-testid="icon-error" />,
}));
vi.mock('@/shared/assets/icons/close.svg?react', () => ({
  default: () => <svg data-testid="icon-close" />,
}));

describe('Alert component', () => {
  let onClose: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useFakeTimers();
    onClose = vi.fn();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('renders message and has role="alert"', () => {
    render(<Alert type="success" message="Test message" onClose={onClose} />);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent('Test message');
  });

  it('applies correct background and text classes for each type', () => {
    const { rerender, container } = render(
      <Alert type="error" message="E" onClose={onClose} />,
    );
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass('bg-red-100', 'text-red-800');

    rerender(<Alert type="success" message="S" onClose={onClose} />);
    expect(root).toHaveClass('bg-green-100', 'text-green-800');

    rerender(<Alert type="info" message="I" onClose={onClose} />);
    expect(root).toHaveClass('bg-neutral-900', 'text-white-0');
  });

  it('renders the correct icon for each type', () => {
    const { rerender } = render(
      <Alert type="error" message="" onClose={onClose} />,
    );
    expect(screen.getByTestId('icon-error')).toBeInTheDocument();

    rerender(<Alert type="success" message="" onClose={onClose} />);
    expect(screen.getByTestId('icon-success')).toBeInTheDocument();

    rerender(<Alert type="info" message="" onClose={onClose} />);
    expect(screen.getByTestId('icon-info')).toBeInTheDocument();
  });

  it('calls onClose after clicking close button with 300ms delay', () => {
    render(<Alert type="info" message="" onClose={onClose} />);
    const btn = screen.getByRole('button', { name: /close/i });
    act(() => {
      fireEvent.click(btn);
      vi.advanceTimersByTime(300);
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('auto-hides after autoHideDuration and calls onClose', () => {
    render(
      <Alert
        type="success"
        message=""
        onClose={onClose}
        autoHideDuration={1000}
      />,
    );
    act(() => vi.advanceTimersByTime(1300)); // autoHideDuration + 300ms
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('closes on Escape key press', () => {
    render(<Alert type="info" message="" onClose={onClose} />);
    act(() => {
      fireEvent.keyDown(window, { key: 'Escape' });
      vi.advanceTimersByTime(300);
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose after unmount even if timers remain', () => {
    const { unmount } = render(
      <Alert type="error" message="" onClose={onClose} autoHideDuration={500} />,
    );
    unmount();
    act(() => vi.advanceTimersByTime(1000));
    expect(onClose).not.toHaveBeenCalled();
  });
});
