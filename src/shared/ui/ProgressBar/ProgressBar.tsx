import * as React from 'react';

interface ProgressBarProps {
  label: string;
  value: number; // 0 to 100
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
  return (
    <div className="w-full">
      <div className="text-sm font-medium text-neutral-700 mb-2">{label}</div>
      <div className="w-full bg-primary-100 rounded-full h-3">
        <div
          className="bg-primary-900 h-3 rounded-full transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};