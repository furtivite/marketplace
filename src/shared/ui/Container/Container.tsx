import * as React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ className, children, style }) => (
  <div className={clsx('mx-auto w-full max-w-[1116px]', className)} style={style}>
    {children}
  </div>
);
