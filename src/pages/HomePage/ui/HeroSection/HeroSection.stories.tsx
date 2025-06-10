// src/pages/HomePage/ui/HeroSection.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HeroSection } from './HeroSection';
import type { HeroSectionProps } from './types';
import ellipse from '../../assets/ellipse.svg';
import burstPucker from '../../assets/burst-pucker.svg';
import boy1x from '../../assets/banner-boy.png';
import boy2x from '../../assets/banner-boy@2x.png';

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

const meta: Meta<HeroSectionProps> = {
  title: 'pages/HomePage/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  args: {
    title: 'Fresh Arrivals Online',
    subtitle: 'Discover Our Newest Collection Today.',
    buttonLink: { text: 'View Collection', href: '#', hasArrow: true },
    bannerImage: BannerImage,
  },
};

export default meta;
type Story = StoryObj<HeroSectionProps>;

export const Default: Story = {};

export const WithoutImage: Story = {
  args: {
    bannerImage: undefined,
  },
};

export const WithoutButton: Story = {
  args: {
    buttonLink: undefined,
  },
};

export const TitleOnly: Story = {
  args: {
    subtitle: undefined,
    buttonLink: undefined,
    bannerImage: undefined,
  },
};
