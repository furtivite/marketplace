import clsx from 'clsx';
import * as React from 'react';
import CloseIcon from '@/shared/assets/icons/close.svg?react';
import { Typography, TYPOGRAPHY_TYPES } from '../Typography';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onRemove: () => void;
  isSmall?: boolean;
  isFilled?: boolean;
  inInputWrapper?: boolean;
  inList?: boolean; // Новый опциональный проп
}

export const Tag: React.FC<TagProps> = ({
  children,
  onRemove,
  isSmall = false,
  isFilled = false,
  inInputWrapper = false,
  inList = false,
  className,
  ...rest
}) => (
  <div
    role={inList ? 'listitem' : undefined}
    className={clsx(
      'inline-flex items-center px-4 border rounded-full text-sm font-medium',
      isFilled ? 'bg-neutral-200' : 'hover:bg-neutral-100',
      'border-neutral-200 text-neutral-900 transition-colors',
      isSmall ? 'h-9' : 'h-11',
      inInputWrapper && 'max-h-[103px]',
      className,
    )}
    {...rest}
  >
    <Typography as="span" type={TYPOGRAPHY_TYPES.LABEL} className="mr-2">
      {children}
    </Typography>
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
