// src/shared/ui/Alert/Alert.test.tsx
import * as React from 'react';
import {
  render, screen, fireEvent, act,
} from '@testing-library/react';
import {
  describe, it, expect, vi, beforeEach, afterEach,
} from 'vitest';
import { Alert } from './Alert';

describe('Alert component', () => {
  let onClose: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useFakeTimers();
    onClose = vi.fn();
  });

  afterEach(() => {
    // Очистим все запланированные таймеры и восстановим реальное время
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('renders message and has role="alert"', () => {
    render(<Alert type="success" message="Test message" onClose={onClose} />);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent('Test message');
    expect(alert).toBeInTheDocument();
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
    const { rerender, container } = render(
      <Alert type="error" message="" onClose={onClose} />,
    );
    // первый svg — WarningIcon
    let svg = container.querySelector('svg');
    expect(svg).toHaveClass('text-red-700');

    rerender(<Alert type="success" message="" onClose={onClose} />);
    svg = container.querySelector('svg');
    expect(svg).toHaveClass('text-green-700');

    rerender(<Alert type="info" message="" onClose={onClose} />);
    svg = container.querySelector('svg');
    expect(svg).toHaveClass('text-white-0');
  });

  it('calls onClose after clicking close button with 300ms delay', () => {
    render(<Alert type="info" message="" onClose={onClose} />);
    const btn = screen.getByRole('button', { name: /close/i });
    act(() => {
      fireEvent.click(btn);
      // advance 300ms for the timeout inside handleClose
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
    // ждём autoHideDuration
    act(() => vi.advanceTimersByTime(1000));
    // плюс 300ms внутреннего таймаута
    act(() => vi.advanceTimersByTime(300));
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
    // advance beyond any scheduled timers
    act(() => vi.advanceTimersByTime(1000));
    expect(onClose).not.toHaveBeenCalled();
  });
});
