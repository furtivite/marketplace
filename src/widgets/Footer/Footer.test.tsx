// src/widgets/Footer/Footer.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';

import { Footer } from './Footer';

vi.mock('./ui/Newsletter', () => ({
  Newsletter: () => <div data-testid="newsletter" />,
}));
vi.mock('./ui/FooterLogoBlock', () => ({
  FooterLogoBlock: () => <div data-testid="logo-block" />,
}));
vi.mock('./ui/FooterNavigation', () => ({
  FooterNavigation: () => <nav data-testid="navigation" />,
}));
vi.mock('./ui/FooterPayments', () => ({
  FooterPayments: () => <div data-testid="payments" />,
}));

describe('Footer component', () => {
  it('renders with default props (no newsletter)', () => {
    render(<Footer />);
    expect(screen.getByTestId('logo-block')).toBeInTheDocument();
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('payments')).toBeInTheDocument();
    expect(screen.queryByTestId('newsletter')).toBeNull();
    const container = screen.getByTestId('logo-block').closest('div')!;
    expect(container).not.toHaveClass('pt-[74px]');
  });

  it('renders with newsletter when hasNewsletter=true', () => {
    render(<Footer hasNewsletter />);
    const footer = screen.getByLabelText('Site footer');
    expect(footer).toHaveClass('bg-white-0');
    expect(screen.getByTestId('newsletter')).toBeInTheDocument();
    const container = screen.getByTestId('newsletter').nextElementSibling!;
    expect(container).toHaveClass('pt-[74px]');
  });
});
