import * as React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={clsx('mx-auto w-full max-w-[1116px]', className)}>
      {children}
    </div>
  );
};
