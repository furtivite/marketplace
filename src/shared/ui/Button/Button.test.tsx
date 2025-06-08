// src/shared/ui/Button/Button.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button component', () => {
  it('renders as a <button> by default with correct type and classes', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: 'Click me' });
    expect(btn.tagName).toBe('BUTTON');
    expect(btn).toHaveAttribute('type', 'button');
    // default variant + default size
    expect(btn).toHaveClass('bg-neutral-900', 'text-white-0', 'h-[48px]', 'px-6', 'text-sm');
  });

  it('applies custom className and forwards props', () => {
    render(
      <Button className="my-button" aria-label="custom" data-testid="btn">
        Press
      </Button>,
    );
    const btn = screen.getByTestId('btn');
    expect(btn).toHaveClass('my-button');
    expect(btn).toHaveAttribute('aria-label', 'custom');
  });

  it('renders small size when isSmall is true', () => {
    render(<Button isSmall>Small</Button>);
    const btn = screen.getByRole('button', { name: 'Small' });
    expect(btn).toHaveClass('h-[32px]', 'px-4', 'text-xs');
  });

  it.each([
    ['default', ['bg-neutral-900', 'text-white-0']],
    ['outline', ['border-outline', 'text-neutral-500']],
    ['white', ['bg-white-0', 'text-neutral-900']],
    ['outline-black', ['border-neutral-900', 'text-neutral-900']],
  ] as const)('applies variant "%s" classes', (variant, expectedClasses) => {
    render(<Button variant={variant}>{variant}</Button>);
    const btn = screen.getByRole('button', { name: variant });
    expectedClasses.forEach((cls) => {
      expect(btn).toHaveClass(cls);
    });
  });

  it('renders as <a> for internal link without target/rel', () => {
    render(<Button href="/home">Home</Button>);
    const link = screen.getByRole('link', { name: 'Home' });
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/home');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('renders as <a> for external link with target and rel', () => {
    render(<Button href="https://example.com">External</Button>);
    const link = screen.getByRole('link', { name: 'External' });
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
