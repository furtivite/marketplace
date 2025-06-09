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
// Shared asset for arrow
import arrow from '../../../shared/assets/icons/arrow_right_white.svg';

export const HeroSection: React.FC = () => (
  <section className="relative py-20">
    <Container>
      <div className="relative z-10 text-center max-w-lg mx-auto">
        <Typography
          type={TYPOGRAPHY_TYPES.H1}
          as="h1"
          className="text-neutral-800 mb-4"
        >
          Fresh Arrivals
        </Typography>
        <Typography
          type={TYPOGRAPHY_TYPES.BODY_REGULAR}
          as="p"
          className="text-neutral-600 mb-6"
        >
          Discover the latest trends in our new collection. Upgrade your style today.
        </Typography>
        <Button href="#" className="inline-flex items-center px-6 py-3">
          Shop Now
          <img src={arrow} alt="" className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </Container>

    {/* Decorative images */}
    <img
      src={ellipse}
      alt=""
      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-32"
    />
    <img
      src={burstPucker}
      alt=""
      className="absolute right-1/4 top-0 w-6 h-6"
    />
    <img
      srcSet={`${boy2x} 2x, ${boy1x} 1x`}
      src={boy1x}
      alt=""
      className="absolute right-0 bottom-0 max-h-96"
    />
  </section>
);
