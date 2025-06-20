/**
 * @vitest-environment jsdom
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi, beforeAll, afterAll,
} from 'vitest';

import { mockProducts } from '@/entities/Product/model/mockProducts';
import { HomePage } from './HomePage';

// --- Silence router warnings ---
beforeAll(() => {
  const { warn } = console;
  vi.spyOn(console, 'warn').mockImplementation((...args) => {
    const msg = args[0] as string;
    if (msg.includes('React Router Future Flag Warning')) return;
    warn(...args);
  });
});
afterAll(() => vi.restoreAllMocks());

// --- Mocks ---
vi.mock('@/shared/api/notificationApi', () => ({
  useGetNotificationQuery: () => ({
    data: { text: 'Mock Text', link: { text: 'Go', href: '#' } },
  }),
}));

vi.mock('@/entities/Product/api/productApi', () => ({
  useGetProductsQuery: () => ({
    data: mockProducts,
    isLoading: false,
    isError: false,
  }),
}));

vi.mock('../../widgets/Layout/Layout', () => ({
  Layout: ({
    children, notificationBar, hasFooter, hasNewsletter, hasFullWidth,
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

vi.mock('./ui/HeroSection', () => ({
  HeroSection: ({ title, subtitle }: any) => (
    <div data-testid="hero-section" data-title={title} data-subtitle={subtitle} />
  ),
}));

vi.mock('../../shared/ui/Container', () => ({
  Container: ({ children }: any) => <section data-testid="container">{children}</section>,
}));

vi.mock('./ui/FeatureList', () => ({
  FeatureList: () => <div data-testid="feature-list" />,
}));

vi.mock('./ui/BestSellingSection', () => ({
  BestSellingSection: ({ products }: any) => (
    <div data-testid="best-selling-section" data-product-ids={JSON.stringify(products.map((p: any) => p.id))} />
  ),
}));

vi.mock('./ui/FeaturedLatestSection', () => ({
  FeaturedLatestSection: ({ featured, latest }: any) => (
    <div
      data-testid="featured-latest-section"
      data-featured-ids={JSON.stringify(featured.map((p: any) => p.id))}
      data-latest-ids={JSON.stringify(latest.map((p: any) => p.id))}
    />
  ),
}));

vi.mock('./ui/BrowseBanner', () => ({
  BrowseBanner: ({ title, subtitle }: any) => (
    <div data-testid="browse-banner" data-title={title} data-subtitle={subtitle} />
  ),
}));

// --- Tests ---
describe('HomePage', () => {
  it('renders Layout with expected flags', () => {
    render(<HomePage />);
    const layout = screen.getByTestId('layout');
    expect(layout).toHaveAttribute('data-hasnotificationbar', 'true');
    expect(layout).toHaveAttribute('data-hasfooter', 'true');
    expect(layout).toHaveAttribute('data-hasnewsletter', 'true');
    expect(layout).toHaveAttribute('data-hasfullwidth', 'true');
  });

  it('renders HeroSection with title and subtitle', () => {
    render(<HomePage />);
    const hero = screen.getByTestId('hero-section');
    expect(hero).toHaveAttribute('data-title', 'Fresh Arrivals Online');
    expect(hero).toHaveAttribute('data-subtitle', 'Discover Our Newest Collection Today.');
  });

  it('renders FeatureList inside the first Container', () => {
    render(<HomePage />);
    const containers = screen.getAllByTestId('container');
    const featureList = screen.getByTestId('feature-list');
    expect(containers[0]).toContainElement(featureList);
  });

  it('renders correct IDs in BestSellingSection', () => {
    render(<HomePage />);
    const section = screen.getByTestId('best-selling-section');
    const ids = JSON.parse(section.getAttribute('data-product-ids')!);
    expect(ids).toEqual([1, 2, 3, 4]);
  });

  it('renders BrowseBanner content', () => {
    render(<HomePage />);
    const banner = screen.getByTestId('browse-banner');
    expect(banner).toHaveAttribute('data-title', 'Browse Our Fashion Paradise!');
    expect(banner).toHaveAttribute('data-subtitle', 'Step into a world of style and explore our diverse collection of clothing categories.');
  });

  it('renders correct featured and latest IDs', () => {
    render(<HomePage />);
    const section = screen.getByTestId('featured-latest-section');
    const featured = JSON.parse(section.getAttribute('data-featured-ids')!);
    const latest = JSON.parse(section.getAttribute('data-latest-ids')!);
    expect(featured).toEqual([5, 6, 7, 8]);
    expect(new Set(latest)).toEqual(new Set([11, 10, 4, 1]));
  });
});
