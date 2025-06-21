// src/widgets/Layout/Layout.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi, beforeAll, afterAll,
} from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Layout, LayoutProps } from './Layout';

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

// Stub Header to avoid its internal SVG imports and subcomponents
vi.mock('../Header', () => ({
  __esModule: true,
  Header: (props: any) => <header role="banner" {...props}>Header</header>,
}));

// Stub NotificationBar to render text and link
vi.mock('./ui/NotificationBar', () => ({
  __esModule: true,
  NotificationBar: ({ text, link }: any) => (
    <div data-testid="notification-bar">
      <span>{text}</span>
      <a href={link.href}>{link.text}</a>
    </div>
  ),
}));

// Stub Footer to render a <footer> with contentinfo role and newsletter text
vi.mock('../Footer', () => ({
  __esModule: true,
  Footer: ({ hasNewsletter }: any) => (
    <footer role="contentinfo">
      {hasNewsletter && 'newsletter'}
    </footer>
  ),
}));

const renderLayout = (props: LayoutProps = {}) => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route element={<Layout {...props} />}>
          <Route path="/" element={<div>Test Content</div>} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
};

describe('Layout', () => {
  it('renders routed content via Outlet', () => {
    renderLayout();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('omits Header when withoutHeader is true and no notification', () => {
    renderLayout({ withoutHeader: true });
    expect(screen.queryByRole('banner')).toBeNull();
  });

  it('shows NotificationBar when notificationBar prop is set', () => {
    const notification = { text: 'Heads up!', link: { href: '/foo', text: 'Learn more' } };
    renderLayout({ notificationBar: notification });
    expect(screen.getByText('Heads up!')).toBeInTheDocument();
    expect(screen.getByText('Learn more')).toBeInTheDocument();
  });

  it('includes Header by default', () => {
    renderLayout();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders Footer when hasFooter is true', () => {
    renderLayout({ hasFooter: true });
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('passes hasNewsletter to Footer', () => {
    renderLayout({ hasFooter: true, hasNewsletter: true });
    expect(screen.getByText('newsletter')).toBeInTheDocument();
  });
});
