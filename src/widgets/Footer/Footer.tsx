import * as React from 'react';
import clsx from 'clsx';
import { Container } from '../../shared/ui/Container';
import { Typography, TYPOGRAPHY_TYPES } from '../../shared/ui/Typography';
import { Newsletter } from './ui/Newsletter';

import { FooterLogoBlock } from './ui/FooterLogoBlock';
import { FooterNavigation } from './ui/FooterNavigation';
import { FooterPayments } from './ui/FooterPayments';

interface FooterProps {
  hasNewsletter?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ hasNewsletter = false }) => {
  return (
    <footer
      className={clsx(
        hasNewsletter ? 'bg-white-0' : 'bg-white-100',
        'pt-10 pb-6 text-neutral-700',
      )}
      aria-label="Site footer"
    >
      {hasNewsletter && <Newsletter />}

      <Container className={hasNewsletter ? 'pt-[74px]' : 'pt-0'}>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
          <FooterLogoBlock />
          <FooterNavigation />
          <FooterPayments />
        </div>

        <Typography
          type={TYPOGRAPHY_TYPES.BODY_REGULAR}
          as="p"
          className="mt-12 text-center text-neutral-500 border-t border-white-200 pt-10"
        >
          © 2023 DevCut. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};
