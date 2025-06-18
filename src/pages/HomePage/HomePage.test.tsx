// src/pages/HomePage/HomePage.test.tsx

/**
 * @vitest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi, beforeAll, afterAll,
} from 'vitest';

import { HomePage } from './HomePage';

/* ------------------------------------------------------------------ */
/*  suppress React-Router noisy warnings                              */
/* ------------------------------------------------------------------ */
beforeAll(() => {
  const { warn } = console;
  vi.spyOn(console, 'warn').mockImplementation((...args) => {
    const msg = args[0] as string;
    if (
      msg.includes(
        'React Router Future Flag Warning: React Router will begin wrapping state updates',
      )
      || msg.includes(
        'React Router Future Flag Warning: Relative route resolution',
      )
    ) {
      return;
    }
    warn(...args);
  });
});

afterAll(() => {
  vi.restoreAllMocks();
});

/* ------------------------------------------------------------------ */
/*  Mocks                                                             */
/* ------------------------------------------------------------------ */
// Mock Layout to capture props & render children
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
    <div
      data-testid="hero-section"
      data-title={props.title}
      data-subtitle={props.subtitle}
    />
  ),
}));

// Mock Container
vi.mock('../../shared/ui/Container', () => ({
  __esModule: true,
  Container: ({ children }: any) => (
    <section data-testid="container">{children}</section>
  ),
}));

// Mock FeatureList
vi.mock('./ui/FeatureList', () => ({
  __esModule: true,
  FeatureList: () => <div data-testid="feature-list" />,
}));

// Mock BestSellingSection to inspect product ids
vi.mock('./ui/BestSellingSection', () => ({
  __esModule: true,
  BestSellingSection: ({ products }: { products: { id: number }[] }) => (
    <div
      data-testid="best-selling-section"
      data-product-ids={JSON.stringify(products.map((p) => p.id))}
    />
  ),
}));

// Mock FeaturedLatestSection to inspect featured/latest ids
vi.mock('./ui/FeaturedLatestSection', () => ({
  __esModule: true,
  FeaturedLatestSection: ({
    featured,
    latest,
  }: {
    featured: { id: number }[];
    latest: { id: number }[];
  }) => (
    <div
      data-testid="featured-latest-section"
      data-featured-ids={JSON.stringify(featured.map((p) => p.id))}
      data-latest-ids={JSON.stringify(latest.map((p) => p.id))}
    />
  ),
}));

/* ------------------------------------------------------------------ */
/*  Tests                                                             */
/* ------------------------------------------------------------------ */
describe('HomePage', () => {
  it('renders Layout with correct flags', () => {
    render(<HomePage />);
    const layout = screen.getByTestId('layout');

    expect(layout).toHaveAttribute('data-hasnotificationbar', 'true');
    expect(layout).toHaveAttribute('data-hasfooter', 'true');
    expect(layout).toHaveAttribute('data-hasnewsletter', 'true');
    expect(layout).toHaveAttribute('data-hasfullwidth', 'true');
  });

  it('renders HeroSection with expected title and subtitle', () => {
    render(<HomePage />);
    const hero = screen.getByTestId('hero-section');

    expect(hero).toHaveAttribute('data-title', 'Fresh Arrivals Online');
    expect(hero).toHaveAttribute(
      'data-subtitle',
      'Discover Our Newest Collection Today.',
    );
  });

  it('places FeatureList inside Container', () => {
    render(<HomePage />);
    const container = screen.getByTestId('container');
    const featureList = screen.getByTestId('feature-list');

    expect(container).toContainElement(featureList);
  });

  it('passes correct product ids to BestSellingSection', () => {
    render(<HomePage />);
    const best = screen.getByTestId('best-selling-section');
    const ids = JSON.parse(best.getAttribute('data-product-ids')!);

    expect(ids).toEqual([1, 2, 3, 4]);
  });

  it('passes correct product ids to FeaturedLatestSection', () => {
    render(<HomePage />);
    const section = screen.getByTestId('featured-latest-section');

    const featuredIds = JSON.parse(section.getAttribute('data-featured-ids')!);
    const latestIds = JSON.parse(section.getAttribute('data-latest-ids')!);

    expect(featuredIds).toEqual([5, 6, 7, 8]);
    expect(latestIds).toEqual([1, 4, 10, 11]);
  });
});
