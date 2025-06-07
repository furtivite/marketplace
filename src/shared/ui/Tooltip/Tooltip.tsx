import * as React from 'react';
import clsx from 'clsx';
import { Typography, TYPOGRAPHY_TYPES } from "../Typography";

type Position = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: Position;
  adaptive?: boolean;
  insetArrow?: boolean;
}

let tooltipIdCounter = 0;

export const Tooltip: React.FC<TooltipProps> = ({
                                                  children,
                                                  text,
                                                  position = 'top',
                                                  adaptive = true,
                                                  insetArrow = false,
                                                }) => {
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
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const space = {
        top: containerRect.top,
        bottom: vh - containerRect.bottom,
        left: containerRect.left,
        right: vw - containerRect.right,
      };

      const fits: Record<Position, boolean> = {
        top: space.top >= tooltipRect.height + 8,
        bottom: space.bottom >= tooltipRect.height + 8,
        left: space.left >= tooltipRect.width + 8,
        right: space.right >= tooltipRect.width + 8,
      };

      const fallbackMap: Record<Position, Position[]> = {
        top: ['bottom', 'left', 'right'],
        bottom: ['top', 'left', 'right'],
        left: ['right', 'top', 'bottom'],
        right: ['left', 'top', 'bottom'],
      };

      const resolved = adaptive && !fits[position]
        ? fallbackMap[position].find(p => fits[p]) ?? position
        : position;

      setActualPosition(resolved);
      setMeasured(true);
    });

    return () => cancelAnimationFrame(id);
  }, [visible, position, adaptive]);

  const baseArrow = 'absolute w-0 h-0 border-8 border-transparent';

  const arrow = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-900',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-900',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-900 -ml-[1px]',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-gray-900 -mr-[1px]',
  };

  const arrowInset = {
    top: '-bottom-4 left-1/2 -translate-x-1/2 border-t-gray-900',
    bottom: 'top-0 left-1/2 -translate-x-1/2 border-b-gray-900',
    left: 'right-0 top-1/2 -translate-y-1/2 border-l-gray-900',
    right: 'left-0 top-1/2 -translate-y-1/2 border-r-gray-900',
  };

  const tooltipPos: Record<Position, string> = {
    top: insetArrow
      ? '-top-2 left-1/2 -translate-x-1/2 -translate-y-full'
      : 'top-0 left-1/2 -translate-x-1/2 -translate-y-full',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full',
    left: 'left-0 top-1/2 -translate-x-full -translate-y-1/2',
    right: 'right-0 top-1/2 translate-x-full -translate-y-1/2',
  };

  return (
    <div
      className={clsx('relative', insetArrow ? 'w-full' : 'inline-block')}
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
      <Typography as="div" type={TYPOGRAPHY_TYPES.LABEL}>
        {children}
      </Typography>
      {visible && (
        <div
          role="tooltip"
          id={tooltipId.current}
          ref={tooltipRef}
          className={clsx(
            'absolute z-10 px-3 py-1 text-sm text-white-0 bg-gray-900 rounded shadow max-w-[420px] w-max',
            measured ? tooltipPos[actualPosition] : 'invisible'
          )}
        >
          {text}
          <span
            className={clsx(
              baseArrow,
              insetArrow ? arrowInset[actualPosition] : arrow[actualPosition]
            )}
          />
        </div>
      )}
    </div>
  );
};
