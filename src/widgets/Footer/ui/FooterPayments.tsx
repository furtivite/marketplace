import * as React from 'react';
import clsx from 'clsx';
import { Typography, TYPOGRAPHY_TYPES } from '../../../shared/ui/Typography';

import AmexIcon from '@/shared/assets/icons/payment/amex.svg?react';
import VisaIcon from '@/shared/assets/icons/payment/visa.svg?react';
import MastercardIcon from '@/shared/assets/icons/payment/mastercard.svg?react';

interface PaymentMethod {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const paymentMethods: PaymentMethod[] = [
  { name: 'American Express', Icon: AmexIcon },
  { name: 'Visa', Icon: VisaIcon },
  { name: 'MasterCard', Icon: MastercardIcon },
];

const iconClassName = 'grayscale transition duration-300 ease-in-out hover:grayscale-0';

export const FooterPayments: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 min-w-[140px]">
      <Typography
        type={TYPOGRAPHY_TYPES.BODY_MEDIUM}
        as="h3"
        className="text-neutral-300"
      >
        Accepted Payments
      </Typography>
      <div
        className="flex gap-3"
        aria-label="Accepted payment methods"
        role="list"
      >
        {paymentMethods.map(({ name, Icon }) => (
          <Icon
            key={name}
            className={clsx(iconClassName, 'h-6 w-auto')}
            role="listitem"
            aria-label={name}
          />
        ))}
      </div>
    </div>
  );
};
