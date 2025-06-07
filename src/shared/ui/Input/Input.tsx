import * as React from 'react';
import clsx from 'clsx';
import { Typography, TYPOGRAPHY_TYPES } from "../Typography";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
  isSmall?: boolean;
  className?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, error = false, isSmall = false, className, id, ...inputProps } = props;
  const generatedId = React.useId();
  const inputId = id || generatedId;

  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      {label && (
        <Typography as="label" type={TYPOGRAPHY_TYPES.BODY_MEDIUM} htmlFor={inputId} className="text-neutral-500">
          {label}
        </Typography>
      )}
      <input
        id={inputId}
        ref={ref}
        className={clsx(
          'w-full rounded-md px-4 text-[14px] leading-[175%] font-medium text-neutral-800 placeholder-neutral-300 outline-none ring-1',
          error
            ? 'ring-red-500 focus:ring-red-500'
            : 'ring-neutral-200 focus:ring-neutral-400',
          isSmall ? 'h-10' : 'h-[45px]',
        )}
        {...inputProps}
      />
    </div>
  );
});

Input.displayName = 'Input';
