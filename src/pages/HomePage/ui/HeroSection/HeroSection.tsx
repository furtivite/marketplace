// src/pages/HomePage/ui/HeroSection.tsx

import React from 'react';
import { Container } from '../../../../shared/ui/Container';
import { Typography, TYPOGRAPHY_TYPES } from '../../../../shared/ui/Typography';
import { Button } from '../../../../shared/ui/Button';
import type { HeroSectionProps } from './types';

import ArrowRightIcon from '../../../../shared/assets/icons/arrow_right_white.svg?react';

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
        className="mb-4 text-neutral-900"
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          type={TYPOGRAPHY_TYPES.BODY_REGULAR}
          as="p"
          className="mb-6 text-neutral-600"
        >
          {subtitle}
        </Typography>
      )}

      {buttonLink && (
        <Button
          href={buttonLink.href}
          renderEndIcon={
            buttonLink.hasArrow ? (
              <ArrowRightIcon width={16} height={16} aria-hidden />
            ) : undefined
          }
        >
          {buttonLink.text}
        </Button>
      )}

      {BannerImage && <BannerImage />}
    </Container>
  </section>
);
