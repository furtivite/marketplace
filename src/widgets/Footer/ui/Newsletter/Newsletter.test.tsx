// src/widgets/Footer/ui/Newsletter/Newsletter.test.tsx
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Newsletter } from './Newsletter';

describe('Newsletter component', () => {
  beforeEach(() => {
    render(<Newsletter />);
  });

  it('renders input and subscribe button', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    const btn = screen.getByRole('button', { name: /subscribe/i });
    expect(btn).toBeInTheDocument();
  });

  it('does not have error initially', () => {
    expect(screen.queryByText(/please enter a valid email address/i)).toBeNull();
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveAttribute('aria-describedby');
  });

  it('shows sr-only error and sets aria-describedby on invalid email', () => {
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form', { name: /newsletter subscription form/i });
    fireEvent.change(input, { target: { value: 'invalid' } });
    fireEvent.submit(form);
    const errorText = screen.getByText(/please enter a valid email address/i);
    expect(errorText).toHaveClass('sr-only');
    const describedId = errorText.getAttribute('id');
    expect(input).toHaveAttribute('aria-describedby', describedId!);
    expect(input).toHaveValue('invalid');
  });

  it('clears error after editing post-error', () => {
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form', { name: /newsletter subscription form/i });
    fireEvent.change(input, { target: { value: 'invalid' } });
    fireEvent.submit(form);
    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'still@invalid' } });
    expect(screen.queryByText(/please enter a valid email address/i)).toBeNull();
    expect(input).not.toHaveAttribute('aria-describedby');
  });

  it('submits valid email and clears input', () => {
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form', { name: /newsletter subscription form/i });
    fireEvent.change(input, { target: { value: 'user@example.com' } });
    fireEvent.submit(form);
    expect(screen.queryByText(/please enter a valid email address/i)).toBeNull();
    expect(input).not.toHaveAttribute('aria-describedby');
    expect(input).toHaveValue('');
  });
});
