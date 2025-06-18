// src/pages/HomePage/ui/BrowseBanner/BrowseBanner.test.tsx

/**
 * @vitest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';

import { BrowseBanner } from './BrowseBanner';
import type { THomeSectionButtonLink } from '../HeroSection';

/* -------------------------------------------------------------
 * mocks
 * ------------------------------------------------------------*/
vi.mock(
  '../../../../shared/assets/icons/arrow_right_white.svg?react',
  () => ({
    __esModule: true,
    // eslint-disable-next-line react/display-name
    default: () => <svg data-testid="arrow-icon" />,
  }),
);

/* -------------------------------------------------------------
 * helpers
 * ------------------------------------------------------------*/
const BannerImage: React.FC = () => (
  <img
    data-testid="banner-image"
    src="placeholder.png"
    alt=""
    width={200}
    height={260}
  />
);

const link: THomeSectionButtonLink = {
  text: 'Start Browsing',
  href: '/catalog',
  hasArrow: true,
};

/* -------------------------------------------------------------
 * tests
 * ------------------------------------------------------------*/
describe('<BrowseBanner />', () => {
  beforeEach(() => {
    render(
      <BrowseBanner
        title="Browse Our Fashion Paradise!"
        subtitle="Step into a world of style."
        link={link}
        BannerImage={BannerImage}
      />,
    );
  });

  it('renders heading, subtitle and link-button', () => {
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /browse our fashion paradise!/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/step into a world of style\./i),
    ).toBeInTheDocument();

    const btn = screen.getByRole('link', { name: /start browsing/i });
    expect(btn).toHaveAttribute('href', '/catalog');
  });

  it('renders banner image', () => {
    expect(screen.getByTestId('banner-image')).toBeInTheDocument();
  });

  it('section is labelled by the heading', () => {
    const heading = screen.getByRole('heading', { level: 2 });
    const section = heading.closest('section')!;
    expect(section).toHaveAttribute('aria-labelledby', heading.id);
  });
});
