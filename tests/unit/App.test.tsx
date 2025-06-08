import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';

describe('App component', () => {
  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText(/welcome to/i)).toBeInTheDocument();
  });
});
