// src/pages/HomePage/ui/HeroSection.test.tsx
import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroSection } from './HeroSection';

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
    render(
      <HeroSection
        title={defaultTitle}
        buttonLink={defaultButtonLink}
      />,
    );
    const button = screen.getByText(defaultButtonLink.text);
    expect(button).toBeInTheDocument();
    const link = button.closest('a');
    expect(link).toHaveAttribute('href', defaultButtonLink.href);
  });

  it('does not render button when buttonLink not provided', () => {
    render(<HeroSection title={defaultTitle} />);
    expect(screen.queryByText(defaultButtonLink.text)).toBeNull();
  });

  it('renders arrow icon inside button when hasArrow is true', () => {
    render(
      <HeroSection
        title={defaultTitle}
        buttonLink={defaultButtonLink}
      />,
    );
    const button = screen.getByText(defaultButtonLink.text).closest('a')!;
    // Query by empty alt text, since decorative <img alt=""> will have no accessible name
    const img = within(button).getByAltText('');
    expect(img).toHaveAttribute('alt', '');
  });

  it('renders bannerImage when provided', () => {
    render(
      <HeroSection
        title={defaultTitle}
        bannerImage={DummyBanner}
      />,
    );
    expect(screen.getByTestId('dummy-banner')).toBeInTheDocument();
  });

  it('does not render bannerImage when not provided', () => {
    render(<HeroSection title={defaultTitle} />);
    expect(screen.queryByTestId('dummy-banner')).toBeNull();
  });
});
