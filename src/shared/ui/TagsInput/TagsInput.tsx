import * as React from 'react';
import clsx from 'clsx';
import { Tag } from "../Tag";
import { Typography, TYPOGRAPHY_TYPES } from "../Typography";

type TagsInputProps = {
  label?: string;
  error?: boolean;
  tags: string[];
  onRemove: (tag: string) => void;
  className?: string;
};

export const TagsInput: React.FC<TagsInputProps> = ({ label, error = false, tags, onRemove, className }) => {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      {label && (
        <Typography as="span" type={TYPOGRAPHY_TYPES.BODY_MEDIUM} className="text-neutral-500">
          {label}
        </Typography>
      )}
      <div
        className={clsx(
          'w-full min-h-[45px] rounded-md px-4 py-3 text-base text-neutral-800 outline-none ring-1',
          'flex flex-wrap items-start gap-2',
          error ? 'ring-red-500 focus:ring-red-500' : 'ring-neutral-200 focus-within:ring-neutral-400',
        )}
      >
        {tags.map((tag) => (
          <Tag key={tag} onRemove={() => onRemove(tag)} isFilled inInputWrapper>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};
