import * as React from 'react';
import clsx from 'clsx';
import { Typography, TYPOGRAPHY_TYPES } from "../Typography";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | boolean; // может быть текст ошибки или булево
  isSmall?: boolean;
  required?: boolean;
  className?: string;
};

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, error = false, isSmall = false, required = false, className, id, ...inputProps } = props;
  const generatedId = React.useId();
  const inputId = id || generatedId;
  const errorId = `${inputId}-error`;

  const hasError = Boolean(error);
  const isErrorString = isString(error);
  const describedBy = isErrorString ? errorId : undefined;

  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      {label && (
        <Typography as="label" type={TYPOGRAPHY_TYPES.BODY_MEDIUM} htmlFor={inputId} className="text-neutral-500">
          {label} {required && '*'}
        </Typography>
      )}
      <input
        id={inputId}
        ref={ref}
        aria-invalid={hasError}
        aria-describedby={describedBy}
        aria-required={required}
        className={clsx(
          'w-full rounded-md px-4 text-[14px] leading-[175%] font-medium text-neutral-800 placeholder-neutral-300 outline-none ring-1',
          hasError ? 'ring-red-500 focus:ring-red-500' : 'ring-neutral-200 focus:ring-neutral-400',
          isSmall ? 'h-10' : 'h-[45px]',
          className,
        )}
        {...inputProps}
      />
      {isErrorString && (
        <Typography as="div" id={errorId} type={TYPOGRAPHY_TYPES.LABEL} className="text-red-600 mt-1 sr-only">
          {error}
        </Typography>
      )}
    </div>
  );
});

Input.displayName = 'Input';
