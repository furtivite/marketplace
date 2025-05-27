import clsx from 'clsx';
import * as React from 'react';
import CloseIcon from '@/shared/assets/icons/close.svg?react';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onRemove: () => void;
  isSmall?: boolean;
}

export const Tag = ({ children, onRemove, isSmall = false, className, ...rest }: TagProps) => {
  return (
    <div
      tabIndex={0}
      className={clsx(
        'inline-flex items-center px-4 border rounded-full text-sm font-medium',
        'border-neutral-200 text-neutral-900 hover:bg-neutral-100 transition-colors',
        isSmall ? 'h-9' : 'h-11',
        className,
      )}
      {...rest}
    >
      <span className="mr-2">{children}</span>
      <button
        type="button"
        onClick={onRemove}
        className="text-neutral-400 hover:text-neutral-600 transition-colors"
        aria-label={`Remove tag ${children}`}
      >
        <CloseIcon className="w-4 h-4" />
      </button>
    </div>
  );
};
