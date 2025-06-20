import * as React from 'react';
import clsx from 'clsx';

import ChevronLeftIcon from '@/shared/assets/icons/chevron-left.svg?react';
import ChevronRightIcon from '@/shared/assets/icons/chevron-right.svg?react';
import { Typography, TYPOGRAPHY_TYPES } from '../Typography';

interface PaginationProps {
  /** Номер текущей страницы (нумерация с 1) */
  page: number;
  /** Всего страниц */
  total: number;
  /** Сколько страниц показывать между первой и последней (по умолчанию 4) */
  visiblePages?: number;
  /** Срабатывает при смене страницы */
  onChange: (page: number) => void;
  /** Отключить всю пагинацию */
  disabled?: boolean;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  total,
  visiblePages = 4,
  onChange,
  disabled,
  className,
}) => {
  const getPages = React.useCallback(() => {
    if (total <= visiblePages + 2) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    const pages: (number | 'ellipsis')[] = [];
    const left = Math.max(2, page - Math.floor(visiblePages / 2));
    const right = Math.min(total - 1, left + visiblePages - 1);
    const realLeft = Math.max(2, right - visiblePages + 1);

    pages.push(1); // всегда первая

    if (realLeft > 2) pages.push('ellipsis');

    for (let i = realLeft; i <= right; i++) {
      pages.push(i);
    }

    if (right < total - 1) pages.push('ellipsis');
    pages.push(total); // всегда последняя

    return pages;
  }, [page, total, visiblePages]);

  const pages = getPages();

  const handlePrev = () => !disabled && page > 1 && onChange(page - 1);
  const handleNext = () => !disabled && page < total && onChange(page + 1);
  const handlePageKey = (p: number) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') onChange(p);
  };

  return (
    <nav
      className={clsx('flex items-center gap-1 select-none', className)}
      role="navigation"
      aria-label="Pagination"
    >
      <button
        type="button"
        className={clsx(
          'flex items-center justify-center w-8 h-8 rounded transition',
          page === 1 || disabled
            ? 'text-neutral-300 pointer-events-none'
            : 'hover:bg-neutral-100 active:bg-neutral-200',
        )}
        onClick={handlePrev}
        aria-label="Previous page"
        disabled={page === 1 || disabled}
        tabIndex={0}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      {pages.map((p, i) => (p === 'ellipsis' ? (
        <Typography
          as="span"
          key={`ellipsis-${i}`}
          type={TYPOGRAPHY_TYPES.BODY_MEDIUM}
          className="mx-1 px-2 text-neutral-300 select-none"
          aria-hidden="true"
        >
          ...
        </Typography>
      ) : (
        <button
          type="button"
          key={p}
          className={clsx(
            'w-8 h-8 flex items-center justify-center rounded transition font-medium text-base outline-none',
            page === p
              ? 'bg-neutral-100 text-neutral-900 cursor-default'
              : 'hover:bg-neutral-100 text-neutral-400 hover:text-neutral-900',
            disabled && 'pointer-events-none opacity-60',
            page === p && 'aria-current',
          )}
          aria-label={`Go to page ${p}`}
          aria-current={page === p ? 'page' : undefined}
          onClick={() => p !== page && onChange(p)}
          onKeyDown={handlePageKey(p)}
          disabled={disabled || page === p}
          tabIndex={0}
        >
          <Typography as="span" type={TYPOGRAPHY_TYPES.LABEL}>
            {p}
          </Typography>
        </button>
      )))}

      <button
        type="button"
        className={clsx(
          'flex items-center justify-center w-8 h-8 rounded transition',
          page === total || disabled
            ? 'text-neutral-300 pointer-events-none'
            : 'hover:bg-neutral-100 active:bg-neutral-200',
        )}
        onClick={handleNext}
        aria-label="Next page"
        disabled={page === total || disabled}
        tabIndex={0}
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </nav>
  );
};
