// ProgressBar.tsx
import * as React from 'react';
import { Tooltip } from '../Tooltip';

interface ProgressBarProps {
  label: string;
  /** 0 to 100 */
  value: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
  return (
    <div className="w-full">
      <div className="text-sm font-medium text-neutral-700 mb-2">{label}</div>
      <Tooltip text={`${value}%`} position="top" adaptive insetArrow isVisible>
        <div className="relative w-full bg-primary-100 rounded-full h-3">
          <div
            className="absolute left-0 top-0 h-full bg-primary-900 rounded-full transition-all duration-300"
            style={{ width: `${value}%` }}
          />
        </div>
      </Tooltip>
    </div>
  );
};
