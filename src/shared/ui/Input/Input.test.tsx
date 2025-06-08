// src/shared/ui/Input/Input.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from './Input';

describe('Input component', () => {
  it('renders label and links htmlFor to input id', () => {
    render(<Input id="test-id" label="My Label" />);
    const label = screen.getByText(/My Label/);
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveAttribute('for', 'test-id');
    const input = screen.getByLabelText('My Label') as HTMLInputElement;
    expect(input).toHaveAttribute('id', 'test-id');
  });

  it('shows required asterisk when required=true', () => {
    render(<Input id="req-id" label="Req" required />);
    // Label contains *
    const label = screen.getByText(/\*/);
    expect(label).toBeInTheDocument();
    const input = screen.getByLabelText(/Req/);
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  it('forwards className and other props to wrapper', () => {
    render(
      <Input
        id="foo"
        className="custom"
        placeholder="Enter"
        data-testid="inp"
      />,
    );
    const input = screen.getByTestId('inp');
    const wrapper = input.closest('div.flex-col')!;
    expect(wrapper).toHaveClass('custom');
    expect(input).toHaveAttribute('placeholder', 'Enter');
  });

  it('renders startIcon when provided', () => {
    const Start = () => <span data-testid="start">S</span>;
    render(<Input id="with-start" startIcon={<Start />} />);
    const startWrapper = screen.getByTestId('start').parentElement!;
    expect(startWrapper).toHaveClass('mr-2');
  });

  it('renders endIcon when provided without startIcon', () => {
    const End = () => <span data-testid="end">E</span>;
    render(<Input id="with-end" endIcon={<End />} />);
    const endWrapper = screen.getByTestId('end').parentElement!;
    expect(endWrapper).toHaveClass('ml-2');
  });

  it('applies small size classes when isSmall=true', () => {
    render(<Input id="small-id" isSmall />);
    const wrapper = screen.getByRole('textbox').parentElement!;
    expect(wrapper).toHaveClass('h-10');
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('h-8');
  });

  it('sets aria-invalid when error=true', () => {
    render(<Input id="err-id" error />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    const wrapper = input.parentElement!;
    expect(wrapper).toHaveClass('ring-red-500');
  });

  it('renders error message when error is string and links aria-describedby', () => {
    render(<Input id="e-id" error="Bad" />);
    const errorEl = screen.getByText('Bad');
    expect(errorEl).toHaveAttribute('id', 'e-id-error');
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'e-id-error');
  });

  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input id="ref-id" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current).toHaveAttribute('id', 'ref-id');
  });
});
