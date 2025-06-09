import * as React from 'react';
import { Typography, TYPOGRAPHY_TYPES } from '../../../../shared/ui/Typography';
import type { TFeatureProps } from './types';

export const Feature: React.FC<TFeatureProps> = ({ icon: Icon, title, subtitle }) => (
  <article className="flex flex-col max-w-[328px] pr-14 space-y-3">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100" aria-hidden="true">
      <Icon />
    </div>
    <Typography as="h3" type={TYPOGRAPHY_TYPES.H5} className="text-neutral-800">
      {title}
    </Typography>
    <Typography as="p" type={TYPOGRAPHY_TYPES.BODY_REGULAR} className="text-neutral-500">
      {subtitle}
    </Typography>
  </article>
);
