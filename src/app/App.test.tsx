// src/app/App.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { App } from './App';

describe('App component', () => {
  it('renders the Tailwind message', () => {
    render(<App />);
    expect(screen.getByText('Tailwind работает')).toBeInTheDocument();
  });

  it('renders an H1 element with correct text and class', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveTextContent('Tailwind работает');
    expect(heading).toHaveClass('text-primary-400');
  });
});
