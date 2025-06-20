import * as React from 'react';
import clsx from 'clsx';
import ChevronDownIcon from '@/shared/assets/icons/chevron-down.svg?react';
import { Typography, TYPOGRAPHY_TYPES } from '../Typography';

type SortOrder = 'asc' | 'desc';

interface SortButtonProps {
  order: SortOrder;
  onChange: (order: SortOrder) => void;
  label?: string; // например, 'by price'
  disabled?: boolean;
  className?: string;
}

export const SortButton: React.FC<SortButtonProps> = ({
  order,
  onChange,
  label = 'Sort',
  disabled,
  className,
}) => {
  const nextOrder = order === 'asc' ? 'desc' : 'asc';

  const ariaLabel = `${label}, sorted ${order === 'asc' ? 'ascending' : 'descending'}`;

  return (
    <button
      type="button"
      className={clsx(
        'flex items-center gap-1 px-3 py-2 rounded select-none transition focus:outline-none focus-visible:ring-2',
        'hover:bg-neutral-100 active:bg-neutral-200',
        disabled && 'pointer-events-none opacity-60',
        className,
      )}
      aria-label={ariaLabel}
      aria-pressed="true"
      disabled={disabled}
      tabIndex={0}
      onClick={() => onChange(nextOrder)}
    >
      <Typography as="span" type={TYPOGRAPHY_TYPES.LABEL_UPPERCASE} className="mr-1">
        {order === 'asc' ? 'Ascending' : 'Descending'}
      </Typography>
      <span
        className={clsx(
          'transition-transform duration-200',
          order === 'desc' ? 'rotate-180' : 'rotate-0',
        )}
        aria-hidden="true"
      >
        <ChevronDownIcon className="w-5 h-5" />
      </span>
    </button>
  );
};
