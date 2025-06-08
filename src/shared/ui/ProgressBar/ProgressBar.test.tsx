// src/shared/ui/ProgressBar/ProgressBar.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';

import { ProgressBar } from './ProgressBar';

vi.mock('../Tooltip', () => ({
  Tooltip: ({ text, children }: { text: string; children: React.ReactNode }) => (
    <div data-testid="tooltip" data-tooltip={text}>
      {children}
    </div>
  ),
}));

describe('ProgressBar component', () => {
  it('renders the label with correct id and text', () => {
    render(<ProgressBar label="Loading" value={50} />);
    const labelEl = screen.getByText('Loading');
    expect(labelEl.tagName).toBe('DIV');
    expect(labelEl).toHaveAttribute('id');
  });

  it('clamps value below 0 to 0 and above 100 to 100', () => {
    const { rerender } = render(<ProgressBar label="Test" value={-20} />);
    let bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '0');
    expect(bar.firstElementChild).toHaveStyle('width: 0%');

    rerender(<ProgressBar label="Test" value={150} />);
    bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '100');
    expect(bar.firstElementChild).toHaveStyle('width: 100%');
  });

  it('renders correct aria attributes and style for a valid value', () => {
    render(<ProgressBar label="Progress" value={42} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-labelledby', screen.getByText('Progress').id);
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
    expect(bar).toHaveAttribute('aria-valuenow', '42');
    expect(bar.firstElementChild).toHaveStyle('width: 42%');
  });

  it('passes the correct tooltip text', () => {
    render(<ProgressBar label="Tip" value={73} />);
    const tooltip = screen.getByTestId('tooltip');
    expect(tooltip).toHaveAttribute('data-tooltip', '73%');
  });
});
