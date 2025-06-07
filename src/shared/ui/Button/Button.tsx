import * as React from 'react';
import clsx from 'clsx';
import { Typography, TYPOGRAPHY_TYPES } from "../Typography";

type ButtonVariant = 'default' | 'outline' | 'white' | 'outline-black';

interface CommonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  isSmall?: boolean;
  className?: string;
}

type ButtonAsLinkProps = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type ButtonAsButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

export const Button: React.FC<ButtonAsLinkProps | ButtonAsButtonProps> = (props) => {
  const {
    children,
    className,
    variant = 'default',
    isSmall = false,
    ...rest
  } = props;

  const base =
    'inline-flex items-center justify-center font-semibold rounded-[4px] transition-colors ' +
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 ' +
    'disabled:opacity-50 disabled:pointer-events-none';

  const variants: Record<ButtonVariant, string> = {
    default: 'bg-neutral-900 text-white-0 hover:bg-neutral-800',
    outline: 'border border-outline border-neutral-200 text-neutral-500 bg-white-0',
    white: 'bg-white-0 text-neutral-900',
    'outline-black': 'border border-neutral-900 text-neutral-900 bg-white-0',
  };

  const sizes = isSmall
    ? 'h-[32px] px-4 text-xs'
    : 'h-[48px] px-6 text-sm';

  const finalClassName = clsx(base, variants[variant], sizes, className);

  if (typeof props.href === 'string') {
    const isExternal = props.href.startsWith('http');
    return (
      <a
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={props.href}
        className={finalClassName}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      type={props.type ?? 'button'}
      className={finalClassName}
    >
      <Typography type={TYPOGRAPHY_TYPES.BODY_MEDIUM} as='span'>{children}</Typography>
    </button>
  );
};
