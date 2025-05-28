import * as React from 'react';
import clsx from 'clsx';

type TextFieldProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: boolean;
  className?: string;
};

export const TextField = React.forwardRef<HTMLTextAreaElement, TextFieldProps>((props, ref) => {
  const { label, error = false, className, id, ...textareaProps } = props;
  const generatedId = React.useId();
  const textareaId = id || generatedId;

  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      {label && (
        <label htmlFor={textareaId} className="text-sm font-medium text-neutral-500">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        ref={ref}
        className={clsx(
          'w-full rounded-md px-4 py-3 min-h-[128px] text-base text-neutral-800 placeholder-neutral-300 outline-none ring-1 resize-none',
          error
            ? 'ring-red-500 focus:ring-red-500'
            : 'ring-neutral-200 focus:ring-neutral-400',
        )}
        {...textareaProps}
      />
    </div>
  );
});

TextField.displayName = 'TextField';
