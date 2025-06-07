import * as React from 'react';
import clsx from 'clsx';

import LogoDark from '@/shared/assets/logo/logo-dark.svg?react';
import LogoLight from '@/shared/assets/logo/logo-light.svg?react';
import LogoAdmin from '@/shared/assets/logo/logo-admin.svg?react';

export type LogoVariant = 'dark' | 'light' | 'admin';

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  textClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
                                            variant = 'dark',
                                            className,
                                            textClassName,
                                          }) => {
  let LogoComponent;

  switch (variant) {
    case 'light':
      LogoComponent = LogoLight;
      break;
    case 'admin':
      LogoComponent = LogoAdmin;
      break;
    case 'dark':
    default:
      LogoComponent = LogoDark;
      break;
  }

  const displayText = variant === 'admin' ? 'Admin' : 'Ecommerce';

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <LogoComponent />
      <span
        className={clsx(
          'font-manrope font-extrabold text-lg',
          textClassName,
        )}
      >
        {displayText}
      </span>
    </div>
  );
};
