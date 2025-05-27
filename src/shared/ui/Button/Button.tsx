import * as React from 'react';
import clsx from 'clsx';

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

export function Button(props: ButtonAsLinkProps | ButtonAsButtonProps) {
  const {
    children,
    className,
    variant = 'default',
    isSmall = false,
    ...rest
  } = props;

  const base =
    'inline-flex items-center justify-center font-semibold rounded-[40px] transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none';

  const variants: Record<ButtonVariant, string> = {
    default: 'bg-primary-800 text-white hover:bg-primary-700',
    outline: 'border border-outline text-white bg-transparent hover:bg-primary-800',
    white: 'bg-white text-primary-800 hover:bg-neutral-100',
    'outline-black': 'border border-primary-800 text-primary-800 bg-transparent hover:bg-neutral-100',
  };

  const sizes = isSmall
    ? 'h-[32px] px-4 text-xs'
    : 'h-[48px] px-6 text-sm';

  const finalClassName = clsx(base, variants[variant], sizes, className);

  if (typeof props.href === 'string') {
    return (
      <a
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={props.href}
        className={finalClassName}
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
      {children}
    </button>
  );
}
