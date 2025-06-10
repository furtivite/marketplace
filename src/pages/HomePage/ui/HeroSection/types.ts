import * as React from 'react';

export type THomeSectionButtonLink = {
  text: string
  href: string
  hasArrow?: boolean
};

export type HeroSectionProps = {
  bannerImage?: React.FC;
  title: string;
  subtitle?: string;
  buttonLink?: THomeSectionButtonLink;
};
