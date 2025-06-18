// src/pages/HomePage/ui/BrowseBanner/BrowseBanner.tsx

import * as React from 'react';
import clsx from 'clsx';
import { Button } from '../../../../shared/ui/Button';
import { Container } from '../../../../shared/ui/Container';
import { Typography, TYPOGRAPHY_TYPES } from '../../../../shared/ui/Typography';
import type { THomeSectionButtonLink } from '../HeroSection';

import ArrowRightIcon from '../../../../shared/assets/icons/arrow_right_white.svg?react';

export interface BrowseBannerProps {
  title: string;
  subtitle: string;
  link: THomeSectionButtonLink;
  BannerImage: React.FC;
  className?: string;
}

export const BrowseBanner: React.FC<BrowseBannerProps> = ({
  title,
  subtitle,
  link,
  BannerImage,
  className,
}) => {
  const idPrefix = React.useId();

  return (
    <section
      aria-labelledby={`${idPrefix}-title`}
      className={clsx('relative overflow-hidden rounded-lg', className)}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-neutral-100/80 to-transparent" />

      <Container className="py-0">

        <div
          className="relative z-10 flex flex-col items-center justify-between gap-10 md:flex-row md:px-16"
        >
          <div className="max-w-xl text-center md:text-left py-12">
            <Typography
              id={`${idPrefix}-title`}
              type={TYPOGRAPHY_TYPES.H2}
              as="h2"
              className="mb-4 text-neutral-900"
            >
              {title}
            </Typography>

            <Typography
              type={TYPOGRAPHY_TYPES.BODY_REGULAR}
              as="p"
              className="mb-8 text-neutral-600"
            >
              {subtitle}
            </Typography>

            <Button
              href={link.href}
              renderEndIcon={
                <ArrowRightIcon />
              }
            >
              {link.text}
            </Button>
          </div>

          <div className="shrink-0">
            <BannerImage />
          </div>
        </div>
      </Container>
    </section>

  );
};
