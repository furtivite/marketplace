import * as React from 'react';
import { Typography, TYPOGRAPHY_TYPES } from '../../../../shared/ui/Typography';
import { Container } from '../../../../shared/ui/Container';
import type { SpecialOfferProps } from '../types';

export const NotificationBar: React.FC<SpecialOfferProps> = ({ text, link }) => (
  <div className="bg-neutral-900 text-white-0">
    <Container className="flex justify-center">
      <Typography type={TYPOGRAPHY_TYPES.BODY_REGULAR} className="inline">
        {text}
        {' '}
      </Typography>
      {link && (
        <Typography type={TYPOGRAPHY_TYPES.BODY_MEDIUM} as="span" className="inline-block ml-2">
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        </Typography>
      )}
    </Container>
  </div>
);
