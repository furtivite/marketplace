// src/app/App.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Outlet } from 'react-router-dom';
import {
  describe, it, expect, vi, beforeAll, afterAll, beforeEach,
} from 'vitest';
import { useGetNotificationQuery } from '@/shared/api/notificationApi';
import { App } from './App';

// Silence React Router future flag warnings
beforeAll(() => {
  const { warn } = console;
  vi.spyOn(console, 'warn').mockImplementation((...args: any[]) => {
    const msg = args[0] as string;
    if (msg.includes('React Router Future Flag Warning')) return;
    warn(...args);
  });
});

afterAll(() => {
  vi.restoreAllMocks();
});

// Mock notification API hook
vi.mock('@/shared/api/notificationApi', () => ({
  __esModule: true,
  useGetNotificationQuery: vi.fn(),
}));

// Mock Layout to render <Outlet/> so child routes appear
vi.mock('../widgets/Layout/Layout', () => ({
  __esModule: true,
  Layout: ({
    hasFooter, hasNewsletter, hasFullWidth, notificationBar,
  }: any) => (
    <div
      data-testid="layout"
      data-hasfooter={hasFooter ? 'true' : 'false'}
      data-hasnewsletter={hasNewsletter ? 'true' : 'false'}
      data-hasfullwidth={hasFullWidth ? 'true' : 'false'}
      data-notification={notificationBar ? JSON.stringify(notificationBar) : ''}
    >
      <Outlet />
    </div>
  ),
}));

// Mock pages
vi.mock('../pages/HomePage/HomePage', () => ({
  __esModule: true,
  HomePage: () => <div data-testid="home-page" />,
}));
vi.mock('../pages/CatalogPage/CatalogPage', () => ({
  __esModule: true,
  CatalogPage: () => <div data-testid="catalog-page" />,
}));

describe('App routing & layout integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders HomePage within Layout with correct props on "/" route', () => {
    (useGetNotificationQuery as any).mockReturnValue({
      data: { text: 'Hello', link: { href: '/more', text: 'Read more' } },
    });
    window.history.pushState({}, '', '/');
    render(<App />);

    const layout = screen.getByTestId('layout');
    expect(layout).toHaveAttribute('data-hasfooter', 'true');
    expect(layout).toHaveAttribute('data-hasnewsletter', 'true');
    expect(layout).toHaveAttribute('data-hasfullwidth', 'true');
    expect(layout).toHaveAttribute(
      'data-notification',
      JSON.stringify({ text: 'Hello', link: { href: '/more', text: 'Read more' } }),
    );

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('renders CatalogPage within Layout with correct props on "/catalog" route', () => {
    (useGetNotificationQuery as any).mockReturnValue({ data: undefined });
    window.history.pushState({}, '', '/catalog');
    render(<App />);

    const layout = screen.getByTestId('layout');
    expect(layout).toHaveAttribute('data-hasfooter', 'true');
    expect(layout).toHaveAttribute('data-hasnewsletter', 'true');
    expect(layout).toHaveAttribute('data-hasfullwidth', 'false');
    expect(layout).toHaveAttribute('data-notification', '');

    expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
  });

  it('renders 404 content within Layout for unknown routes', () => {
    (useGetNotificationQuery as any).mockReturnValue({ data: undefined });
    window.history.pushState({}, '', '/something-else');
    render(<App />);

    const layout = screen.getByTestId('layout');
    expect(layout).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
