// src/pages/HomePage/HomePage.tsx

import React from 'react';
import { Layout } from '../../widgets/Layout/Layout';
import { Container } from '../../shared/ui/Container';
import { mockProducts } from '../../entities/Product/model/mockProducts';
import { filterProductsByIds } from '../../shared/utils/filterProductsByIds';
import { useGetNotificationQuery } from '../../shared/api/notificationApi';
import { HeroSection, type THomeSectionButtonLink } from './ui/HeroSection';
import { FeatureList } from './ui/FeatureList';
import type { TFeatureProps } from './ui/Feature/types';
import { BestSellingSection } from './ui/BestSellingSection';
import { FeaturedLatestSection } from './ui/FeaturedLatestSection';
import { BrowseBanner } from './ui/BrowseBanner';

import ellipse from './assets/ellipse.svg';
import burstPucker from './assets/burst-pucker.svg';
import boy2x from './assets/banner-boy@2x.png';
import boy1x from './assets/banner-boy.png';
import delivery from '../../shared/assets/icons/delivery.svg';
import satisfactionIcon from '../../shared/assets/icons/star-badge.svg';
import securePaymentIcon from '../../shared/assets/icons/shield-check.svg';
import poncho1x from './assets/browse-poncho.png';
import poncho2x from './assets/browse-poncho@2x.png';

const BannerImage: React.FC = () => (
  <>
    <img
      src={ellipse}
      alt=""
      className="absolute right-3 -bottom-2 transform w-[340px] h-[340px]"
    />
    <img
      src={burstPucker}
      alt=""
      className="absolute right-[310px] bottom-[310px] w-6 h-6"
    />
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

const featureItems: TFeatureProps[] = [
  {
    icon: () => <img src={delivery} alt="" width={24} height={24} />,
    title: 'Free Shipping',
    subtitle: 'Upgrade your style today and get FREE shipping on all orders! Don’t miss out.',
  },
  {
    icon: () => <img src={satisfactionIcon} alt="" width={24} height={24} />,
    title: 'Satisfaction Guarantee',
    subtitle: 'Shop confidently with our Satisfaction Guarantee: Love it or get a refund.',
  },
  {
    icon: () => <img src={securePaymentIcon} alt="" width={24} height={24} />,
    title: 'Secure Payment',
    subtitle: 'Your security is our priority. Your payments are secure with us.',
  },
];

const CategoryBanner: React.FC = () => (
  <picture>
    <source srcSet={`${poncho2x} 2x, ${poncho1x} 1x`} />
    <img src={poncho1x} alt="" width={225} height={311} />
  </picture>
);

const categoryContentTitle = 'Browse Our Fashion Paradise!';
const categoryContentSubtitle = 'Step into a world of style and explore our diverse collection of clothing categories.';
const categoryContentLink: THomeSectionButtonLink = {
  text: 'Start Browsing',
  href: '#',
  hasArrow: true,
};

export const HomePage: React.FC = () => {
  const { data: notification } = useGetNotificationQuery();
  const bestSelling = filterProductsByIds(mockProducts, [1, 2, 3, 4]);
  const featuredProducts = filterProductsByIds(mockProducts, [5, 6, 7, 8]);
  const latestProducts = filterProductsByIds(mockProducts, [11, 10, 4, 1]);

  return (
    <Layout
      hasFooter
      hasNewsletter
      hasFullWidth
      notificationBar={notification}
    >
      <HeroSection
        bannerImage={BannerImage}
        buttonLink={bannerButton}
        title={bannerTitle}
        subtitle={bannerSubtitle}
      />

      <Container className="mt-[88px] mb-[161px]">
        <FeatureList items={featureItems} />

        <BestSellingSection products={bestSelling} />
      </Container>

      <BrowseBanner
        title={categoryContentTitle}
        subtitle={categoryContentSubtitle}
        link={categoryContentLink}
        BannerImage={CategoryBanner}
      />

      <Container className="mt-[152px] mb-[128px]">
        <FeaturedLatestSection
          featured={featuredProducts}
          latest={latestProducts}
        />
      </Container>
    </Layout>
  );
};
