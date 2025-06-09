// src/pages/HomePage/HomePage.tsx
import React from 'react';
import { Layout } from '../../widgets/Layout/Layout';
import { HeroSection } from './ui/HeroSection';
import type { THomeSectionButtonLink } from './ui/interfaces';
// import { BenefitsSection } from './ui/BenefitsSection'
// import { BestSellingSection } from './ui/BestSellingSection'
// import { BrowseCategorySection } from './ui/BrowseCategorySection'
// import { FeaturedTabsSection } from './ui/FeaturedTabsSection'

import ellipse from './assets/ellipse.svg';
import burstPucker from './assets/burst-pucker.svg';
import boy2x from './assets/banner-boy@2x.png';
import boy1x from './assets/banner-boy.png';

const BannerImage: React.FC = () => (
  <>
    {/* Background circle */}
    <img
      src={ellipse}
      alt=""
      className="absolute right-3 -bottom-2 transform w-[340px] h-[340px]"
    />

    {/* Decorative star */}
    <img
      src={burstPucker}
      alt=""
      className="absolute right-[310px] bottom-[310px] w-6 h-6"
    />

    {/* Hero boy image */}
    <img
      srcSet={`${boy2x} 2x, ${boy1x} 1x`}
      src={boy1x}
      alt=""
      className="absolute right-0 -bottom-2 max-h-[382px]"
    />
  </>
);

const bannerButton: THomeSectionButtonLink = {
  text: 'View Collection',
  href: '#',
  hasArrow: true,
};

const bannerTitle = 'Fresh Arrivals Online';
const bannerSubtitle = 'Discover Our Newest Collection Today.';

export const HomePage: React.FC = () => (
  <Layout hasFooter hasNewsletter hasFullWidth>
    <HeroSection
      bannerImage={BannerImage}
      buttonLink={bannerButton}
      title={bannerTitle}
      subtitle={bannerSubtitle}
    />
    {/* <BenefitsSection /> */}
    {/* <BestSellingSection /> */}
    {/* <BrowseCategorySection /> */}
    {/* <FeaturedTabsSection /> */}
    Это главная страница
  </Layout>
);
