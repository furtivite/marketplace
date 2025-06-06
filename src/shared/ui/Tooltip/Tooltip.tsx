import * as React from 'react';
import clsx from 'clsx';

type Position = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: Position;
  adaptive?: boolean;
}

let tooltipIdCounter = 0;

export const Tooltip: React.FC<TooltipProps> = ({ children, text, position = 'top', adaptive = true }) => {
  const [visible, setVisible] = React.useState(false);
  const [actualPosition, setActualPosition] = React.useState<Position>(position);
  const [measured, setMeasured] = React.useState(false);

  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const tooltipId = React.useRef(`tooltip-${++tooltipIdCounter}`);

  React.useEffect(() => {
    if (!visible) return;

    const id = requestAnimationFrame(() => {
      if (!tooltipRef.current || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const space = {
        top: containerRect.top,
        bottom: viewportHeight - containerRect.bottom,
        left: containerRect.left,
        right: viewportWidth - containerRect.right,
      };

      const fits: Record<Position, boolean> = {
        top: space.top >= tooltipRect.height + 8,
        bottom: space.bottom >= tooltipRect.height + 8,
        left: space.left >= tooltipRect.width + 8,
        right: space.right >= tooltipRect.width + 8,
      };

      const fallbackMap = {
        top: ['bottom', 'left', 'right'],
        bottom: ['top', 'left', 'right'],
        left: ['right', 'top', 'bottom'],
        right: ['left', 'top', 'bottom'],
      } as const;

      const fallbackOrder = fallbackMap[position];

      if (!adaptive) {
        setActualPosition(position);
      } else if (!fits[position]) {
        const fallback = fallbackOrder.find((p) => fits[p]);
        setActualPosition(fallback ?? position);
      } else {
        setActualPosition(position);
      }

      setMeasured(true);
    });

    return () => cancelAnimationFrame(id);
  }, [visible, position, adaptive]);

  const arrowBase = 'absolute w-0 h-0 border-8 border-transparent';

  const arrowPosition = {
    top: 'top-full left-4 border-t-gray-900',
    bottom: 'bottom-full left-4 border-b-gray-900',
    left: 'left-full top-2 border-l-gray-900',
    right: 'right-full top-2 border-r-gray-900',
  }[actualPosition];

  const tooltipPosition = {
    top: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-2',
    left: 'left-0 top-1/2 -translate-x-full -translate-y-1/2 mr-2',
    right: 'right-0 top-1/2 translate-x-full -translate-y-1/2 ml-2',
  }[actualPosition];

  return (
    <div
      className="relative inline-block"
      ref={containerRef}
      onMouseEnter={() => {
        setMeasured(false);
        setVisible(true);
      }}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => {
        setMeasured(false);
        setVisible(true);
      }}
      onBlur={() => setVisible(false)}
      aria-describedby={tooltipId.current}
      tabIndex={0}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          id={tooltipId.current}
          ref={tooltipRef}
          className={clsx(
            'absolute z-10 px-3 py-1 text-sm text-white-0 bg-gray-900 rounded shadow transition-opacity duration-200 max-w-[420px] w-max',
            measured ? tooltipPosition : 'invisible'
          )}
        >
          {text}
          <span className={clsx(arrowBase, arrowPosition)} />
        </div>
      )}
    </div>
  );
};