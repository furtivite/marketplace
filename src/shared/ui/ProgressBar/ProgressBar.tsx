import * as React from 'react';
import { Tooltip } from '../Tooltip';
import { Typography, TYPOGRAPHY_TYPES } from "../Typography";

interface ProgressBarProps {
  label: string;
  /** 0 to 100 */
  value: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
  const safeValue = Math.max(0, Math.min(100, value));
  const labelId = React.useId();

  return (
    <div className="w-full">
      <Typography as="div" id={labelId} type={TYPOGRAPHY_TYPES.LABEL} className="text-neutral-700 mb-2">
        {label}
      </Typography>
      <Tooltip text={`${safeValue}%`} position="top" adaptive insetArrow>
        <div
          role="progressbar"
          aria-labelledby={labelId}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={safeValue}
          className="relative w-full bg-primary-100 rounded-full h-3"
        >
          <div
            className="absolute left-0 top-0 h-full bg-primary-900 rounded-full transition-all duration-300"
            style={{ width: `${safeValue}%` }}
          />
        </div>
      </Tooltip>
    </div>
  );
};
