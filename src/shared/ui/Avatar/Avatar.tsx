import * as React from 'react';
import clsx from 'clsx';
import { Typography, TYPOGRAPHY_TYPES } from '../Typography';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  surname: string;
  image?: string;
  type?: 'circle' | 'square';
}

export const Avatar: React.FC<AvatarProps> = ({
  name, surname, image, type = 'circle', className, ...rest
}) => {
  const alt = `${name} ${surname}`;
  const initials = `${name[0] ?? ''}${surname[0] ?? ''}`.toUpperCase();

  const shapeClass = type === 'circle' ? 'rounded-full' : 'rounded-md';

  return (
    <div
      className={clsx(
        'w-12 h-12 text-primary-900 text-base font-normal flex items-center justify-center bg-gray-100 overflow-hidden',
        shapeClass,
        className,
      )}
      aria-label={alt}
      {...rest}
    >
      {image ? (
        <img src={image} alt="" width={48} height={48} className={clsx('object-cover', shapeClass)} />
      ) : (
        <Typography type={TYPOGRAPHY_TYPES.BODY_REGULAR} as="span" aria-hidden="true">
          {initials}
        </Typography>
      )}
    </div>
  );
};
