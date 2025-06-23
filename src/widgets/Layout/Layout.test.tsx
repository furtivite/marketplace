// src/widgets/Layout/Layout.test.tsx

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {
  describe, it, expect, vi,
} from 'vitest';
import { Layout } from './Layout';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    Outlet: () => <div data-testid="outlet" />,
  };
});

vi.mock('../Header', () => ({
  Header: () => <header data-testid="header" />,
}));

vi.mock('./ui/NotificationBar', () => ({
  NotificationBar: ({ text }: { text: string }) => (
    <div data-testid="notification">{text}</div>
  ),
}));

vi.mock('../Footer', () => ({
  Footer: ({ hasNewsletter }: { hasNewsletter?: boolean }) => (
    <footer data-testid="footer">
      {hasNewsletter ? 'With newsletter' : 'No newsletter'}
    </footer>
  ),
}));

describe('Layout', () => {
  const renderLayout = (props = {}) => render(
    <MemoryRouter>
      <Layout {...props} />
    </MemoryRouter>,
  );

  it('renders Outlet', () => {
    renderLayout();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
  });

  it('renders Header by default', () => {
    renderLayout();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('does not render Header if withoutHeader is true', () => {
    renderLayout({ withoutHeader: true });
    expect(screen.queryByTestId('header')).not.toBeInTheDocument();
  });

  it('renders NotificationBar if notificationBar is passed', () => {
    renderLayout({ notificationBar: { text: 'Promo', link: '#' } });
    expect(screen.getByTestId('notification')).toHaveTextContent('Promo');
  });

  it('does not render Header if withoutHeader is true, even with notificationBar', () => {
    renderLayout({ withoutHeader: true, notificationBar: { text: 'Promo', link: '#' } });
    expect(screen.queryByTestId('header')).not.toBeInTheDocument();
  });

  it('renders Footer if hasFooter is true', () => {
    renderLayout({ hasFooter: true });
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('passes hasNewsletter to Footer', () => {
    renderLayout({ hasFooter: true, hasNewsletter: true });
    expect(screen.getByText(/With newsletter/)).toBeInTheDocument();
  });
});
