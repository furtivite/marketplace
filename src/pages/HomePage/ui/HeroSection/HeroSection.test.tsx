// src/pages/HomePage/ui/HeroSection.test.tsx
/**
 * @vitest-environment jsdom
 */
import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { HeroSection } from './HeroSection';

// ────────────────────────────────────────────────────────────
// mock inline-SVG, чтобы его можно было отловить в тестах
// ────────────────────────────────────────────────────────────
vi.mock(
  '../../../../shared/assets/icons/arrow_right_white.svg?react',
  () => ({
    __esModule: true,
    // eslint-disable-next-line react/display-name
    default: () => <svg data-testid="arrow-icon" />,
  }),
);

const DummyBanner: React.FC = () => <div data-testid="dummy-banner" />;

const defaultTitle = 'Test Title';
const defaultSubtitle = 'Test Subtitle';
const defaultButtonLink = { text: 'Click Me', href: '/test', hasArrow: true };

describe('HeroSection', () => {
  it('renders title', () => {
    render(<HeroSection title={defaultTitle} />);
    expect(screen.getByText(defaultTitle)).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<HeroSection title={defaultTitle} subtitle={defaultSubtitle} />);
    expect(screen.getByText(defaultSubtitle)).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    render(<HeroSection title={defaultTitle} />);
    expect(screen.queryByText(defaultSubtitle)).toBeNull();
  });

  it('renders button when buttonLink provided', () => {
    render(<HeroSection title={defaultTitle} buttonLink={defaultButtonLink} />);
    const link = screen.getByRole('link', { name: defaultButtonLink.text });
    expect(link).toHaveAttribute('href', defaultButtonLink.href);
  });

  it('does not render button when buttonLink not provided', () => {
    render(<HeroSection title={defaultTitle} />);
    expect(screen.queryByRole('link', { name: defaultButtonLink.text })).toBeNull();
  });

  it('renders arrow icon inside button when hasArrow is true', () => {
    render(<HeroSection title={defaultTitle} buttonLink={defaultButtonLink} />);
    const link = screen.getByRole('link', { name: defaultButtonLink.text });
    expect(within(link).getByTestId('arrow-icon')).toBeInTheDocument();
  });

  it('renders bannerImage when provided', () => {
    render(<HeroSection title={defaultTitle} bannerImage={DummyBanner} />);
    expect(screen.getByTestId('dummy-banner')).toBeInTheDocument();
  });

  it('does not render bannerImage when not provided', () => {
    render(<HeroSection title={defaultTitle} />);
    expect(screen.queryByTestId('dummy-banner')).toBeNull();
  });
});
