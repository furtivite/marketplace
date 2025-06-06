import * as React from 'react';
import clsx from 'clsx';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

let tooltipIdCounter = 0;

export const Tooltip: React.FC<TooltipProps> = ({ children, text, position = 'top' }) => {
  const [visible, setVisible] = React.useState(false);
  const tooltipId = React.useRef(`tooltip-${++tooltipIdCounter}`);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      aria-describedby={tooltipId.current}
      tabIndex={0}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          id={tooltipId.current}
          className={clsx(
            'absolute z-10 px-3 py-1 text-sm text-white bg-gray-900 rounded shadow transition-opacity duration-200',
            {
              'top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 after:top-full after:left-1/2 after:-translate-x-1/2 after:border-t-gray-900':
                position === 'top',
              'bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-2 after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-b-gray-900':
                position === 'bottom',
              'left-0 top-1/2 -translate-x-full -translate-y-1/2 mr-2 after:left-full after:top-1/2 after:-translate-y-1/2 after:border-l-gray-900':
                position === 'left',
              'right-0 top-1/2 translate-x-full -translate-y-1/2 ml-2 after:right-full after:top-1/2 after:-translate-y-1/2 after:border-r-gray-900':
                position === 'right',
            },
            'after:content-[" "] after:absolute after:border-8 after:border-transparent'
          )}
        >
          {text}
        </div>
      )}
    </div>
  );
};