// src/widgets/Layout/Layout.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { Layout } from './Layout';

/* ==== mocks ============================================================= */

vi.mock('../Header', () => ({
  __esModule: true,
  Header: (props: any) => <header data-testid="header" {...props} />,
}));

vi.mock('../Footer', () => ({
  __esModule: true,
  Footer: ({ hasNewsletter }: { hasNewsletter?: boolean }) => (
    <footer
      data-testid="footer"
      data-hasnewsletter={hasNewsletter ? 'true' : 'false'}
    />
  ),
}));

vi.mock('./ui/NotificationBar', () => ({
  __esModule: true,
  NotificationBar: ({ text }: { text: string }) => (
    <div data-testid="notification">{text}</div>
  ),
}));

// Mock Container to detect wrapping and className
vi.mock('../../shared/ui/Container', () => ({
  __esModule: true,
  Container: ({ children, className }: any) => (
    <div data-testid="container" data-class={className}>
      {children}
    </div>
  ),
}));

/* ==== tests ============================================================ */

describe('Layout component', () => {
  it('renders header by default and shows its children', () => {
    render(<Layout>Inner content</Layout>);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByText('Inner content')).toBeInTheDocument();
    expect(screen.queryByTestId('notification')).toBeNull();
    expect(screen.queryByTestId('footer')).toBeNull();
  });

  it('omits header when withoutHeader is true', () => {
    render(<Layout withoutHeader>Child</Layout>);
    expect(screen.queryByTestId('header')).toBeNull();
  });

  it('renders notification bar when notificationBar prop is provided', () => {
    render(
      <Layout notificationBar={{ text: 'Big sale!', link: { href: '#', text: 'Shop' } }}>
        Child
      </Layout>,
    );
    const note = screen.getByTestId('notification');
    expect(note).toBeInTheDocument();
    expect(note).toHaveTextContent('Big sale!');
  });

  it('renders footer when hasFooter is true (without newsletter)', () => {
    render(<Layout hasFooter>Child</Layout>);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute('data-hasnewsletter', 'false');
  });

  it('passes hasNewsletter flag to footer', () => {
    render(
      <Layout hasFooter hasNewsletter>
        Child
      </Layout>,
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveAttribute('data-hasnewsletter', 'true');
  });

  it('wraps children with Container by default', () => {
    render(<Layout>Child</Layout>);
    const container = screen.getByTestId('container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveAttribute('data-class', expect.stringContaining('py-8'));
  });

  it('renders children full width when hasFullWidth is true', () => {
    render(<Layout hasFullWidth>Child</Layout>);
    expect(screen.getByText('Child')).toBeInTheDocument();
    expect(screen.queryByTestId('container')).toBeNull();
  });
});
