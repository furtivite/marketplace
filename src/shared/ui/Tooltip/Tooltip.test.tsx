// src/shared/ui/Tooltip/Tooltip.test.tsx
import * as React from 'react';
import {
  render, screen, fireEvent, act,
} from '@testing-library/react';
import {
  describe, it, expect, beforeAll, afterAll,
} from 'vitest';
import { Tooltip } from './Tooltip';

const mockGetBoundingClientRect = (): DOMRect => ({
  top: 100,
  bottom: 200,
  left: 100,
  right: 200,
  width: 50,
  height: 20,
} as DOMRect);

describe('Tooltip component', () => {
  let originalGetBoundingClientRect: typeof Element.prototype.getBoundingClientRect;
  let originalInnerWidth: number;
  let originalInnerHeight: number;

  beforeAll(() => {
    // Сохраняем оригиналы
    originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
    originalInnerWidth = window.innerWidth;
    originalInnerHeight = window.innerHeight;
    // Подмена
    Element.prototype.getBoundingClientRect = () => mockGetBoundingClientRect();
    Object.defineProperty(window, 'innerWidth', { value: 500, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 500, configurable: true });
    global.requestAnimationFrame = (cb: FrameRequestCallback): number => {
      cb(0);
      return 0;
    };
    global.cancelAnimationFrame = () => {
    };
  });

  afterAll(() => {
    // Восстанавливаем
    Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
    Object.defineProperty(window, 'innerWidth', { value: originalInnerWidth });
    Object.defineProperty(window, 'innerHeight', { value: originalInnerHeight });
  });

  it('shows and hides tooltip on hover', () => {
    render(<Tooltip text="Hello">Hover me</Tooltip>);
    const container = screen.getByText('Hover me').parentElement!;
    // Скрыт до наведения
    expect(screen.queryByRole('tooltip')).toBeNull();
    // Наводим мышь
    act(() => {
      fireEvent.mouseEnter(container);
    });
    // После RAF и вычислений элемент появляется
    const tip = screen.getByRole('tooltip');
    expect(tip).toHaveTextContent('Hello');
    // Убираем мышь
    act(() => {
      fireEvent.mouseLeave(container);
    });
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('links aria-describedby and role correctly', () => {
    render(<Tooltip text="Tip text">Label</Tooltip>);
    const container = screen.getByText('Label').parentElement!;
    act(() => {
      fireEvent.focus(container);
    });
    const tip = screen.getByRole('tooltip');
    // id tooltip
    const id = tip.getAttribute('id');
    expect(id).toBeTruthy();
    // aria-describedby на контейнере
    expect(container).toHaveAttribute('aria-describedby', id!);
    // role navigation remains button
    expect(container).toHaveAttribute('role', 'button');
  });

  it('respects position prop when adaptive=false', () => {
    render(
      <Tooltip text="Fixed" position="bottom" adaptive={false}>
        Child
      </Tooltip>,
    );
    const container = screen.getByText('Child').parentElement!;
    act(() => fireEvent.mouseEnter(container));
    const tip = screen.getByRole('tooltip');
    expect(tip.className).toContain('translate-y-full');
  });

  it('applies insetArrow class when insetArrow=true', () => {
    render(
      <Tooltip text="Inset" insetArrow>
        Box
      </Tooltip>,
    );
    const container = screen.getByText('Box').parentElement!;
    act(() => fireEvent.mouseEnter(container));
    const tip = screen.getByRole('tooltip');
    const arrow = tip.querySelector('span');
    expect(arrow).toHaveClass('border-t-gray-900');
  });
});
