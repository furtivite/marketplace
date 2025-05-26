import * as React from 'react';
import clsx from 'clsx';
import { TYPOGRAPHY_TYPES, type TypographyType } from './const';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  type: TypographyType;
}

const typeClassMap: Record<TypographyType, string> = {
  [TYPOGRAPHY_TYPES.H1]: 'text-[40px] leading-[150%] font-semibold',
  [TYPOGRAPHY_TYPES.H2]: 'text-[32px] leading-normal font-semibold',
  [TYPOGRAPHY_TYPES.H3]: 'text-[24px] leading-normal font-bold',
  [TYPOGRAPHY_TYPES.H4]: 'text-[18px] leading-normal font-medium',
  [TYPOGRAPHY_TYPES.H5]: 'text-[16px] leading-normal font-semibold',
  [TYPOGRAPHY_TYPES.H6]: 'text-[14px] leading-normal font-medium',
  [TYPOGRAPHY_TYPES.BODY_REGULAR]: 'text-[14px] leading-[175%] font-normal',
  [TYPOGRAPHY_TYPES.BODY_MEDIUM]: 'text-[14px] leading-[175%] font-medium',
  [TYPOGRAPHY_TYPES.LABEL]: 'text-[12px] leading-[24px] font-medium',
  [TYPOGRAPHY_TYPES.LABEL_UPPERCASE]: 'text-[12px] leading-[24px] font-medium uppercase',
};

export const Typography: React.FC<TypographyProps> = ({ children, as = 'div', type, className, ...rest }) => {
  return React.createElement(
    as,
    {
      className: clsx('sans', className, typeClassMap[type]),
      ...rest,
    },
    children,
  );
};
