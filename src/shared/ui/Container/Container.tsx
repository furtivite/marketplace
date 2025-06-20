import * as React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  fullWidth?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  style,
  fullWidth = false,
}) => (
  <div
    className={clsx(
      'relative mx-auto w-full',
      fullWidth ? 'max-w-full px-0' : 'max-w-[1116px]',
      className,
    )}
    style={style}
  >
    {children}
  </div>
);
