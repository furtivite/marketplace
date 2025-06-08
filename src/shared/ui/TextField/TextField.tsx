import * as React from 'react';
import clsx from 'clsx';
import { Typography, TYPOGRAPHY_TYPES } from '../Typography';

type TextFieldProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string | boolean; // теперь может быть текст ошибки или булево
  required?: boolean;
  className?: string;
};

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export const TextField = React.forwardRef<HTMLTextAreaElement, TextFieldProps>((props, ref) => {
  const {
    label, error = false, required = false, className, id, ...textareaProps
  } = props;
  const generatedId = React.useId();
  const textareaId = id || generatedId;
  const errorId = `${textareaId}-error`;

  const hasError = Boolean(error);
  const isErrorString = isString(error);
  const describedBy = isErrorString ? errorId : undefined;

  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      {label && (
        <Typography as="label" type={TYPOGRAPHY_TYPES.BODY_MEDIUM} htmlFor={textareaId} className="text-neutral-500">
          {label}
          {' '}
          {required && '*'}
        </Typography>
      )}
      <textarea
        id={textareaId}
        ref={ref}
        aria-invalid={hasError}
        aria-describedby={describedBy}
        aria-required={required}
        className={clsx(
          'w-full rounded-md px-4 py-3 min-h-[128px] text-[14px] leading-[175%] font-medium text-neutral-800 placeholder-neutral-300 outline-none ring-1 resize-none',
          hasError ? 'ring-red-500 focus:ring-red-500' : 'ring-neutral-200 focus:ring-neutral-400',
        )}
        {...textareaProps}
      />
      {isErrorString && (
        <Typography as="div" id={errorId} type={TYPOGRAPHY_TYPES.LABEL} className="text-red-600 mt-1 sr-only">
          {error}
        </Typography>
      )}
    </div>
  );
});

TextField.displayName = 'TextField';
