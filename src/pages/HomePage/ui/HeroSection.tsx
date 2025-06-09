// src/pages/HomePage/ui/HeroSection.tsx
import React from 'react';
import { Container } from '../../../shared/ui/Container';
import { Typography, TYPOGRAPHY_TYPES } from '../../../shared/ui/Typography';
import { Button } from '../../../shared/ui/Button';

// Page-specific assets
import boy1x from '../assets/banner-boy.png';
import boy2x from '../assets/banner-boy@2x.png';
import ellipse from '../assets/ellipse.svg';
import burstPucker from '../assets/burst-pucker.svg';
// Shared arrow icon
import arrow from '../../../shared/assets/icons/arrow_right_white.svg';

export const HeroSection: React.FC = () => (
  <section className="bg-neutral-50 overflow-hidden">
    <Container className="relative h-full pt-[136px] pb-[136px]">
      <Typography
        type={TYPOGRAPHY_TYPES.H1}
        as="h1"
        className="text-neutral-900 mb-4"
      >
        Fresh Arrivals Online
      </Typography>
      <Typography
        type={TYPOGRAPHY_TYPES.BODY_REGULAR}
        as="p"
        className="text-neutral-600 mb-6"
      >
        Discover Our Newest Collection Today.
      </Typography>
      <Button href="#" className="inline-flex items-center px-6 py-3">
        View Collection
        <img src={arrow} alt="" className="ml-2 w-4 h-4" />
      </Button>

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
    </Container>
  </section>
);
