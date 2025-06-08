import * as React from 'react';
import clsx from 'clsx';
import { Tag } from '../Tag';
import { Typography, TYPOGRAPHY_TYPES } from '../Typography';

type TagsInputProps = {
  label?: string;
  error?: boolean;
  tags: string[];
  onRemove: (tag: string) => void;
  className?: string;
};

export const TagsInput: React.FC<TagsInputProps> = ({
  label,
  error = false,
  tags,
  onRemove,
  className,
}) => {
  const listId = React.useId();
  const errorId = React.useId();

  return (
    <div
      className={clsx('flex flex-col gap-1', className)}
      aria-invalid={error}
      aria-describedby={error ? errorId : undefined}
    >
      {label && (
        <Typography
          as="label"
          htmlFor={listId}
          type={TYPOGRAPHY_TYPES.BODY_MEDIUM}
          className="text-neutral-500"
        >
          {label}
        </Typography>
      )}
      <ul
        id={listId}
        className={clsx(
          'w-full min-h-[45px] rounded-md px-4 py-3 text-base text-neutral-800 outline-none ring-1',
          'flex flex-wrap items-start gap-2 list-none p-0 m-0',
          error
            ? 'ring-red-500 focus-within:ring-red-500'
            : 'ring-neutral-200 focus-within:ring-neutral-400',
        )}
      >
        {tags.map((tag) => (
          <li key={tag}>
            <Tag
              onRemove={() => onRemove(tag)}
              isFilled
              inInputWrapper
              inList
              aria-label={`Remove ${tag}`}
            >
              {tag}
            </Tag>
          </li>
        ))}
      </ul>
      {error && (
        <Typography
          as="div"
          id={errorId}
          type={TYPOGRAPHY_TYPES.LABEL}
          className="text-red-600 mt-1"
          aria-live="assertive"
        >
          Ошибка: неверный ввод
        </Typography>
      )}
    </div>
  );
};
