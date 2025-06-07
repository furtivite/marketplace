import * as React from 'react';
import clsx from 'clsx';
import { Typography, TYPOGRAPHY_TYPES } from '../Typography';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | boolean;
  isSmall?: boolean;
  required?: boolean;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    error = false,
    isSmall = false,
    required = false,
    className,
    id,
    startIcon,
    endIcon,
    ...inputProps
  } = props;

  const generatedId = React.useId();
  const inputId = id || generatedId;
  const errorId = `${inputId}-error`;

  const hasError = Boolean(error);
  const isErrorString = isString(error);
  const describedBy = isErrorString ? errorId : undefined;

  // Логика выбора иконки: если есть startIcon — используем его, иначе endIcon, иначе нет
  const iconToRender = startIcon ? { node: startIcon, position: 'start' } : endIcon ? { node: endIcon, position: 'end' } : null;

  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      {label && (
        <Typography
          as="label"
          type={TYPOGRAPHY_TYPES.BODY_MEDIUM}
          htmlFor={inputId}
          className="text-neutral-500"
        >
          {label} {required && '*'}
        </Typography>
      )}
      <div
        className={clsx(
          'flex items-center rounded-md ring-1',
          hasError ? 'ring-red-500 focus-within:ring-red-500' : 'ring-neutral-200 focus-within:ring-neutral-400',
          isSmall ? 'h-10' : 'h-[45px]',
          'px-4',
          'bg-white',
        )}
      >
        {iconToRender?.position === 'start' && (
          <span className="mr-2 flex items-center">{iconToRender.node}</span>
        )}
        <input
          id={inputId}
          ref={ref}
          aria-invalid={hasError}
          aria-describedby={describedBy}
          aria-required={required}
          className={clsx(
            'flex-grow bg-transparent text-[14px] leading-[175%] font-medium text-neutral-800 placeholder-neutral-300 outline-none',
            isSmall ? 'h-8' : 'h-[37px]',
          )}
          {...inputProps}
        />
        {iconToRender?.position === 'end' && (
          <span className="ml-2 flex items-center">{iconToRender.node}</span>
        )}
      </div>
      {isErrorString && (
        <Typography
          as="div"
          id={errorId}
          type={TYPOGRAPHY_TYPES.LABEL}
          className="text-red-600 mt-1"
        >
          {error}
        </Typography>
      )}
    </div>
  );
});

Input.displayName = 'Input';
