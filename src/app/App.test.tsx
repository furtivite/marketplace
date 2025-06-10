// src/app/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi, beforeAll, afterAll,
} from 'vitest';
import { MemoryRouter } from 'react-router-dom';

/* eslint-disable import/first */
// Silence React Router future flag warnings
beforeAll(() => {
  const { warn } = console;
  vi.spyOn(console, 'warn').mockImplementation((...args) => {
    const msg = args[0] as string;
    if (
      msg.includes('React Router Future Flag Warning')
    ) {
      return;
    }
    warn(...args);
  });
});
afterAll(() => {
  vi.restoreAllMocks();
});

// Mock BrowserRouter to avoid nested router error
vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as any;
  return {
    ...actual,
    BrowserRouter: ({ children }: { children: React.ReactNode }) => children,
  };
});
vi.mock('../pages/HomePage/HomePage', () => ({
  __esModule: true,
  HomePage: () => <div data-testid="home-page">HomePage</div>,
}));

// Now import App and HomePage after mocks
import { App } from './App';
/* eslint-enable import/first */

describe('App component', () => {
  it('renders HomePage on default route "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('does not render HomePage on non-matching route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.queryByTestId('home-page')).toBeNull();
  });
});
