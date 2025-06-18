// src/shared/ui/Button/Button.test.tsx

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

// DummyIcon – замена реального SVG, чтобы в тестах не пытаться рендерить data URI
const DummyIcon: React.FC<React.SVGProps<SVGSVGElement> & { 'data-testid'?: string }> = (props) => (
  <svg {...props} />
);

describe('Button component', () => {
  it('renders as a <button> by default with correct type, classes and rounded corners', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: 'Click me' });
    expect(btn.tagName).toBe('BUTTON');
    expect(btn).toHaveAttribute('type', 'button');
    expect(btn).toHaveClass(
      'bg-neutral-900',
      'text-white-0',
      'h-[48px]',
      'px-6',
      'text-sm',
      'rounded-[4px]',
    );
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
    expectedClasses.forEach((cls) => expect(btn).toHaveClass(cls));
  });

  it('removes rounded corners when squareCorners is true', () => {
    render(<Button squareCorners>Square</Button>);
    const btn = screen.getByRole('button', { name: 'Square' });
    expect(btn).not.toHaveClass('rounded-[4px]');
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

  it('renders start icon when renderStartIcon is provided and ignores renderEndIcon', () => {
    render(
      <Button
        renderStartIcon={<DummyIcon data-testid="start-icon" />}
        renderEndIcon={<DummyIcon data-testid="end-icon" />}
      >
        IconTest
      </Button>,
    );
    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('end-icon')).toBeNull();
  });

  it('renders end icon when renderEndIcon is provided and no renderStartIcon', () => {
    render(
      <Button renderEndIcon={<DummyIcon data-testid="end-icon" />}>
        IconTest
      </Button>,
    );
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('start-icon')).toBeNull();
  });
});
