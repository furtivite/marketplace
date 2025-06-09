// src/pages/HomePage/ui/HeroSection.tsx
import React from 'react';
import { Container } from '../../../shared/ui/Container';
import { Typography, TYPOGRAPHY_TYPES } from '../../../shared/ui/Typography';
import { Button } from '../../../shared/ui/Button';
import type { THomeSectionButtonLink } from './interfaces';

// Shared arrow icon
import arrow from '../../../shared/assets/icons/arrow_right_white.svg';

export type HeroSectionProps = {
  bannerImage?: React.FC;
  title: string;
  subtitle?: string;
  buttonLink?: THomeSectionButtonLink;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  bannerImage: BannerImage,
  title,
  subtitle,
  buttonLink,
}) => (
  <section className="bg-neutral-50 overflow-hidden">
    <Container className="relative h-full pt-[136px] pb-[136px]">
      <Typography
        type={TYPOGRAPHY_TYPES.H1}
        as="h1"
        className="text-neutral-900 mb-4"
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          type={TYPOGRAPHY_TYPES.BODY_REGULAR}
          as="p"
          className="text-neutral-600 mb-6"
        >
          {subtitle}
        </Typography>
      )}

      {buttonLink && (
        <Button href={buttonLink.href} className="inline-flex items-center px-6 py-3">
          {buttonLink.text}
          {buttonLink.hasArrow && (
            <img src={arrow} alt="" className="ml-2 w-4 h-4" />
          )}
        </Button>
      )}

      {BannerImage && <BannerImage />}
    </Container>
  </section>
);
