// src/pages/HomePage/HomePage.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi, beforeEach,
} from 'vitest';
import { HomePage } from './HomePage';

// Mock useGetProductsQuery hook
const mockUseGetProductsQuery = vi.fn();
vi.mock('@/entities/Product/api/productApi', () => ({
  __esModule: true,
  useGetProductsQuery: () => mockUseGetProductsQuery(),
}));

// Mock child UI components
vi.mock('./ui/HeroSection', () => ({
  __esModule: true,
  HeroSection: ({ title, subtitle, buttonLink }: any) => (
    <div
      data-testid="hero-section"
      data-title={title}
      data-subtitle={subtitle}
      data-href={buttonLink.href}
      data-has-arrow={buttonLink.hasArrow ? 'true' : 'false'}
    />
  ),
}));

vi.mock('./ui/FeatureList', () => ({
  __esModule: true,
  FeatureList: ({ items }: any) => (
    <div data-testid="feature-list" data-item-count={items.length} />
  ),
}));

vi.mock('./ui/BestSellingSection', () => ({
  __esModule: true,
  BestSellingSection: ({ products }: any) => (
    <div data-testid="best-selling-section" data-count={products.length} />
  ),
}));

vi.mock('./ui/BrowseBanner', () => ({
  __esModule: true,
  BrowseBanner: ({ title, subtitle, link }: any) => (
    <div
      data-testid="browse-banner"
      data-title={title}
      data-subtitle={subtitle}
      data-href={link.href}
    />
  ),
}));

vi.mock('./ui/FeaturedLatestSection', () => ({
  __esModule: true,
  FeaturedLatestSection: ({ featured, latest }: any) => (
    <div
      data-testid="featured-latest-section"
      data-featured-count={featured.length}
      data-latest-count={latest.length}
    />
  ),
}));

describe('HomePage', () => {
  const productsMock = Array.from({ length: 11 }, (_, i) => ({ id: i + 1 }));

  beforeEach(() => {
    mockUseGetProductsQuery.mockReset();
  });

  it('shows loading state', () => {
    mockUseGetProductsQuery.mockReturnValue({ data: undefined, isLoading: true, isError: false });
    render(<HomePage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows error state', () => {
    mockUseGetProductsQuery.mockReturnValue({ data: undefined, isLoading: false, isError: true });
    render(<HomePage />);
    expect(screen.getByText('Failed to load products')).toBeInTheDocument();
  });

  it('shows no products state', () => {
    mockUseGetProductsQuery.mockReturnValue({ data: undefined, isLoading: false, isError: false });
    render(<HomePage />);
    expect(screen.getByText('No products found')).toBeInTheDocument();
  });

  it('renders all sections with correct props', () => {
    mockUseGetProductsQuery
      .mockReturnValue({ data: productsMock, isLoading: false, isError: false });
    render(<HomePage />);

    // HeroSection
    const hero = screen.getByTestId('hero-section');
    expect(hero).toHaveAttribute('data-title', 'Fresh Arrivals Online');
    expect(hero).toHaveAttribute('data-subtitle', 'Discover Our Newest Collection Today.');
    expect(hero).toHaveAttribute('data-href', '/catalog');
    expect(hero).toHaveAttribute('data-has-arrow', 'true');

    // FeatureList
    const featureList = screen.getByTestId('feature-list');
    expect(featureList).toHaveAttribute('data-item-count', '3');

    // BestSellingSection
    const bestSelling = screen.getByTestId('best-selling-section');
    expect(bestSelling).toHaveAttribute('data-count', '4');

    // BrowseBanner
    const browse = screen.getByTestId('browse-banner');
    expect(browse).toHaveAttribute('data-title', 'Browse Our Fashion Paradise!');
    expect(browse).toHaveAttribute(
      'data-subtitle',
      'Step into a world of style and explore our diverse collection of clothing categories.',
    );
    expect(browse).toHaveAttribute('data-href', '/catalog');

    // FeaturedLatestSection
    const featuredLatest = screen.getByTestId('featured-latest-section');
    expect(featuredLatest).toHaveAttribute('data-featured-count', '4');
    expect(featuredLatest).toHaveAttribute('data-latest-count', '4');
  });
});
