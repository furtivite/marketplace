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
  <section className="relative bg-neutral-50 py-20 overflow-hidden">
    <Container>
      <div className="relative z-10 text-left max-w-lg">
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
      </div>
    </Container>

    {/* Background circle */}
    <img
      src={ellipse}
      alt=""
      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px]"
    />

    {/* Decorative star */}
    <img
      src={burstPucker}
      alt=""
      className="absolute right-40 top-12 w-6 h-6"
    />

    {/* Hero boy image */}
    <img
      srcSet={`${boy2x} 2x ${boy1x} 1x`}
      src={boy1x}
      alt=""
      className="absolute right-0 bottom-0 max-h-[520px]"
    />
  </section>
);
