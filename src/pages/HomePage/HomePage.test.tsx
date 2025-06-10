// src/pages/HomePage/HomePage.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { HomePage } from './HomePage';

// Mock Layout to capture props and render children
vi.mock('../../widgets/Layout/Layout', () => ({
  __esModule: true,
  Layout: ({
    children,
    notificationBar,
    hasFooter,
    hasNewsletter,
    hasFullWidth,
  }: any) => (
    <div
      data-testid="layout"
      data-hasnotificationbar={notificationBar ? 'true' : 'false'}
      data-hasfooter={hasFooter ? 'true' : 'false'}
      data-hasnewsletter={hasNewsletter ? 'true' : 'false'}
      data-hasfullwidth={hasFullWidth ? 'true' : 'false'}
    >
      {children}
    </div>
  ),
}));

// Mock HeroSection
vi.mock('./ui/HeroSection', () => ({
  __esModule: true,
  HeroSection: (props: any) => (
    <div data-testid="hero-section" data-title={props.title} data-subtitle={props.subtitle} />
  ),
}));

// Mock Container
vi.mock('../../shared/ui/Container', () => ({
  __esModule: true,
  Container: ({ children }: any) => <section data-testid="container">{children}</section>,
}));

// Mock FeatureList
vi.mock('./ui/FeatureList', () => ({
  __esModule: true,
  FeatureList: () => <div data-testid="feature-list" />,
}));

describe('HomePage', () => {
  it('renders Layout with correct props and children', () => {
    render(<HomePage />);
    const layout = screen.getByTestId('layout');
    expect(layout).toHaveAttribute('data-hasnotificationbar', 'true');
    expect(layout).toHaveAttribute('data-hasfooter', 'true');
    expect(layout).toHaveAttribute('data-hasnewsletter', 'true');
    expect(layout).toHaveAttribute('data-hasfullwidth', 'true');
  });

  it('renders HeroSection with correct title and subtitle', () => {
    render(<HomePage />);
    const hero = screen.getByTestId('hero-section');
    expect(hero).toHaveAttribute('data-title', 'Fresh Arrivals Online');
    expect(hero).toHaveAttribute('data-subtitle', 'Discover Our Newest Collection Today.');
  });

  it('renders FeatureList inside Container with spacing', () => {
    render(<HomePage />);
    const container = screen.getByTestId('container');
    const featureList = screen.getByTestId('feature-list');
    expect(container).toContainElement(featureList);
  });
});
