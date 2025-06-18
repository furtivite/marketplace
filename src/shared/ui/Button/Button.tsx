// src/shared/ui/Button.tsx

import * as React from 'react';
import clsx from 'clsx';
import { Typography, TYPOGRAPHY_TYPES } from '../Typography';

type ButtonVariant = 'default' | 'outline' | 'white' | 'outline-black';

interface CommonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  isSmall?: boolean;
  className?: string;
  squareCorners?: boolean;
  renderStartIcon?: React.ReactNode;
  renderEndIcon?: React.ReactNode;
}

type ButtonAsLinkProps = CommonProps &
React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type ButtonAsButtonProps = CommonProps &
React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

export const Button: React.FC<ButtonAsLinkProps | ButtonAsButtonProps> = (props) => {
  const {
    children,
    className,
    variant = 'default',
    isSmall = false,
    squareCorners = false,
    renderStartIcon,
    renderEndIcon,
    ...rest
  } = props;

  const variants: Record<ButtonVariant, string> = {
    default: 'bg-neutral-900 text-white-0 hover:bg-neutral-800',
    outline: 'border border-outline border-neutral-200 text-neutral-500 bg-white-0',
    white: 'bg-white-0 text-neutral-900',
    'outline-black': 'border border-neutral-900 text-neutral-900 bg-white-0',
  };

  const sizeClasses = isSmall
    ? 'h-[32px] px-4 text-xs'
    : 'h-[48px] px-6 text-sm';

  const baseClasses = clsx(
    'inline-flex items-center justify-center font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none',
    !squareCorners && 'rounded-[4px]',
    variants[variant],
    sizeClasses,
    className,
  );

  const content = (
    <>
      {renderStartIcon && <span className="mr-2">{renderStartIcon}</span>}
      <Typography type={TYPOGRAPHY_TYPES.BODY_MEDIUM} as="span">
        {children}
      </Typography>
      {!renderStartIcon && renderEndIcon && <span className="ml-2">{renderEndIcon}</span>}
    </>
  );

  if ('href' in props) {
    // используем props.href (гарантированно строка), а не rest.href
    const { href } = props;
    const anchorRest = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal = props.href?.startsWith('http') ?? false;

    return (
      <a
        {...anchorRest}
        href={href}
        className={baseClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      {...buttonRest}
      type={buttonRest.type ?? 'button'}
      className={baseClasses}
    >
      {content}
    </button>
  );
};
